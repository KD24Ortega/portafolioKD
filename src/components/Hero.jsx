import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="inicio" className="hero section">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Hola, soy</p>
          <h1>{personal.name}</h1>
          <h2>{personal.role}</h2>
          <p className="hero-text">{personal.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Ver proyectos</a>
            <a className="btn btn-secondary" href={personal.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-card">
          <img src="/profile.jpg" alt="Foto de perfil" />
          <div className="hero-card-info">
            <p>{personal.location}</p>
            <a href={`mailto:${personal.email}`}>{personal.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}