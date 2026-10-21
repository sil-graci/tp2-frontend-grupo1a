import useFetchApi from "../hooks/useFetchApi";

const API_URL = "https://dev.to/api/articles?tag=react&per_page=9";

export default function ApiPage() {
    const { data, loading, error, refetch } = useFetchApi(API_URL);

    return (
        <div className="api-page">
            <header className="page-header">
                <h1 className="page-title">Artículos de la comunidad</h1>
                <p>
                    Esta sección consulta la API pública de <strong>Dev.to</strong>, sin
                    clave, directamente desde el navegador. Muestra artículos técnicos
                    sobre React con su título, una breve descripción y un enlace para
                    leer el artículo original en Dev.to. Son contenidos de la comunidad,
                    en su mayoría en inglés, y cambian con el tiempo.
                </p>
            </header>

            <div className="api-toolbar">
                <button
                    type="button"
                    className="btn-primary"
                    onClick={refetch}
                    disabled={loading}
                >
                    {loading ? "Actualizando…" : "↻ Actualizar"}
                </button>
            </div>

            {/* Reemplazamos temporalmente el componente externo por HTML limpio */}
            {loading && <p className="loading-text">Cargando artículos…</p>}

            {!loading && error && (
                <div className="error-box">
                    <p>Ocurrió un error: {error}</p>
                    <button onClick={refetch}>Reintentar</button>
                </div>
            )}

            {!loading && !error && data && data.length === 0 && (
                <div className="state-box">
                    <p>
                        La API respondió correctamente, pero no hay artículos para mostrar.
                    </p>
                </div>
            )}

            {/* Renderizamos los artículos en una lista básica con tarjetas en HTML */}
            {!loading && !error && data && data.length > 0 && (
                <div className="article-grid">
                    {data.map((article) => (
                        <div key={article.id} className="article-card" style={{ border: "1px solid #ccc", padding: "16px", margin: "10px 0", borderRadius: "8px" }}>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Leer artículo original →
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}