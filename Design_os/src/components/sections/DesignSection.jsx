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
    <section className="relative overflow-hidden bg-black py-32">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-gray-500/10
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
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          px-6
          md:grid-cols-2
        "
      >
        {/* LEFT SIDE */}
        <motion.div variants={item}>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Everything Designers Need
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-tight text-white md:text-6xl">
            Design.
            <br />
            Animate.
            <br />
            Export.
            <br />
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
              All in One Place.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-gray-400 leading-7">
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
              rounded-xl
              bg-white
              px-7
              py-3
              font-semibold
              text-black
              transition
              hover:bg-gray-200
            "
          >
            Start Free Trial
          </motion.button>
        </motion.div>

        {/* RIGHT AI WORKSPACE */}
        <motion.div variants={item} className="relative">
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
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-[#080808]
              shadow-[0_30px_100px_rgba(0,0,0,0.8)]
            "
          >
            {/* Ambient Glow */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-80px]
                top-[-120px]
                h-[350px]
                w-[350px]
                rounded-full
                bg-purple-500/20
                blur-[140px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-100px]
                left-[-80px]
                h-[300px]
                w-[300px]
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
                border-b
                border-white/10
                bg-black/40
                px-6
                py-5
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-3">
                <div className="text-xl text-purple-400">✦</div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Design OS
                  </p>

                  <p className="font-medium text-white">Creative Engine</p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                "
              >
                <span className="h-2 w-2 rounded-full bg-green-400" />

                <span className="text-xs text-gray-300">AI Active</span>
              </div>
            </div>

            {/* WORKSPACE */}
            <div className="h-[430px] space-y-6 overflow-y-auto p-6">
              {/* MAIN PREVIEW */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  relative
                  h-48
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-white/10
                  via-white/5
                  to-purple-500/20
                "
              >
                <div className="absolute bottom-5 left-5">
                  <h3 className="font-semibold text-white">
                    AI Generated Interface
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Ready for production
                  </p>
                </div>
              </motion.div>

              {/* GRID CARDS */}
              <div className="grid grid-cols-2 gap-4">
                {/* COLOR SYSTEM */}
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <p className="text-sm text-gray-300">Color System</p>

                  <div className="mt-4 flex gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gray-500" />
                    <div className="h-8 w-8 rounded-lg bg-purple-500" />
                    <div className="h-8 w-8 rounded-lg bg-blue-500" />
                  </div>
                </motion.div>

                {/* TYPOGRAPHY */}
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-4
                  "
                >
                  <p className="text-sm text-gray-300">Typography</p>

                  <p className="mt-3 text-4xl font-bold text-white">Aa</p>
                </motion.div>
              </div>

              {/* COMPONENT LIBRARY */}
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-gray-300">Components Library</p>

                  <span className="text-sm text-purple-400">240+</span>
                </div>

                <div className="mt-5 flex gap-5">
                  <div className="h-12 flex-1 rounded-xl bg-red-700" />
                  <div className="h-12 flex-1 rounded-xl bg-blue-500" />
                </div>
              </motion.div>

              {/* AI CODE */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black
                  p-5
                  font-mono
                  text-sm
                "
              >
                <p className="text-purple-400">AI.generate()</p>

                <p className="mt-2 text-gray-500">
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
    </section>
  );
}
