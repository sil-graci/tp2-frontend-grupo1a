import React, { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Cerrar el drawer al navegar (se sincroniza durante el render)
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setIsMobileOpen(false);
  }

  return (
    <div className="app-layout">
      {/* Barra superior visible solo en móvil/tablet (< 900px) */}
      <header className="mobile-topbar">
        <Link to="/" className="mobile-brand" aria-label="Ir a portada DevStudio">
          <img
            src="/img/logo-devstudio.svg"
            alt="Logo de DevStudio"
            className="mobile-brand-logo"
            width="32"
            height="32"
          />
          <span className="mobile-brand-title">DevStudio</span>
        </Link>

        <div className="mobile-controls">
          {/* El botón de tema (Rol 5) va acá */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label={isMobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Fondo oscuro para cerrar el panel móvil al tocar afuera */}
      <div
        className={`sidebar-backdrop ${isMobileOpen ? 'active' : ''}`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      <Sidebar isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

      <main className="main-content" id="main-content">
        <div className="content-container">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}
