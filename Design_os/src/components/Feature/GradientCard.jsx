import React, { useState } from "react";
import { motion } from "framer-motion";

function GradientCard() {
  const gradients = [
    {
      name: "Aurora",
      css: "linear-gradient(135deg, #A78BFA, #4ADE80)",
      style: {
        background:
          "linear-gradient(135deg, #A78BFA 0%, #4ADE80 100%)",
      },
    },
    {
      name: "Ember",
      css: "linear-gradient(135deg, #FB7185, #F59E0B)",
      style: {
        background:
          "linear-gradient(135deg, #FB7185 0%, #F59E0B 100%)",
      },
    },
    {
      name: "Ocean",
      css: "linear-gradient(135deg, #38BDF8, #6366F1)",
      style: {
        background:
          "linear-gradient(135deg, #38BDF8 0%, #6366F1 100%)",
      },
    },
    {
      name: "Mono",
      css: "linear-gradient(135deg, #FFFFFF, #171717)",
      style: {
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #171717 100%)",
      },
    },
    {
      name: "Cosmic",
      css: "linear-gradient(135deg, #C084FC, #EC4899)",
      style: {
        background:
          "linear-gradient(135deg, #C084FC 0%, #EC4899 100%)",
      },
    },
  ];

  const [activeGradient, setActiveGradient] = useState(0);

  const active = gradients[activeGradient];

  return (
    <div className="group relative min-h-[560px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#080808] p-7 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-white/[0.14]">

      {/* ========================================
          AMBIENT LIGHT
      ======================================== */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-violet-500/[0.05] blur-[120px] transition-all duration-700 group-hover:bg-violet-500/[0.08]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[130px]" />


      {/* ========================================
          GRID
      ======================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />


      {/* ========================================
          CONTENT
      ======================================== */}

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex items-start justify-between">

          <div>

            {/* Label */}
            <div className="mb-5 flex items-center gap-2">

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400/30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(167,139,250,0.8)]" />

              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/35">
                Gradient Intelligence
              </span>

            </div>


            {/* Title */}
            <h2 className="text-[30px] font-medium leading-[1.05] tracking-[-0.04em]">

              Gradient
              <br />

              <span className="text-white/35">
                Generator
              </span>

            </h2>


            {/* Description */}
            <p className="mt-5 max-w-[390px] text-[13px] leading-6 text-white/40">
              Create fluid gradients with precise color stops,
              direction control, and production-ready CSS.
            </p>

          </div>


          {/* Icon */}
          <motion.div
            whileHover={{
              rotate: 180,
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]"
          >

            <div
              className="h-6 w-6 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #A78BFA, #4ADE80)",
              }}
            />

          </motion.div>

        </div>


        {/* ========================================
            GRADIENT WORKSPACE
        ======================================== */}

        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className="relative mt-10 rounded-[22px] border border-white/[0.08] bg-black/50 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
        >

          {/* Toolbar */}
          <div className="mb-3 flex items-center justify-between px-2">

            <div className="flex items-center gap-2">

              <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Gradient Preview
              </span>

              <span className="rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-2 py-0.5 text-[8px] text-violet-300/70">
                LIVE
              </span>

            </div>


            {/* Window dots */}
            <div className="flex gap-1.5">

              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

            </div>

          </div>


          {/* ========================================
              ACTIVE GRADIENT
          ======================================== */}

          <motion.div
            key={activeGradient}
            initial={{ opacity: 0.4, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative h-[190px] overflow-hidden rounded-[16px]"
            style={active.style}
          >

            {/* Noise */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
              }}
            />


            {/* Center info */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] font-medium text-white backdrop-blur-md">
                {active.name}
              </div>

            </div>


            {/* Bottom gradient info */}
            <div className="absolute inset-x-0 bottom-0 bg-black/50 px-4 py-3 backdrop-blur-xl">

              <div className="flex items-center justify-between">

                <span className="text-[8px] uppercase tracking-[0.18em] text-white/50">
                  135°
                </span>

                <span className="text-[8px] text-white/50">
                  2 Color Stops
                </span>

              </div>

            </div>

          </motion.div>


          {/* ========================================
              GRADIENT OPTIONS
          ======================================== */}

          <div className="mt-4 flex gap-2">

            {gradients.map((gradient, index) => (

              <motion.button
                key={gradient.name}
                onClick={() => setActiveGradient(index)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`relative h-10 flex-1 overflow-hidden rounded-lg border transition-all duration-300 ${
                  activeGradient === index
                    ? "border-white/50 ring-1 ring-white/20"
                    : "border-white/[0.08]"
                }`}
                style={gradient.style}
              >

                {activeGradient === index && (
                  <div className="absolute inset-0 bg-white/10" />
                )}

              </motion.button>

            ))}

          </div>


          {/* ========================================
              GRADIENT DATA
          ======================================== */}

          <div className="mt-4 grid grid-cols-2 gap-3">

            {/* Direction */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">

              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Direction
              </p>

              <div className="mt-2 flex items-center gap-2">

                <span className="text-[11px] text-white/70">
                  135°
                </span>

                <span className="text-[9px] text-white/25">
                  ↗
                </span>

              </div>

            </div>


            {/* Stops */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors hover:bg-white/[0.04]">

              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Color Stops
              </p>

              <div className="mt-2 flex items-center gap-2">

                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #A78BFA, #4ADE80)",
                  }}
                />

                <span className="text-[11px] text-white/70">
                  2 Colors
                </span>

              </div>

            </div>

          </div>

        </motion.div>


        {/* ========================================
            BOTTOM
        ======================================== */}

        <div className="mt-7 flex items-center justify-between">

          {/* CSS */}
          <div className="min-w-0">

            <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
              CSS Gradient
            </p>

            <p className="mt-1 max-w-[250px] truncate font-mono text-[10px] text-white/35">
              {active.css}
            </p>

          </div>


          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group/button flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-[11px] font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.16)]"
          >

            Open Editor

            <span className="transition-transform duration-300 group-hover/button:translate-x-1">
              →
            </span>

          </motion.button>

        </div>

      </div>

    </div>
  );
}

export default GradientCard;

