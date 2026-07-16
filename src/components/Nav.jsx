import { useState } from 'react'

const links = [
  ['#nosotros', 'Nosotros'],
  ['#proyectos', 'Proyectos'],
  ['#contacto', 'Contacto'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const BASE = import.meta.env.BASE_URL

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#inicio">
          <img src={`${BASE}images/logo.png`} alt="Logo Avecínece" />
          <span>Avecínece</span>
        </a>
        <button
          className="nav-burger"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? '✕' : '☰'}
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
