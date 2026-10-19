import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La dirección a la que intentás acceder no existe en la aplicación.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}