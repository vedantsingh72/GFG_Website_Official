'use client';

import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div>
            <span className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm font-medium mb-6">
              Welcome to Our Community
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Geek for Geeks<br />
            <span className="text-green-500">RGIT Student Chapter</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Learn, grow, and collaborate with fellow tech enthusiasts. Join our community of passionate developers, designers, and innovators building the future.
          </p>

          <div className="flex gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('joinGFG')}
              className="px-8 py-3 bg-green-500 text-slate-950 font-semibold rounded-lg hover:bg-green-400 transition-colors duration-200 flex items-center gap-2 group"
            >
              Join Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 border border-green-500/50 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-slate-800">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-green-500">500+</div>
            <div className="text-slate-400 text-sm md:text-base">Active Members</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-green-500">50+</div>
            <div className="text-slate-400 text-sm md:text-base">Events Conducted</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-green-500">100%</div>
            <div className="text-slate-400 text-sm md:text-base">Free & Open</div>
          </div>
        </div>
      </div>
    </div>
  );
}
