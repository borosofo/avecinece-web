import { useEffect, useState } from 'react'
import { projects, site } from './data/projects.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [openProject, setOpenProject] = useState(null)
  const [showTop, setShowTop] = useState(false)
  const BASE = import.meta.env.BASE_URL

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // animación de aparición al hacer scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // bloquea el scroll del fondo cuando hay modal abierto
  useEffect(() => {
    document.body.style.overflow = openProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [openProject])

  return (
    <>
      <Nav />
      <Hero projects={projects} />
      <About site={site} projects={projects} />
      <Projects projects={projects} onOpen={setOpenProject} />
      <Contact site={site} />

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-logo">
            <img src={`${BASE}images/logo.png`} alt="Logo Avecínece" />
            <span>Avecínece</span>
          </div>
          <small>{site.tagline} · Bogotá, Colombia · {site.years}</small>
        </div>
      </footer>

      <button
        className={`to-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        ↑
      </button>

      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </>
  )
}
