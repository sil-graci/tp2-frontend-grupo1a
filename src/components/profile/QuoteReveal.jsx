import { useState } from 'react';

export default function QuoteReveal({ frase }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="profile-quote-box">
      <button
        type="button"
        className="btn-primary"
        onClick={() => setVisible((v) => !v)}
        aria-expanded={visible}
      >
        {visible ? 'Ocultar frase' : 'Frase Destacada'}
      </button>
      {visible && <p>"{frase}"</p>}
    </div>
  );
}