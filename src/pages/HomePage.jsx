import React, { useState } from 'react';
import { TEAM_FACTS, TEAM_MEMBERS } from '../data/teamData';
import MemberCard from '../components/common/MemberCard';


export default function HomePage() {
  const [currentFact, setCurrentFact] = useState('');

  const handleRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * TEAM_FACTS.length);
    setCurrentFact(TEAM_FACTS[randomIndex]);
  };

  return (
    <div className="home-page">
      {/* Sección Hero: Presentación y Propósito del Equipo */}
      <section id="inicio" className="hero-screen">
        <div className="hero-box">
          <div className="hero-content">
          <h1>Equipo DevStudio</h1>
          <p className="hero-description">
            Somos DevStudio, un equipo colaborativo enfocado en el desarrollo de sitios web
            modernos, claros y adaptados a cada necesidad. Combinamos diseño, experiencia
            de usuario y tecnología para ayudar a marcas, emprendedores y pequeños negocios a
            crecer en el mundo digital. En este sitio podés conocer más sobre nosotros y a cada
            integrante, sus intereses y rol dentro del equipo.
          </p>

          {/* Interacción Dinámica JS migrada a React con useState */}
          <div id="hero-interactive">
            <button
              id="btn-team-fact"
              type="button"
              className="btn-primary"
              onClick={handleRandomFact}
            >
              ¿A qué nos dedicamos?
            </button>
            <p id="team-fact-output" className="interactive-output" aria-live="polite">
              {currentFact}
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Listado e Integrantes del Equipo */}
      <section id="equipo">
        <h2 className="section-title">Integrantes del Equipo</h2>
        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>      
    </div>
  );
}
