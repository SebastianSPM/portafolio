import Button from "../../Button/Button";
import type { Project } from "../Proyects.types";
import "./Card.css";

interface ProjectCardProps {
    project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="project-card">

            <div className="project-card-image-container">
                <img
                    src={project.image}
                    alt={project.name}
                    className="project-card-image"
                />

                <a href={project.url} className="project-card-overlay">
                    <Button text="Ver proyecto" />
                </a>
            </div>

            <div className="project-card-content">

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-card-technologies">
                    {project.technologies.map(technology => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>

            </div>

        </article>
    );
}

export default ProjectCard;