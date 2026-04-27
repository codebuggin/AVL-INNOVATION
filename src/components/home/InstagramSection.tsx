const IG_URL = 'https://www.instagram.com/avl_innovation'

function IgIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function ReelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  )
}

function InstagramProfileCard() {
  const igGradient = 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)'

  return (
    <div style={{ padding: 24 }}>

      {/* Top row — avatar + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Avatar with Instagram gradient border */}
        <div style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: igGradient,
          padding: 2,
          flexShrink: 0,
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: '#0a0818',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: '#ffffff' }}>
              AVL
            </span>
          </div>
        </div>

        {/* Name + handle */}
        <div>
          <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: '#0a0818', margin: 0 }}>
            AVL Innovation
          </p>
          <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)', margin: '2px 0 0' }}>
            @avl_innovation
          </p>
        </div>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        marginTop: 16,
        borderTop: '1px solid rgba(0,0,0,0.07)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        paddingTop: 12,
        paddingBottom: 12,
      }}>
        {[['3', 'posts'], ['13', 'followers'], ['4', 'following']].map(([num, label], i) => (
          <div key={label} style={{
            textAlign: 'center',
            borderRight: i < 2 ? '1px solid rgba(0,0,0,0.1)' : undefined,
          }}>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 16, color: '#0a0818', margin: 0 }}>
              {num}
            </p>
            <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.45)', margin: '2px 0 0' }}>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div style={{ marginTop: 12 }}>
        <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', margin: 0, lineHeight: 1.5 }}>
          Website & App Development
        </p>
        <p style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)', margin: '2px 0 0', lineHeight: 1.5 }}>
          Hyderabad, India 🇮🇳
        </p>
      </div>

      {/* Posts grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 4, marginTop: 16 }}>
        {/* Post 1 — purple reel */}
        <div style={{
          aspectRatio: '1/1',
          borderRadius: 8,
          background: 'linear-gradient(135deg,#7c3aed,#a855f7)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 6, right: 6, color: 'white' }}>
            <ReelIcon />
          </div>
        </div>

        {/* Post 2 — "YOU" */}
        <div style={{
          aspectRatio: '1/1',
          borderRadius: 8,
          background: '#0a0818',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 24, color: '#ffffff' }}>
            YOU
          </span>
        </div>

        {/* Post 3 — AVL */}
        <div style={{
          aspectRatio: '1/1',
          borderRadius: 8,
          background: '#1a0533',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18, color: '#ffffff' }}>
            AVL
          </span>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 10, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}>
            INNOVATION
          </span>
        </div>
      </div>

      {/* Follow button */}
      <a
        href={IG_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          marginTop: 16,
          width: '100%',
          background: 'linear-gradient(135deg,#a855f7,#7c3aed)',
          color: '#ffffff',
          fontFamily: 'Syne, sans-serif',
          fontWeight: 700,
          fontSize: 13,
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          padding: '11px 0',
          borderRadius: 8,
          textDecoration: 'none',
          transition: 'opacity 0.2s',
        }}
      >
        Follow on Instagram
      </a>
    </div>
  )
}

export default function InstagramSection() {
  return (
    <section className="border-y border-border bg-bg-elevated">
      <div className="mx-auto max-w-[1200px] px-[5vw] py-[100px]">
        <div className="grid items-center gap-[80px] lg:grid-cols-2">

          {/* Left — copy */}
          <div className="min-w-0">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-light">
              FOLLOW ALONG
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-extrabold leading-tight text-white">
              See our work on Instagram.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-text-soft">
              Behind the scenes, new projects, design tips, and updates — follow us @avl_innovation
            </p>

            <p
              className="mt-6 bg-purple-gradient bg-clip-text font-display font-extrabold leading-none text-transparent"
              style={{ fontSize: 'clamp(22px, 2.5vw, 38px)' }}
            >
              @avl_innovation
            </p>

            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-purple-gradient px-8 py-4 font-display font-bold text-white transition hover:shadow-purple-glow"
            >
              <IgIcon className="h-5 w-5" />
              Follow on Instagram →
            </a>

            <div className="mt-6">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-light transition hover:text-white"
              >
                View all posts →
              </a>
            </div>
          </div>

          {/* Right — LightWidget embed in white card */}
          <div className="flex justify-center lg:justify-end">
            <div style={{
              background: '#ffffff',
              borderRadius: 20,
              overflow: 'hidden',
              padding: 0,
              boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
              width: '100%',
              maxWidth: '100%',
            }}>
              <iframe
                src="//lightwidget.com/widgets/f5f96306d562505b975f1a5a09a41b0a.html"
                scrolling="no"
                allowTransparency
                className="lightwidget-widget"
                style={{ width: '100%', border: 0, overflow: 'hidden', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
