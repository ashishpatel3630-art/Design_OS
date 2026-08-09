import React from "react";
import { motion } from "framer-motion";

function Showcase() {
  const nodes = [
    {
      title: "Button",
      type: "button",
      className: "left-[3%] top-[8%] lg:left-[7%]",
    },
    {
      title: "Docs",
      type: "docs",
      className: "left-[2%] top-[42%] lg:left-[5%]",
    },
    {
      title: "Icons",
      type: "icons",
      className: "left-[5%] bottom-[8%] lg:left-[10%]",
    },
    {
      title: "Versions",
      type: "versions",
      className: "right-[3%] top-[7%] lg:right-[7%]",
    },
    {
      title: "Colors",
      type: "colors",
      className: "right-[2%] top-[43%] lg:right-[5%]",
    },
    {
      title: "Components",
      type: "components",
      className: "right-[5%] bottom-[8%] lg:right-[10%]",
    },
  ];

  const paths = [
    "M 180 95 C 300 120, 390 170, 500 210",
    "M 155 210 C 290 210, 390 210, 500 210",
    "M 185 335 C 300 315, 390 260, 500 210",

    "M 820 95 C 700 120, 610 170, 500 210",
    "M 845 210 C 710 210, 610 210, 500 210",
    "M 815 335 C 700 315, 610 260, 500 210",
  ];

  return (
    <section className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#050505] px-4 py-6 sm:px-8 sm:py-8 lg:h-[520px] lg:px-0 lg:py-0">
      
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]" />

      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[180px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[100px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/[0.03]" />

      {/* CONNECTION SYSTEM */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        viewBox="0 0 1000 420"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {paths.map((path, index) => (
          <React.Fragment key={index}>
            {/* Base connection */}
            <motion.path
              d={path}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              strokeDasharray="3 7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.08,
              }}
            />

            {/* Moving light */}
            <motion.path
              d={path}
              fill="none"
              stroke="url(#connectionGradient)"
              strokeWidth="1.5"
              strokeDasharray="22 180"
              filter="url(#softGlow)"
              animate={{
                strokeDashoffset: [0, -220],
              }}
              transition={{
                duration: 3.5 + index * 0.25,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3,
              }}
            />
          </React.Fragment>
        ))}

        {/* Center rings */}
        <motion.circle
          cx="500"
          cy="210"
          r="52"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          animate={{
            r: [48, 72, 48],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="500"
          cy="210"
          r="82"
          fill="none"
          stroke="rgba(255,255,255,0.025)"
          strokeWidth="1"
          animate={{
            r: [75, 95, 75],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* CENTER CORE */}
      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          hidden
          -translate-x-1/2
          -translate-y-1/2
          lg:block
        "
      >
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          className="
            relative
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-[26px]
            border
            border-white/[0.14]
            bg-[#0a0a0a]/90
            shadow-[0_0_60px_rgba(255,255,255,0.08)]
            backdrop-blur-2xl
          "
        >
          {/* Inner border */}
          <div className="absolute inset-2 rounded-[20px] border border-white/[0.05]" />

          {/* Core */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.12] bg-white/[0.04]">
            <motion.div
              animate={{
                scale: [1, 1.18, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                h-4
                w-4
                rounded-[5px]
                bg-white
                shadow-[0_0_24px_rgba(255,255,255,0.55)]
              "
            />
          </div>
        </motion.div>
      </motion.div>

      {/* NODES */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.title}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, index % 2 === 0 ? -5 : 5, 0],
          }}
          transition={{
            opacity: {
              duration: 0.6,
              delay: index * 0.1,
            },
            scale: {
              duration: 0.6,
              delay: index * 0.1,
            },
            y: {
              duration: 4.5 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.05,
            y: -5,
          }}
          className={`absolute z-10 ${node.className}`}
        >
          <div
            className="
              w-[145px]
              rounded-2xl
              border
              border-white/[0.09]
              bg-[#0b0b0b]/85
              p-3
              shadow-[0_15px_40px_rgba(0,0,0,0.55)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/[0.2]
              hover:bg-[#101010]
            "
          >
            {/* Node Header */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
                {node.title}
              </span>

              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-white/40" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-white/70" />
              </span>
            </div>

            {/* Button */}
            {node.type === "button" && (
              <button className="w-full rounded-lg bg-white py-1.5 text-[9px] font-semibold text-black transition-all hover:bg-white/90">
                Primary Action
              </button>
            )}

            {/* Docs */}
            {node.type === "docs" && (
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/20" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
                <div className="h-1.5 w-3/5 rounded-full bg-white/[0.06]" />
              </div>
            )}

            {/* Icons */}
            {node.type === "icons" && (
              <div className="flex justify-between gap-1">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{
                      y: -3,
                    }}
                    className={`
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white/10
                      ${
                        item === 1
                          ? "bg-white/[0.12]"
                          : "bg-white/[0.03]"
                      }
                    `}
                  >
                    <div
                      className={`h-2 w-2 rounded-sm ${
                        item === 1
                          ? "bg-white"
                          : "bg-white/20"
                      }`}
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Versions */}
            {node.type === "versions" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[9px]">
                  <span className="flex items-center gap-1.5 text-white/65">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    v2.1.0
                  </span>

                  <span className="text-[8px] text-white/30">
                    Active
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[9px] text-white/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                  v2.0.5
                </div>
              </div>
            )}

            {/* Colors */}
            {node.type === "colors" && (
              <div className="flex justify-between gap-1.5">
                <div className="h-5 w-5 rounded-md bg-white" />
                <div className="h-5 w-5 rounded-md bg-[#777]" />
                <div className="h-5 w-5 rounded-md bg-[#444]" />
                <div className="h-5 w-5 rounded-md bg-[#1a1a1a] ring-1 ring-white/10" />
              </div>
            )}

            {/* Components */}
            {node.type === "components" && (
              <div className="space-y-2">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-sm bg-white/40" />

                    <div
                      className={`
                        h-1.5
                        rounded-full
                        bg-white/15
                        ${item === 1 ? "w-16" : item === 2 ? "w-11" : "w-14"}
                      `}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}

      {/* Mobile Core */}
      <div className="relative z-20 flex min-h-[420px] items-center justify-center lg:hidden">
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-24 w-24 items-center justify-center rounded-[26px] border border-white/[0.12] bg-[#0b0b0b] shadow-[0_0_60px_rgba(255,255,255,0.08)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
            <div className="h-4 w-4 rounded-[5px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
          </div>
        </motion.div>
      </div>

      {/* STATUS */}
      <div className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 lg:block">
        <motion.div
          whileHover={{
            scale: 1.04,
          }}
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-black/60
            px-4
            py-1.5
            text-[9px]
            font-medium
            tracking-[0.2em]
            text-white/35
            backdrop-blur-xl
          "
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-white/40" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-white/70" />
          </span>

          SYSTEM CONNECTED
        </motion.div>
      </div>
    </section>
  );
}

export default Showcase;