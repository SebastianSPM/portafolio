import type { Project } from "../components/Proyects/Proyects.types";

export const projects: Project[] = [
    {
        id: 1,
        name: "Cancheros",
        description: "Sistema de reservas de canchas",
        image: "src/assets/Proyects/cancha.png",
        technologies: ["HTML", "CSS", "JavaScript", "Spring Boot", "PostgreSQL"]
    },
    {
        id: 2,
        name: "Task Manager",
        description: "Gestor de tareas",
        image: "src/assets/Proyects/task-manager.png",
        technologies: ["HTML","JavaScript", "CSS", "Spring Boot", "PostgreSQL"]
    },
    {
        id: 3,
        name: "Sistema de Registro y Login",
        description: "Acceder y registrarse en el sistema",
        image: "src/assets/Proyects/login.png",
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