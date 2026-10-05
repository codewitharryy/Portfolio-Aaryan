import { education } from '../data/portfolio'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const scope = useReveal({ selector: '.eduCard', y: 44, stagger: 0.12 })

  return (
    <section id="education" className="section" ref={scope}>
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">05 — Education & Certifications</span>
          <h2 className="section__title">
            Credentials & <em>learning</em>
          </h2>
        </header>

        <div className="eduGrid">
          {education.map((e) => (
            <article className="eduCard" key={e.title}>
              <span className="eduCard__period">{e.period}</span>
              <h3>{e.title}</h3>
              <p className="eduCard__org">{e.org}</p>
              <p className="eduCard__detail">{e.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}