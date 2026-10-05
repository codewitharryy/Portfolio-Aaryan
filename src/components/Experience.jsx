import { experience } from '../data/portfolio'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const scope = useReveal({ selector: '.timeline__item', y: 56, stagger: 0.16 })

  return (
    <section id="experience" className="section" ref={scope}>
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">03 — Experience</span>
          <h2 className="section__title">
            Where I’ve <em>shipped</em> things
          </h2>
        </header>

        <div className="timeline">
          {experience.map((job, i) => (
            <article className="timeline__item" key={`${job.company}-${i}`}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <div className="timeline__top">
                  <h3 className="timeline__role">{job.role}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__company">
                  {job.company} <span>· {job.location}</span>
                </p>
                <ul className="timeline__points">
                  {job.points.map((p, k) => (
                    <li key={k}>{p}</li>
                  ))}
                </ul>
                <ul className="chips chips--sm">
                  {job.stack.map((s) => (
                    <li className="chip" key={s}>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}