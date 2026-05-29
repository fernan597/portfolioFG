import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contacto">
            <table className="table-auto mr-auto">
                <tbody>
                        <tr>
                            <td className="pr-4 py-2">Email:</td>
                            <td className="py-2 text-gray-500 dark:text-gray-400">
                                fistoda97@gmail.com
                            </td>
                        </tr>

                        <tr>
                            <td className="pr-4 py-2">Phone:</td>
                            <td className="py-2 text-gray-500 dark:text-gray-400">
                                +54 266 5036447
                        </td>
                     </tr>
                </tbody>
            </table>
        </Section>
    );
}