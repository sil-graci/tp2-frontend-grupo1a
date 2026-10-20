import React, { useState } from 'react';
import MediaCard from '../common/MediaCard';

export default function MagaliInteraction({ member }) {
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' | 'desc' | 'original'

  const allItems = [...member.peliculas, ...member.discos];

  // Filtrado por texto
  const filtered = allItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.titulo.toLowerCase().includes(q) ||
      item.autor.toLowerCase().includes(q)
    );
  });

  // Ordenamiento
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.titulo.localeCompare(b.titulo);
    }
    if (sortOrder === 'desc') {
      return b.titulo.localeCompare(a.titulo);
    }
    return 0; // 'original'
  });

  return (
    <section className="profile-interaction-card">
      <div className="interaction-header">
        <div>
          <h3>Buscador y Ordenamiento de Obras</h3>
          <p style={{ margin: 0, fontSize: '0.88rem' }}>
            Buscá por título o autor y ordená alfabéticamente el catálogo cultural de Magalí.
          </p>
        </div>
      </div>

      <div className="search-sort-controls">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar película, serie, disco o autor..."
          className="input-search-text"
          aria-label="Buscar en las obras de Magalí"
        />

        {query && (
          <button
            type="button"
            className="btn-secondary"
            style={{ padding: '0.55rem 0.85rem', fontSize: '0.85rem' }}
            onClick={() => setQuery('')}
          >
            Limpiar búsqueda
          </button>
        )}

        <label style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.88rem', fontWeight: 600 }}>
          <span>Ordenar:</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select-sort"
            aria-label="Ordenar resultados"
          >
            <option value="asc">Título (A → Z)</option>
            <option value="desc">Título (Z → A)</option>
            <option value="original">Orden Original</option>
          </select>
        </label>
      </div>

      {sorted.length === 0 ? (
        <div className="card-box" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <p style={{ margin: 0 }}>
            No se encontraron obras que coincidan con <strong>"{query}"</strong>.
          </p>
          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: '1rem', fontSize: '0.88rem' }}
            onClick={() => setQuery('')}
          >
            Restablecer búsqueda
          </button>
        </div>
      ) : (
        <div className="media-grid">
          {sorted.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
