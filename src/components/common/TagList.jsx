import React from 'react';

export default function TagList({ tags = [], className = '' }) {
  if (!tags || tags.length === 0) return null;

  return (
    <ul className={`tag-list ${className}`} aria-label="Lista de etiquetas y habilidades">
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
}
