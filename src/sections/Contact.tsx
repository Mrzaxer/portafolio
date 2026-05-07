import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle title="Contacto" subtitle="Contactame por:" />
      <div className="card contact-card">
        <p>Estoy disponible para oportunidades como {profile.role}.</p>
        <p>
          Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p>
          Celular: <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </p>
        <p>
          GitHub:{" "}
          <a href={profile.github} target="_blank" rel="noreferrer">
            {profile.github}
          </a>
        </p>
        {profile.linkedin ? (
          <p>
            LinkedIn:{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              {profile.linkedin}
            </a>
          </p>
        ) : null}
        <p>Ubicacion: {profile.location}</p>
      </div>
    </section>
  );
}