const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="nav-link">
          {link.label}
        </a>
      ))}
    </nav>
  );
}