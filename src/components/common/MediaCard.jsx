import React from 'react';

export default function MediaCard({ item, actionSlot = null }) {
  if (!item) return null;

  return (
    <article className="media-card-container">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="media-card"
        aria-label={`Ver información de ${item.titulo}`}
      >
        <div className="media-card-img-wrapper">
          <img
            src={item.imagen}
            alt={`Portada o póster de ${item.titulo}`}
            className="media-card-img"
            loading="lazy"
          />
        </div>
        <div className="media-card-body">
          <h3 className="media-card-title">{item.titulo}</h3>
          <p className="media-card-author">{item.autor}</p>
          <span className="media-card-badge">{item.badge || 'Ver más ↗'}</span>
        </div>
      </a>
      {actionSlot && <div className="media-card-actions">{actionSlot}</div>}
    </article>
  );
}
