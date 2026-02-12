import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="inline-flex items-center gap-2 bg-zinc-900 border border-white/5 px-4 py-2 rounded-full mb-8">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-zinc-400 text-xs font-medium uppercase tracking-widest">Minimalist Focus App</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[1.1]">
                    You can only choose <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">three.</span>
                </h1>

                <p className="max-w-xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
                    No lists. No overwhelm. No productivity systems. Choose the three most
                    important things you need to do today, and let the rest go.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
                    <Link
                        href="/download"
                        className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform active:scale-95"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="w-full sm:w-auto bg-zinc-900 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-zinc-800 transition-colors"
                    >
                        How it works
                    </Link>
                </div>

                {/* App Mockup Preview Placeholder */}
                <div className="relative mx-auto max-w-4xl">
                    <div className="absolute -inset-1 bg-gradient-to-t from-primary/20 to-transparent blur-2xl -z-10" />
                    <div className="bg-zinc-900 border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center">
                        <div className="flex flex-col items-center gap-8 w-full max-w-sm">
                            <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 gap-4 animate-pulse">
                                <div className="w-4 h-4 rounded border border-white/20" />
                                <div className="w-48 h-2 bg-white/20 rounded-full" />
                            </div>
                            <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 gap-4 animate-pulse" style={{ animationDelay: "200ms" }}>
                                <div className="w-4 h-4 rounded border border-white/20" />
                                <div className="w-32 h-2 bg-white/20 rounded-full" />
                            </div>
                            <div className="w-full h-12 bg-primary/20 rounded-xl border border-primary/20 flex items-center px-4 gap-4">
                                <div className="w-4 h-4 rounded border border-primary/50 bg-primary" />
                                <div className="w-40 h-2 bg-primary/50 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
