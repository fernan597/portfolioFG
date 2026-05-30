import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function HeroSection() {
    const [openModal, setOpenModal] = useState(false);
    const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

        emailjs
            .sendForm(
                "service_1md87gq",
                "template_frtag44",
                form.current,
                "hbLtqka9o9yJjG6vh"
            )
            .then(() => {
                alert("Mensaje enviado!");
            })
            .catch(() => {
                alert("Error al enviar");
            });
        };

    return (
        <main className="flex flex-col items-center pt-32 max-md:px-4 text-black dark:text-white transition-colors duration-300">
            <img
                src="/assets/fotoperfil.jpg"
                alt="Profile Image"
                className="size-36 rounded-full dark:border-2 dark:border-zinc-700"
                width={160}
                height={160}
            />

            <h2 className="text-4xl md:text-6xl font-semibold mt-6">
                Fernando Garcia
            </h2>
            <p className="text-2xl md:text-3xl font-mono mt-6">
                Desarrollador Web
            </p>
            <div className="mt-6">
                        <a
                     href="/CV_Fernando_Garcia_2026.pdf"
                    download>
                    <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-lg dark:bg-indigo-500 dark:hover:bg-indigo-400 transition">
                        Descargar mi CV
                        <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5 inline-flex" />
                </button>
                </a>
                <button
                    onClick={() => setOpenModal(true)}
                    className="border border-gray-400 hover:bg-gray-100/70 dark:border-zinc-700 dark:hover:bg-zinc-800 px-6 py-2.5 rounded-lg ml-4 transition">
                    Contactame
                </button>
            </div>
            <div className="space-x-6 mt-10"> 
                <a href="https://github.com/fernan597" className="inline-flex hover:-translate-y-0.5 transition dark:text-white">
                    <svg height={24} width={24} fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                </a>
            </div>
                        {openModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className="w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-6 shadow-2xl border border-gray-200 dark:border-zinc-800">

                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                Contactame
                            </h2>

                            <button
                                onClick={() => setOpenModal(false)}
                                className="text-gray-500 hover:text-black dark:hover:text-white transition"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="mt-6 space-y-4">
                            <form ref={form} onSubmit={sendEmail} className="space-y-4">

                                    <input
                                        type="text"
                                        name="user_name"
                                        placeholder="Tu nombre"
                                        className="w-full border p-3 rounded-lg"
                                        required
                                    />

                                    <input
                                        type="email"
                                        name="user_email"
                                        placeholder="Tu email"
                                        className="w-full border p-3 rounded-lg"
                                        required
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Tu mensaje"
                                        className="w-full border p-3 rounded-lg h-32"
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
                                    >
                                        Enviar
                                    </button>

                                </form>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}