import React from 'react';

export default function FilterBar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="catalog-filter-bar" role="group" aria-label="Filtro por categoría de tecnologías">
      <span className="catalog-filter-label" id="filter-group-label">
        Categoría:
      </span>

      <div className="catalog-filter-pills" aria-labelledby="filter-group-label">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`catalog-filter-pill ${isSelected ? 'active' : ''}`}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}