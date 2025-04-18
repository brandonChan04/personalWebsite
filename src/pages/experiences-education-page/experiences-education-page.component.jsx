import ExperienceCompnent from "../../components/ExperienceComponent";
import profilePicture from "../../images/profile_picture.png";
import "./experiences-education-page.component.css"

const ExperienceEducationPage = () => {
    const experiences = [
        {
            company: "Excelar Technologies",
            title: "Software Developer Intern",
            date: "Sep 2024 - April 2025",
            description: "Frontend development",
            image: profilePicture,
        },
        {
            company: "Lantronix Technologies",
            title: "Developer Assistant",
            date: "June 2021 - September 2021",
            description: "description",
            image: profilePicture,
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
                        description={experience.description}
                        image={experience.image}
                    />
                ))}
            </div>
            <h2>Education</h2>
            <div className="education">
                <img src={profilePicture} alt="education" className="education-img"/>
                <h3>Simon Fraser University</h3>
                <p className="experience-description">fjekwlafj</p>
            </div>
        </div>
    )
}

export default ExperienceEducationPage;