import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
  ['bolt', 'Fast & Performant', 'Speed-optimized for the best user experience.'],
  ['phone', 'Mobile Responsive', 'Looks perfect on every device, every time.'],
  ['shield', 'Secure & Reliable', 'Built with best practices to keep your data safe.'],
  ['rocket', 'Scalable & Ready to Grow', 'Your digital product, ready to scale with your business.'],
]

function Icon({ type }: { type: string }) {
  const paths: Record<string, JSX.Element> = {
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="currentColor" />,
    phone: <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm4 17.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />,
    shield: <path d="M12 2 4 5v6c0 5 3.4 8.8 8 11 4.6-2.2 8-6 8-11V5l-8-3Zm0 3 5 1.9V11c0 3.2-2 5.7-5 7.4-3-1.7-5-4.2-5-7.4V6.9L12 5Z" fill="currentColor" />,
    rocket: <path d="M13.7 4.2c1.7-1 3.7-1.4 5.9-1.2.2 2.2-.2 4.2-1.2 5.9l-2.6 4.3 1.5 1.5-1.8 1.8-1.5-1.5-4.3 2.6c-1.7 1-3.7 1.4-5.9 1.2-.2-2.2.2-4.2 1.2-5.9l2.6-4.3-1.5-1.5 1.8-1.8 1.5 1.5 4.3-2.6Z" fill="currentColor" />,
  }
  return <svg viewBox="0 0 24 24" className="h-6 w-6 text-purple-light">{paths[type]}</svg>
}

export default function FeatureBar() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-item', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="border-y border-border bg-bg-elevated py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-12">
        {features.map(([icon, title, text], index) => (
          <div key={title} className={`feature-item flex items-start gap-4 ${index < 3 ? 'lg:border-r lg:border-border' : ''}`}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple/20 bg-purple/10">
              <Icon type={icon} />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-soft">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
