import { useState } from 'react';
import { BITACORA } from '../data/bitacoraData';

const FILTROS = ['Todos', 'TP1', 'TP2'];

function Campo({ label, texto }) {
  if (!texto) return null;
  return (
    <p>
      <strong>{label}:</strong> {texto}
    </p>
  );
}

export default function BitacoraPage() {
  const [filtro, setFiltro] = useState('Todos');

  const visibles = BITACORA.filter((h) => filtro === 'Todos' || h.etapa === filtro);

  return (
    <div className="bitacora-page">
      <header className="page-header">
        <h1 className="page-title">Bitácora de Desarrollo</h1>
        <p>
          Registro del trabajo del equipo: qué hicimos, qué decidimos y qué dificultades resolvimos, desde el
          TP1 hasta la migración a React del TP2. Tocá cada registro para leerlo completo.
        </p>
      </header>

      <div className="bitacora-filters" role="group" aria-label="Filtrar registros por etapa">
        {FILTROS.map((f) => (
          <button
            key={f}
            type="button"
            className={`bitacora-filter-btn${filtro === f ? ' active' : ''}`}
            aria-pressed={filtro === f}
            onClick={() => setFiltro(f)}
          >
            {f === 'Todos' ? 'Todos' : f === 'TP1' ? 'TP1 · Maquetación' : 'TP2 · React'}
          </button>
        ))}
        <span className="bitacora-count">
          {visibles.length} de {BITACORA.length} registros
        </span>
      </div>

      <div className="bitacora-list">
        {visibles.map((h) => (
          <details key={h.id} className="bitacora-item">
            <summary>
              <span className="bitacora-badge">{h.etapa}</span>
              {h.titulo}
            </summary>
            <div className="bitacora-body">
              <Campo label="Decisión" texto={h.decision} />
              <Campo label="Dificultad" texto={h.dificultad} />
              <Campo label="Solución" texto={h.solucion} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}