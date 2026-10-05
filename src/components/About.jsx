import { about, profile } from '../data/portfolio'
import useReveal from '../hooks/useReveal'

export default function About() {
  const scope = useReveal({ selector: '.reveal', stagger: 0.1 })

  return (
    <section id="about" className="section" ref={scope}>
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">01 — About</span>
          <h2 className="section__title">
            A developer who cares about the <em>details</em>
          </h2>
        </header>

        <div className="about">
          <div className="about__body reveal">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="about__facts">
              {about.facts.map((f) => (
                <div key={f.label} className="fact">
                  <span className="fact__label">{f.label}</span>
                  <span className="fact__value">{f.value}</span>
                </div>
              ))}
            </div>

            <a
              className="btn btn--ghost"
              href={profile.resumeUrl}
              download={profile.resumeFileName}
            >
              View my resume
            </a>
          </div>

          <aside className="about__stats reveal">
            {about.stats.map((s) => (
              <div key={s.label} className="statCard">
                <span className="statCard__value">{s.value}</span>
                <span className="statCard__label">{s.label}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}