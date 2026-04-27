import { Link } from 'react-router-dom'
import type { Service } from '../../config/services'

export default function ServiceCard({ service, icon }: { service: Service; icon: JSX.Element }) {
  return (
    <article className="group rounded-3xl border border-border bg-card-gradient p-10 backdrop-blur-sm transition duration-400 hover:-translate-y-1 hover:border-purple/40 hover:shadow-purple-glow">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-gradient text-white">
        {icon}
      </div>
      <h3 className="mt-8 font-display text-3xl font-extrabold text-white">{service.title}</h3>
      <p className="mt-3 font-display text-xl font-bold text-purple-light">{service.tagline}</p>
      <p className="mt-6 leading-relaxed text-text-soft">{service.description}</p>
      <div className="mt-8 space-y-3">
        {service.features.slice(0, 3).map((feature) => (
          <p key={feature} className="flex gap-3 text-sm font-normal text-white">
            <span className="text-purple-light">✓</span>
            {feature}
          </p>
        ))}
      </div>
      <Link to="/services" className="mt-8 inline-block text-purple-light transition group-hover:translate-x-1">
        Learn more →
      </Link>
    </article>
  )
}
