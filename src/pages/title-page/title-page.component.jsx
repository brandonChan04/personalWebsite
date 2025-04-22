import "./title-page.component.css";
import profilePicture from "../../images/profile_picture.png";
import resume from "./BrandonChanResume.pdf";
import { Linkedin, Github, Newspaper } from "lucide-react";

function TitlePage() {
    return (
        <div className="title-container">
            <div>
                <h1>Hi I'm Brandon<br/>An Aspiring Developer</h1>
                <div className="nav-links">
                    <div className="icon-wrapper">
                        <a href="https://www.linkedin.com/in/brandon-chan-a10831165/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="icon" />
                        </a>
                        <span className="tooltip">LinkedIn</span>
                    </div>
                    <div className="icon-wrapper">
                        <a href="https://github.com/brandonChan04" target="_blank" rel="noopener noreferrer">
                            <Github className="icon" />
                        </a>
                        <span className="tooltip">GitHub</span>
                    </div>
                    <div className="icon-wrapper">
                        <a href={resume} download="BrandonChanResume.pdf" target="_blank" rel="noopener noreferrer">
                            <Newspaper className="icon" />
                        </a>
                        <span className="tooltip">Resume</span>
                    </div>
                </div>
            </div>
            <div>
                <img src={profilePicture} alt="Profile" className="profile-image" />
            </div>
        </div>
    )
}

export default TitlePage;