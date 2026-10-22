import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_SECTIONS } from '../../data/navLinks';
import ThemeToggle from '../common/ThemeToggle';

export default function Sidebar({ isOpen, onClose }) {
  // Cerrar el panel móvil con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <aside
      className={`app-sidebar ${isOpen ? 'open' : ''}`}
      aria-label="Menú principal de navegación"
    >
      {/* Identidad del equipo */}
      <div className="sidebar-header">
        <NavLink to="/" className="sidebar-brand" onClick={onClose} aria-label="Ir a la portada de DevStudio">
          <img
            src="/img/logo-devstudio.svg"
            alt="Logo de DevStudio"
            className="sidebar-brand-logo"
            width="36"
            height="36"
          />
          <div className="sidebar-brand-text">
            <span className="sidebar-brand-title">DevStudio</span>
            <span className="sidebar-brand-subtitle">TP2 · React</span>
          </div>
        </NavLink>

        <button
          type="button"
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Cerrar menú de navegación"
        >
          ✕
        </button>
      </div>

      {/* Enlaces: salen de src/data/navLinks.js */}
      <nav className="sidebar-nav">
        {NAV_SECTIONS.map((section) => (
          <div className="nav-section" key={section.titulo}>
            <span className="nav-section-title">{section.titulo}</span>
            <ul className="nav-list">
              {section.links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                    onClick={onClose}
                  >
                    <span className="nav-icon" aria-hidden="true">{link.icono}</span>
                    <span className="nav-text">{link.texto}</span>
                    {link.badge && <span className="nav-badge">{link.badge}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="theme-toggle-row">
          <span className="theme-label">Apariencia</span>
          <ThemeToggle showLabel />
        </div>
        <p className="sidebar-copy">© 2026 DevStudio · Grupo 1A</p>
      </div>
    </aside>
  );
}
