import React, { useRef } from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import Badge from "../ui/Badge";
import HeroButtons from "./HeroButtons";

// Spring Physics

const springConfig = {
  damping: 25,
  stiffness: 200,
};

// Container Animation

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Word Reveal Animation

const wordVariants = {
  hidden: {
    opacity: 0,

    y: 80,

    rotateX: -70,

    filter: "blur(20px)",
  },

  show: {
    opacity: 1,

    y: 0,

    rotateX: 0,

    filter: "blur(0px)",

    transition: {
      duration: 0.9,

      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Fade Animation

const itemVariants = {
  hidden: {
    opacity: 0,

    y: 30,

    filter: "blur(12px)",
  },

  show: {
    opacity: 1,

    y: 0,

    filter: "blur(0px)",

    transition: {
      duration: 0.8,

      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const containerRef = useRef(null);

  // Mouse 3D

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),

    springConfig,
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),

    springConfig,
  );

  // Spotlight

  const spotlightX = useMotionValue(0);

  const spotlightY = useMotionValue(0);

  const spotlightXSmooth = useSpring(spotlightX, springConfig);

  const spotlightYSmooth = useSpring(spotlightY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    spotlightX.set(x);

    spotlightY.set(y);

    mouseX.set(x / rect.width - 0.5);

    mouseY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);

    mouseY.set(0);
  };

  const words = ["Create Colors", "Typography", "Motion", "Like" ,"Never Before"];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="

relative

min-h-screen

overflow-hidden

flex

items-center

justify-center

bg-[#030303]

pt-32

"
    >
      {/* Cursor Spotlight */}

      <motion.div
        style={{
          x: spotlightXSmooth,

          y: spotlightYSmooth,
        }}
        className="

absolute

pointer-events-none

w-[450px]

h-[450px]

rounded-full

bg-white/[0.08]

blur-[140px]

-translate-x-1/2

-translate-y-1/2

"
      />

      {/* Ambient Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],

          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,

          repeat: Infinity,

          ease: "easeInOut",
        }}
        className="

absolute

top-[-250px]

left-1/2

-translate-x-1/2

w-[900px]

h-[600px]

rounded-full

bg-gradient-to-br

from-purple-500/20

via-white/10

to-transparent

blur-[180px]

"
      />

      {/* Main Content */}

      <motion.div
        style={{
          rotateX,

          rotateY,

          transformStyle: "preserve-3d",
        }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="

relative

z-10

flex

flex-col

items-center

text-center

px-6

"
      >
        {/* Badge */}

        <motion.div variants={itemVariants}>
          <Badge />
        </motion.div>

        {/* Heading */}

        <motion.h1
          className="

mt-12

max-w-6xl

text-5xl

sm:text-6xl

md:text-8xl

font-semibold

tracking-tight

leading-[1.05]

text-white

drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]

"
        >
          {words.map((word, index) => (
            <motion.span
              key={word}
              variants={wordVariants}
              className={
                word === "Limits"
                  ? `

inline-block

mx-2

bg-gradient-to-r

from-[#ffffff]

via-[#e5e5e5]

to-[#E2C044]

bg-clip-text

text-transparent

`
                  : `

inline-block

mx-2

`
              }
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}

        <motion.p
          variants={itemVariants}
          className="

mt-8

max-w-3xl

text-gray-400

text-lg

leading-relaxed

"
        >
          Design OS is a futuristic AI workspace where design systems,
          creativity and motion intelligence combine into one powerful operating
          system.
        </motion.p>

        {/* CTA */}

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -5,
          }}
          transition={{
            type: "spring",

            stiffness: 300,
          }}
          className="

mt-10

"
        >
          <HeroButtons />
        </motion.div>
      </motion.div>
    </section>
  );
}
