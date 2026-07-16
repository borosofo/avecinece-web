import { useEffect, useRef, useState } from 'react'

/* Contador animado: sube de 0 al valor cuando entra en pantalla */
function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const start = performance.now()
        const dur = 1400
        const tick = (now) => {
          const t = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setN(Math.round(value * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => { obs.disconnect(); cancelAnimationFrame(raf) }
  }, [value])

  return <b ref={ref}>{n}{suffix}</b>
}

export default function About({ site, projects }) {
  const totalPhotos = projects.reduce((n, p) => n + p.photos.length, 0)
  const stats = [
    [projects.length, '', 'Proyectos'],
    [5, '', 'Años de trabajo'],
    [4, '', 'Territorios'],
    [totalPhotos, '+', 'Momentos'],
  ]

  return (
    <section className="about" id="nosotros">
      <div className="wrap">
        <div className="section-kicker">Nosotros</div>
        <h2 className="section-title">¿Quiénes somos?</h2>

        <div className="about-grid">
          <div className="about-text reveal">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="founders">
              <h3>Fundadores</h3>
              <div className="founders-list">
                {site.founders.map((f) => (
                  <span key={f} className="founder">{f}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="about-side reveal">
            {site.vision.map((v, i) => (
              <div key={i} className="vision-card">{v}</div>
            ))}
          </div>
        </div>

        <div className="stats reveal">
          {stats.map(([n, suffix, label]) => (
            <div key={label} className="stat">
              <CountUp value={n} suffix={suffix} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
