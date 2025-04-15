import React from "react";
import ProjectComponent from "../../components/ProjectComponent";
import "./projects-page.component.css"

const ProjectsPage = () => {
  const projectList = [
    {
      name: "Typle",
      description: "A personal portfolio website built with React and CSS.",
      image: "/images/portfolio.png",
      github: "https://github.com/",
      website: "https://github.com/",
    },
    {
      name: "Factory Escape Game",
      description: "A weather forecasting app using OpenWeather API.",
      image: "/images/weather-app.png",
      github: "https://github.com/",
    },
    {
      name: "Record Keeper App",
      description: "A simple task management app with drag-and-drop features.",
      image: "/images/task-manager.png",
      website: "https://github.com/",
    },
    {
      name: "Personal Website",
      description: "A simple task management app with drag-and-drop features.",
      image: "/images/task-manager.png",
      website: "https://github.com/",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectComponent
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            github={project.github}
            website={project.website}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
