import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle({ showLabel = false, className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-btn ${className}`}
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      aria-pressed={isDark}
      title={`Modo actual: ${isDark ? 'Oscuro' : 'Claro'}`}
    >
      <span className="theme-icon" aria-hidden="true">{isDark ? '☀' : '☾'}</span>
      {showLabel && (
        <span className="theme-text">{isDark ? 'Modo claro' : 'Modo oscuro'}</span>
      )}
    </button>
  );
}
