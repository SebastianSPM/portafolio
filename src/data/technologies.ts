import type { Technology } from "../components/Technology/Technology.types.ts";

import html from "../assets/Tech/HTML5.webp";
import css from "../assets/Tech/CSS.svg";
import javascript from "../assets/Tech/Javascript.png";
import react from "../assets/Tech/React.svg";
import node from "../assets/Tech/node.svg";
import python from "../assets/Tech/python.svg";
import java from "../assets/Tech/java.svg";
import bootstrap from "../assets/Tech/Bootstrap.svg";
import nextjs from "../assets/Tech/nextjs.svg";
import springBoot from "../assets/Tech/spring_boot.svg";
import typescript from "../assets/Tech/Typescript.svg";
import postgresql from "../assets/Tech/postgresql.svg";

export const technologies: Technology[] = [
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