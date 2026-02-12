export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Morning Selection",
            description: "Ask yourself: 'What are the three most important things I can do today?' Add them to your list.",
        },
        {
            number: "02",
            title: "Single-Minded Focus",
            description: "Work through your tasks one by one. No notifications, no clutter, no distractions.",
        },
        {
            number: "03",
            title: "Daily Completion",
            description: "At the end of the day, mark them complete. At midnight, your slate is wiped clean for a fresh start.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                            Three steps to a <br />
                            <span className="text-primary italic">more intentional </span> life.
                        </h2>
                        <p className="text-zinc-400 mb-12 max-w-lg">
                            We've engineered the app to be as friction-less as possible.
                            No complicated onboarding, just a clear path to productivity.
                        </p>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="flex gap-6">
                                    <span className="text-primary font-mono font-bold text-lg mt-1">{step.number}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute -inset-20 bg-primary/10 blur-[100px] -z-10" />
                        <div className="bg-zinc-900 aspect-[4/5] rounded-[40px] border border-white/10 p-1 flex flex-col shadow-3xl">
                            <div className="h-6 w-1/3 bg-zinc-800 rounded-full mx-auto mt-4 mb-8" />
                            <div className="px-8 pb-12 flex-1 flex flex-col justify-center gap-6">
                                <div className="space-y-2">
                                    <div className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Today</div>
                                    <div className="text-white text-3xl font-black">Choose three.</div>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-20 bg-zinc-800/50 rounded-2xl border border-white/5 flex items-center px-6 gap-4">
                                        <div className="w-6 h-6 rounded-md border-2 border-primary/30" />
                                        <div className="h-2 w-48 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="h-20 bg-zinc-800/50 rounded-2xl border border-white/5 flex items-center px-6 gap-4">
                                        <div className="w-6 h-6 rounded-md border-2 border-primary/30" />
                                        <div className="h-2 w-32 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="h-20 bg-zinc-800/50 rounded-2xl border border-white/5 flex items-center px-6 gap-4">
                                        <div className="w-6 h-6 rounded-md border-2 border-primary/30" />
                                        <div className="h-2 w-40 bg-white/10 rounded-full" />
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground font-black text-2xl">+</div>
                                    <div className="text-zinc-500 text-xs font-mono">0/3 Tasks</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
