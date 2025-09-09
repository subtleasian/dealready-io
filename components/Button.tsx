'use client';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

export default function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  const cls = `btn ${variant === 'primary' ? 'primary' : 'outline'} ${className}`;
  return (
    <button {...rest} className={cls}>
      {children}
    </button>
  );
}
