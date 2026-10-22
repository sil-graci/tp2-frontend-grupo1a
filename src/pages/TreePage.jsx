import { useState } from 'react';
import { COMPONENT_TREE } from '../data/componentTreeData';
import TreeNode from '../components/tree/TreeNode';

export default function TreePage() {
  // "version" fuerza a redibujar el árbol para aplicar Expandir todo / Contraer todo
  const [estado, setEstado] = useState({ abierto: false, version: 0 });

  const aplicar = (abierto) => setEstado((s) => ({ abierto, version: s.version + 1 }));

  return (
    <div className="tree-page">
      <header className="page-header">
        <h1 className="page-title">Árbol de renderizado</h1>
        <p>
          Jerarquía real de componentes de la aplicación: quién contiene a quién. Tocá el + de cada
          componente para ver sus hijos, en qué archivo está y qué props recibe. Los componentes que se
          repiten (como MediaCard o TagList) se reutilizan con distintos datos.
        </p>
      </header>

      <div className="tree-toolbar">
        <button type="button" className="btn-primary" onClick={() => aplicar(true)}>
          Expandir todo
        </button>
        <button type="button" className="btn-secondary" onClick={() => aplicar(false)}>
          Contraer todo
        </button>
      </div>

      <div className="tree-wrapper">
        <ul className="tree-root">
          <TreeNode
            key={estado.version}
            node={COMPONENT_TREE}
            defaultOpen={estado.abierto}
          />
        </ul>
      </div>
    </div>
  );
}
