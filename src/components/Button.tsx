
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseStyles = "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ripple-button";
  
  const variantStyles = {
    primary: "bg-sage-600 text-white hover:bg-sage-700",
    secondary: "bg-earth-500 text-white hover:bg-earth-600",
    outline: "border border-sage-300 bg-transparent hover:bg-sage-50 text-sage-800",
    ghost: "hover:bg-sage-50 text-sage-800",
  };
  
  const sizeStyles = {
    sm: "h-9 px-3",
    md: "h-11 px-5",
    lg: "h-12 px-8 text-base",
  };

  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button
      className={buttonStyles}
      onMouseDown={handleMouseDown}
      style={{ "--x": `${coords.x}px`, "--y": `${coords.y}px` } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
