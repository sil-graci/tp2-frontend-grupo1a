export default function ErrorAlert({ message, onRetry }) {
  return (
    <div className="state-box state-box-error" role="alert">
      <p>
        <strong>No pudimos cargar los datos.</strong> Revisá tu conexión e intentá de nuevo.
      </p>
      {message && <p className="state-detail">Detalle: {message}</p>}
      {onRetry && (
        <button type="button" className="btn-primary" onClick={onRetry}>
          Reintentar
        </button>
      )}
    </div>
  );
}