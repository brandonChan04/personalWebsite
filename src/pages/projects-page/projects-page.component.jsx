import React from "react";
import ProjectComponent from "../../components/ProjectComponent";
import "./projects-page.component.css"

const ProjectsPage = () => {
  const projectList = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio website built with React and CSS.",
      image: "/images/portfolio.png",
    },
    {
      name: "Weather App",
      description: "A weather forecasting app using OpenWeather API.",
      image: "/images/weather-app.png",
    },
    {
      name: "Task Manager",
      description: "A simple task management app with drag-and-drop features.",
      image: "/images/task-manager.png",
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
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
