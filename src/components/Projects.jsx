import { useState } from 'react'

export default function Projects({ projects, onOpen }) {
  const [filter, setFilter] = useState('Todos')
  const categories = ['Todos', ...new Set(projects.map((p) => p.category))]
  const visible =
    filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="proyectos">
      <div className="wrap">
        <div className="section-kicker">Cronología 2020 – 2025</div>
        <h2 className="section-title">Nuestras experiencias</h2>

        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`filter-btn ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p) => (
            <button key={p.id} className="project-card reveal visible" onClick={() => onOpen(p)}>
              <img src={p.photos[0].src} alt={p.title} loading="lazy" />
              <div className="project-card-shade" />
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span className="project-chip" style={{ background: p.color }}>
                    {p.category}
                  </span>
                  <span className="project-card-year">{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.place}</p>
                <span className="project-card-cta">
                  Ver {p.photos.length} fotos
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
