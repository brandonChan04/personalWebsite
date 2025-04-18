import React from "react";
import ProjectComponent from "../../components/ProjectComponent";
import profilePicture from "../../images/profile_picture.png";
import "./projects-page.component.css"

const ProjectsPage = () => {
  const projectList = [
    {
      name: "Typle",
      description: "A personal portfolio website built with React and CSS.",
      image: profilePicture,
      github: "https://github.com/",
      website: "https://github.com/",
      tags: [
        'React',
        'MongoDB',
        'ExpressJS',
        'RabbitMQ'
      ]
    },
    {
      name: "Factory Escape Game",
      description: "A weather forecasting app using OpenWeather API.",
      image: profilePicture,
      github: "https://github.com/",
    },
    {
      name: "Record Keeper App",
      description: "A simple task management app with drag-and-drop features.",
      image: profilePicture,
      website: "https://github.com/",
    },
    {
      name: "Personal Website",
      description: "A simple task management app with drag-and-drop features.",
      image: "../../images/profile_picture.png",
      website: "https://github.com/",
    },
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectComponent
            key={index}
            name={project.name}
            description={project.description}
            image={project.image}
            github={project.github}
            website={project.website}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
