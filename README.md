# Unforced Development — review draft

Six ordinary HTML pages, one stylesheet, no framework, build step, JavaScript, remote fonts or tracking. Edit HTML directly; navigation and footer are intentionally duplicated to keep hosting and editing simple. Keep shared navigation consistent across all seven HTML documents (including 404).

## Preview locally

```sh
python3 -m http.server 8787 --bind 0.0.0.0
```

Home `/`; Offerings `/offerings/`; About `/about/`; Work `/work/`; Writing `/writing/`; Contact `/contact/`.

For the shared tailnet preview, serve an allowlisted copy of the HTML, CSS, CNAME and robots.txt **outside the checkout** so that `.git` and review notes cannot be downloaded. This branch is not published. All pages use `noindex, nofollow`, and robots.txt disallows crawling. Those are review safeguards, not access controls; don't place private data in HTML comments.

## Publication is explicitly blocked pending review

- Aaron approves audience, public labels, tier names, pricing, scope, billing, pause/cancellation terms and one-off/Jumpstart scope. No proposed prices from private notes are reproduced.
- Confirm preferred contact inbox. `ag@unforced.dev` is the address on the existing offering site; this does not prove mailbox delivery.
- Confirm retaining `https://cal.com/unforced/30min` and whether an introductory call is free. The existing calendar URL resolves to Aaron's titled page, but booking availability/end-to-end submission were not confirmed; no booking was made.
- Confirm bio wording, CU degree completion and current teaching role. No inferred graduation or current teaching claim.
- Work examples are self-owned/public work grounded in Aaron's essays, not client endorsements. No client names or testimonials. Obtain permission before including any client case study, screenshot, quotation or outcome.
- Session transcripts/summaries/next steps are planned, not operational promises. Exercise consent, recording, AI use, access and deletion before changing that copy.
- Review actual rendered copy/design and accessibility. Confirm scope/timing/handover/account ownership before promising terms.
- Resolve old hash bookmarks: without client-side JavaScript, old `/#/about` links land on Home; fragments cannot be redirected by the server. Decide whether to accept this or approve a narrowly scoped migration script. No hash routing exists in this draft.
- **Deployment workflow is deliberately unchanged.** `.github/workflows/deploy.yml` currently builds with npm and uploads `dist`, triggered on main. That is incompatible with this static branch after removing the old build. Before any merge/publication, separately approve a static-pages deployment workflow. Do not run the old manual workflow against this branch. GitHub Pages settings and the gh-pages branch have not been changed.
- Pages API reports domain `unforced.dev`; neither original main nor gh-pages tracked a CNAME. This draft adds `CNAME` containing the same existing domain; no settings or DNS change.
- Remove preview banner, noindex directives and robots disallow only with explicit publication approval.

## Public copy sources

Reviewed 2026-10-02:
- https://unforced.dev/#/contact — published email and existing calendar destinations.
- https://unforced.org/ — roots, Tai Ji, location and visual tone (cream background, serif headings).
- https://unforced.org/writing/two-years-at-atlas/ — developer relations, education, Parachute, Learn Vibe Build. Historical account, not confirmation of current credentials.
- https://unforced.org/writing/building-in-the-margins/ — NatalEngine and relationship-led building.
- https://unforced.org/writing/building-with-words/
- https://unforced.org/writing/how-to-build-and-host-your-website/

Internal working brief informed the shapes and draft wording; no private prices or client identities were carried into the site.
