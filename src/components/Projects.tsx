
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2>Things I've built<span>.</span></h2>
        </div>

        <p className="section-intro">
          A collection of projects exploring software engineering,
          artificial intelligence, financial technology and
          interactive applications.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
