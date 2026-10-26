
import { BriefcaseBusiness, GraduationCap } from "lucide-react";


const experiences = [
  {
    title: "BSc Computer Science",
    organisation: "Queen Mary University of London",
    period: "2024 – 2027",
    type: "education",
    description:
      "Final-year Computer Science student studying software " +
      "engineering, algorithms, databases, data mining, big data " +
      "processing and distributed systems. Developing an " +
      "AI-assisted paper trading and strategy evaluation platform " +
      "for my final-year project.",
  },
  {
    title: "Technology Division Summer School",
    organisation: "J.P. Morgan",
    period: "August 2023",
    type: "work",
    description:
      "Participated in a technology-focused summer programme, " +
      "gaining exposure to technology careers and the application " +
      "of digital systems within financial services.",
  },
  {
    title: "Insurance Intern",
    organisation: "McGill & Partners",
    period: "May – June 2023",
    type: "work",
    description:
      "Completed an internship in the insurance industry, " +
      "working alongside a facultative broker and gaining " +
      "exposure to commercial insurance operations and " +
      "professional financial services.",
  },
  {
    title: "Computing Intern",
    organisation: "SAR Computing",
    period: "April – May 2023",
    type: "work",
    description:
      "Completed a computing internship, gaining experience " +
      "in a professional technology environment.",
  },
];


export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <p className="eyebrow">04 / EXPERIENCE & EDUCATION</p>
      <h2>My journey<span>.</span></h2>

      <p className="section-description">
        Academic development, technical experience
        and exposure to the technology industry.
      </p>

      <div className="experience-timeline">
        {experiences.map((item) => {
          const Icon =
            item.type === "education"
              ? GraduationCap
              : BriefcaseBusiness;

          return (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-icon">
                <Icon size={19} />
              </div>

              <div className="timeline-content">
                <span className="timeline-period">
                  {item.period}
                </span>

                <h3>{item.title}</h3>

                <p className="timeline-organisation">
                  {item.organisation}
                </p>

                <p className="timeline-description">
                  {item.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
