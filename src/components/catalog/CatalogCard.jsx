import React, { useState } from 'react';
import TagList from '../common/TagList';

export default function CatalogCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!item) return null;

  const detailId = `catalog-detail-${item.id}`;

  return (
    <article className="catalog-card" aria-labelledby={`title-${item.id}`}>
      <div className="catalog-card-header">
        <span className="catalog-card-category">{item.categoria}</span>

        <h3 id={`title-${item.id}`} className="catalog-card-title">
          {item.nombre}
        </h3>
      </div>

      <p className="catalog-card-desc">{item.descripcionCorta}</p>

      <div className="catalog-card-tags">
        <TagList tags={item.etiquetas} />
      </div>

      <div className="catalog-card-footer">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className={`btn-secondary catalog-card-toggle-btn ${isExpanded ? 'active' : ''}`}
          aria-expanded={isExpanded}
          aria-controls={detailId}
        >
          {isExpanded ? 'Ver menos ▲' : 'Ver más ▼'}
        </button>
      </div>

      {isExpanded && (
        <div
          id={detailId}
          className="catalog-card-detail"
          role="region"
          aria-label={`Detalle ampliado de ${item.nombre}`}
        >
          <div className="catalog-detail-item">
            <span className="catalog-detail-label">¿Qué es?</span>
            <p className="catalog-detail-text">{item.detalle.queEs}</p>
          </div>

          <div className="catalog-detail-item">
            <span className="catalog-detail-label">¿Para qué sirve?</span>
            <p className="catalog-detail-text">{item.detalle.paraQueSirve}</p>
          </div>

          <div className="catalog-detail-item">
            <span className="catalog-detail-label">Dato útil:</span>
            <p className="catalog-detail-text">{item.detalle.datoUtil}</p>
          </div>
        </div>
      )}
    </article>
  );
}