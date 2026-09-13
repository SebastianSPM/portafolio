import { projects } from "./../../data/proyects";
import ProjectCard from "./Card/Card";
import "./Proyects.css";

function Proyects() {
    return (
        <section id="Proyects" className="projects-section">

            <h2>Proyectos</h2>

            <div className="projects-container">

                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}

            </div>

        </section>
    );
}

export default Proyects;