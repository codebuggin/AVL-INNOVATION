import { Link } from 'react-router-dom'
import { site } from '../../config/site'
import AVLWordmark from '../brand/AVLWordmark'

function IgIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated pb-8 pt-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block leading-none" aria-label="AVL Innovation home">
              <AVLWordmark />
            </Link>
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-text-soft">
              Designing and building websites and apps for businesses in Hyderabad and beyond.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider">PAGES</h3>
            <div className="mt-4 flex flex-col gap-3">
              {site.navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-text-soft hover:text-white">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider">SERVICES</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/services" className="text-sm text-text-soft hover:text-white">Website Design & Development</Link>
              <Link to="/services" className="text-sm text-text-soft hover:text-white">Mobile App Development</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider">CONTACT</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-text-soft">
              <a href={site.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">{site.contact.whatsapp}</a>
              <a href={`mailto:${site.contact.email}`} className="hover:text-white">{site.contact.email}</a>
              <p>{site.contact.address}</p>
            </div>
          </div>
        </div>

        {/* Instagram strip */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-text-dim">Follow us for updates and behind the scenes →</p>
          <a
            href={site.contact.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm text-text-soft transition-colors hover:text-white"
          >
            <IgIcon className="h-4 w-4" />
            {site.contact.instagram}
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-text-muted">© 2026 AVL Innovation. All rights reserved.</p>
          <p className="text-xs text-text-muted">Hyderabad, India</p>
        </div>
      </div>
    </footer>
  )
}
