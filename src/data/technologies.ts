import type { Technology } from "../components/Technology/Technology.types.ts";

import html from "../assets/Tech/h1.webp";
import css from "../assets/Tech/c1.svg";
import javascript from "../assets/Tech/js1.png";
import react from "../assets/Tech/r1.svg";
import node from "../assets/Tech/no1.svg";
import python from "../assets/Tech/py1.svg";
import java from "../assets/Tech/j1.svg";
import bootstrap from "../assets/Tech/b1.svg";
import nextjs from "../assets/Tech/n1.svg";
import springBoot from "../assets/Tech/s1.svg";
import typescript from "../assets/Tech/t1.svg";
import postgresql from "../assets/Tech/p1.svg";

export const technologies: Technology[] = [
    {
        id: 1,
        name: "HTML",
        image: html,
        color: "#FF4500"
    },
    {
        id: 2,
        name: "CSS",
        image: css,
        color: "#663399"
    },
    {
        id: 3,
        name: "JavaScript",
        image: javascript,
        color: "#F7DF1E"
    },
    {
        id: 4,
        name: "React",
        image: react,
        color: "#61DAFB"
    },
    {
        id: 5,
        name: "Node.js",
        image: node,
        color: "#008000"
    },
    {
        id: 6,
        name: "Python",
        image: python,
        color: "#4682B4"
    },
    {
        id: 7,
        name: "Java",
        image: java,
        color: "#F89820"
    },
    {
        id: 8,
        name: "Bootstrap",
        image: bootstrap,
        color: "#663399"
    },
    {
        id: 9,
        name: "Next.js",
        image: nextjs,
        color: "#201e1e"
    },
    {
        id: 10,
        name: "Spring Boot",
        image: springBoot,
        color: "#6DB33F"
    },
    {
        id: 11,
        name: "TypeScript",
        image: typescript,
        color: "#4169E1"
    },
    {
        id: 12,
        name: "PostgreSQL",
        image: postgresql,
        color: "#4169E1"
    }
];