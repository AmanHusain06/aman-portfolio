
import {
  ArrowUpRight,
  Download,
  Mail,
  GitBranch,
} from "lucide-react";

// Replace with your real details before publishing.
const EMAIL = "";
const LINKEDIN_URL = "";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-container">
        <p className="eyebrow">05 / GET IN TOUCH</p>

        <h2>
          Have something in mind?
          <br />
          <span className="gradient-text">
            Let's connect.
          </span>
        </h2>

        <p className="contact-description">
          I'm a final-year Computer Science student graduating
          in 2027, interested in graduate opportunities across
          software engineering, data science and artificial
          intelligence.
        </p>

        <div className="contact-actions">
          {EMAIL && (
            <a
              href={`mailto:${EMAIL}`}
              className="button primary"
            >
              <Mail size={18} />
              Email Me
              <ArrowUpRight size={17} />
            </a>
          )}

          <a
            href="/Aman_Nagarwala_CV.pdf"
            className="button secondary"
            download
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="contact-socials">
          <a
            href="https://github.com/AmanHusain06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch size={20} />
            GitHub
            <ArrowUpRight size={16} />
          </a>

          {LINKEDIN_URL && (
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={20} />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
