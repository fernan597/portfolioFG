import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
        {
            image: "/assets/google.svg",
            title: "Desarrollador Web",
            company: "",
            location: "San Luis",
            start: "Jan 2026",
            end: "Present",
            description: [
                "Transformo ideas en realidades digitales. Diseño landing pages atractivas y desarrollo sistemas de gestión para potenciar tu negocio.",
            ],
        },
      
    ];

    return (
        <Section title="Experiencia">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 dark:border-zinc-800 p-6 rounded-xl bg-white dark:bg-zinc-900 transition">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500 dark:text-gray-400">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800 dark:text-white">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 dark:text-gray-400 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}