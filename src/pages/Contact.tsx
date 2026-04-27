import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
import { site } from '../config/site'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const initialForm: FormState = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="px-6 pb-32 pt-40 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">CONTACT</p>
        <h1 className="mt-4 break-words font-display text-[clamp(2.5rem,8vw,4rem)] font-extrabold leading-tight">
          Let&apos;s build something.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-text-soft">
          Tell us about your project and we&apos;ll get back to you within 24 hours.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_400px]">

          {/* Left — contact form */}
          <div>
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center rounded-2xl border border-purple/40 bg-card-gradient p-12 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-gradient text-2xl text-white">✓</div>
                <h2 className="font-display text-2xl font-extrabold">Message sent!</h2>
                <p className="mt-3 text-text-soft">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-soft">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-white placeholder-text-dim outline-none transition focus:border-purple/60 focus:ring-1 focus:ring-purple/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-soft">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-white placeholder-text-dim outline-none transition focus:border-purple/60 focus:ring-1 focus:ring-purple/30"
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-text-soft">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 00000"
                      className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-white placeholder-text-dim outline-none transition focus:border-purple/60 focus:ring-1 focus:ring-purple/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-text-soft">Service</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-white outline-none transition focus:border-purple/60 focus:ring-1 focus:ring-purple/30"
                    >
                      <option value="" className="bg-bg-elevated">Select a service</option>
                      <option value="website" className="bg-bg-elevated">Website Development</option>
                      <option value="app" className="bg-bg-elevated">Mobile App Development</option>
                      <option value="unsure" className="bg-bg-elevated">Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-soft">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project…"
                    className="w-full resize-none rounded-xl border border-border bg-bg-elevated px-4 py-3 text-white placeholder-text-dim outline-none transition focus:border-purple/60 focus:ring-1 focus:ring-purple/30"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-purple-gradient px-8 py-4 font-display text-base font-bold text-white transition hover:shadow-purple-glow"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Right — info card */}
          <div className="rounded-2xl border border-purple/30 bg-card-gradient p-8">
            <a
              href={site.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-display text-sm font-bold text-white transition hover:brightness-110"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.11 1.535 5.832L.057 23.657a.75.75 0 0 0 .916.916l5.825-1.478A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.508-5.21-1.394l-.373-.214-3.867.983.999-3.758-.234-.386A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Chat on WhatsApp →
            </a>

            <div className="my-6 border-t border-border" />

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-purple-light" />
                <a href={`mailto:${site.contact.email}`} className="break-all text-sm text-text-soft hover:text-white">
                  {site.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-purple-light" />
                <a href={site.contact.instagramLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-purple-light hover:text-white">
                  {site.contact.instagram}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-purple-light" />
                <p className="text-sm text-text-soft">{site.contact.address}</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-purple-light" />
                <a href={`tel:+919959907317`} className="text-sm text-text-soft hover:text-white">
                  {site.contact.whatsapp}
                </a>
              </div>
            </div>

            <p className="mt-8 text-xs text-text-dim">We usually reply within 24 hours.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
