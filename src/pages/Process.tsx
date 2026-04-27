import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import CTAStrip from '../components/home/CTAStrip'

const steps = [
  {
    name: 'DISCUSS',
    lead: 'We start with a 30-minute call to understand your business, your goals, and what you need.',
    happens: ['Free 30-minute discovery call', 'We listen to your business and goals', 'We share examples relevant to your industry', 'No deck, no pitch, just a real conversation'],
    get: "A clear picture of what's possible.",
  },
  {
    name: 'DESIGN',
    lead: 'We design screens that you review, comment on, and approve before development starts.',
    happens: ['Brand and content discovery', 'Design mockups for every key screen', 'Two rounds of revisions included', 'Final design approval before development starts'],
    get: 'A complete visual blueprint of your site.',
  },
  {
    name: 'BUILD',
    lead: 'We build your site or app, sharing weekly progress on a live staging link you can check anytime.',
    happens: ['Frontend and backend development', 'Weekly progress demos', 'Live staging link updated continuously', 'Testing on every device and browser'],
    get: 'A working product you can preview anytime.',
  },
  {
    name: 'LAUNCH',
    lead: 'We deploy your project, hand over the keys, and stay around to fix anything for free.',
    happens: ['Pre-launch testing and QA', 'Domain and hosting setup', 'Live deployment', '30 days of free fixes and adjustments'],
    get: "A live, polished product — and a partner for whatever's next.",
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step', { y: 40, opacity: 0, duration: 0.8, stagger: 0.12, scrollTrigger: { trigger: ref.current, start: 'top 75%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={ref}>
      <section className="px-6 pb-16 pt-40 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">OUR PROCESS</p>
        <h1 className="mx-auto mt-4 max-w-4xl break-words font-display text-[clamp(3rem,11vw,4.5rem)] font-extrabold leading-tight">How we work, step by step.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-text-soft">No agency mystery. Here&apos;s exactly what happens when you work with us.</p>
      </section>
      <section className="mx-auto max-w-[1180px] px-6 py-20 sm:px-8 lg:px-12">
        {steps.map((step, index) => (
          <div key={step.name} className="process-step relative grid min-w-0 gap-8 border-t border-border py-14 first:border-t-0 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-14">
            {index > 0 ? <div className="absolute left-[98px] top-0 hidden h-14 w-px bg-gradient-to-b from-purple to-transparent lg:block" /> : null}
            <div className="min-w-0 lg:self-start">
              <p className="bg-purple-gradient bg-clip-text font-display text-[clamp(4.5rem,9vw,7rem)] font-extrabold leading-none text-transparent">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-3 whitespace-nowrap font-display text-xs font-bold tracking-wider lg:text-sm">STEP {String(index + 1).padStart(2, '0')} OF 04</p>
            </div>
            <div className="min-w-0">
              <h2 className="break-words font-display text-[clamp(2.25rem,7vw,3.25rem)] font-extrabold leading-tight">{step.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-text-soft">{step.lead}</p>
              <h3 className="mt-8 font-display text-sm font-bold tracking-wider">WHAT HAPPENS</h3>
              <div className="mt-4 border-t border-border" />
              <div className="mt-4 space-y-3">
                {step.happens.map((item) => <p key={item} className="text-white"><span className="mr-3 text-purple-light">→</span>{item}</p>)}
              </div>
              <h3 className="mt-8 font-display text-sm font-bold tracking-wider">WHAT YOU GET</h3>
              <div className="mt-4 border-t border-border" />
              <p className="mt-4 font-display text-xl font-bold italic text-purple-light">{step.get}</p>
            </div>
          </div>
        ))}
      </section>
      <CTAStrip title="That's it. Ready to start?" />
    </main>
  )
}
