import React from "react";
import { motion } from "framer-motion";

import ColorCard from "../Feature/ColorCard";
import TypoCard from "../Feature/TypoCard";
import GradientCard from "../Feature/GradientCard";
import ShadowCard from "../Feature/ShadowCard";
import MotionCard from "../Feature/MotionCard";

function Features() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:px-10 lg:px-16">
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ========================================
          CONTAINER
      ======================================== */}

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* ========================================
            HEADER
        ======================================== */}

        <div className="mx-auto max-w-[950px] text-center">
          {/* Eyebrow */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-7 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[#777]"
          >
            <span>Design System</span>

            <span className="text-[#444]">•</span>

            <span>01</span>
          </motion.div>

          {/* Heading */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-[900px] text-[44px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#F5F5F5] sm:text-[56px] md:text-[68px] lg:text-[78px]"
          >
            Everything you need to build{" "}
            <span className="text-[#777]">a visual system.</span>
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-7 max-w-[650px] text-[16px] leading-7 text-[#777] sm:text-[18px] sm:leading-8"
          >
            Create, refine, and ship colors, typography, motion, gradients,
            assets, and design tokens from one unified workspace.
          </motion.p>
        </div>

        {/* ========================================
            FEATURE GRID
        ======================================== */}

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* COLOR */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.05,
            }}
            className="min-w-0"
          >
            <ColorCard />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="min-w-0"
          >
            <TypoCard />
          </motion.div>

          {/* GRADIENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.15,
            }}
            className="min-w-0 md:col-span-2"
          >
            <GradientCard />
          </motion.div>

          {/* SHADOW */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.2,
            }}
            className="min-w-0"
          >
            <ShadowCard />
          </motion.div>

          {/* MOTION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.25,
            }}
            className="min-w-0"
          >
            <MotionCard />
          </motion.div>
        </div>

        {/* ========================================
            BOTTOM LINE
        ======================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-12 flex items-center justify-between border-t border-white/[0.06] pt-6"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            Design OS
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            05 Tools · One Workspace
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
