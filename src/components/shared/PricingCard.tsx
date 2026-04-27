import { Link } from 'react-router-dom'
import type { PricingPackage } from '../../config/pricing'

export default function PricingCard({ pkg, currency = 'INR' }: { pkg: PricingPackage; currency?: 'INR' | 'USD' }) {
  const price = currency === 'INR' ? pkg.priceINR : pkg.priceUSD
  return (
    <article className={`relative flex flex-col rounded-2xl border bg-card-gradient p-8 ${pkg.popular ? 'border-purple/60 shadow-purple-glow' : 'border-border'}`}>
      {pkg.popular ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-purple-gradient px-4 py-1 text-[11px] font-medium uppercase tracking-wider text-white">
          MOST POPULAR
        </div>
      ) : null}
      <h3 className="font-display text-xl font-extrabold">{pkg.name}</h3>
      {pkg.tagline ? <p className="mt-1 text-sm text-text-soft">{pkg.tagline}</p> : null}
      <div className="my-6 border-t border-border" />
      <p className="bg-purple-gradient bg-clip-text font-display text-4xl font-extrabold leading-none text-transparent">{price}</p>
      {pkg.duration ? <p className="mt-2 text-xs text-text-muted">{pkg.duration}</p> : null}
      <ul className="mt-8 flex-grow space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm font-light text-text-muted">
            <span className="mt-0.5 shrink-0 text-purple-light">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="mt-8 inline-flex w-full justify-center rounded-full bg-purple-gradient px-6 py-3 font-display text-sm font-bold text-white transition hover:shadow-purple-glow">
        {pkg.cta}
      </Link>
    </article>
  )
}
