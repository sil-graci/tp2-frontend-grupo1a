import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceholderPage titulo="Portada" descripcion="Presentación del equipo DevStudio." />} />
        <Route path="integrantes/:id" element={<PlaceholderPage titulo="Perfil" descripcion="Perfil de cada integrante." />} />
        <Route path="proyectos" element={<PlaceholderPage titulo="Datos locales JSON" descripcion="Catálogo con búsqueda y filtro." />} />
        <Route path="api-externa" element={<PlaceholderPage titulo="API pública" descripcion="Datos obtenidos desde una API externa." />} />
        <Route path="arbol-renderizado" element={<PlaceholderPage titulo="Árbol de componentes" descripcion="Jerarquía de componentes de la aplicación." />} />
        <Route path="bitacora" element={<PlaceholderPage titulo="Bitácora" descripcion="Registro del proceso de trabajo del equipo." />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}