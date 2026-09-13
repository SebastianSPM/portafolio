//import { technologies } from "../../data/technologies.ts";
import "./Technology.css";

import html from "../../assets/Tech/h1.webp";
import css from "../../assets/Tech/c1.svg";
import javascript from "../../assets/Tech/js1.png";
import react from "../../assets/Tech/r1.svg";
import node from "../../assets/Tech/no1.svg";
import python from "../../assets/Tech/py1.svg";
import java from "../../assets/Tech/j1.svg";
import bootstrap from "../../assets/Tech/b1.svg";
import nextjs from "../../assets/Tech/n1.svg";
import springBoot from "../../assets/Tech/s1.svg";
import typescript from "../../assets/Tech/t1.svg";
import postgresql from "../../assets/Tech/p1.svg";

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