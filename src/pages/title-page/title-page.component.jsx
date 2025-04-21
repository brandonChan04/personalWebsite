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
                    <a href="https://www.linkedin.com/in/brandon-chan-a10831165/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="icon" />
                    </a>
                    <a href="https://github.com/brandonChan04" target="_blank" rel="noopener noreferrer">
                        <Github className="icon" />
                    </a>
                    <a href={resume} download="BrandonChanResume.pdf" target="_blank" rel="noopener noreferrer">
                        <Newspaper className="icon" />
                    </a>
                </div>
            </div>
            <div>
                <img src={profilePicture} alt="Profile" className="profile-image" />
            </div>
        </div>
    )
}

export default TitlePage;