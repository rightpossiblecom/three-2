import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">Get in touch.</h1>
                        <p className="text-zinc-500 max-w-lg mx-auto leading-relaxed">
                            Have questions, feedback, or just want to talk about focus?
                            We're here to help. Pick your preferred way to reach us.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-zinc-900 border border-white/5 p-10 rounded-[40px] hover:border-primary/20 transition-all group">
                            <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                                ✉️
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Support Email</h3>
                            <p className="text-zinc-500 text-sm mb-6">For technical issues or feature requests.</p>
                            <a href="mailto:hello@threeapp.com" className="text-primary font-bold hover:underline">hello@threeapp.com</a>
                        </div>

                        <div className="bg-zinc-900 border border-white/5 p-10 rounded-[40px] hover:border-primary/20 transition-all group">
                            <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                                📱
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Social Media</h3>
                            <p className="text-zinc-500 text-sm mb-6">Follow us for updates and focus tips.</p>
                            <div className="flex gap-4">
                                <a href="#" className="text-primary font-bold hover:underline">Twitter</a>
                                <span className="text-zinc-800">•</span>
                                <a href="#" className="text-primary font-bold hover:underline">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 border border-white/5 p-10 rounded-[40px]">
                        <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked</h2>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-semibold mb-2">Do you have a press kit?</h4>
                                <p className="text-zinc-500 text-sm">Yes, please email us for high-resolution assets and brand guidelines.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Are you hiring?</h4>
                                <p className="text-zinc-500 text-sm">We are a small, intentional team. While we don't have open positions right now, we're always happy to connect with like-minded creators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
