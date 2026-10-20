export const NAV_SECTIONS = [
  {
    titulo: 'General',
    links: [
      { to: '/', texto: 'Inicio / Portada', icono: '🏠', end: true },
      { to: '/contacto', texto: 'Contacto', icono: '📬' },
    ],
  },
  {
    titulo: 'Integrantes',
    links: [
      { to: '/integrantes/adriana', texto: 'Adriana', icono: '👤', badge: 'Perfil' },
      { to: '/integrantes/elias', texto: 'Elías', icono: '👤', badge: 'Perfil' },
      { to: '/integrantes/judith', texto: 'Judith', icono: '👤', badge: 'Perfil' },
      { to: '/integrantes/magali', texto: 'Magalí', icono: '👤', badge: 'Perfil' },
      { to: '/integrantes/silvia', texto: 'Silvia', icono: '👤', badge: 'Perfil' },
    ],
  },
  {
    titulo: 'Secciones TP2',
    links: [
      { to: '/proyectos', texto: 'Datos Locales JSON', icono: '📁' },
      { to: '/api-externa', texto: 'API Pública', icono: '🌐' },
      { to: '/arbol-renderizado', texto: 'Árbol de Componentes', icono: '🌲' },
      { to: '/bitacora', texto: 'Bitácora', icono: '📖' },
    ],
  },
];
