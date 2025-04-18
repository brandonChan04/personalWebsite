import "./app.css"
import TitlePage from "./pages/title-page/title-page.component";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/projects-page/projects-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";
import ExperienceEducationPage from "./pages/experiences-education-page/experiences-education-page.component";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content-container">
        <div id="title">
          <TitlePage />
        </div>
        <div id="projects">
          <ProjectsPage />
        </div>
        <div id="experience">
          <ExperienceEducationPage />
        </div>
        <div id="contact">
          <ContactPage />
        </div>
      </div>
    </div>
  );
}

export default App;