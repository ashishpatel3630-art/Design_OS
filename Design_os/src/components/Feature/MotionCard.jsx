import React, { useState } from "react";
import { motion } from "framer-motion";

function MotionCard() {
  const motions = [
    {
      name: "Spring",
      type: "spring",
      description: "Natural",
    },
    {
      name: "Smooth",
      type: "smooth",
      description: "Elegant",
    },
    {
      name: "Bounce",
      type: "bounce",
      description: "Playful",
    },
    {
      name: "Float",
      type: "float",
      description: "Ambient",
    },
  ];

  const [activeMotion, setActiveMotion] = useState(0);

  const active = motions[activeMotion];

  const getAnimation = () => {
    switch (active.type) {
      case "spring":
        return {
          y: [0, -28, 0],
          scale: [1, 1.05, 1],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };

      case "smooth":
        return {
          x: [0, 35, 0],
          transition: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };

      case "bounce":
        return {
          y: [0, -45, 0],
          transition: {
            duration: 1.1,
            repeat: Infinity,
            ease: [0.68, -0.55, 0.27, 1.55],
          },
        };

      case "float":
        return {
          y: [0, -18, 0],
          rotate: [0, 3, 0, -3, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };

      default:
        return {};
    }
  };

  return (
    <div className="group relative min-h-[560px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#080808] p-7 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-white/[0.14]">
      {/* Ambient */}
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
                Motion Intelligence
              </span>
            </div>

            <h2 className="text-[30px] font-medium leading-[1.05] tracking-[-0.04em]">
              Motion
              <br />
              <span className="text-white/35">Studio</span>
            </h2>

            <p className="mt-5 max-w-[390px] text-[13px] leading-6 text-white/40">
              Design expressive motion with refined easing, timing, transitions,
              and interaction presets.
            </p>
          </div>

          {/* Icon */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035]"
          >
            <div className="h-5 w-5 rounded-full border border-white/30">
              <div className="ml-3 mt-1 h-1.5 w-1.5 rounded-full bg-white" />
            </div>
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
                Motion Preview
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[8px] text-white/40">
                PLAYING
              </span>
            </div>

            <span className="text-[8px] text-white/20">{active.name}</span>
          </div>

          {/* MOTION STAGE */}
          <div className="relative flex h-[190px] items-center justify-center overflow-hidden rounded-[16px] bg-[#101010]">
            {/* Grid lines */}
            <div className="absolute inset-x-8 top-1/2 h-px bg-white/[0.06]" />

            <div className="absolute inset-y-8 left-1/2 w-px bg-white/[0.06]" />

            {/* Glow */}
            <div className="absolute h-24 w-24 rounded-full bg-white/[0.04] blur-2xl" />

            {/* Animated object */}
            <motion.div
              key={activeMotion}
              animate={getAnimation()}
              className="relative h-16 w-16 rounded-2xl bg-white shadow-[0_20px_60px_rgba(255,255,255,0.12)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-white/70" />

              <div className="absolute left-3 top-3 h-2 w-2 rounded-full bg-black/10" />
            </motion.div>
          </div>

          {/* MOTION PRESETS */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {motions.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => setActiveMotion(index)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className={`rounded-xl border p-2 transition-all ${
                  activeMotion === index
                    ? "border-white/30 bg-white/[0.08]"
                    : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                <div className="mx-auto mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-white/10">
                  <motion.div
                    animate={{
                      y: activeMotion === index ? [-2, 2, -2] : 0,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-white/70"
                  />
                </div>

                <p className="text-[8px] text-white/50">{item.name}</p>
              </motion.button>
            ))}
          </div>

          {/* MOTION DATA */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Preset
              </p>

              <p className="mt-2 text-[11px] text-white/65">{active.name}</p>
            </div>

            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/25">
                Style
              </p>

              <p className="mt-2 text-[11px] text-white/65">
                {active.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM */}
        <div className="mt-7 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
              Animation
            </p>

            <p className="mt-1 font-mono text-[10px] text-white/35">
              {active.type} · infinite
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group/button flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[11px] font-medium text-black shadow-[0_8px_30px_rgba(255,255,255,0.08)] transition-all hover:shadow-[0_8px_40px_rgba(255,255,255,0.16)]"
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

export default MotionCard;
