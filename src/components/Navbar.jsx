import "../styling/navbar.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo" onClick={() => scrollToSection("title")}>Brandon</h1>

      <div className="sections">
        <span onClick={() => scrollToSection("projects")}>Projects</span>
        <span onClick={() => scrollToSection("experience")}>Experience</span>
        <span onClick={() => scrollToSection("contact")}>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
