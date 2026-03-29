export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-zinc-900 border-t border-zinc-800 text-center">
            <h2 className="text-4xl font-bold text-emerald-400 mb-6">Kontakt</h2>

            <p className="max-w-2xl mx-auto text-zinc-400 mb-10 px-4">
                Škola bilijara Pecelj stacionirana je u <span className="text-white">Beogradu</span>,
                ali postoji mogućnost organizacije treninga i radionica i van Beograda.
                Za sve informacije o treninzima, cenama i dogovore, slobodno nas kontaktirajte direktno.
            </p>

            <div className="space-y-3 text-zinc-300 mb-8">
                <p>
                    📧{" "}
                    <a
                        href="mailto:kontakt@skola-bilijara-pecelj.rs"
                        className="text-emerald-400 hover:text-emerald-300 transition"
                    >
                        skolabilijarapecelj@gmail.com
                    </a>
                </p>
                <p>📞 +381 69 2454 527</p>
            </div>

            <div className="flex justify-center gap-8 mt-6">
                <a
                    href="https://www.instagram.com/skolabilijara_pecelj?igsh=MWpibnR2YTN4cHVvaA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-pink-400 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.5 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-4.5 1.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" />
                    </svg>
                    Instagram
                </a>
                <a
                    href="https://www.facebook.com/share/19wxFZGaoQ/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-blue-400 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2v-2.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2v1.7h2.5l-.4 2.9h-2.1v7A10 10 0 0 0 22 12Z" />
                    </svg>
                    Facebook
                </a>
            </div>
        </section>
    );
}
