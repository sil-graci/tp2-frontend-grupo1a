import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app-layout">
      <main className="main-content" id="main-content">
        <div className="content-container">
          {/* Acá se muestra la página de la ruta activa */}
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}