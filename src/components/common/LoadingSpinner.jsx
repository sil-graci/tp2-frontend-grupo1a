export default function LoadingSpinner({ text = 'Cargando…' }) {
  return (
    <div className="state-box" role="status">
      <span className="spinner" aria-hidden="true"></span>
      <p>{text}</p>
    </div>
  );
}