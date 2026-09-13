//import { technologies } from "../../data/technologies.ts";
import "./Technology.css";

import html from "../../assets/Tech/html.webp";
import css from "../../assets/Tech/css.svg";
import javascript from "../../assets/Tech/js.png";
import react from "../../assets/Tech/react.svg";
import node from "../../assets/Tech/node.svg";
import python from "../../assets/Tech/python.svg";
import java from "../../assets/Tech/java.svg";
import bootstrap from "../../assets/Tech/bootstrap.svg";
import nextjs from "../../assets/Tech/nextjs.svg";
import springBoot from "../../assets/Tech/springboot.svg";
import typescript from "../../assets/Tech/typescript.svg";
import postgresql from "../../assets/Tech/postgresql.svg";

interface Technology {
    id: number;
    name: string;
    image: string;
}

const technologies: Technology[] = [
    {
        id: 1,
        name: "HTML",
        image: html
    },
    {
        id: 2,
        name: "CSS",
        image: css
    },
    {
        id: 3,
        name: "JavaScript",
        image: javascript
    },
    {
        id: 4,
        name: "React",
        image: react
    },
    {
        id: 5,
        name: "Node.js",
        image: node
    },
    {
        id: 6,
        name: "Python",
        image: python
    },
    {
        id: 7,
        name: "Java",
        image: java
    },
    {
        id: 8,
        name: "Bootstrap",
        image: bootstrap
    },
    {
        id: 9,
        name: "Next.js",
        image: nextjs
    },
    {
        id: 10,
        name: "Spring Boot",
        image: springBoot
    },
    {
        id: 11,
        name: "TypeScript",
        image: typescript
    },
    {
        id: 12,
        name: "PostgreSQL",
        image: postgresql
    }
];

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