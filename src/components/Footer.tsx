import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()}. Todos los derechos reservados.
      </p>
    </footer>
  );
}