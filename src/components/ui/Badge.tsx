import type { ComponentPropsWithoutRef } from 'react'

export function Badge({ className = '', ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={`inline-block max-w-full wrap-anywhere rounded-lg border border-border bg-elevated-surface px-3 py-1.5 font-sans text-sm font-medium text-text-primary ${className}`}
      {...props}
    />
  )
}
