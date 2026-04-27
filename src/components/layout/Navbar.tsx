import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { site } from '../../config/site'
import AVLWordmark from '../brand/AVLWordmark'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', { y: -16, opacity: 0, stagger: 0.05, duration: 0.7, ease: 'power2.out' })
    }, navRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!overlayRef.current) return
    if (open) {
      gsap.fromTo(overlayRef.current, { yPercent: -100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, ease: 'power2.out' })
      gsap.fromTo('.mobile-nav-link', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, delay: 0.2 })
    }
  }, [open])

  return (
    <header ref={navRef} className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6 lg:h-20 lg:px-12">
        <Link to="/" className="nav-item shrink-0 leading-none" aria-label="AVL Innovation home">
          <AVLWordmark compact />
        </Link>
        <nav className="hidden items-center gap-10 lg:flex">
          {site.navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-item relative text-sm font-normal transition-colors duration-200 ${isActive ? 'text-text' : 'text-text-soft hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span className={`absolute -bottom-3 left-0 h-0.5 bg-purple transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="nav-item hidden items-center gap-4 lg:flex">
          <a
            href="https://www.instagram.com/avl_innovation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-text-muted transition-colors hover:text-purple-light"
          >
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <Link to="/contact" className="rounded-full bg-purple-gradient px-5 py-[10px] font-display text-[14px] font-bold text-white transition hover:shadow-purple-glow">
            Get In Touch →
          </Link>
        </div>
        <button type="button" className="nav-item space-y-1.5 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <span className="block h-px w-7 bg-white" />
          <span className="block h-px w-7 bg-white" />
          <span className="block h-px w-7 bg-white" />
        </button>
      </div>
      {open ? (
        <div ref={overlayRef} className="fixed inset-0 z-50 flex min-h-screen flex-col bg-bg px-8 py-8 lg:hidden">
          <button type="button" className="ml-auto text-4xl text-white" onClick={() => setOpen(false)} aria-label="Close menu">×</button>
          <div className="mt-16 flex flex-col gap-8">
            {site.navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="mobile-nav-link font-display text-4xl font-extrabold text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="mobile-nav-link mt-auto rounded-full bg-purple-gradient px-8 py-4 text-center font-display text-white">
            Get In Touch
          </Link>
        </div>
      ) : null}
    </header>
  )
}
