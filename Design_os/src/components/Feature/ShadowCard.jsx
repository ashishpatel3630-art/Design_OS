import React, { useState } from "react";
import { motion } from "framer-motion";

function ShadowCard() {
  const shadows = [
    {
      name: "Soft",
      blur: "40px",
      spread: "0px",
      y: "18px",
      opacity: "0.18",
      css: "0 18px 40px rgba(0,0,0,0.18)",
    },
    {
      name: "Elevated",
      blur: "60px",
      spread: "0px",
      y: "28px",
      opacity: "0.28",
      css: "0 28px 60px rgba(0,0,0,0.28)",
    },
    {
      name: "Floating",
      blur: "80px",
      spread: "-10px",
      y: "35px",
      opacity: "0.35",
      css: "0 35px 80px rgba(0,0,0,0.35)",
    },
    {
      name: "Sharp",
      blur: "18px",
      spread: "-4px",
      y: "10px",
      opacity: "0.32",
      css: "0 10px 18px rgba(0,0,0,0.32)",
    },
  ];

  const [activeShadow, setActiveShadow] = useState(1);

  const shadow = shadows[activeShadow];

  return (
    <div className="group relative min-h-[560px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#080808] p-7 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-white/[0.14]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[120px] transition-all duration-700 group-hover:bg-white/[0.06]" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[130px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        {/* HEADER */}
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30" />

                <span className="relative h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.8)]" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/35">
                Shadow Intelligence
              </span>
            </div>

            <h2 className="text-[30px] font-medium leading-[1.05] tracking-[-0.04em]">
              Shadow
              <br />
              <span className="text-white/35">Generator</span>
            </h2>

            <p className="mt-5 max-w-[390px] text-[13px] leading-6 text-white/40">
              Create layered shadows with precise depth, blur, spread, and
              elevation control.
            </p>
          </div>

          {/* Icon */}
          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: -8,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]"
          >
            <div className="h-5 w-5 rounded-md bg-white shadow-[0_10px_25px_rgba(255,255,255,0.25)]" />
          </motion.div>
        </div>

        {/* WORKSPACE */}
        <motion.div
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
          className="relative mt-10 rounded-[22px] border border-white/[0.08] bg-black/50 p-3 backdrop-blur-xl"
        >
          {/* Toolbar */}
          <div className="mb-3 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
                Live Preview
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[8px] text-white/40">
                LIVE
              </span>
            </div>

            <span className="text-[8px] text-white/20">{shadow.name}</span>
          </div>

          {/* SHADOW PREVIEW */}
          <div className="relative flex h-[190px] items-center justify-center overflow-hidden rounded-[16px] bg-[#111]">
            {/* Floor */}
            <div className="absolute bottom-7 h-8 w-48 rounded-full bg-black/40 blur-xl" />

            <motion.div
              key={activeShadow}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative h-24 w-24 rounded-2xl bg-white"
              style={{
                boxShadow: `0 ${shadow.y} ${shadow.blur} ${shadow.spread} rgba(0,0,0,${shadow.opacity})`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-white/80" />
            </motion.div>
          </div>

          {/* PRESETS */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {shadows.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => setActiveShadow(index)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className={`relative rounded-xl border p-2 text-left transition-all ${
                  activeShadow === index
                    ? "border-white/30 bg-white/[0.08]"
                    : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                <div
                  className="mx-auto mb-2 h-7 w-7 rounded-lg bg-white"
                  style={{
                    boxShadow: `0 7px 14px rgba(0,0,0,${item.opacity})`,
                  }}
                />

                <p className="text-center text-[8px] text-white/45">
                  {item.name}
                </p>
              </motion.button>
            ))}
          </div>

          {/* DATA */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Blur
              </p>

              <p className="mt-2 text-[11px] text-white/65">{shadow.blur}</p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Elevation
              </p>

              <p className="mt-2 text-[11px] text-white/65">{shadow.y}</p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="mt-7 flex items-center justify-between">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
              CSS Shadow
            </p>

            <p className="mt-1 max-w-[250px] truncate font-mono text-[10px] text-white/35">
              {shadow.css}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group/button flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-[11px] font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.08)] transition-all hover:shadow-[0_8px_40px_rgba(255,255,255,0.16)]"
          >
            Open Editor
            <span className="transition-transform group-hover/button:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default ShadowCard;
