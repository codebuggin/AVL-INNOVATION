import { useState } from 'react'
import { Link } from 'react-router-dom'
import { aiAddons, appPackages, maintenancePlans, websitePackages, type PricingPackage } from '../config/pricing'

type Currency = 'INR' | 'USD'

function CurrencyToggle({ currency, onChange }: { currency: Currency; onChange: (c: Currency) => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-bg-elevated p-1">
      {(['INR', 'USD'] as const).map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
            currency === c ? 'bg-purple text-white shadow-purple-glow' : 'text-text-muted hover:text-white'
          }`}
        >
          {c === 'INR' ? '₹ INR' : '$ USD'}
        </button>
      ))}
    </div>
  )
}

function Card({ pkg, currency }: { pkg: PricingPackage; currency: Currency }) {
  const price = currency === 'INR' ? pkg.priceINR : pkg.priceUSD
  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-8 transition-transform duration-200 ${
        pkg.popular
          ? 'scale-[1.03] border-purple/60 bg-card-gradient shadow-purple-glow'
          : 'border-border bg-card-gradient'
      }`}
    >
      {pkg.popular ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-purple-gradient px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-white">
          MOST POPULAR
        </div>
      ) : null}
      <h3 className="font-display text-xl font-extrabold">{pkg.name}</h3>
      {pkg.tagline ? <p className="mt-1 text-sm text-text-soft">{pkg.tagline}</p> : null}
      <p className="mt-6 bg-purple-gradient bg-clip-text font-display text-[2.5rem] font-extrabold leading-none text-transparent">
        {price}
      </p>
      {pkg.duration ? <p className="mt-2 text-xs text-text-muted">{pkg.duration}</p> : null}
      <div className="my-6 border-t border-border" />
      <ul className="flex-grow space-y-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm font-light text-text-muted">
            <span className="mt-0.5 shrink-0 text-purple-light">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-purple-gradient px-6 py-3 font-display text-sm font-bold text-white transition hover:shadow-purple-glow"
      >
        {pkg.cta}
      </Link>
    </article>
  )
}

function SectionBlock({ title, subtext }: { title: string; subtext: string }) {
  return (
    <div className="mb-12">
      <h2 className="font-display text-3xl font-extrabold">{title}</h2>
      <p className="mt-2 text-text-soft">{subtext}</p>
    </div>
  )
}

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('INR')

  return (
    <main>
      {/* Hero + currency toggle */}
      <section className="px-6 pb-20 pt-40 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">PRICING</p>
        <h1 className="mx-auto mt-4 max-w-3xl break-words font-display text-[clamp(2.5rem,8vw,4rem)] font-extrabold leading-tight">
          Simple pricing. No surprises.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-text-soft">
          Clear packages for every stage of your business.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <CurrencyToggle currency={currency} onChange={setCurrency} />
          <p className="text-sm text-text-muted">
            Based outside India?{' '}
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className="text-purple-light underline underline-offset-2 hover:text-white"
            >
              Switch to USD pricing
            </button>
          </p>
        </div>
      </section>

      {/* Section 1 — Website Packages */}
      <section className="mx-auto max-w-[1300px] px-6 pb-24 lg:px-12">
        <SectionBlock
          title="Website Packages"
          subtext={currency === 'INR' ? 'For businesses in India' : 'For international clients'}
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {websitePackages.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} currency={currency} />
          ))}
        </div>
      </section>

      {/* Section 2 — AI Add-ons */}
      <section className="border-y border-border bg-bg-elevated py-24">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
          <SectionBlock title="AI Features" subtext="Add to any website package" />
          <div className="grid gap-8 lg:grid-cols-2">
            {aiAddons.map((pkg) => (
              <Card key={pkg.id} pkg={pkg} currency={currency} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Mobile App Packages */}
      <section className="mx-auto max-w-[1300px] px-6 py-24 lg:px-12">
        <SectionBlock title="Mobile App Development" subtext="iOS & Android apps for your business" />
        <div className="grid gap-8 lg:grid-cols-2">
          {appPackages.map((pkg) => (
            <Card key={pkg.id} pkg={pkg} currency={currency} />
          ))}
        </div>
      </section>

      {/* Section 4 — Monthly Maintenance */}
      <section className="border-y border-border bg-bg-elevated py-24">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-12">
          <SectionBlock title="Monthly Maintenance" subtext="Keep your site fast, updated & running" />
          <div className="grid gap-8 lg:grid-cols-3">
            {maintenancePlans.map((pkg) => (
              <Card key={pkg.id} pkg={pkg} currency={currency} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Bottom CTA */}
      <section className="px-6 py-32 text-center">
        <h2 className="break-words font-display text-[clamp(2rem,6vw,3rem)] font-extrabold">
          Not sure which plan fits?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-text-soft">
          Talk to us. We&apos;ll figure it out together.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/919959907317"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-display font-bold text-white transition hover:brightness-110"
          >
            WhatsApp Us →
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border-strong px-8 py-4 font-display font-bold text-white transition hover:border-purple"
          >
            Send a Message →
          </Link>
        </div>
      </section>
    </main>
  )
}
