import { technologies } from "../../data/technologies.ts";
import type { CSSProperties } from "react";
import "./Technology.css";

function Technology() {
    return (
        <section id="Technology" className="technology-section">

            <h2>Tecnologia</h2>

            <div className="technology-content">
                <div className="technology-container">
                    {technologies.map((technology) => (
                        <div
                            className="technology-card"
                            key={technology.id}
                            style={{
                                "--technology-color": technology.color
                            } as CSSProperties}
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