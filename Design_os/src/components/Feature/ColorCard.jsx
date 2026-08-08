import React from "react";
import { motion } from "framer-motion";

function ColorCard() {
  const colors = [
    {
      name: "Obsidian",
      hex: "#050505",
      className: "bg-[#050505]",
    },
    {
      name: "Charcoal",
      hex: "#171717",
      className: "bg-[#171717]",
    },
    {
      name: "White",
      hex: "#FFFFFF",
      className: "bg-white",
    },
    {
      name: "Coral",
      hex: "#FB7185",
      className: "bg-rose-400",
    },
    {
      name: "Violet",
      hex: "#A78BFA",
      className: "bg-violet-400",
    },
    {
      name: "Mint",
      hex: "#4ADE80",
      className: "bg-green-400",
    },
  ];

  return (
    <div className="group relative min-h-[560px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#080808] p-7 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-white/[0.14]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[120px] transition-all duration-700 group-hover:bg-white/[0.06]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-violet-500/[0.025] blur-[130px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/35">
                Color Intelligence
              </span>
            </div>

            <h2 className="text-[30px] font-medium leading-[1.05] tracking-[-0.04em]">
              Color & Palette
              <br />
              <span className="text-white/35">Engine</span>
            </h2>

            <p className="mt-5 max-w-[390px] text-[13px] leading-6 text-white/40">
              Build intelligent color systems with accessible palettes, contrast
              validation, and instant visual exploration.
            </p>
          </div>

          {/* Icon */}
          <motion.div
            whileHover={{
              rotate: 90,
              scale: 1.05,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]"
          >
            <div className="relative h-6 w-6">
              <div className="absolute left-0 top-0 h-3 w-3 rounded-full border border-white/50" />

              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-white/70" />

              <div className="absolute left-[9px] top-[9px] h-2 w-2 rounded-full bg-white/20" />
            </div>
          </motion.div>
        </div>

        {/* PALETTE WORKSPACE */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className="relative mt-10 rounded-[22px] border border-white/[0.08] bg-black/50 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl"
        >
          {/* Toolbar */}
          <div className="mb-3 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Live Preview
              </span>

              <span className="rounded-full border border-green-400/20 bg-green-400/[0.06] px-2 py-0.5 text-[8px] text-green-300/70">
                ACTIVE
              </span>
            </div>

            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            </div>
          </div>

          {/* COLOR PALETTE */}
          <div className="flex h-[190px] overflow-hidden rounded-[16px]">
            {colors.map((color) => (
              <motion.div
                key={color.name}
                initial={{ flex: 1 }}
                whileHover={{ flex: 2.5 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group/color relative min-w-0 cursor-pointer ${color.className}`}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover/color:bg-black/[0.08]" />

                {/* HEX */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 opacity-0 transition-all duration-300 group-hover/color:scale-100 group-hover/color:opacity-100">
                  <div className="rounded-full border border-black/20 bg-white/20 px-3 py-1.5 text-[8px] font-semibold text-black shadow-lg backdrop-blur-md">
                    {color.hex}
                  </div>
                </div>

                {/* Color info */}
                <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-black/70 px-2 py-3 text-center opacity-0 backdrop-blur-xl transition-all duration-300 group-hover/color:translate-y-0 group-hover/color:opacity-100">
                  <p className="text-[9px] font-medium text-white">
                    {color.name}
                  </p>

                  <p className="mt-1 text-[8px] text-white/40">{color.hex}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* METADATA */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {/* Palette */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors duration-300 hover:bg-white/[0.04]">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Palette
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/50" />

                <p className="text-[11px] text-white/65">Neutral / Modern</p>
              </div>
            </div>

            {/* Contrast */}
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition-colors duration-300 hover:bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                  Contrast
                </p>

                <span className="rounded-full bg-green-400/[0.08] px-2 py-0.5 text-[7px] text-green-300/70">
                  PASS
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "88%" }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                    }}
                    className="h-full rounded-full bg-white/70"
                  />
                </div>

                <span className="text-[10px] tabular-nums text-white/60">
                  12.6:1
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="mt-7 flex items-center justify-between">
          {/* Mini palette */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {colors.map((color) => (
                <motion.div
                  key={color.name}
                  whileHover={{
                    y: -5,
                    scale: 1.15,
                    zIndex: 20,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`relative h-8 w-8 rounded-full border-2 border-[#080808] ${color.className}`}
                />
              ))}
            </div>

            <span className="ml-3 text-[10px] text-white/25">6 colors</span>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group/button flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[11px] font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.16)]"
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

export default ColorCard;
