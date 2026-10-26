
import {
  Code2,
  PanelsTopLeft,
  Server,
  Database,
  BrainCircuit,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "C#"],
  },
  {
    title: "Frontend Development",
    icon: PanelsTopLeft,
    skills: ["React", "HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQLite", "SQL"],
  },
  {
    title: "AI & Data Science",
    icon: BrainCircuit,
    skills: ["Machine Learning", "Data Processing", "NLP"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Unity", "Linux"],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <p className="eyebrow">03 / TECHNICAL SKILLS</p>
      <h2>My toolkit<span>.</span></h2>

      <p className="section-description">
        Technologies I've used across university coursework,
        personal projects and collaborative development.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <article className="skill-card" key={group.title}>
              <div className="skill-heading">
                <Icon size={21} />
                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
