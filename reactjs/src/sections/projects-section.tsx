import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Artesanos",
            description: "Red social desarrollada como proyecto universitario. Diseñé y optimicé la arquitectura de la base de datos y desarrolle parte de la lógica del backend. Tecnologías: PHP, MySQL.",
            image: "/assets/project-1.png",
            link: "https://github.com/Bautimp/PI-Artesanoss",
        },
        {
            title: "Gestión de Noticias",
            description: "Sistema web para la administración, publicación y categorización de artículos periodísticos . Incluye panel de control para editores y validadores. Tecnologías: CODEIGNITER, JS, MySQL.",
            image: "/assets/project-2.png",
            link: "https://github.com/fernan597/GestorNoticias",
        },
        {
            title: "Sistema de Turnos Hospitalario",
            description: "Aplicación de escritorio para la asignación, control y optimización de turnos médicos y gestión de pacientes. Enfocado en la eficiencia de algoritmos y estructuras de datos. Tecnologías: C.",
            image: "/assets/project-2.png",
            link: "https://github.com/fernan597/sistema-turnos-hospital",
        },
        {
            title: "Gestión Jardín de Infantes",
            description: "Software integral para la administración institucional, control de asistencia, legajos de alumnos y gestión de personal docente. Desarrollado bajo el paradigma de POO. Tecnologías: Java.",
            image: "/assets/project-2.png",
            link: "https://github.com/fernan597/gestionJardinMaternal-Java-",
        },
        {
            title: "Sistema de Biblioteca",
            description: "Plataforma para el control de inventario de libros, optimizando los tiempos de búsqueda y registro. Tecnologías: Java.",
            image: "/assets/project-2.png",
            link: "https://github.com/fernan597/gestionBiblioteca",
        },
    ];

    return (
        <Section title="Proyectos">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900"
                    >
                        <img
                            className="rounded-t-xl h-42 object-fit"
                            src={project.image}
                            alt={project.title}
                            width={300}
                            height={170}
                        />

                        <div className="p-4">
                            <h3 className="text-base font-medium text-black dark:text-white">
                                {project.title}
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400 mt-1">
                                {project.description}
                            </p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-blue-600 hover:underline"
                                >
                                    Ver proyecto →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}