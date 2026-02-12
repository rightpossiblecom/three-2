import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />

      <main>
        <Hero />

        {/* Trust Indicators / Metrics */}
        <section className="py-12 border-y border-white/5 bg-zinc-950/50">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-white">0.0S</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Data Leaves Device</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-white">100%</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Focus Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-white">3</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Priority Limit</div>
            </div>
          </div>
        </section>

        <Features />
        <HowItWorks />
        <FAQ />

        {/* Bottom CTA Section */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_70%)]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter mb-8 italic">
              Ready to focus <br /> on what matters?
            </h2>
            <p className="text-black/70 text-lg mb-12 max-w-lg mx-auto font-medium">
              Join thousands of people who are reclaiming their time and attention
              with the rule of three. Download the app today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/download"
                className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-2xl"
              >
                Download for Free
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
