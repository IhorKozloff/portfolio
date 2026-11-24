import type { ComponentPropsWithoutRef } from 'react'

type SectionHeadingProps = ComponentPropsWithoutRef<'h2'> & {
  description?: string
}

export function SectionHeading({ children, className = '', description, ...props }: SectionHeadingProps) {
  return (
    <div className={`mb-6 sm:mb-8 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl" {...props}>
        {children}
      </h2>
      <div aria-hidden="true" className="mt-3 h-[3px] w-[48px] rounded-full bg-aurora" />
      {description && <p className="mt-2 max-w-prose text-base text-text-secondary">{description}</p>}
    </div>
  )
}
