export default function About({ site, projects }) {
  const totalPhotos = projects.reduce((n, p) => n + p.photos.length, 0)
  const stats = [
    [String(projects.length), 'Proyectos'],
    ['5', 'Años de trabajo'],
    ['4', 'Territorios'],
    [String(totalPhotos) + '+', 'Momentos'],
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
          {stats.map(([n, label]) => (
            <div key={label} className="stat">
              <b>{n}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
