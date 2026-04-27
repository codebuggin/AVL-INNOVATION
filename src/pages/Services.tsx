import CTAStrip from '../components/home/CTAStrip'
import { AppMockup, WebsiteMockup } from '../components/shared/DeviceMockup'
import SectionHeader from '../components/shared/SectionHeader'
import { services } from '../config/services'

export default function Services() {
  return (
    <main>
      <section className="px-6 pb-24 pt-40 text-center">
        <SectionHeader eyebrow="SERVICES" title="What we build." subhead="Websites and mobile apps built to grow your business." />
      </section>
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        {services.map((service, index) => (
          <div key={service.slug} className="grid gap-16 border-t border-border py-24 lg:grid-cols-2">
            <div className={index === 1 ? 'lg:order-2' : ''}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">0{index + 1} — SERVICE</p>
              <h2 className="mt-5 break-words font-display text-[clamp(2rem,6vw,3rem)] font-extrabold leading-tight">{service.title}</h2>
              <p className="mt-5 font-display text-2xl font-bold italic text-purple-light">{service.tagline}</p>
              <p className="mt-6 leading-relaxed text-text-soft">{service.description}</p>
              <h3 className="mt-8 font-display text-sm font-bold tracking-wider">WHAT&apos;S INCLUDED</h3>
              <div className="mt-4 border-t border-border" />
              <div className="mt-4 space-y-4">
                {service.features.map((feature) => (
                  <p key={feature} className="text-white"><span className="mr-3 text-purple-light">✓</span>{feature}</p>
                ))}
              </div>
              <a href="/contact" className="mt-8 inline-flex rounded-full bg-purple-gradient px-7 py-4 font-display font-bold">
                Start a {service.title} project →
              </a>
            </div>
            <div>{index === 0 ? <WebsiteMockup /> : <AppMockup />}</div>
          </div>
        ))}
      </section>
      <CTAStrip />
    </main>
  )
}
