import React, { useState } from 'react';
import MediaCard from '../common/MediaCard';

export default function AdrianaInteraction({ member }) {
  const [activeTab, setActiveTab] = useState('todos'); // 'todos' | 'peliculas' | 'discos'
  const [recommendation, setRecommendation] = useState(null);

  const allItems = [...member.peliculas, ...member.discos];

  const filteredItems =
    activeTab === 'peliculas'
      ? member.peliculas
      : activeTab === 'discos'
      ? member.discos
      : allItems;

  const handleRandomRecommend = () => {
    const pool = filteredItems.length > 0 ? filteredItems : allItems;
    const randomIndex = Math.floor(Math.random() * pool.length);
    setRecommendation(pool[randomIndex]);
  };

  return (
    <section className="profile-interaction-card">
      <div className="interaction-header">
        <div>
          <h3>Explorador y Recomendador Multimedia</h3>
          <p style={{ margin: 0, fontSize: '0.88rem' }}>
            Alterná entre categorías de favoritos y obtené una recomendación al azar del catálogo de Adriana.
          </p>
        </div>

        <div className="filter-tabs">
          <button
            type="button"
            className={`filter-tab-btn ${activeTab === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            Todos ({allItems.length})
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeTab === 'peliculas' ? 'active' : ''}`}
            onClick={() => setActiveTab('peliculas')}
          >
            Películas ({member.peliculas.length})
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${activeTab === 'discos' ? 'active' : ''}`}
            onClick={() => setActiveTab('discos')}
          >
            Discos ({member.discos.length})
          </button>
          <button
            type="button"
            className="btn-primary"
            style={{ padding: '0.45rem 1rem', fontSize: '0.88rem' }}
            onClick={handleRandomRecommend}
          >
            🎲 Recomendar al azar
          </button>
        </div>
      </div>

      {recommendation && (
        <div className="recommendation-box">
          <p style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '0.35rem' }}>
            ✨ Recomendación seleccionada para vos:
          </p>
          <p style={{ margin: 0, color: 'var(--text-main)' }}>
            <strong>{recommendation.titulo}</strong> — {recommendation.autor} ({recommendation.tipo === 'pelicula' || recommendation.tipo === 'serie' ? 'Cine/Serie' : 'Música'})
          </p>
        </div>
      )}

      <div className="media-grid">
        {filteredItems.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
