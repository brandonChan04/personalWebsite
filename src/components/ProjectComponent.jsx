import React from "react";
import "../styling/projectComponent.css";
import { Github, ExternalLink } from "lucide-react";

const ProjectComponent = ({ name, description, image, github, website }) => {
  return (
    <div className="project">
      <img src={image} alt={name} className="project-image" />

      <div className="project-info">
        <h2 className="project-name">{name}</h2>
        <p className="project-description">{description}</p>

        {(github || website) && (
          <div className="project-links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <Github size={20} />
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent;
