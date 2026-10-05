import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { profile } from '../data/portfolio'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -70,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.1,
      })
    })
    return () => ctx.revert()
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      ref={navRef}
      className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}
    >
      <div className="container nav__inner">
        <a className="nav__logo" href="#home" onClick={(e) => go(e, '#home')}>
          <span className="nav__logoMark">{profile.initials}</span>
          <span className="nav__logoText">{profile.name}</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary btn--sm nav__cta"
          href={`mailto:${profile.email}?subject=Let's%20work%20together`}
        >
          Hire Me
        </a>

        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="nav__mobile">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a
          className="btn btn--primary btn--sm"
          href={`mailto:${profile.email}?subject=Let's%20work%20together`}
        >
          Hire Me
        </a>
      </div>
    </header>
  )
}