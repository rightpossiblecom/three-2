import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-sm">
                                3
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white">Three.</span>
                        </Link>
                        <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
                            A minimalist focus app that helps you prioritize what matters.
                            Choose only three tasks per day. No overwhelm. Just intentionality.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Product</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#features" className="text-zinc-500 hover:text-white transition-colors text-sm">Features</Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-zinc-500 hover:text-white transition-colors text-sm">How it Works</Link>
                            </li>
                            <li>
                                <Link href="/help" className="text-zinc-500 hover:text-white transition-colors text-sm">Help Center</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/privacy-policy" className="text-zinc-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-zinc-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-zinc-500 hover:text-white transition-colors text-sm">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-zinc-600 text-xs">
                        © {currentYear} Three. All rights reserved. Built for intentional living.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors italic text-xs">Twitter</a>
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors italic text-xs">Instagram</a>
                        <a href="#" className="text-zinc-600 hover:text-white transition-colors italic text-xs">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
