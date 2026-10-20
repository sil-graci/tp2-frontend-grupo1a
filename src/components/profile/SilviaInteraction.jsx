import React, { useState } from 'react';
import MediaCard from '../common/MediaCard';

export default function SilviaInteraction({ member }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const works = [...member.peliculas, ...member.discos];
  const total = works.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const currentWork = works[currentIndex];

  return (
    <section className="profile-interaction-card">
      <div className="interaction-header">
        <div>
          <h3>Carrusel de Obras Favoritas de Silvia</h3>
          <p style={{ margin: 0, fontSize: '0.88rem' }}>
            Explorá secuencialmente cada una de las 6 obras cinematográficas y musicales predilectas.
          </p>
        </div>

        <div className="carousel-nav-controls">
          <button
            type="button"
            className="btn-secondary"
            onClick={handlePrev}
            aria-label="Obra anterior"
            style={{ padding: '0.45rem 0.9rem' }}
          >
            ← Anterior
          </button>
          <span className="carousel-indicator">
            {currentIndex + 1} de {total}
          </span>
          <button
            type="button"
            className="btn-primary"
            onClick={handleNext}
            aria-label="Obra siguiente"
            style={{ padding: '0.45rem 0.9rem' }}
          >
            Siguiente →
          </button>
        </div>
      </div>

      <div className="carousel-container">
        {/* Selector de puntos/dots */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
          {works.map((work, idx) => (
            <button
              key={work.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir a obra ${idx + 1}: ${work.titulo}`}
              style={{
                width: idx === currentIndex ? '24px' : '10px',
                height: '10px',
                borderRadius: '999px',
                border: 'none',
                background: idx === currentIndex ? 'var(--accent)' : 'var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            />
          ))}
        </div>

        {/* Tarjeta destacada del carrusel */}
        <div className="carousel-card-wrap">
          <MediaCard item={currentWork} />
        </div>
      </div>
    </section>
  );
}
