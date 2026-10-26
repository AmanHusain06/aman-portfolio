
export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        AN<span>.</span>
      </a>

      <p>
        Designed & built by Aman Nagarwala.
      </p>

      <p>© {new Date().getFullYear()} Aman Nagarwala</p>
    </footer>
  );
}
