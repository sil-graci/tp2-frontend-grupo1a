import React from 'react';

const CONTACTO = {
  email: 'contacto@devstudio.com',
  whatsapp: 'https://wa.me/5491100000000',
  direccion: 'Av. Corrientes 1234, CABA, Argentina',
  mapa:
    'https://www.openstreetmap.org/export/embed.html?bbox=-58.3850%2C-34.6060%2C-58.3810%2C-34.6020&layer=mapnik&marker=-34.6037%2C-58.3830',
};

export default function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-grid">
        <div className="card-box contact-card">
          <h3 className="contact-card-title">
            ¿Tenés alguna consulta o propuesta? Dejanos tu mensaje
          </h3>

          <form
            className="contact-form"
            action={`mailto:${CONTACTO.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="tuemail@ejemplo.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Escribí tu mensaje aquí</label>
              <textarea id="mensaje" name="mensaje" rows="5" placeholder="¿Cómo podemos ayudarte?" required />
            </div>

            <button type="submit" className="btn-primary btn-submit">
              Enviar mensaje
            </button>
          </form>
        </div>

        <div className="card-box contact-card contact-info-card">
          <h3 className="contact-card-title">Encontranos</h3>
          <p className="contact-address">{CONTACTO.direccion}</p>

          <div className="map-container">
            <iframe title="Ubicación de DevStudio" src={CONTACTO.mapa} loading="lazy" />
          </div>

          <a
            href={CONTACTO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <span aria-hidden="true">💬</span>
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}