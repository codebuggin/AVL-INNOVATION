import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
}

const base = 'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 font-display text-sm font-bold transition duration-200'
const variants = {
  primary: 'bg-purple-gradient text-white hover:scale-[1.02] hover:shadow-purple-glow',
  outline: 'border border-border-strong text-white hover:border-purple hover:bg-purple/10',
}

export default function Button({ children, to, href, variant = 'primary', className = '' }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }
  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }
  return <button className={classes} type="submit">{children}</button>
}
