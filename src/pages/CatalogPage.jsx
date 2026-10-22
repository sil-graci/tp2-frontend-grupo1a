import React, { useState, useMemo } from 'react';
import catalogoData from '../data/catalogo.json';
import SearchBar from '../components/catalog/SearchBar';
import FilterBar from '../components/catalog/FilterBar';
import CatalogCard from '../components/catalog/CatalogCard';

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  // Obtener categorías únicas dinámicamente preservando orden
  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(catalogoData.map((item) => item.categoria))
    );

    return ['Todas', ...unique];
  }, []);

  // Filtrado combinado de búsqueda por texto y categoría
  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return catalogoData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Todas' ||
        item.categoria === selectedCategory;

      if (!term) return matchesCategory;

      const matchesName = item.nombre
        .toLowerCase()
        .includes(term);

      const matchesDesc = item.descripcionCorta
        .toLowerCase()
        .includes(term);

      const matchesTags = item.etiquetas.some((tag) =>
        tag.toLowerCase().includes(term)
      );

      return (
        matchesCategory &&
        (matchesName || matchesDesc || matchesTags)
      );
    });
  }, [searchTerm, selectedCategory]);

  const hasActiveFilters =
    searchTerm.trim() !== '' ||
    selectedCategory !== 'Todas';

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('Todas');
  };

  return (
    <div className="catalog-page">
      <header className="page-header">
        <h1 className="page-title">
          Herramientas y Recursos Web
        </h1>

        <p>
          Catálogo de tecnologías, lenguajes,
          frameworks y herramientas esenciales en el
          desarrollo web moderno para la propuesta de DevStudio.
        </p>
      </header>

      <section
        className="catalog-controls-card card-box"
        aria-label="Controles de búsqueda y filtrado"
      >
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onClear={() => setSearchTerm('')}
        />

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="catalog-status-bar">
          <p
            className="catalog-counter"
            aria-live="polite"
          >
            Mostrando <strong>{filteredItems.length}</strong> de{' '}
            <strong>{catalogoData.length}</strong> registros
          </p>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary catalog-reset-btn"
              aria-label="Restablecer búsqueda y filtros a valores iniciales"
            >
              ↺ Restablecer filtros
            </button>
          )}
        </div>
      </section>

      {filteredItems.length === 0 ? (
        <section
          className="catalog-empty-card card-box"
          role="status"
          aria-live="polite"
        >
          <span
            className="catalog-empty-icon"
            aria-hidden="true"
          >
            🔎
          </span>

          <h2>No se encontraron resultados</h2>

          <p>
            No hay tecnologías que coincidan con la búsqueda actual
            {searchTerm && <span> "{searchTerm}"</span>}
            {selectedCategory !== 'Todas' && (
              <span>
                {' '}
                en la categoría "{selectedCategory}"
              </span>
            )}
            .
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="btn-primary"
            style={{ marginTop: '1rem' }}
          >
            Restablecer y ver todo el catálogo
          </button>
        </section>
      ) : (
        <section
          className="catalog-grid"
          aria-label="Listado de herramientas del catálogo"
        >
          {filteredItems.map((item) => (
            <CatalogCard
              key={item.id}
              item={item}
            />
          ))}
        </section>
      )}
    </div>
  );
}