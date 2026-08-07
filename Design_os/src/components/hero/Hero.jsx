import React from "react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      {/* Neutral Ambient Background */}
      <div
        className="
        absolute 
        top-0 
        left-1/2 
        -translate-x-1/2
        h-[500px]
        w-[700px]
        rounded-full
        bg-white/[0.03]
        blur-[140px]
      "
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <Badge>The Future of Design</Badge>
        </motion.div>

        {/* Heading */}
        <motion.div variants={item} className="mt-16 max-w-6xl">
          <h1
            className="
            text-6xl 
            md:text-8xl 
            font-semibold
            tracking-tight
            leading-[1.05]
            text-white
          "
          >
            Create
            <span
              className="
              bg-gradient-to-r 
              from-white 
              via-gray-300 
              to-gray-500
              bg-clip-text 
              text-transparent
            "
            >
              {" "}
              Colors
            </span>{" "}
            Typography & Motion
            <br />
            Like Never Before
          </h1>

          <p
            className="
            mt-8
            max-w-3xl
            mx-auto
            text-lg
            text-gray-400
            leading-relaxed
          "
          >
            Design OS is a futuristic workspace where creativity, systems and
            motion come together.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={item} className="flex gap-5 mt-12">
          <motion.button
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            className="
              px-8
              py-3
              rounded-full
              border
              border-white/15
              text-white
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            className="
              px-8
              py-3
              rounded-full
              bg-white
              text-black
              font-medium
            "
          >
            Explore
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
