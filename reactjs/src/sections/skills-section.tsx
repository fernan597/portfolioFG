import Section from "../components/section";

export default function SkillsSection() {
    const skills = [
        "PHP",
        "Java",
        "React.js",
        "PostgreSQL",
        "MySQL",
        "Git",
        "HTML",
        "CSS",
        "JavaScript",
    ];

    return (
        <Section title="Skills">
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <p key={skill} className="border cursor-default border-gray-300 dark:border-zinc-700 hover:bg-gray-100/70 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-300 text-[13px] rounded-full px-5 py-1.5 transition">
                        {skill}
                    </p>
                ))}
            </div>
        </Section>
    );
}