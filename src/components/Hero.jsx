export default function Hero({ projects }) {
  // una foto representativa de cada proyecto para el collage del fondo
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
