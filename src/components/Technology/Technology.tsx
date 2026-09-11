import { technologies } from "../../data/technologies.ts";
import "./Technology.css";

function Technology() {
    return (
        <section className="technology-section">

            <h2>Technology</h2>

            <div className="technology-content">
                <div className="technology-container">
                    {technologies.map((technology) => (
                        <div
                            className="technology-card"
                            key={technology.id}
                        >
                            <img
                                src={technology.image}
                                alt={technology.name}
                            />

                            <p>{technology.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Technology;