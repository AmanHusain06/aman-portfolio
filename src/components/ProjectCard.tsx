
import {
  ArrowUpRight,
  GitBranch,
  ExternalLink,
  Code2,
  BrainCircuit,
  Gamepad2,
  ChartNoAxesCombined,
  Layers3,
} from "lucide-react";

import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

const projectIcons = {
  1: BrainCircuit,
  2: ChartNoAxesCombined,
  3: Layers3,
  4: Gamepad2,
  5: Code2,
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const Icon =
    projectIcons[project.id as keyof typeof projectIcons] ??
    Code2;

  return (
    <article
      className={`project-card ${
        project.featured ? "project-featured" : ""
      }`}
    >
      <div className={`project-visual visual-${project.id}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            <Icon size={54} strokeWidth={1.2} />
            <span>{project.category}</span>
          </div>
        )}

        <span
          className={`project-status ${
            project.status === "In Progress"
              ? "status-progress"
              : "status-completed"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="project-content">
        <div className="project-topline">
          <span className="project-category">
            {project.category}
          </span>
          <ArrowUpRight size={19} />
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-contribution">
          <strong>My contribution</strong>
          <p>{project.contribution}</p>
        </div>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch size={17} />
              Source Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
