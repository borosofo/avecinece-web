import { useEffect, useRef, useState } from 'react'

/* Partículas de spray neón flotando en el hero */
function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let raf, w, h
    const COLORS = ['13,204,242', '242,13,204']
    const dots = Array.from({ length: 36 }, () => ({
      x: Math.random(), y: Math.random(),
      r: .8 + Math.random() * 2.2,
      vy: .12 + Math.random() * .3,
      vx: (Math.random() - .5) * .12,
      c: COLORS[Math.random() < .6 ? 0 : 1],
      a: .15 + Math.random() * .4,
      tw: Math.random() * Math.PI * 2,
    }))

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        d.y -= d.vy / h
        d.x += d.vx / w
        d.tw += .03
        if (d.y < -0.02) { d.y = 1.02; d.x = Math.random() }
        const alpha = d.a * (0.6 + 0.4 * Math.sin(d.tw))
        ctx.beginPath()
        ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${d.c},${alpha})`
        ctx.shadowColor = `rgba(${d.c},.8)`
        ctx.shadowBlur = 8
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="hero-particles" aria-hidden="true" />
}

export default function Hero({ projects }) {
  const BASE = import.meta.env.BASE_URL
  const [videoReady, setVideoReady] = useState(false)

  // fotos de respaldo mientras carga el video (y si el video no existe)
  const strip = [
    projects[3].photos[0], // hip hop
    projects[2].photos[0], // ferrocarril
    projects[6].photos[0], // aectr
    projects[4].photos[8], // movilizarte
  ]

  const tags = [
    ['Murales', '#f20dcc'],
    ['Ferias', '#0dccf2'],
    ['Festivales', '#f20dcc'],
    ['Talleres', '#0dccf2'],
    ['Laboratorios', '#f20dcc'],
  ]

  return (
    <header className="hero" id="inicio">
      <div className="hero-bg-strip" aria-hidden="true">
        {strip.map((p, i) => (
          <img key={i} src={p.src} alt="" loading="eager" />
        ))}
      </div>

      <video
        className={`hero-video ${videoReady ? 'ready' : ''}`}
        src={`${BASE}videos/hero.mp4`}
        autoPlay muted loop playsInline
        onCanPlay={() => setVideoReady(true)}
        onError={(e) => e.currentTarget.remove()}
        aria-hidden="true"
      />

      <Particles />

      <div className="wrap hero-content">
        <div className="hero-kicker">Colectivo artístico · Colombia · 2020–2025</div>
        <h1>
          Ave<span className="accent">cí</span>nece
        </h1>
        <p className="hero-sub">
          Arte como vehículo de cambio social: murales, ferias, festivales y
          laboratorios que tejen comunidad en el espacio público.
        </p>
        <div className="hero-tags">
          {tags.map(([label, color]) => (
            <span key={label} className="hero-tag" style={{ background: color }}>
              {label}
            </span>
          ))}
        </div>
      </div>
      <a className="hero-scroll" href="#nosotros">
        Descubre
      </a>
    </header>
  )
}
