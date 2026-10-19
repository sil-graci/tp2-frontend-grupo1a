import React from 'react';

export default function SearchBar({ searchTerm, onSearchChange, onClear }) {
  return (
    <div className="catalog-search-bar" role="search">
      <label htmlFor="catalog-search-input" className="catalog-search-label">
        Buscar por nombre, descripción o etiqueta
      </label>

      <div className="catalog-search-input-wrap">
        <span className="search-icon" aria-hidden="true">🔍</span>

        <input
          id="catalog-search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Escribí para buscar (ej.: react, estilos, git)..."
          className="catalog-search-input"
          autoComplete="off"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={onClear}
            className="catalog-search-clear-btn"
            aria-label="Limpiar campo de búsqueda"
            title="Limpiar búsqueda"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}