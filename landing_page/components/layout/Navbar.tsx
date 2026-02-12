"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl transition-transform group-hover:scale-110">
                        3
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Three.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        Features
                    </Link>
                    <Link href="#how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        How it works
                    </Link>
                    <Link href="#faq" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                        FAQ
                    </Link>
                    <Link
                        href="/download"
                        className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                        Download App
                    </Link>
                </div>

                <button className="md:hidden text-white italic">
                    {/* Mobile menu toggle would go here */}
                    Menu
                </button>
            </div>
        </nav>
    );
}
