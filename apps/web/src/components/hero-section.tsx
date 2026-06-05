'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { GenerativeArtScene } from './generative-art-scene';

export function HeroSection() {
  return (
    <section
      role="banner"
      className="relative w-full h-screen overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* 3D Background */}
      <Suspense
        fallback={
          <div className="w-full h-full" style={{ background: '#0a0a0a' }} />
        }
      >
        <GenerativeArtScene />
      </Suspense>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.7) 40%, transparent 100%)',
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full pb-20 md:pb-32 text-center">
        <div className="max-w-3xl px-4 hero-fade-in">
          <p className="text-sm font-mono tracking-widest text-emerald-400/80 uppercase mb-4">
            GitHub → LinkedIn Automation
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Turn Code Commits into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Career Momentum
            </span>
          </h1>

          <p className="mt-6 max-w-xl mx-auto text-base md:text-lg leading-relaxed text-gray-400">
            Automate your professional visibility. GitSync securely analyzes
            your GitHub activity and generates meaningful, human-reviewed project
            updates for your LinkedIn profile.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/sign-in"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_40px_8px_rgba(50,213,131,0.15)]"
            >
              Get Started for Free
              <ArrowRight
                aria-hidden="true"
                className="size-4 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
