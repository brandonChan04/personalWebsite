import React from "react";
import ProjectComponent from "../../components/ProjectComponent";
import profilePicture from "../../images/profile_picture.png";
import factoryEscape from "../../images/factory_escape.png";
import website from "../../images/p_website.png";
import recordKeeper from "../../images/record_keeper.png";
import typle from "../../images/typle.png";
import paytrack from "../../images/paytrack.png";
import "./projects-page.component.css"

const ProjectsPage = () => {
  const projectList = [
    {
      name: "Paytrack",
      description: "Paytrack is a simple but powerful web application that allows users to track their outgoing invoices. Using VueJS and Firebase, Paytrack allows users to create, edit, and delete invoices sending them to their clients and allowing for easy tracking of payments.",
      image: paytrack,
      github: "https://github.com/brandonChan04/paytrack",
      website: "https://paytrack-sable.vercel.app/",
      tags: [
        'VueJS',
        'Vite',
        'Firebase',
      ]
    },
    {
      name: "Typle",
      description: "Typle is an multithreaded online multiplayer web applicaiton. Using the MERN stack it allows users to track progression through levels and challenges. Typle also allows for real time online multiplayer battles using Socket.io",
      image: typle,
      github: "https://github.com/brandonChan04/typleFrontend",
      website: "https://typle-frontend-v2.vercel.app/",
      tags: [
        'React',
        'MongoDB',
        'ExpressJS',
        'NodeJS',
        'Socket.IOs '
      ]
    },
    {
      name: "Factory Escape",
      description: "Factory Escape is a simple Java game where players attempt to escape a guarded factory. Collect keys and coins while avoiding guards and other dangerous obstacles!",
      image: factoryEscape,
      github: "https://github.com/brandonChan04/factoryEscape",
      tags: [
        'Java',
        'JavaScript',
        'CSS',
        'HTML'
      ]
    },
    {
      name: "Record Keeper App",
      description: "A simple record keeper app used to keep track of game performances. Built using Android studio.",
      image: recordKeeper,
      github: "https://github.com/brandonChan04/recordKeeper",
      tags: [
        'Kotlin',
        'XML',
        'JavaScript',
      ]
    },
    {
      name: "Personal Website",
      description: "A simple website used to display my other projects. Built with React",
      image: website,
      github: "https://github.com/brandonChan04/personalWebsite",
      tags: [
        'React',
      ]
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
