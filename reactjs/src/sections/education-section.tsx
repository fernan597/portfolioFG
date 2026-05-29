import Section from "../components/section";

export default function EducationSection() {
    return (
        <Section title="Educacion">
            <div className="space-y-6">
            <div className="w-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 rounded-xl transition">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500 dark:text-gray-400">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg p-3">
                            <img
                                src="/assets/unsl.png"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800 dark:text-white">
                                Tecnico Universitario en Web
                            </h3>
                            <div>Universidad Nacional de San Luis</div>
                        </div>
                    </div>
                    <div>2023 - 2026</div>
                </div>
                <p className="mt-6 text-gray-500 dark:text-gray-400">
                Una parte importante de la formación implica experiencia práctica a través de laboratorios y proyectos, que están diseñados para mejorar las habilidades de resolución de problemas.</p>
            </div>
             <div className="w-full border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 rounded-xl transition">
                <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500 dark:text-gray-400">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                        <div className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg p-3">
                            <img
                                src="/assets/unsl.png"
                                alt="Education"
                                width={25}
                                height={25}
                                className="size-5.5"
                            />
                        </div>
                        <div>
                            <h3 className="text-base font-medium text-gray-800 dark:text-white">
                                Curso Ingles Nivel A2-B1
                            </h3>
                            <div>Universidad Nacional de San Luis</div>
                        </div>
                    </div>
                    <div>2025 - 2027</div>
                </div>
                <p className="mt-6 text-gray-500 dark:text-gray-400">
                Comprensión auditiva (listening), expresión oral (speaking), lectura (reading) y escritura (writing)</p>
            </div>
            </div>
        </Section>
    );
}