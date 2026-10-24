import TagList from "../common/TagList";

export default function ArticleCard({ article }) {
  const {
    title,
    url,
    cover_image: cover,
    user,
    readable_publish_date: fecha,
    reading_time_minutes: minutos,
    tag_list: tags,
  } = article;

  const etiquetas = Array.isArray(tags)
    ? tags
    : String(tags || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

  return (
    <article className="article-card">
      {cover ? (
        <img src={cover} alt="" className="article-cover" loading="lazy" />
      ) : (
        <div className="article-cover article-cover-empty" aria-hidden="true">
          <img src="/img/logo-devstudio.svg" alt="" width="64" height="64" />
        </div>
      )}
      <div className="article-body">
        <h3>{title}</h3>
        <p className="article-meta">
          {user?.name || "Autor sin nombre"} · {fecha} · {minutos} min de
          lectura
        </p>
        <TagList tags={etiquetas} />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-nav"
        >
          Leer artículo →
        </a>
      </div>
    </article>
  );
}
