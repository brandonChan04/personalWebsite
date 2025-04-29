import "../styling/navbar.css";
import logo from "../images/logo.png";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="Logo" onClick={() => scrollToSection("title")}/>

      <div className="sections">
        <span onClick={() => scrollToSection("projects")}>Projects</span>
        <span onClick={() => scrollToSection("experience")}>Experience</span>
        <span onClick={() => scrollToSection("contact")}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
