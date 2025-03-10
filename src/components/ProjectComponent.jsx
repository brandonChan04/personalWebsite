import React from "react";
import "../styling/projectComponent.css";

const ProjectComponent = ({ name, description, image }) => {
  return (
    <div className="project">
      <img src={image} alt={name} className="project-image" />

      <div className="project-info">
        <h2 className="project-name">{name}</h2>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectComponent;
