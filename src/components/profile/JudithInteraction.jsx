import React, { useState } from 'react';
import MediaCard from '../common/MediaCard';

export default function JudithInteraction({ member }) {
  // Arranca sin favoritos; el visitante elige los suyos.
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  const allItems = [...member.peliculas, ...member.discos];

  const toggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const displayedItems = onlyFavorites
    ? allItems.filter((item) => favoriteIds.includes(item.id))
    : allItems;

  return (
    <section className="profile-interaction-card">
      <div className="interaction-header">
        <div>
          <h3>Gestor de Favoritos de Judith</h3>
          <p style={{ margin: 0, fontSize: '0.88rem' }}>
            Marcá o desmarcá obras destacadas y filtrá para ver tu selección personalizada.
          </p>
        </div>

        <div className="filter-tabs">
          <button
            type="button"
            className={`filter-tab-btn ${!onlyFavorites ? 'active' : ''}`}
            onClick={() => setOnlyFavorites(false)}
          >
            Ver Todas ({allItems.length})
          </button>
          <button
            type="button"
            className={`filter-tab-btn ${onlyFavorites ? 'active' : ''}`}
            onClick={() => setOnlyFavorites(true)}
          >
            ⭐ Solo Favoritos ({favoriteIds.length})
          </button>
        </div>
      </div>

      {onlyFavorites && displayedItems.length === 0 ? (
        <div className="card-box" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <p style={{ margin: 0 }}>
            No tenés obras marcadas como favoritas actualmente.
            <br />
            Hacé clic en <strong>"Ver Todas"</strong> y presioná el botón ⭐ en las tarjetas que quieras destacar.
          </p>
        </div>
      ) : (
        <div className="media-grid">
          {displayedItems.map((item) => {
            const isFav = favoriteIds.includes(item.id);
            return (
              <MediaCard
                key={item.id}
                item={item}
                actionSlot={
                  <button
                    type="button"
                    className={`fav-toggle-btn ${isFav ? 'is-fav' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(item.id);
                    }}
                    aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                  >
                    <span>{isFav ? '❤️ Guardado' : '🤍 Favorito'}</span>
                  </button>
                }
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
