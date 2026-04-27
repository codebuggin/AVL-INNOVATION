import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SectionHeader from '../shared/SectionHeader'

const steps = [
  ['01', 'DISCUSS', 'We talk about your business and what you need.'],
  ['02', 'DESIGN', 'We design screens you can review and approve.'],
  ['03', 'BUILD', 'We build it with weekly progress demos.'],
  ['04', 'LAUNCH', 'We launch it and support you for free.'],
]

export default function ProcessTeaser() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-teaser-card', {
        y: 30,
        opacity: 0,
        duration: 0.65,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="border-y border-border bg-bg-elevated py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeader eyebrow="HOW WE WORK" title="From idea to launch in 4 steps." />
        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step[1]} className="process-teaser-card relative">
              {index < steps.length - 1 ? <div className="absolute left-[70%] top-10 hidden h-px w-[60%] bg-gradient-to-r from-purple to-transparent lg:block" /> : null}
              <span className="bg-purple-gradient bg-clip-text font-display text-6xl font-extrabold text-transparent">
                {step[0]}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{step[1]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-soft">{step[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
