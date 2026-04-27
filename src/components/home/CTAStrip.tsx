import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Button from '../shared/Button'
import { site } from '../../config/site'

interface CTAStripProps {
  title?: string
  subtitle?: string
}

export default function CTAStrip({
  title = 'Ready to build something great?',
  subtitle = "Let's talk about your project. We reply within a day.",
}: CTAStripProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', { scale: 0.95, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-purple-glow-radial opacity-60 blur-3xl" />
      <div className="cta-content relative mx-auto max-w-[1000px] px-6 text-center">
        <h2 className="font-display text-5xl font-extrabold leading-tight lg:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-soft">{subtitle}</p>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/contact">Start Your Project →</Button>
          <Button href={site.contact.whatsappLink} variant="outline">Talk on WhatsApp</Button>
        </div>
      </div>
    </section>
  )
}
