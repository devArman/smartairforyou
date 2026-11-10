import { useEffect, useState } from 'react'
import { company, phoneHref } from '../data/site'
import { Icon } from './ui'

const links = [
  ['services', 'Services'],
  ['heating-cooling', 'Heating & Cooling'],
  ['process', 'How it works'],
  ['faq', 'FAQ'],
  ['contact', 'Contact'],
]

export function Logo() {
  return (
    <span className="logo">
      <svg viewBox="0 0 40 40" className="logo-mark" aria-hidden="true">
        <defs>
          <linearGradient id="lg-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff7a3d" />
            <stop offset="1" stopColor="#2fb8ff" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#lg-mark)" />
        <path d="M13 15c3-3 6 3 9 0s5-1 6 0M12 21c3-3 6 3 9 0s6-1 7 0M13 27c3-3 6 3 9 0s5-1 6 0" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="logo-text">
        Smart<b>Air</b> <small>System</small>
      </span>
    </span>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header-row">
        <a href="#top" className="logo-link" aria-label={`${company.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="nav" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href={phoneHref} className="btn btn--sm btn--grad nav-call">
            <Icon name="Phone" size={16} /> {company.phone}
          </a>
        </nav>

        <a href={phoneHref} className="header-call" aria-label={`Call ${company.phone}`}>
          <Icon name="Phone" size={18} />
        </a>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
