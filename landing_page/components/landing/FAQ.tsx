"use client";

import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "Why can I only set three tasks?",
            answer: "Three has been shown to be the perfect number for focus. Most people over-estimate what they can achieve in a day. By limiting yourself to three, you're forced to choose the things that actually matter, making it more likely you'll actually finish them.",
        },
        {
            question: "What happens if I don't finish a task?",
            answer: "The task resets at midnight. This is intentional. It encourages you to set small, achievable goals each morning rather than carrying over a long list of half-finished items that create anxiety.",
        },
        {
            question: "Does the app store my data?",
            answer: "No. Three is a 'Privacy First' app. All tasks and streak data are stored locally on your device's memory. We do not have servers, we do not require accounts, and we never track your usage.",
        },
        {
            question: "Is there a desktop or web version?",
            answer: "Currently, Three is exclusively available for mobile devices. We believe the palm of your hand is the best place for a quick daily check-in and for keeping your priorities close to you throughout the day.",
        },
        {
            question: "How does the daily reset work?",
            answer: "At midnight local time, all current tasks are cleared. If you've completed all three, your streak will increment. If not, the streak resets. Tomorrow is always a fresh start.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-zinc-950">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">
                    Common Questions.
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/5 rounded-3xl overflow-hidden bg-zinc-900/50"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                            >
                                <span className="text-white font-semibold pr-8">{faq.question}</span>
                                <span className={`text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="p-6 pt-0 text-zinc-400 text-sm leading-relaxed border-t border-white/5">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
