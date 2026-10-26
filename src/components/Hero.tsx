
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Database,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-content">
        <div className="status-pill">
          <span className="status-dot" />
          Computer Science · Class of 2027
        </div>

        <p className="eyebrow hero-eyebrow">
          HELLO, I'M AMAN NAGARWALA
        </p>

        <h1>
          Turning ideas into
          <br />
          <span className="gradient-text">
            real-world software.
          </span>
        </h1>

        <p className="hero-description">
          I'm a final-year Computer Science student at
          Queen Mary University of London, passionate about
          software engineering, artificial intelligence
          and data-driven applications.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button primary">
            Explore My Work
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="button secondary">
            Get In Touch
          </a>
        </div>

        <div className="hero-highlights">
          <div className="highlight-item">
            <Code2 size={19} />
            <span>Software Engineering</span>
          </div>

          <div className="highlight-item">
            <BrainCircuit size={19} />
            <span>Artificial Intelligence</span>
          </div>

          <div className="highlight-item">
            <Database size={19} />
            <span>Data Science</span>
          </div>
        </div>

        <div className="hero-bottom">
          <a href="#about" className="scroll-indicator">
            <ArrowDown size={17} />
            Scroll to explore
          </a>

          <div className="hero-socials">
            <a href="#contact">
              GitHub <ExternalLink size={14} />
            </a>
            <a href="#contact">
              LinkedIn <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
