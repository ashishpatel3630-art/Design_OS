"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Copy, RefreshCw } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafd] pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-200 h-125 bg-linear-to-tr from-purple-200/50 via-indigo-100/40 to-pink-200/40 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-purple-100 shadow-sm text-xs font-semibold text-purple-600">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span>The Future of Creative Design</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Create Colors, <br />
              Typography & <br />
              Motion Like <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-pink-500 to-indigo-600">
                Never Before.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-normal">
              Design Universe OS is your all-in-one Creative Operating System
              for designers and developers. Create palettes, typography, animations, and more. Export, use and accelerate your design workflow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-xl shadow-lg shadow-slate-950/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
                <span>Enter Universe</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl shadow-sm transition-all hover:border-slate-300">
                Explore Palettes
              </button>
            </div>

            {/* Social Proof / User Avatars */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="User 1"
                  width={36}
                  height={36}
                  unoptimized
                />
                <Image
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="User 2"
                  width={36}
                  height={36}
                  unoptimized
                />
                <Image
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="User 3"
                  width={36}
                  height={36}
                  unoptimized
                />
                <Image
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                  alt="User 4"
                  width={36}
                  height={36}
                  unoptimized
                />
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                <span className="font-bold text-slate-900">150K+</span> Designers & Developers <br className="hidden sm:inline" />
                are already using Design OS
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Design Visual Mockups */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Container for Cards Stack */}
            <div className="relative w-full max-w-130 aspect-4/3 sm:aspect-square flex items-center justify-center">
              
              {/* Back Dark UI Panel */}
              <div className="absolute top-0 right-0 w-[85%] bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-800 text-white transform rotate-1 scale-95 opacity-90 transition-transform hover:rotate-0">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Quick Generator</span>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  <div className="h-12 rounded-lg bg-pink-500/80" />
                  <div className="h-12 rounded-lg bg-orange-500/80" />
                  <div className="h-12 rounded-lg bg-purple-600/80" />
                  <div className="h-12 rounded-lg bg-blue-500/80" />
                </div>
              </div>

              {/* Middle Card: Typography Preview */}
              <div className="absolute top-16 left-0 w-[62%] bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-slate-100 transform -rotate-3 hover:rotate-0 transition-all">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-4xl font-extrabold text-slate-900">Ag</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-800">Poppins</p>
                    <p className="text-[10px] text-slate-400">SemiBold</p>
                  </div>
                </div>
                <p className="mt-3 text-[10px] font-mono text-slate-400 tracking-wider overflow-hidden whitespace-nowrap">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789!@#$%^&*()
                </p>
                <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100 text-slate-400">
                  <div className="flex gap-2">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <Copy className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-medium bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">72px</span>
                </div>
              </div>

              {/* Front Top Right Card: Linear Gradient */}
              <div className="absolute top-28 right-2 w-[65%] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-100/80 transform rotate-2 hover:rotate-0 transition-all">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-800">Linear Gradient</span>
                </div>
                <p className="text-[10px] font-mono text-slate-400 bg-slate-50 p-1.5 rounded mb-3 border border-slate-100">
                  background: linear-gradient(135deg, #9333EA 0%, #EC4899 100%);
                </p>
                <div className="flex gap-2 text-[10px] font-mono text-slate-500 mb-3">
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">
                    <span className="w-2 h-2 rounded-full bg-purple-600" /> #9333EA
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded">
                    <span className="w-2 h-2 rounded-full bg-pink-500" /> #EC4899
                  </span>
                </div>
                <div className="h-16 w-full rounded-xl bg-linear-to-r from-purple-600 to-pink-500 shadow-inner" />
              </div>

              {/* Bottom Card: Color Palette Bar */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-xl border border-slate-100 flex items-center justify-between gap-2">
                <div className="h-8 flex-1 rounded-lg bg-purple-600" />
                <div className="h-8 flex-1 rounded-lg bg-pink-500" />
                <div className="h-8 flex-1 rounded-lg bg-amber-400" />
                <div className="h-8 flex-1 rounded-lg bg-emerald-400" />
                <div className="h-8 flex-1 rounded-lg bg-sky-400" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}