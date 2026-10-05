import { projects } from '../data/portfolio'
import useReveal from '../hooks/useReveal'
import Icon from './Icon'

export default function Projects() {
  const scope = useReveal({ selector: '.projectCard', y: 56, stagger: 0.12 })

  return (
    <section id="projects" className="section section--alt" ref={scope}>
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">04 — Projects</span>
          <h2 className="section__title">
            Selected <em>work</em>
          </h2>
        </header>

        <div className="projects">
          {projects.map((p) => (
            <article className="projectCard" key={p.title}>
              <div className="projectCard__glow" aria-hidden="true" />

              <div className="projectCard__head">
                <h3>{p.title}</h3>
                <div className="projectCard__links">
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${p.title} source code`}
                    >
                      <Icon name="github" size={18} />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${p.title} live demo`}
                    >
                      <Icon name="external" size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="projectCard__desc">{p.description}</p>

              <ul className="chips chips--sm">
                {p.tags.map((t) => (
                  <li className="chip" key={t}>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}