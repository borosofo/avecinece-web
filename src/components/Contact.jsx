export default function Contact({ site }) {
  const { contact } = site

  return (
    <section className="contact" id="contacto">
      <svg className="contact-spray" viewBox="0 0 300 300" aria-hidden="true">
        <ellipse cx="150" cy="140" rx="140" ry="80" fill="#0dccf2" transform="rotate(-18 150 140)" />
        <circle cx="60" cy="220" r="26" fill="#f20dcc" />
        <circle cx="250" cy="60" r="18" fill="#f20dcc" />
      </svg>
      <div className="wrap">
        <div className="section-kicker">Contacto</div>
        <h2 className="section-title">Trabajemos juntos</h2>

        <div className="contact-grid">
          <p className="contact-lead">
            ¿Quieres llevar el arte a tu territorio, colaborar en un proyecto o
            invitarnos a un festival? Escríbenos — nos encanta tejer comunidad.
          </p>

          <div className="contact-links">
            <a
              className="contact-link"
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-link-icon" style={{ background: '#f20dcc' }}>◉</span>
              <span>
                <b>Instagram</b>
                <span>{contact.instagramHandle}</span>
              </span>
            </a>

            <a className="contact-link" href={`mailto:${contact.email}`}>
              <span className="contact-link-icon" style={{ background: '#0dccf2' }}>✉</span>
              <span>
                <b>Correo</b>
                <span>{contact.email}</span>
              </span>
            </a>

            {contact.youtube.map((v) => (
              <a
                key={v.url}
                className="contact-link"
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-link-icon" style={{ background: '#0dccf2' }}>▶</span>
                <span>
                  <b>YouTube</b>
                  <span>{v.label}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
