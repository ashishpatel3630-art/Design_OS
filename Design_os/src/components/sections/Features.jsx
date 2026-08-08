import React from "react";
import { motion } from "framer-motion";
import ColorCard from "../Feature/ColorCard";

function Features() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 bg-black">
      {/* Content */}
      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1500px]
          flex-col
          items-center
          text-center
        "
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mb-7
            flex
            items-center
            justify-center
            gap-3
            text-[11px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-[#777]
          "
        >
          <span className="h-px w-8 bg-[#333]" />

          <span>Design System</span>

          <span className="text-[#444]">•</span>

          <span>01</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            max-w-[900px]
            text-[44px]
            font-semibold
            leading-[0.98]
            tracking-[-0.045em]
            text-[#F5F5F5]
            sm:text-[56px]
            md:text-[68px]
            lg:text-[78px]
          "
        >
          Everything you need to build a{" "}
          <span className="text-[#777]">visual system.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            max-w-[650px]
            text-[16px]
            leading-7
            text-[#777]
            sm:text-[18px]
            sm:leading-8
          "
        >
          Create, refine, and ship colors, typography, motion, gradients,
          assets, and design tokens from one unified workspace.
        </motion.p>

        {/* Color Card */}
        <div className="mt-16 w-full ">
          <ColorCard />
        </div>
      </div>
    </section>
  );
}

export default Features;
