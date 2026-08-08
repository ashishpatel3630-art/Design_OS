import React from "react";
import { motion } from "framer-motion";

function TypoCard() {
  const typography = [
    { label: "H1", size: "text-4xl", width: "font-semibold" },
    { label: "H2", size: "text-3xl", width: "font-medium" },
    { label: "H3", size: "text-2xl", width: "font-medium" },
    { label: "H4", size: "text-xl", width: "font-medium" },
    { label: "H5", size: "text-lg", width: "font-normal" },
    { label: "H6", size: "text-base", width: "font-normal" },
  ];

  return (
    <div className="group relative min-h-[560px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#080808] p-7 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[130px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex items-start justify-between">

          <div>

            <div className="mb-5 flex items-center gap-2">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />

                <span className="relative h-2 w-2 rounded-full bg-white" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/35">
                Typography System
              </span>

            </div>

            <h2 className="text-[30px] font-medium leading-[1.05] tracking-[-0.04em]">
              Typography
              <br />

              <span className="text-white/35">
                Master
              </span>
            </h2>

            <p className="mt-5 max-w-[390px] text-[13px] leading-6 text-white/40">
              Build scalable type systems with precise hierarchy,
              rhythm, spacing, and responsive sizing.
            </p>

          </div>

          {/* Typography Icon */}
          <motion.div
            whileHover={{ rotate: -8, scale: 1.05 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]"
          >
            <span className="font-serif text-xl text-white/80">
              T
            </span>
          </motion.div>

        </div>


        {/* TYPOGRAPHY PREVIEW */}
        <div className="relative mt-10 overflow-hidden rounded-[22px] border border-white/[0.08] bg-black/50 p-4 backdrop-blur-xl">

          {/* Toolbar */}
          <div className="mb-4 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Type Scale
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[8px] text-white/40">
                1.25×
              </span>

            </div>

            <span className="text-[8px] uppercase tracking-widest text-white/20">
              Inter
            </span>

          </div>


          {/* Heading preview */}
          <div className="divide-y divide-white/[0.06]">

            {typography.map((type, index) => (

              <motion.div
                key={type.label}
                whileHover={{
                  x: 5,
                  backgroundColor: "rgba(255,255,255,0.025)",
                }}
                transition={{ duration: 0.25 }}
                className="group/type flex cursor-pointer items-center gap-4 rounded-lg px-2 py-3"
              >

                {/* Label */}
                <span className="w-7 text-[8px] font-medium tracking-widest text-white/20 transition-colors group-hover/type:text-white/60">
                  {type.label}
                </span>

                {/* Text */}
                <div className="min-w-0 flex-1">

                  <p
                    className={`${type.size} ${type.width} truncate tracking-[-0.03em] text-white/80`}
                  >
                    {index === 0
                      ? "Design without limits"
                      : index === 1
                      ? "Build better systems"
                      : index === 2
                      ? "Create with precision"
                      : index === 3
                      ? "Beautiful by default"
                      : index === 4
                      ? "Consistent type hierarchy"
                      : "Readable everywhere"}
                  </p>

                </div>

                {/* Size */}
                <span className="text-[8px] tabular-nums text-white/20">
                  {["48", "36", "30", "24", "20", "16"][index]}px
                </span>

              </motion.div>

            ))}

          </div>

        </div>


        {/* METRICS */}
        <div className="mt-4 grid grid-cols-3 gap-2">

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">

            <p className="text-[8px] uppercase tracking-widest text-white/20">
              Scale
            </p>

            <p className="mt-1 text-[11px] text-white/65">
              1.25×
            </p>

          </div>


          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">

            <p className="text-[8px] uppercase tracking-widest text-white/20">
              Base
            </p>

            <p className="mt-1 text-[11px] text-white/65">
              16px
            </p>

          </div>


          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">

            <p className="text-[8px] uppercase tracking-widest text-white/20">
              Weight
            </p>

            <p className="mt-1 text-[11px] text-white/65">
              400–600
            </p>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="mt-7 flex items-center justify-between">

          <div>

            <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
              Type System
            </p>

            <p className="mt-1 text-[11px] text-white/45">
              Responsive · Scalable · Consistent
            </p>

          </div>


          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group/button flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[11px] font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.15)]"
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

export default TypoCard;

