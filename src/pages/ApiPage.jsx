import useFetchApi from "../hooks/useFetchApi";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorAlert from "../components/common/ErrorAlert";
import ArticleCard from "../components/api/ArticleCard";

const API_URL = "https://dev.to/api/articles?tag=react&per_page=9";

export default function ApiPage() {
    const { data, loading, error, refetch } = useFetchApi(API_URL);

    return (
        <div className="api-page">
            <header className="page-header">
                <h1 className="page-title">Artículos de la comunidad</h1>
                <p>
                    Esta sección consulta la API pública de <strong>Dev.to</strong>, sin
                    clave, directamente desde el navegador. Aporta artículos técnicos
                    sobre React: título, autor, fecha, tiempo de lectura, etiquetas y
                    enlace al texto original. Son contenidos de la comunidad, en su
                    mayoría en inglés, y cambian con el tiempo.
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

            {loading && <LoadingSpinner text="Cargando artículos…" />}

            {!loading && error && <ErrorAlert message={error} onRetry={refetch} />}

            {!loading && !error && data && data.length === 0 && (
                <div className="state-box">
                    <p>
                        La API respondió correctamente, pero no hay artículos para mostrar.
                    </p>
                </div>
            )}

            {!loading && !error && data && data.length > 0 && (
                <div className="article-grid">
                    {data.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            )}
        </div>
    );
}
