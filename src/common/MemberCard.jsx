import React from 'react';
import { Link } from 'react-router-dom';

export default function MemberCard({ member }) {
  if (!member) return null;

  return (
    <article className="member-card">
      <img
        src={member.avatar}
        alt={`Avatar de ${member.nombre}`}
        className="member-avatar"
        width="110"
        height="110"
        loading="lazy"
      />
      <h3>{member.nombre}</h3>
      <p className="member-role">{member.rolPortada || member.rol}</p>
      <Link to={`/integrantes/${member.id}`} className="btn-nav card-link">
        Ver Perfil →
      </Link>
    </article>
  );
}
