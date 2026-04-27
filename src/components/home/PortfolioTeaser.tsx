import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { projects } from '../../config/projects'
import ProjectCard from '../shared/ProjectCard'

export default function PortfolioTeaser() {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-card', { y: 34, opacity: 0, stagger: 0.1, duration: 0.65, scrollTrigger: { trigger: ref.current, start: 'top 82%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-6 py-32 lg:px-12 lg:py-40">
      <div className="items-end justify-between gap-8 md:flex">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">OUR WORK</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-white lg:text-5xl">Recent projects.</h2>
        </div>
        <Link to="/work" className="mt-6 inline-block text-purple-light md:mt-0">View all projects →</Link>
      </div>
      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <div key={project.slug} className="portfolio-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
