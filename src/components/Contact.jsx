import { profile, socials } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import Icon from './Icon'

export default function Contact() {
  const scope = useReveal({ selector: '.reveal', y: 40, stagger: 0.09 })

  return (
    <section id="contact" className="section section--alt" ref={scope}>
      <div className="container">
        <header className="section__head section__head--center">
          <span className="eyebrow">06 — Contact</span>
          <h2 className="section__title">
            Let’s build something <em>great</em>
          </h2>
          <p className="section__sub reveal">
            I’m currently open to full-time roles and freelance work. Drop a
            message — I usually reply within a day.
          </p>
        </header>

        <div className="contact__cta reveal">
          <a
            className="btn btn--primary btn--lg"
            href={`mailto:${profile.email}?subject=Let's%20work%20together`}
          >
            <Icon name="mail" size={18} />
            {profile.email}
          </a>
          <a className="btn btn--ghost btn--lg" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
        </div>

        <ul className="socialGrid">
          {socials.map((s) => (
            <li key={s.name} className="reveal">
              <a
                className="socialCard"
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="socialCard__icon">
                  <Icon name={s.icon} size={20} />
                </span>
                <span className="socialCard__name">{s.name}</span>
                <span className="socialCard__arrow">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}