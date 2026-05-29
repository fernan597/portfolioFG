export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200">
            <p>
                © {new Date().getFullYear()}{" "}
                <a href="https://www.linkedin.com/in/fernando-garcia-68b869163/">
                    Fernando Garcia
                </a>
                .Todos los derechos reservados.
            </p>
        </footer>
    );
}