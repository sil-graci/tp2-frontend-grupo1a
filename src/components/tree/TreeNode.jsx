import { useState } from 'react';

export default function TreeNode({ node, level = 0, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  const tieneHijos = Array.isArray(node.hijos) && node.hijos.length > 0;

  return (
    <li className="tree-item">
      <div className="tree-row">
        {tieneHijos ? (
          <button
            type="button"
            className="tree-toggle"
            aria-expanded={open}
            aria-label={`${open ? 'Contraer' : 'Expandir'} ${node.nombre}`}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '−' : '+'}
          </button>
        ) : (
          <span className="tree-leaf" aria-hidden="true">•</span>
        )}
        <div className="tree-info">
          <code className="tree-name">&lt;{node.nombre} /&gt;</code>
          {node.ruta && <span className="tree-route">{node.ruta}</span>}
          {node.props && <span className="tree-props">props: {node.props}</span>}
          <p className="tree-file">{node.archivo}</p>
          {node.nota && <p className="tree-note">{node.nota}</p>}
        </div>
      </div>

      {tieneHijos && open && (
        <ul className="tree-children">
          {node.hijos.map((hijo, i) => (
            <TreeNode
              key={`${hijo.nombre}-${i}`}
              node={hijo}
              level={level + 1}
              defaultOpen={defaultOpen && level + 1 < 99}
            />
          ))}
        </ul>
      )}
    </li>
  );
}