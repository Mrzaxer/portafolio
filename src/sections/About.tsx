import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle title="Sobre mí" subtitle="Quién soy y qué puedo aportar" />
      <div className="card">
        <p>{profile.about}</p>
      </div>
    </section>
  );
}