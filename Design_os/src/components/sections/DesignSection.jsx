import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    filter: "blur(15px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function DesignSection() {
  return (
    <section
      className="
relative
py-32
bg-[#030303]
overflow-hidden
"
    >
      {/* Background Glow */}

      <div
        className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[700px]
h-[500px]
rounded-full
bg-purple-500/10
blur-[160px]
"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
relative
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-20
items-center
"
      >
        {/* LEFT */}

        <motion.div variants={item}>
          <p
            className="
text-sm
uppercase
tracking-[0.3em]
text-gray-400
"
          >
            Everything Designers Need
          </p>

          <h2
            className="
mt-6
text-5xl
md:text-6xl
font-semibold
leading-tight
text-white
"
          >
            Design.
            <br />
            Animate.
            <br />
            Export.
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
              All in One Place.
            </span>
          </h2>

          <p
            className="
mt-6
max-w-lg
text-gray-400
leading-7
"
          >
            Build beautiful interfaces, create animations, manage design systems
            and export production-ready assets from one intelligent AI
            workspace.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
mt-8
px-7
py-3
rounded-xl
bg-white
text-black
font-semibold
hover:bg-gray-200
transition
"
          >
            Start Free Trial
          </motion.button>
        </motion.div>

        {/* RIGHT AI WORKSPACE PANEL */}

        <motion.div
          variants={item}
          className="
relative
"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
relative
h-[520px]
rounded-[36px]
bg-[#080808]
border
border-white/10
overflow-hidden
shadow-[0_30px_100px_rgba(0,0,0,0.8)]
"
          >
            {/* Ambient Glow */}

            <div
              className="
absolute
top-[-120px]
right-[-80px]
w-[350px]
h-[350px]
rounded-full
bg-purple-500/20
blur-[140px]
"
            />

            <div
              className="
absolute
bottom-[-100px]
left-[-80px]
w-[300px]
h-[300px]
rounded-full
bg-white/5
blur-[120px]
"
            />

            {/* TOP BAR */}

            <div
              className="
relative
z-20
flex
items-center
justify-between
px-6
py-5
border-b
border-white/10
bg-black/40
backdrop-blur-xl
"
            >
              <div className="flex items-center gap-3">
                <div
                  className="
w-10
h-10
rounded-xl
bg-white/10
border
border-white/10
flex
items-center
justify-center
"
                >
                  ✦
                </div>

                <div>
                  <p
                    className="
text-xs
text-gray-500
uppercase
tracking-widest
"
                  >
                    Design OS
                  </p>

                  <p
                    className="
text-white
font-medium
"
                  >
                    Creative Engine
                  </p>
                </div>
              </div>

              <div
                className="
flex
items-center
gap-2
px-3
py-1.5
rounded-full
bg-white/5
border
border-white/10
"
              >
                <span
                  className="
w-2
h-2
rounded-full
bg-green-400
"
                />

                <span
                  className="
text-xs
text-gray-300
"
                >
                  AI Active
                </span>
              </div>
            </div>

            {/* SCROLL WORKSPACE */}

            <div
              className="
h-[430px]
overflow-y-auto
p-6
space-y-6
"
            >
              {/* Main Preview */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="
relative
h-48
rounded-3xl
bg-gradient-to-br
from-white/10
via-white/5
to-purple-500/20
border
border-white/10
overflow-hidden
"
              >
                <div
                  className="
absolute
inset-0
bg-gradient-to-br
from-transparent
via-white/5
to-transparent
"
                />

                <div
                  className="
absolute
bottom-5
left-5
"
                >
                  <p
                    className="
text-white
font-semibold
"
                  >
                    AI Generated Interface
                  </p>

                  <p
                    className="
text-gray-400
text-sm
"
                  >
                    Ready for production
                  </p>
                </div>
              </motion.div>

              {/* GRID CARDS */}

              <div
                className="
grid
grid-cols-2
gap-4
"
              >
                {/* Color System */}

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
rounded-2xl
bg-white/[0.04]
border
border-white/10
p-4
"
                >
                  <p
                    className="
text-gray-400
text-xs
"
                  >
                    Color System
                  </p>

                  <div
                    className="
flex
gap-2
mt-4
"
                  >
                    <div
                      className="
w-8
h-8
rounded-lg
bg-white
"
                    />

                    <div
                      className="
w-8
h-8
rounded-lg
bg-gray-500
"
                    />

                    <div
                      className="
w-8
h-8
rounded-lg
bg-purple-500
"
                    />
                  </div>
                </motion.div>

                {/* Typography */}

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
rounded-2xl
bg-white/[0.04]
border
border-white/10
p-4
"
                >
                  <p
                    className="
text-gray-400
text-xs
"
                  >
                    Typography
                  </p>

                  <p
                    className="
text-4xl
font-bold
text-white
mt-3
"
                  >
                    Aa
                  </p>
                </motion.div>
              </div>

              {/* Components */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
rounded-2xl
bg-white/[0.04]
border
border-white/10
p-5
"
              >
                <div
                  className="
flex
justify-between
"
                >
                  <p
                    className="
text-gray-300
"
                  >
                    Components Library
                  </p>

                  <span
                    className="
text-purple-400
text-sm
"
                  >
                    240+
                  </span>
                </div>

                <div
                  className="
flex
gap-5
mt-5

"
                >
                  <div
                    className="
h-12
flex-1
rounded-xl
bg-red-400
"
                  />
                  <div
                    className="
h-12
flex-1
rounded-xl
bg-green-400
"
                  />
                  <div
                    className="
h-12
flex-1
rounded-xl
bg-purple-500
"
                  />
                  <div
                    className="
h-12
flex-1
rounded-xl
bg-white/10
"
                  />
                  <div
                    className="
h-12
flex-1
rounded-xl
bg-yellow-200
"
                  />
                  <div
                    className="
h-12
flex-1
rounded-xl
bg-orange-400
"
                  />

                  <div
                    className="
h-12
flex-1
rounded-xl
bg-red-700
"
                  />

                  <div
                    className="
h-12
flex-1
rounded-xl
bg-blue-500
"
                  />
                </div>
              </motion.div>

              {/* AI CODE */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="
rounded-2xl
bg-black
border
border-white/10
p-5
font-mono
text-sm
"
              >
                <p
                  className="
text-purple-400
"
                >
                  AI.generate()
                </p>

                <p
                  className="
text-gray-500
mt-2
"
                >
                  ✓ UI created
                  <br />
                  ✓ Responsive
                  <br />✓ Production ready
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <DesignSection />
    </section>
  );
}
