import type { ComponentPropsWithoutRef } from 'react'

export function Badge({ className = '', ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={`inline-block max-w-full wrap-anywhere rounded-full border border-border bg-elevated-surface px-2.5 py-1 font-mono text-xs text-text-secondary ${className}`}
      {...props}
    />
  )
}
