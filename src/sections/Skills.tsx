import SectionTitle from "../components/SectionTitle";

const skills = {
  lenguajes: ["Java", "Python", "JavaScript", "TypeScript", "PHP", "Kotlin", "SQL"],
  frameworks: ["React", "Express.js", "Node.js", "Laravel"],
  basesDeDatos: ["PostgreSQL", "MongoDB"],
  herramientas: ["Git", "GitHub", "Postman", "Figma", "Android Studio", "Scrum"],
  blandas: [
    "Trabajo en equipo",
    "Comunicacion efectiva",
    "Responsable",
    "Organizado",
    "Aprendizaje continuo",
    "Adaptabilidad",
    "Proactivo",
    "Creativo",
    "Enfoque en resultados",
  ],
  idiomas: ["Ingles intermedio-avanzado (B2)", "Español: Nativo"],
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="Habilidades" subtitle="Stack tecnico y fortalezas profesionales" />
      <div className="skills-grid">
        <div className="card">
          <h3>Lenguajes</h3>
          <p>{skills.lenguajes.join(", ")}</p>
        </div>
        <div className="card">
          <h3>Frameworks</h3>
          <p>{skills.frameworks.join(", ")}</p>
        </div>
        <div className="card">
          <h3>Bases de datos</h3>
          <p>{skills.basesDeDatos.join(", ")}</p>
        </div>
        <div className="card">
          <h3>Herramientas</h3>
          <p>{skills.herramientas.join(", ")}</p>
        </div>
      </div>
      <div className="card soft-skills">
        <h3>Habilidades blandas</h3>
        <p>{skills.blandas.join(" - ")}</p>
      </div>
    </section>
  );
}