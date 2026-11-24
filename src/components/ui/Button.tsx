import type { ComponentPropsWithoutRef } from 'react'

const variantClasses = {
  primary: 'border-transparent bg-primary bg-aurora text-background not-disabled:hover:brightness-110 forced-colors:border-[ButtonText]',
  secondary: 'border-border bg-elevated-surface text-text-primary not-disabled:hover:border-accent-light',
}

type ButtonStyleProps = {
  variant?: keyof typeof variantClasses
}

type ButtonProps = ButtonStyleProps & (
  | (ComponentPropsWithoutRef<'button'> & { href?: never })
  | (ComponentPropsWithoutRef<'a'> & { href: string })
)

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const classes = `inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-lg border px-4 py-2 wrap-anywhere text-center text-sm font-semibold motion-safe:transition-[border-color,filter] disabled:cursor-not-allowed disabled:saturate-75 ${variantClasses[variant]} ${className}`

  if (typeof props.href === 'string') {
    return <a className={classes} {...props} />
  }

  return <button className={classes} type="button" {...props} />
}
