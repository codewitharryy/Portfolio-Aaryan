import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { profile, socials } from '../data/portfolio'
import Icon from './Icon'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' }, delay: 0.15 })

      tl.from('.hero__badge', { y: 24, opacity: 0, duration: 0.7 })
        .from(
          '.hero__title .line > span',
          { yPercent: 120, duration: 1.1, stagger: 0.1 },
          '-=0.35'
        )
        .from('.hero__text', { y: 22, opacity: 0, duration: 0.8 }, '-=0.7')
        .from(
          '.hero__actions .btn',
          { y: 22, opacity: 0, duration: 0.6, stagger: 0.12 },
          '-=0.55'
        )
        .from(
          '.hero__socials a',
          { y: 18, opacity: 0, duration: 0.5, stagger: 0.07 },
          '-=0.4'
        )
        .from(
          '.hero__media',
          { scale: 0.88, opacity: 0, duration: 1.2, ease: 'power3.out' },
          0.35
        )
        .from(
          '.hero__ring',
          { scale: 0.6, opacity: 0, duration: 1.4, ease: 'power3.out' },
          0.5
        )
        .from('.hero__scroll', { opacity: 0, y: 10, duration: 0.6 }, '-=0.5')

      // gentle floating portrait
      gsap.to('.hero__portrait', {
        y: -14,
        duration: 2.6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      // parallax on scroll
      gsap.to('.hero__media', {
        y: 90,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero__content', {
        y: 60,
        opacity: 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const onImgError = (e) => {
    e.currentTarget.onerror = null
    e.currentTarget.src = profile.imageFallback
  }

  return (
    <section id="home" className="hero" ref={root}>
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">
            <i className="dot" /> Available for new opportunities
          </span>

          <h1 className="hero__title">
            <span className="line">
              <span>{profile.headline.line1}</span>
            </span>
            <span className="line">
              <span className="grad">{profile.headline.line2}</span>
            </span>
            <span className="line line--muted">
              <span>{profile.headline.line3}</span>
            </span>
          </h1>

          <p className="hero__text">{profile.heroText}</p>

          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={`mailto:${profile.email}?subject=Let's%20work%20together&body=Hi%20${profile.name.split(' ')[0]},`}
            >
              Hire Me
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M3 11h14.17l-4.58-4.59L14 5l7 7-7 7-1.41-1.41L17.17 13H3v-2z"
                />
              </svg>
            </a>

            <a
              className="btn btn--ghost"
              href={profile.resumeUrl}
              download={profile.resumeFileName}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 3v10.17l3.59-3.58L17 11l-5 5-5-5 1.41-1.41L11 13.17V3h1zM5 19h14v2H5v-2z"
                />
              </svg>
              Download Resume
            </a>
          </div>

          <ul className="hero__socials">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.name}
                  title={s.name}
                >
                  <Icon name={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__ring" aria-hidden="true" />
          <div className="hero__portrait">
            <img
              src={profile.image}
              alt={profile.name}
              onError={onImgError}
              loading="eager"
            />
          </div>
          <span className="hero__chip hero__chip--tl">React</span>
          <span className="hero__chip hero__chip--br">Node.js</span>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  )
}