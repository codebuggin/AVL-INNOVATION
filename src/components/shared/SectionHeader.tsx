interface SectionHeaderProps {
  eyebrow: string
  title: string
  subhead?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ eyebrow, title, subhead, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white lg:text-5xl">{title}</h2>
      {subhead ? <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-soft">{subhead}</p> : null}
    </div>
  )
}
