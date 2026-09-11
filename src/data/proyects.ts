import type { Project } from "../components/Proyects/Proyects.types";
import cancha from '../assets/Proyects/cancha.png'
import tareas from '../assets/Proyects/task-manager.png'
import loginAuth from '../assets/Proyects/login.png'

export const projects: Project[] = [
    {
        id: 1,
        name: "Cancheros",
        description: "Sistema de reservas de canchas",
        image: cancha,
        technologies: ["HTML", "CSS", "JavaScript", "Spring Boot", "PostgreSQL"]
    },
    {
        id: 2,
        name: "Task Manager",
        description: "Gestor de tareas",
        image: tareas,
        technologies: ["HTML","JavaScript", "CSS", "Spring Boot", "PostgreSQL"]
    },
    {
        id: 3,
        name: "Sistema de Registro y Login",
        description: "Acceder y registrarse en el sistema",
        image: loginAuth,
        technologies: ["Next.js",
                        "React",
                        "TailwindCSS",
                        "Prisma ORM",
                        "SQLite",
                        "bcryptjs",
                        "Node.js"
                    ]
    }
];