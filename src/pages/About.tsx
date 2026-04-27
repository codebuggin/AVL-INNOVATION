import CTAStrip from '../components/home/CTAStrip'
import SectionHeader from '../components/shared/SectionHeader'
import { site } from '../config/site'

const values = [
  ['01', 'CLIENT-FIRST', "Every decision starts with what's best for the client's business."],
  ['02', 'FIXED PRICING', 'You get a number on day one. No surprise hourly bills.'],
  ['03', 'WEEKLY DEMOS', 'You see real progress every week, not just at the end.'],
  ['04', 'SHIP FAST', "We don't drag projects. Most websites ship in 2-4 weeks."],
  ['05', 'LONG-TERM SUPPORT', "We stay involved after launch. Your site doesn't go dark on day 31."],
]

export default function About() {
  return (
    <main>
      <section className="mx-auto max-w-[900px] px-6 pb-24 pt-40 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">ABOUT US</p>
        <h1 className="mx-auto mt-5 max-w-4xl break-words font-display text-[clamp(3rem,11vw,4.5rem)] font-extrabold leading-tight">Two founders. One mission.</h1>
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-text-soft">
          We started AVL Innovation to help businesses get the kind of websites and apps usually reserved for big companies.
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] space-y-24 px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-bg-elevated">
            <img
              src="/mockups/hyderabad.png"
              alt="Hyderabad Charminar with digital innovation icons"
              className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">OUR STORY</p>
            <h2 className="mt-4 font-display text-3xl font-bold">Built in Hyderabad, for businesses everywhere.</h2>
            <p className="mt-6 leading-relaxed text-text-soft">AVL Innovation was founded in 2024 in Hyderabad with a clear focus: design and develop digital products that actually move the needle for our clients.</p>
            <p className="mt-4 leading-relaxed text-text-soft">Today we work with businesses across India and beyond — clinics, retail stores, ecommerce brands, and growing companies that want to do digital right.</p>
          </div>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-bg-elevated lg:order-2">
            <img
              src="/mockups/avl.png"
              alt="AVL Innovation team at work"
              className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">WHAT DRIVES US</p>
            <h2 className="mt-4 font-display text-3xl font-bold">Quality over quantity.</h2>
            <p className="mt-6 leading-relaxed text-text-soft">Your project deserves focused attention, clear communication, and a launch plan that respects your timeline.</p>
            <p className="mt-4 leading-relaxed text-text-soft">That is why we take on a small number of projects at a time and treat each one like a serious business asset.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-elevated py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionHeader eyebrow="MEET THE FOUNDERS" title="The people behind AVL." />
          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {site.founders.map((founder) => (
              <article key={founder.name}>
                <h3 className="font-display text-3xl font-extrabold">{founder.name}</h3>
                <p className="mt-2 font-medium text-purple-light">{founder.role}</p>
                <p className="mt-4 leading-relaxed text-text-soft">{founder.bio}</p>
                <div className="mt-6 flex gap-5 text-sm text-text-muted">
                  <a href={site.contact.instagramLink} target="_blank" rel="noopener noreferrer" className="hover:text-purple-light">Instagram</a>
                  <a href={`mailto:${site.contact.email}`} className="hover:text-purple-light">Email</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-32">
        <SectionHeader eyebrow="WHAT WE BELIEVE" title="Five things we don't compromise on." />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {values.map(([number, title, body], index) => (
            <article key={title} className={`rounded-2xl border border-border bg-card-gradient p-8 ${index === 4 ? 'lg:col-span-2' : ''}`}>
              <p className="bg-purple-gradient bg-clip-text font-display text-4xl font-extrabold text-transparent">{number}</p>
              <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-text-soft">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <CTAStrip />
    </main>
  )
}
