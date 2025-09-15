import ExperienceCompnent from "../../components/ExperienceComponent";
import excelar from "../../images/excelar.png";
import lantronix from "../../images/lantronix.png";
import sfu from "../../images/sfu.png";
import canAI from "../../images/canAI.png";
import "./experiences-education-page.component.css"

const ExperienceEducationPage = () => {
    const experiences = [
        {
            company: "CanAI Garage - Public Services and Procurement Canada",
            title: "Machine Learning Software Engineer Intern",
            date: "Sep 2025 - Dec 2025",
            descriptions: [],
            image: canAI,
        },
        {
            company: "Excelar Technologies",
            title: "Software Developer Intern",
            date: "Sep 2024 - Apr 2025",
            descriptions: [
                "Redesigned the visualization of Careflow datasets utilizing CDK and TanStack libraries, optimizing load times by 75%",
                "Developed and implemented a virtualization algorithm for displaying AI marketplace models using Angular, PostgreSQL and AWS S3 deploying features with Jenkins, creating an application similar to HuggingFace",
                "Developed and deployed redesigned Careflow  timeline implementing D3 JS framework reducing scrolling latency by 50%",
                "Designed and implemented tools API client streamlining all front-end API calls, reducing memory allocation and storage by 25%",
                // "Constructed and implemented styling presets, templates, directives, and guidelines product-wide using Tailwind and DaisyUI reducing development time by 20%"
            ],
            image: excelar,
        },
        {
            company: "Lantronix Technologies",
            title: "Junior Programmer",
            date: "Jun 2021 - Sep 2021",
            descriptions: [
                "Wrote and implemented Python scripts for training Open-Q Development Kits, streamlining the implementation process and reducing pairing times by 50%",
                "Developed and executed test scripts to verify the functionality and performance of factory-produced Open-Q Development Kits, eliminating manual testing and reducing test time by 95%",
                "Assembled and configured Open-Q Development Kits and TOGG computational infrastructure, including soldering and crimping"
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