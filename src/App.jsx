import Title from "./components/Title";
import "./app.css"
import TitlePage from "./pages/title-page/title-page.component";
import Navbar from "./components/Navbar";
import ProjectsPage from "./pages/projects-page/projects-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content-container">
        <TitlePage/>
        <ProjectsPage/>
        <ContactPage/>
      </div>
    </div>
  );
}

export default App;