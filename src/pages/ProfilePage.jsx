import React from "react";
import { useParams, Link } from "react-router-dom";
import { TEAM_MEMBERS } from "../data/teamData";
import TagList from "../components/common/TagList";
import MediaCard from "../components/common/MediaCard";
import NotFoundPage from "./NotFoundPage";

import AdrianaInteraction from "../components/profile/AdrianaInteraction";
import EliasInteraction from "../components/profile/EliasInteraction";
import JudithInteraction from "../components/profile/JudithInteraction";
import MagaliInteraction from "../components/profile/MagaliInteraction";
import SilviaInteraction from "../components/profile/SilviaInteraction";
import QuoteReveal from "../components/profile/QuoteReveal";

export default function ProfilePage() {
  const { id } = useParams();
  const memberIndex = TEAM_MEMBERS.findIndex((m) => m.id === id);

  // Si el id no existe en los registros, mostrar la vista 404
  if (memberIndex === -1) {
    return <NotFoundPage />;
  }

  const member = TEAM_MEMBERS[memberIndex];

  // Cálculo de integrante anterior y siguiente para navegación circular
  const prevMember =
    TEAM_MEMBERS[(memberIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length];
  const nextMember = TEAM_MEMBERS[(memberIndex + 1) % TEAM_MEMBERS.length];

  // Renderizado dinámico de la interacción personalizada según el integrante
  const renderCustomInteraction = () => {
    switch (member.id) {
      case "adriana":
        return <AdrianaInteraction member={member} />;
      case "elias":
        return <EliasInteraction member={member} />;
      case "judith":
        return <JudithInteraction member={member} />;
      case "magali":
        return <MagaliInteraction member={member} />;
      case "silvia":
        return <SilviaInteraction member={member} />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-layout">
        {/* Sidebar / Columna de Identificación del Integrante */}
        <aside className="profile-sidebar">
          <img
            src={member.avatar}
            alt={`Foto o avatar de ${member.nombre}`}
            className="member-avatar profile-avatar-lg"
          />
          <h1 className="profile-name">{member.nombre}</h1>
          <p className="profile-location">{member.ubicacion}</p>
          <p className="profile-age">
            <strong>Edad:</strong> {member.edad}
          </p>
          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--accent)",
              fontWeight: 600,
            }}
          >
            {member.rol}
          </p>

          <QuoteReveal key={member.id} frase={member.frase} />
        </aside>

        {/* Contenido Detallado del Perfil */}
        <section className="profile-content">
          {/* Habilidades Principales */}
          <article className="card-box">
            <h2>Habilidades Principales</h2>
            <TagList tags={member.habilidades} />
          </article>

          {/* Interacción Funcional Específica del Integrante */}
          {renderCustomInteraction()}

          {/* Películas y Series Favoritas */}
          <article className="card-box">
            <h2>Películas y Series Favoritas</h2>
            <div className="media-grid">
              {member.peliculas.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </article>

          {/* Discos Favoritos */}
          <article className="card-box">
            <h2>Discos Favoritos</h2>
            <div className="media-grid">
              {member.discos.map((item) => (
                <MediaCard key={item.id} item={item} />
              ))}
            </div>
          </article>

          {/* Navegación Interna Circular entre Perfiles */}
          <nav
            className="profile-pagination"
            aria-label="Navegación secuencial entre integrantes"
          >
            <Link
              to={`/integrantes/${prevMember.id}`}
              className="btn-nav pagination-btn"
            >
              ← Anterior ({prevMember.nombreCorto})
            </Link>
            <Link to="/" className="btn-nav pagination-btn">
              🏠 Portada del Equipo
            </Link>
            <Link
              to={`/integrantes/${nextMember.id}`}
              className="btn-nav pagination-btn btn-primary"
            >
              Siguiente ({nextMember.nombreCorto}) →
            </Link>
          </nav>
        </section>
      </div>
    </div>
  );
}
