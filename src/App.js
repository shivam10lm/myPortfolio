import "./styles.css";
import Header from "./Header";
import Halfintro from "./Halfintro";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Skill from "./Skill";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Halfintro />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
