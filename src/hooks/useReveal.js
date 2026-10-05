import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-triggered fade + rise reveal.
 * Returns a ref to attach to the section wrapper.
 */
export default function useReveal({
  selector,
  y = 44,
  duration = 0.9,
  stagger = 0.12,
  start = 'top 82%',
  deps = [],
} = {}) {
  const scope = useRef(null)

  useLayoutEffect(() => {
    const el = scope.current
    if (!el) return

    const ctx = gsap.context(() => {
      const targets = selector ? el.querySelectorAll(selector) : [el]
      if (!targets || targets.length === 0) return

      gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      })
    }, el)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scope
}