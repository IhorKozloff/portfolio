import type { ComponentPropsWithoutRef } from 'react'

export function Card({ className = '', ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={`rounded-card border border-border bg-surface p-4 shadow-card sm:p-6 ${className}`}
      {...props}
    />
  )
}
