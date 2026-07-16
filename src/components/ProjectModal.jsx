import { useEffect, useState, useCallback } from 'react'

export default function ProjectModal({ project, onClose }) {
  const [lightbox, setLightbox] = useState(null) // índice de la foto abierta

  const prev = useCallback(
    () => setLightbox((i) => (i - 1 + project.photos.length) % project.photos.length),
    [project.photos.length],
  )
  const next = useCallback(
    () => setLightbox((i) => (i + 1) % project.photos.length),
    [project.photos.length],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') lightbox !== null ? setLightbox(null) : onClose()
      if (lightbox !== null && e.key === 'ArrowLeft') prev()
      if (lightbox !== null && e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, onClose, prev, next])

  return (
    <>
      <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="modal" role="dialog" aria-modal="true" aria-label={project.title}>
          <div className="modal-hero">
            <img src={project.photos[0].src} alt={project.title} />
            <div className="modal-hero-shade" />
            <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
            <div className="modal-hero-title">
              <h2>{project.title}</h2>
              <div className="modal-sub">{project.subtitle}</div>
            </div>
          </div>

          <div className="modal-body">
            <div className="modal-meta">
              <span>📍 <b>{project.place}</b></span>
              <span>🗓 <b>{project.date}</b></span>
              <span
                className="project-chip"
                style={{ background: project.color, alignSelf: 'center' }}
              >
                {project.category}
              </span>
            </div>

            <p className="modal-desc">{project.description}</p>
            {project.quote && <blockquote className="modal-quote">{project.quote}</blockquote>}

            {project.videoEmbed && (
              <div className="modal-video">
                <h4>Video documental</h4>
                <div className="video-frame">
                  <iframe
                    src={project.videoEmbed}
                    title={`Video — ${project.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="modal-gallery">
              <h4>Galería · {project.photos.length} fotografías</h4>
              <div className="gallery-grid">
                {project.photos.map((photo, i) => (
                  <button key={i} className="gallery-item" onClick={() => setLightbox(i)}>
                    <img src={photo.src} alt={photo.caption || `${project.title} — foto ${i + 1}`} loading="lazy" />
                    <span className="gallery-item-zoom">⊕</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={(e) => e.target === e.currentTarget && setLightbox(null)}>
          <span className="lightbox-count">
            {lightbox + 1} / {project.photos.length}
          </span>
          <img
            src={project.photos[lightbox].src}
            alt={project.photos[lightbox].caption || project.title}
          />
          {project.photos[lightbox].caption && (
            <div className="lightbox-caption">{project.photos[lightbox].caption}</div>
          )}
          <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Cerrar">✕</button>
          <button className="lb-prev" onClick={prev} aria-label="Anterior">←</button>
          <button className="lb-next" onClick={next} aria-label="Siguiente">→</button>
        </div>
      )}
    </>
  )
}
