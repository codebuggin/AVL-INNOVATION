import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

function PlayIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M13 10.5 22 16l-9 5.5v-11Z" fill="currentColor" />
    </svg>
  )
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fill="currentColor" d="M13.7 4.2c1.7-1 3.7-1.4 5.9-1.2.2 2.2-.2 4.2-1.2 5.9l-2.6 4.3 1.5 1.5-1.8 1.8-1.5-1.5-4.3 2.6c-1.7 1-3.7 1.4-5.9 1.2-.2-2.2.2-4.2 1.2-5.9l2.6-4.3-1.5-1.5 1.8-1.8 1.5 1.5 4.3-2.6Zm1 3.4a1.8 1.8 0 1 0 2.6 2.6 1.8 1.8 0 0 0-2.6-2.6ZM5.2 20.3c1.4.1 2.5-.2 3.4-.7L6.3 17.3c-.5.9-.8 2-.7 3Z" />
    </svg>
  )
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy', { opacity: 0, y: 30, duration: 0.7, stagger: 0.12, ease: 'power2.out' })
      gsap.from('.hero-visual', { opacity: 0, scale: 0.95, duration: 1, delay: 0.25, ease: 'power3.out' })
      gsap.to(glowRef.current, { scale: 1.08, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pb-[60px] pt-20"
    >
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-[55%_45%] lg:gap-12 lg:px-12">

        {/* Left — copy */}
        <div className="relative z-10 max-w-[600px]">
          <p className="hero-copy text-[13px] font-medium uppercase tracking-[0.2em] text-purple-light">
            Digital Solutions That Drive Growth
          </p>

          <h1 className="hero-copy mt-5">
            <span className="block font-display text-[clamp(28px,7.5vw,44px)] font-extrabold leading-[1.08] text-white lg:text-[clamp(32px,4vw,56px)]">
              We Build High-Performing
            </span>
            <span className="block font-display text-[clamp(36px,9vw,52px)] font-extrabold leading-[1.08] text-[#a855f7] lg:text-[clamp(40px,5.5vw,72px)]">
              Websites & Apps.
            </span>
          </h1>

          <p className="hero-copy mt-4 text-[clamp(16px,2vw,22px)] font-medium leading-snug text-white">
            That Don&apos;t Just Look Good — They Bring You Clients.
          </p>

          <p className="hero-copy mt-5 max-w-[520px] text-base leading-relaxed text-text-soft lg:text-lg">
            From idea to launch, we design and develop fast, modern websites and mobile apps that help your business grow.
          </p>

          <div className="hero-copy mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full bg-purple-gradient px-6 font-display text-sm font-bold text-white transition hover:shadow-purple-glow"
            >
              <RocketIcon /> Start Your Project →
            </Link>
            <Link
              to="/work"
              className="inline-flex h-[52px] min-w-[180px] items-center justify-center gap-2 rounded-full border border-border-strong px-6 text-sm font-medium text-white transition hover:border-purple hover:bg-purple/10"
            >
              <PlayIcon /> View Our Work
            </Link>
          </div>

          <a
            href="https://www.instagram.com/avl_innovation"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-copy mt-5 inline-flex items-center gap-2 text-[13px] text-text-muted transition-colors hover:text-purple-light"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Follow our work →
          </a>
        </div>

        {/* Right — device mockup (desktop only) */}
        <div className="hero-visual hidden lg:flex lg:items-center lg:justify-center">
          <div className="relative w-full overflow-hidden">
            {/* Purple glow */}
            <div
              ref={glowRef}
              className="pointer-events-none absolute inset-0 scale-[1.4] bg-purple-glow-radial opacity-50 blur-3xl"
            />
            <img
              src="/mockups/hero-device-render.png"
              alt="Laptop and phone mockup for AVL Innovation"
              className="relative h-auto w-full object-contain mix-blend-screen"
            />
            {/* Edge fades — hardcoded bg colour so they always match */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32" style={{ background: 'linear-gradient(to bottom, #0a0818 0%, transparent 100%)' }} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40" style={{ background: 'linear-gradient(to top, #0a0818 0%, transparent 100%)' }} />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3" style={{ background: 'linear-gradient(to right, #0a0818 0%, transparent 100%)' }} />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4" style={{ background: 'linear-gradient(to left, #0a0818 0%, transparent 100%)' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
