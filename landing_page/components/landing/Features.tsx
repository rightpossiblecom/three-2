export default function Features() {
    const features = [
        {
            title: "Artificial Constraint",
            description: "By limiting yourself to exactly three items, you force prioritization and eliminate the overwhelm of infinite lists.",
            icon: "🎯",
        },
        {
            title: "No Data Collection",
            description: "Everything is stored locally on your device. No accounts, no syncing, no cloud, no tracking. Your focus is your own.",
            icon: "🛡️",
        },
        {
            title: "Clean Slate Every Day",
            description: "At midnight, your tasks reset. Every day is a fresh opportunity to decide what truly matters today.",
            icon: "✨",
        },
        {
            title: "Streak Engagement",
            description: "Stay consistent with an optional streak counter that rewards your daily focus without being intrusive.",
            icon: "🔥",
        },
        {
            title: "Extreme Simplicity",
            description: "Designed to be used in seconds. Add your tasks in the morning, complete them, and close the app.",
            icon: "⚡",
        },
        {
            title: "Intentional Living",
            description: "Three. isn't just a list app; it's a tool for practicing intentionality in your work and your life.",
            icon: "🌱",
        },
    ];

    return (
        <section id="features" className="py-24 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Stop collecting tasks. <br />
                        <span className="text-zinc-500">Start doing them.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-zinc-400">
                        Three. is built on the philosophy that less is more. We removed
                        everything that gets in the way of your actual work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
