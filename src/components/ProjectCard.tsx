import type { Project } from "../types";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const hasGithub = Boolean(project.github);
  const hasDemo = Boolean(project.demo);

  return (
    <article className="card project-card">
      {project.image ? (
        <img
          className="project-image"
          src={project.image}
          alt={`Imagen del proyecto: ${project.title}`}
          loading="lazy"
        />
      ) : null}
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <p><strong>Tecnologias:</strong> {project.tech.join(", ")}</p>

      {(hasGithub || hasDemo) && (
        <div className="project-links">
          {hasGithub ? (
            <a
              className="btn btn-secondary"
              href={project.github!}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {hasDemo ? (
            <a
              className="btn btn-secondary"
              href={project.demo!}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}