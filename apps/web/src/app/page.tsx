import Link from "next/link";
import { ArrowRight, BrainCircuit, ShieldCheck, Zap } from "lucide-react";

export default async function LandingPage() {
  console.log("Vercel build trigger");
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
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

      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Turn Code Commits into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Career Momentum
          </span>
        </h1>
        
        <p className="relative text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Automate your professional visibility. GitSync securely analyzes your GitHub activity and generates meaningful, human-reviewed project updates for your LinkedIn profile.
        </p>
        
        <div className="relative flex items-center justify-center gap-4">
          <Link
            href="/sign-in"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_8px_rgba(99,102,241,0.2)]"
          >
            Get Started for Free
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      {/* Features Grid */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6">
                <BrainCircuit className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Smart Summaries</h3>
              <p className="text-gray-400">
                We don't publish raw commit spam. Our AI analyzes your work and translates it into meaningful professional progress that recruiters actually want to read.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Human in the Loop</h3>
              <p className="text-gray-400">
                You maintain total control. Review, edit, or reject every drafted post before it ever goes live on your LinkedIn profile.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-pink-400" />
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
        <p>&copy; {new Date().getFullYear()} GitSync. All rights reserved.</p>
      </footer>
    </div>
  );
}
