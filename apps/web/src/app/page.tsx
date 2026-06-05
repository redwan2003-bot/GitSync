import Link from "next/link";
import { ArrowRight, BrainCircuit, ShieldCheck, Zap } from "lucide-react";
import type { Metadata } from "next";
import { HeroSection } from "../components/hero-section";

export const metadata: Metadata = {
  title: "GitSync | GitHub to LinkedIn Automation",
  description: "Turn meaningful GitHub activity into reviewed LinkedIn updates.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Zap aria-hidden="true" className="size-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">GitSync</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Scene */}
      <HeroSection />

      {/* Features Grid */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="size-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                <BrainCircuit aria-hidden="true" className="size-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Smart Summaries</h3>
              <p className="text-gray-400">
                We don&apos;t publish raw commit spam. Our AI analyzes your work and translates it into meaningful professional progress that recruiters actually want to read.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="size-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6">
                <Zap aria-hidden="true" className="size-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Human in the Loop</h3>
              <p className="text-gray-400">
                You maintain total control. Review, edit, or reject every drafted post before it ever goes live on your LinkedIn profile.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="size-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <ShieldCheck aria-hidden="true" className="size-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Compliant</h3>
              <p className="text-gray-400">
                No scraping, no browser automation. We strictly use official GitHub Webhooks and the official LinkedIn OAuth API to ensure your accounts stay safe.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-gray-500 text-sm">
        <p>&copy; 2026 GitSync. All rights reserved.</p>
      </footer>
    </div>
  );
}
