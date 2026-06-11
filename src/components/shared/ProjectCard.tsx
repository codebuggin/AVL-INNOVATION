import type { Project } from '../../config/projects'

export default function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const isLive = project.status === 'live'
  const imageFitClass = project.imageFit === 'contain' ? 'object-contain object-center' : 'object-cover object-left-top'

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card-gradient transition duration-400 hover:scale-[1.02] hover:border-purple/40">
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.client} project preview`}
            className={`h-full w-full ${imageFitClass} transition duration-500 group-hover:scale-[1.04]`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-text-muted">
            {project.client}
          </div>
        )}
        <div className="absolute inset-0 bg-purple-gradient opacity-0 transition duration-400 group-hover:opacity-20" />
        <div className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-[11px] font-medium uppercase ${isLive ? 'border-green-500/30 bg-green-500/20 text-green-300' : 'border-purple/30 bg-purple/20 text-purple-light'}`}>
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-current" />
          {isLive ? 'LIVE' : 'IN DEVELOPMENT'}
        </div>
      </div>
      <div className={large ? 'p-7' : 'p-6'}>
        <p className="text-xs font-medium uppercase tracking-wider text-text-muted">{project.category} · {project.client}</p>
        <h3 className="mt-3 font-display text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-soft">{project.description}</p>
        <div className="mt-5">
          {isLive && project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-purple-light">Visit live site ↗</a>
          ) : (
            <span className="text-text-muted">Coming soon</span>
          )}
        </div>
      </div>
    </article>
  )
}
