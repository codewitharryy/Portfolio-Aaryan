import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillGroups, marqueeItems } from '../data/portfolio'
import useReveal from '../hooks/useReveal'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const rowA = useRef(null)
  const rowB = useRef(null)
  const scope = useReveal({ selector: '.skillCard', stagger: 0.12 })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // infinite marquee — content is duplicated 2×, so -50% loops seamlessly
      gsap.to(rowA.current, {
        xPercent: -50,
        duration: 30,
        ease: 'none',
        repeat: -1,
      })
      gsap.fromTo(
        rowB.current,
        { xPercent: -50 },
        { xPercent: 0, duration: 34, ease: 'none', repeat: -1 }
      )
    })
    return () => ctx.revert()
  }, [])

  const items = [...marqueeItems, ...marqueeItems]

  return (
    <section id="skills" className="section section--alt" ref={scope}>
      <div className="container">
        <header className="section__head">
          <span className="eyebrow">02 — Skills</span>
          <h2 className="section__title">
            The <em>toolkit</em> I build with
          </h2>
        </header>
      </div>

      {/* marquee */}
      <div className="marquee">
        <div className="marquee__track" ref={rowA}>
          {items.map((item, i) => (
            <span className="marquee__item" key={`a-${i}`}>
              {item}
              <i className="marquee__sep" />
            </span>
          ))}
        </div>
      </div>
      <div className="marquee marquee--reverse">
        <div className="marquee__track" ref={rowB}>
          {items.map((item, i) => (
            <span className="marquee__item" key={`b-${i}`}>
              {item}
              <i className="marquee__sep" />
            </span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="skills">
          {skillGroups.map((g) => (
            <article className="skillCard" key={g.category}>
              <h3 className="skillCard__title">{g.category}</h3>
              <ul className="chips">
                {g.items.map((it) => (
                  <li className="chip" key={it}>
                    {it}
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