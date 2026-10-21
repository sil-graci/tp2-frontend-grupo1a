import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PlaceholderPage from "./pages/PlaceholderPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CatalogPage from "./pages/CatalogPage";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from './components/layout/ScrollToTop';
import ApiPage from "./pages/ApiPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="integrantes/:id" element={<ProfilePage />} />
          <Route path="proyectos" element={<CatalogPage />} />
          <Route
            path="api-externa"
            element={<ApiPage />}
          />
          <Route
            path="arbol-renderizado"
            element={
              <PlaceholderPage
                titulo="Árbol de componentes"
                descripcion="Jerarquía de componentes de la aplicación."
              />
            }
          />
          <Route
            path="bitacora"
            element={
              <PlaceholderPage
                titulo="Bitácora"
                descripcion="Registro del proceso de trabajo del equipo."
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
