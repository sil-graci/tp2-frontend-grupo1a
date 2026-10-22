import React, { useState } from 'react';

export default function EliasInteraction({ member }) {
  const [output, setOutput] = useState(
    'Terminal DevStudio [Versión 2.0]\nEscribí un comando o hacé clic en los botones para consultar los datos de Elías.'
  );
  const [inputVal, setInputVal] = useState('');

  const executeCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let result = '';

    switch (cleanCmd) {
      case 'skills':
      case 'habilidades':
        result = `> skills\nHabilidades técnicas de Elías:\n- ${member.habilidades.join('\n- ')}`;
        break;
      case 'peliculas':
      case 'series':
        result = `> peliculas\nPelículas y Series favoritas de Elías:\n${member.peliculas
          .map((p, i) => `${i + 1}. ${p.titulo} (${p.autor})`)
          .join('\n')}`;
        break;
      case 'discos':
      case 'musica':
        result = `> discos\nDiscos favoritos de Elías:\n${member.discos
          .map((d, i) => `${i + 1}. ${d.titulo} (${d.autor})`)
          .join('\n')}`;
        break;
      case 'frase':
        result = `> frase\nFrase destacada:\n"${member.frase}"`;
        break;
      case 'help':
      case 'ayuda':
        result = '> help\nComandos disponibles: skills | peliculas | discos | frase | clear';
        break;
      case 'clear':
      case 'cls':
        result = 'Terminal reiniciada. Comandos: skills, peliculas, discos, frase, clear.';
        break;
      default:
        result = `> ${cmd}\nComando no reconocido: "${cmd}". Escribí 'help' para ver los comandos válidos.`;
    }

    setOutput(result);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      executeCommand(inputVal);
    }
  };

  return (
    <section className="profile-interaction-card">
      <div className="interaction-header">
        <div>
          <h3>Consola de Comandos de Elías</h3>
          <p style={{ margin: 0, fontSize: '0.88rem' }}>
            Consultá interactivamente sus datos técnicos y culturales ejecutando comandos.
          </p>
        </div>
      </div>

      <div className="console-box">
        <div className="console-buttons">
          <button type="button" className="console-cmd-btn" onClick={() => executeCommand('skills')}>
            $ skills
          </button>
          <button type="button" className="console-cmd-btn" onClick={() => executeCommand('peliculas')}>
            $ peliculas
          </button>
          <button type="button" className="console-cmd-btn" onClick={() => executeCommand('discos')}>
            $ discos
          </button>
          <button type="button" className="console-cmd-btn" onClick={() => executeCommand('frase')}>
            $ frase
          </button>
          <button type="button" className="console-cmd-btn" onClick={() => executeCommand('clear')}>
            $ clear
          </button>
        </div>

        <pre className="console-output-area" tabIndex={0} aria-label="Salida de consola">
          {output}
        </pre>

        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700, alignSelf: 'center' }}>&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Escribí: skills, peliculas, discos, frase..."
            style={{
              flex: 1,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              color: 'var(--text-main)',
              padding: '0.45rem 0.65rem',
              fontFamily: 'inherit',
              fontSize: '0.88rem',
            }}
          />
          <button type="submit" className="console-cmd-btn">
            Ejecutar
          </button>
        </form>
      </div>
    </section>
  );
}
