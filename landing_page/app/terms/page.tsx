import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsOfService() {
    const effectiveDate = "February 12, 2026";

    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Terms of Service</h1>
                        <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Effective Date: {effectiveDate}</p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8 text-zinc-400">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed">
                                By downloading, installing, or using the <strong>Three.</strong> mobile application ("the App"),
                                you agree to be bound by these Terms of Service. If you do not agree to these terms,
                                you must uninstall and refrain from using the App immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                            <p className="leading-relaxed">
                                Three. is a minimalist productivity utility designed to facilitate daily focus. The App allows
                                users to input up to three (3) tasks per 24-hour period. The App is provided as a local-only
                                tool, meaning all data resides on the user's device and is not synchronized with any
                                external servers or cloud services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                            <p className="leading-relaxed">
                                As a user of Three., you understand and agree to the following:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Local Data Management:</strong> You are solely responsible for the management and backup of the data stored within the App. Because we do not store your data on our servers, we cannot recover any information if you lose your device, uninstall the app, or experience a hardware failure.</li>
                                <li><strong>App Usage:</strong> The App is intended for personal, non-commercial use. You agree not to use the App for any illegal or unauthorized purpose.</li>
                                <li><strong>Security:</strong> You are responsible for maintaining the physical security of your device and for utilizing any biometric or passcode protections provided by your mobile operating system.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                            <p className="leading-relaxed">
                                The App, including its visual design, code, logo, brand assets, and original content, is the
                                exclusive property of the developers of Three. and is protected by copyright, trademark, and
                                other intellectual property laws. You are granted a limited, non-exclusive, non-transferable
                                license to use the App for its intended purpose. You may not reverse engineer, decompile,
                                or attempt to extract the source code of the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">5. "As Is" Basis & Disclaimer of Warranty</h2>
                            <p className="bg-zinc-900 p-6 rounded-2xl border border-white/10 italic text-sm">
                                THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                                PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE
                                UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                To the maximum extent permitted by law, the developers of Three. shall not be liable for any
                                indirect, incidental, special, consequential, or punitive damages, or any loss of profits or
                                revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or
                                other intangible losses resulting from:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your access to or use of (or inability to access or use) the App;</li>
                                <li>Any data loss due to device failure, uninstallation, or operating system updates;</li>
                                <li>Any unauthorized access to your device.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                            <p className="leading-relaxed">
                                We reserve the right to modify or discontinue the App (or any part thereof) at any time
                                without notice. You may terminate your relationship with us at any time by uninstalling
                                the App.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                            <p className="leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of your
                                jurisdiction, without regard to its conflict of law provisions.
                            </p>
                        </section>

                        <section className="bg-zinc-900 p-8 rounded-3xl border border-white/5">
                            <h2 className="text-xl font-bold text-white mb-4">9. Contact</h2>
                            <p className="text-sm leading-relaxed mb-4">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <p className="text-primary font-bold">legal@threeapp.com</p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
