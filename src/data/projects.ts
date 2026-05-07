import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Sistema de Digitalizacion de Guardias - Cruz Roja Mexicana",
    description:
      "Aplicacion PWA para digitalizar formularios de inicio y fin de guardia de paramedicos, con gestion de roles, sedes y reportes diarios de consumo de ambulancias.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "PWA"],
    github: "https://github.com/Mrzaxer/Cruz-Roja-Front.git",
    demo: "https://cruz-roja-front-alpha.vercel.app/login",
  },
  {
    title: "Sistema de Gestion de Peticiones - Hospital Puerta de Hierro",
    description:
      "Sistema interno para registrar y dar seguimiento a solicitudes de diferentes areas del hospital, con base de datos en PostgreSQL, filtros por estado y reportes automatizados.",
    tech: ["Laravel", "PHP", "PostgreSQL", "JavaScript"],
    // Proyecto interno / privado: no mostramos enlaces publicos
    github: undefined,
    demo: undefined,
  },
];