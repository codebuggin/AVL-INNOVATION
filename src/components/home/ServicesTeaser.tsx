import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { services } from '../../config/services'
import SectionHeader from '../shared/SectionHeader'
import ServiceCard from '../shared/ServiceCard'

function ServiceIcon({ type }: { type: 'web' | 'app' }) {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      {type === 'web' ? (
        <path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5v2h3v2H7v-2h3v-2H5a2 2 0 0 1-2-2V5Zm2 0v10h14V5H5Z" />
      ) : (
        <path fill="currentColor" d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm4 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      )}
    </svg>
  )
}

export default function ServicesTeaser() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-teaser-card', { y: 40, opacity: 0, stagger: 0.15, duration: 0.7, scrollTrigger: { trigger: ref.current, start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-6 py-32 lg:px-12 lg:py-40">
      <SectionHeader
        eyebrow="WHAT WE DO"
        title="Websites and apps. Done right."
        subhead="We help your business get found, get contacted, and convert visitors into clients."
      />
      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={service.slug} className="service-teaser-card">
            <ServiceCard service={service} icon={<ServiceIcon type={index === 0 ? 'web' : 'app'} />} />
          </div>
        ))}
      </div>
    </section>
  )
}
