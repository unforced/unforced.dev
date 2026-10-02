"""Standard-library checks for the review site. Usage: python3 tools/check_site.py URL"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import urlopen
from urllib.parse import urlsplit, urljoin
import json
import sys

ROOT = Path(__file__).resolve().parents[1]
BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:8787/'
PAGES = ['/', '/offerings/', '/about/', '/work/', '/writing/', '/contact/']

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.tags = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

    def attrs(self, tag):
        return [attrs for name, attrs in self.tags if name == tag]

links = set()
external = set()
results = []
for path in PAGES:
    with urlopen(urljoin(BASE, path), timeout=10) as response:
        assert response.status == 200, path
        text = response.read().decode()
    local = ROOT / path.strip('/') / 'index.html' if path != '/' else ROOT / 'index.html'
    assert text == local.read_text(), f'Preview differs from source: {path}'
    doc = Document(text)
    assert doc.attrs('html')[0].get('lang') == 'en', path
    assert len(doc.attrs('h1')) == 1, path
    assert len(doc.attrs('main')) == 1, path
    assert len(doc.attrs('title')) == 1, path
    assert doc.attrs('nav')[0].get('aria-label'), path
    assert any(m.get('name') == 'description' and m.get('content') for m in doc.attrs('meta')), path
    assert any(m.get('name') == 'viewport' for m in doc.attrs('meta')), path
    assert not doc.attrs('script'), path
    assert not doc.attrs('iframe'), path
    assert sum(a.get('aria-current') == 'page' for a in doc.attrs('a')) == 1, path
    assert any(a.get('href') == '#main' for a in doc.attrs('a')), path
    for tag, attrs in doc.tags:
        assert not any(k.startswith('on') for k in attrs), (path, tag)
        for field in ('href', 'src'):
            if field not in attrs:
                continue
            href = attrs[field]
            parsed = urlsplit(href)
            if parsed.scheme in ('https', 'http'):
                external.add(href)
            elif not parsed.scheme:
                links.add(urljoin(urljoin(BASE, path), href))
    results.append({'page': path, 'status': 200, 'one_h1': True, 'no_scripts': True})

for href in sorted(links):
    with urlopen(href, timeout=10) as response:
        assert response.status == 200, href
        content = response.read().decode()
    fragment = urlsplit(href).fragment
    if fragment:
        assert any(a.get('id') == fragment for _, a in Document(content).tags), href

for file in ROOT.rglob('*'):
    if file.is_file() and '.git' not in file.parts and file.suffix in ('.html', '.css', '.md', '.yml'):
        source = file.read_text()
        # Split terms so this check itself has no banned builder references.
        for term in ('gpt' + 'eng', 'lova' + 'ble', 'Testimonial Coming Soon', 'therapy with a tech twist', 'No rush, just flow'):
            assert term.lower() not in source.lower(), (file, term)

from urllib.error import HTTPError
try:
    with urlopen(urljoin(BASE, '/.git/config'), timeout=10):
        raise AssertionError('Git checkout must not be served')
except HTTPError as error:
    assert error.code == 404, error.code
print(json.dumps({'pages': results, 'internal_targets_checked': len(links), 'external_links': sorted(external), 'git_checkout_not_served': True}, indent=2))
