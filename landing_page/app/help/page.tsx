import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Help() {
    const sections = [
        {
            title: "Getting Started",
            items: [
                { q: "How do I add a task?", a: "Tap the '+' button at the bottom of the home screen to add a task. You can add up to three tasks per day." },
                { q: "How do I complete a task?", a: "Tap the checkbox next to a task to mark it as complete. Completed tasks count toward your daily streak." },
                { q: "Can I delete a task?", a: "Yes, tap the trash icon next to a task to remove it and free up a slot." },
            ]
        },
        {
            title: "Streaks & Reset",
            items: [
                { q: "When does the day reset?", a: "The App resets at midnight according to your device's local time." },
                { q: "How are streaks calculated?", a: "A streak is incremented if you complete exactly three tasks in a single day. If you complete fewer than three, the streak resets to zero the next day." },
                { q: "Can I pause my streak?", a: "Currently, we do not support pausing streaks. The focus is on daily consistency." },
            ]
        },
        {
            title: "Troubleshooting",
            items: [
                { q: "My data disappeared!", a: "Since data is stored locally, clearing your app cache or uninstalling the app will remove your tasks and streaks. We cannot recover this data for you." },
                { q: "The app is crashing.", a: "Ensure you are on the latest version of your OS and the App. If the problem persists, please contact support." },
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-16">
                        <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">Help Center.</h1>
                        <p className="text-zinc-500 max-w-lg leading-relaxed">
                            Find answers to common questions about using Three.
                            If you can't find what you're looking for, feel free to contact us.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {sections.map((section, idx) => (
                            <div key={idx}>
                                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/5 pb-4">{section.title}</h2>
                                <div className="grid gap-8">
                                    {section.items.map((item, i) => (
                                        <div key={i}>
                                            <h3 className="text-zinc-200 font-semibold mb-2">{item.q}</h3>
                                            <p className="text-zinc-500 text-sm leading-relaxed">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-primary/10 border border-primary/20 rounded-[40px] text-center">
                        <h3 className="text-white font-bold text-xl mb-4">Still need help?</h3>
                        <p className="text-zinc-400 mb-8 text-sm">Our team is happy to answer any of your questions.</p>
                        <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
