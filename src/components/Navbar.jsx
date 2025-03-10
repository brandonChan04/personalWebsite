import { useState } from "react";
import "../styling/navbar.css"; // Import the CSS file
import { Linkedin, Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Brandon</h1>

      <div className="nav-links">
        <a href="https://www.linkedin.com/in/brandon-chan-a10831165/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="icon" />
        </a>
        <a href="https://github.com/brandonChan04" target="_blank" rel="noopener noreferrer">
          <Github className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
