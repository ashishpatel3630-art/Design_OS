"use client";
import React from "react";
import { motion } from "framer-motion";

function Design() {
  const brands = [
    "Figma",
    "Stripe",
    "Framer",
    "Adobe",
    "Linear",
    "Patrex Media",
  ];

  return (
    <section className="relative overflow-hidden py-28">
      {/* Glow */}

      <div
        className="
absolute
left-1/2
top-10
-translate-x-1/2
h-96
w-96
rounded-full
bg-blue-500/20
blur-[120px]
"
      />

      <div
        className="
relative
z-10
max-w-7xl
mx-auto
px-6
lg:px-20
"
      >
        {/* HERO CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
text-center
"
        >
          <h1
            className="
text-5xl
md:text-7xl
font-bold
text-white
tracking-tight
"
          >
            Design Faster.
            <br />
            <span
              className="
bg-gradient-to-r
from-purple-500
via-blue-500
to-cyan-400
bg-clip-text
text-transparent
"
            >
              Think Bigger.
            </span>
            <br />
            Ship Beautiful.
          </h1>

          <p
            className="
mt-6
max-w-2xl
mx-auto
text-lg
text-gray-400
"
          >
            A powerful AI design workspace that helps you create interfaces,
            animations and experiences faster than ever.
          </p>

          <div
            className="
mt-10
flex
justify-center
gap-4
"
          >
            <button
              className="
rounded-full
bg-white
px-8
py-3
text-black
font-semibold
hover:scale-105
transition
"
            >
              Start Creating
            </button>

            <button
              className="
rounded-full
border
border-white/20
bg-white/5
px-8
py-3
text-white
backdrop-blur-xl
"
            >
              Explore Tools
            </button>
          </div>
        </motion.div>

        {/* TRUSTED BRAND MARQUEE */}

        <div className="mt-24 overflow-hidden">
          <p
            className="
text-center
text-sm
uppercase
tracking-widest
text-gray-500
mb-10
"
          >
            Trusted by designers at
          </p>

          <div
            className="
relative
flex
overflow-hidden
"
          >
            <motion.div
              className="
flex
gap-6
"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="
min-w-[180px]
h-20
flex
items-center
justify-center
rounded-2xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
text-gray-300
font-semibold
hover:text-white
transition
"
                >
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Design;
