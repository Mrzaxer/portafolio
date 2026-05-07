import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="section hero-section">
      <p className="hero-badge">Disponible para proyectos y vacantes Jr</p>
      <h1>{profile.name}</h1>
      <h2>{profile.role}</h2>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          Ver proyectos
        </a>
        <a className="btn btn-secondary" href="/cv.pdf" target="_blank" rel="noreferrer">
          Descargar CV
        </a>
      </div>
    </section>
  );
}