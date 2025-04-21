import "../styling/experienceComponent.css";


const ExperienceCompnent = ({ company, title, date, descriptions, image }) => {
    return (
        <div className="experience">
            <img src={image} alt={company} className="experience-img"/>
            <div className="experience-info">
                <h3>{company}</h3>
                <div className="date-title">
                    <h4>{title}</h4>
                    <h5>{date}</h5>
                </div>
                {descriptions && descriptions.length > 0 && (
                    <div className="experience-deatils">
                        {descriptions.map((description, index) => (
                            <span className="details" key={index}>• {description}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExperienceCompnent;