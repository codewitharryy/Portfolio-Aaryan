import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useLayoutEffect(() => {
    // Recalculate trigger positions after fonts / images settle
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    const onLoad = () => ScrollTrigger.refresh()

    window.addEventListener('load', onLoad)
    return () => {
      clearTimeout(t)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}