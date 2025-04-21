import ExperienceCompnent from "../../components/ExperienceComponent";
import excelar from "../../images/excelar_logo.png";
import lantronix from "../../images/lantronix.png";
import sfu from "../../images/sfu.png";
import "./experiences-education-page.component.css"

const ExperienceEducationPage = () => {
    const experiences = [
        {
            company: "Excelar Technologies",
            title: "Software Developer Intern",
            date: "Sep 2024 - April 2025",
            descriptions: [
                "Developed Careflow, Excelars flagship application, using the Angular framework and TypeScript",
                "Processed patient and user data coming from backend APIs, configuring signal Stores, services, and selectors to streamline data flow and neatly display information",
                "Worked with the D3 framework to dynamically render patient data on Careflows real-timeupdating timeline",
                "Styled pages with SCSS, Tailwind, and DaisyUI using modern best practices"
            ],
            image: excelar,
        },
        {
            company: "Lantronix Technologies",
            title: "Developer Assistant",
            date: "June 2021 - September 2021",
            descriptions: [
                "Programmed, tested, and assembled DEV kits to be deployed to customers",
                "Soldered, crimped, and configured wires to help with various projects",
                "Collaborated in a team based setting with professional hardware and software engineers to streamline workflow"
            ],
            image: lantronix,
        }
    ]


    return (
        <div>
            <h2>Experience</h2>
            <div className="container">
                {experiences.map((experience, index) => (
                    <ExperienceCompnent
                        company={experience.company}
                        title={experience.title}
                        date={experience.date}
                        descriptions={experience.descriptions}
                        image={experience.image}
                    />
                ))}
            </div>
            <h2 className="title">Education</h2>
            <div className="education">
                <div>
                    <img src={sfu} alt="education" className="education-img"/>
                    <h3 className="education-title">Simon Fraser University</h3>
                    <span className="education-description">Expected Graduation: 2026<br/>3.92/4.33 GPA</span>
                </div>
                <div className="awards-container">
                    <div>
                        <p className="education-description">Mark and Nancy Brooks Computing Science Innovation Award<br/></p>
                        <p className="subdescription">Fall 2023</p>
                    </div>
                    <div>
                        <p className="education-description">SFU Undergraduate Open Scholarship</p>
                        <p className="subdescription">Fall 2023, Spring 2024, Summer 2024</p>
                    </div>
                    <div>
                        <p className="education-description">SFU Alumni Scholarship</p>
                        <p className="subdescription">Spring 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceEducationPage;