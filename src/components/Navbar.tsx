
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="logo" href="#home" onClick={() => setMenuOpen(false)}>
        AN<span>.</span>
      </a>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          className="nav-contact"
          onClick={() => setMenuOpen(false)}
        >
          Let's Talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <button
        className="mobile-menu-button"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
