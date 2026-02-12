import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    const lastUpdated = "February 12, 2026";

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Privacy Policy</h1>
                        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Last Updated: {lastUpdated}</p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8 text-zinc-400">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                            <p className="leading-relaxed">
                                Welcome to <strong>Three.</strong> ("the App," "we," "us," or "our"). We are committed to protecting your privacy
                                through a fundamentally different approach to software design: <strong>we do not collect your data.</strong>
                            </p>
                            <p className="leading-relaxed">
                                This Privacy Policy explains our practices regarding the information that is generated when you use our
                                minimalist focus application. Because Three. is designed as a local-only utility, the scope of this policy
                                is intentionally limited to reflect our commitment to zero data collection.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. The "Privacy First" Architecture</h2>
                            <p className="leading-relaxed">
                                Unlike most productivity applications, Three. does not use cloud synchronization, user accounts, or
                                centralized databases. The architecture of the App is based on the principle of <strong>Local Sovereignty</strong>:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>No Accounts:</strong> You are not required to create an account, provide an email address, or sign in via third-party services.</li>
                                <li><strong>Local Storage:</strong> All tasks, completion statuses, and streak data are stored exclusively on your device's internal memory using Hive/local storage.</li>
                                <li><strong>No Cloud Sync:</strong> Your data never leaves your device. We do not maintain servers to store or process your personal productivity data.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Information We Do NOT Collect</h2>
                            <p className="leading-relaxed">
                                To be clear, we do not collect, store, share, or process any of the following:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Personal Identifiers (Name, email, phone number)</li>
                                <li>Location Data (GSP, IP address tracking)</li>
                                <li>Usage Metadata (How often you open the app, which buttons you click)</li>
                                <li>Content Data (The specific tasks you write down in the App)</li>
                                <li>Device Information (Unique device IDs beyond what is strictly necessary for local OS operations)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Services</h2>
                            <p className="leading-relaxed">
                                The App does not integrate with third-party analytics (such as Google Analytics or Firebase) or
                                advertising networks. We do not sell your "usage patterns" because we do not see them.
                            </p>
                            <p className="leading-relaxed italic">
                                Note: If you download the App via the Apple App Store or Google Play Store, those platforms
                                may collect telemetry data as governed by their respective privacy policies. We recommend
                                reviewing their terms if you have concerns about store-level tracking.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention & Deletion</h2>
                            <p className="leading-relaxed">
                                Since your data is stored locally, you have total control over its retention:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Selecting the "Reset All Data" option in the App's settings will permanently erase all tasks and streaks from your device.</li>
                                <li>Uninstalling the App will generally remove all associated local data, depending on your device's operating system behavior.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Security</h2>
                            <p className="leading-relaxed">
                                Security is inherently high because your data is not transmitted over the internet. The primary
                                security risk is physical access to your device. We recommend using your device's native screen
                                lock and encryption features to protect all your local applications, including Three.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Policy</h2>
                            <p className="leading-relaxed">
                                We may update this policy if we introduce new features that require a change in data handling.
                                However, our core commitment to local storage and zero data collection will remain the
                                foundation of Three.
                            </p>
                        </section>

                        <section className="bg-zinc-900 p-8 rounded-3xl border border-white/5">
                            <h2 className="text-xl font-bold text-white mb-4">8. Contact Information</h2>
                            <p className="text-sm leading-relaxed mb-4">
                                If you have questions about this Privacy Policy or our approach to data privacy,
                                please contact us at:
                            </p>
                            <p className="text-primary font-bold">privacy@threeapp.com</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
