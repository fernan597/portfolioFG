
import { useEffect, useState } from "react";

import Footer from "./components/footer";
import LenisScroll from "./components/lenis";
import AboutSection from "./sections/about-section";
import ContactSection from "./sections/contact-section";
import EducationSection from "./sections/education-section";
import ExperienceSection from "./sections/experience-section";
import HeroSection from "./sections/hero-section";
import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-section";

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {

          const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setDarkMode(!darkMode);
    };

    return (
        <main className="max-md:px-4 transition-colors duration-300">
            <LenisScroll />

            <button
             onClick={toggleTheme}
                className="fixed top-5 right-5 z-50 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm shadow-md transition-all duration-300 hover:scale-105 dark:border-gray-700 dark:bg-zinc-900 dark:text-white"
            >
                {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
            </button>

            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
                 </main>
    );
}