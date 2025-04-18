import "../styling/experienceComponent.css";


const ExperienceCompnent = ({ company, title, date, description, image }) => {
    return (
        <div className="experience">
            <img src={image} alt={company} className="experience-img"/>
            <div className="experience-info">
                <h3>{company}</h3>
                <p className="experience-description">{description}</p>
            </div>
        </div>
    )
}

export default ExperienceCompnent;