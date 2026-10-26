
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />

        <section className="section" id="about">
          <p className="eyebrow">01 / ABOUT ME</p>
          <h2>Get to know me.</h2>

          <p>
            I'm a final-year Computer Science student at
            Queen Mary University of London, graduating in 2027.
            I enjoy developing software, exploring machine learning,
            and solving real-world problems with technology.
          </p>
        </section>

        <Projects />

        <Skills />

        <Experience />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
