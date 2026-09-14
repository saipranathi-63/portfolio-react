import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectCard({
    id,
    title,
    description,
    techStack,
    image,
    link
}) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <article className="project-card">
            {image && (
                <img
                    src={image}
                    alt={`${title} project`}
                />
            )}

            <h3 className="project-title">{title}</h3>

            <p className="project-description">
                {description}
            </p>

            {showDetails && (
                <div className="project-details">
                    <p>
                        <strong>Tech Stack:</strong>{" "}
                        {techStack.join(", ")}
                    </p>

                    {link !== "#" && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Project Link
                        </a>
                    )}
                </div>
            )}

            <button
                className="primary-btn"
                onClick={() =>
                    setShowDetails(!showDetails)
                }
            >
                {showDetails
                    ? "HIDE DETAILS"
                    : "VIEW DETAILS"}
            </button>

            <Link to={`/projects/${id}`}>
                <button className="secondary-btn">
                    OPEN PROJECT
                </button>
            </Link>
        </article>
    );
}

export default ProjectCard;