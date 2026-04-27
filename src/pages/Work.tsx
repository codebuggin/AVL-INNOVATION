import { useMemo, useState } from 'react'
import CTAStrip from '../components/home/CTAStrip'
import ProjectCard from '../components/shared/ProjectCard'
import { projects, type ProjectStatus } from '../config/projects'

type Filter = 'all' | ProjectStatus
const filters: Array<{ label: string; value: Filter }> = [
  { label: 'All', value: 'all' },
  { label: 'Live', value: 'live' },
  { label: 'In Development', value: 'in-development' },
]

export default function Work() {
  const [active, setActive] = useState<Filter>('all')
  const visible = useMemo(() => projects.filter((project) => active === 'all' || project.status === active), [active])

  return (
    <main>
      <section className="px-6 pb-16 pt-40 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">OUR WORK</p>
        <h1 className="mx-auto mt-4 max-w-4xl break-words font-display text-[clamp(3rem,11vw,4.5rem)] font-extrabold leading-tight">Selected projects.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-soft">A few of the businesses we&apos;ve worked with.</p>
      </section>
      <div className="sticky top-20 z-20 border-y border-border bg-bg/80 py-4 backdrop-blur">
        <div className="flex justify-center gap-3 overflow-x-auto px-6">
          {filters.map((filter) => (
            <button key={filter.value} type="button" onClick={() => setActive(filter.value)} className={`rounded-full border px-5 py-2 text-sm font-medium ${active === filter.value ? 'border-transparent bg-purple-gradient text-white' : 'border-border text-text-soft hover:border-purple/40'}`}>
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12">
        {visible.map((project) => <ProjectCard key={project.slug} project={project} large />)}
      </section>
      <CTAStrip title="Don't see your industry?" subtitle="We work with businesses across every sector. Let's talk." />
    </main>
  )
}
