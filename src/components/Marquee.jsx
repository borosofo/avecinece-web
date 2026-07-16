export default function Marquee({ projects }) {
  const items = projects.map((p) => `${p.title} · ${p.year}`)
  // duplicado para que el bucle sea continuo
  const loop = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <span key={i} className="marquee-item">{t}</span>
        ))}
      </div>
    </div>
  )
}
