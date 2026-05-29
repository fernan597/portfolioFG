import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="Sobre mi">
            <div className="text-sm/6.5 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <p>
                    Soy Fernando Garcia, desarrollador full-stack apasionado por crear experiencias digitales integrales, rápidas, escalables y centradas en el usuario. Con amplia experiencia en tecnologías front-end y back-end, disfruto transformando ideas en aplicaciones web totalmente funcionales, fluidas e intuitivas.
                </p>
                <p className="mt-5">
                    Ya sea diseñando interfaces adaptables o desarrollando sistemas backend robustos, mi objetivo es ofrecer soluciones que sean fiables y eficaces.
                </p>
            </div>
        </Section>
    );
}