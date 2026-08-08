
import { motion } from "framer-motion";
import DesignScroll from "../ui/DesignScroll";

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
      ease: [0.16, 1, 0.3, 1] 
    },
  },
};

export default function DesignSection() {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-20
            h-[600px]
            w-[800px]
            -translate-x-1/2
            rounded-full
            bg-white/[0.035]
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            right-[-200px]
            top-[30%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-white/[0.025]
            blur-[140px]
          "
        />

        {/* subtle grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />
      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}

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
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-20
          px-6
          md:grid-cols-2
        "
      >
        {/* =========================
            LEFT SIDE
        ========================= */}

        <motion.div variants={item}>
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
            Everything Designers Need
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-semibold
              leading-[0.95]
              tracking-[-0.04em]
              text-white
              md:text-7xl
            "
          >
            Design.
            <br />

            <span className="text-gray-400">Animate.</span>
            <br />

            Export.
            <br />

            <span
              className="
                bg-gradient-to-r
                from-white
                via-gray-300
                to-gray-600
                bg-clip-text
                text-transparent
              "
            >
              All in One Place.
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-lg
              text-base
              leading-7
              text-gray-500
            "
          >
            Build beautiful interfaces, create animations, manage design
            systems and export production-ready assets from one intelligent AI
            workspace.
          </p>

          {/* CTA */}

          <div className="mt-9 flex items-center gap-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                rounded-xl
                bg-white
                px-7
                py-3.5
                font-semibold
                text-black
                shadow-[0_10px_40px_rgba(255,255,255,0.08)]
                transition
                hover:bg-gray-200
              "
            >
              Start Free Trial
            </motion.button>

            <motion.button
              whileHover={{
                x: 4,
              }}
              className="
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3.5
                text-sm
                text-gray-300
                backdrop-blur-xl
                transition
                hover:bg-white/[0.07]
              "
            >
              Explore Design OS →
            </motion.button>
          </div>

          {/* Small stats */}

          <div className="mt-12 flex gap-10">
            <div>
              <p className="text-2xl font-semibold text-white">240+</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
                Components
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">∞</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
                Possibilities
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-white">AI</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
                Powered
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================
            RIGHT AI WORKSPACE
        ========================= */}

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
              h-[560px]
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-[#080808]
              shadow-[0_30px_100px_rgba(0,0,0,0.8)]
            "
          >
            {/* Ambient light */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-120px]
                top-[-150px]
                h-[400px]
                w-[400px]
                rounded-full
                bg-white/[0.06]
                blur-[150px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-150px]
                left-[-100px]
                h-[350px]
                w-[350px]
                rounded-full
                bg-gray-400/[0.04]
                blur-[130px]
              "
            />

            {/* =========================
                TOP BAR
            ========================= */}

            <div
              className="
                relative
                z-20
                flex
                items-center
                justify-between
                border-b
                border-white/10
                bg-black/60
                px-6
                py-5
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/10
                    bg-white
                    text-black
                  "
                >
                  ✦
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                    Design OS
                  </p>

                  <p className="text-sm font-medium text-white">
                    Creative Engine
                  </p>
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
                  bg-white/[0.04]
                  px-3
                  py-1.5
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />

                <span className="text-xs text-gray-400">
                  AI Active
                </span>
              </div>
            </div>

            {/* =========================
                WORKSPACE
            ========================= */}

            <div
              className="
                h-[470px]
                space-y-5
                overflow-y-auto
                p-6
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {/* HERO PREVIEW */}

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
                  from-white/[0.12]
                  via-white/[0.04]
                  to-gray-900
                "
              >
                {/* abstract UI */}

                <div className="absolute inset-5">
                  <div className="h-2 w-20 rounded-full bg-white/20" />

                  <div className="mt-5 h-3 w-40 rounded-full bg-white/10" />

                  <div className="mt-3 h-2 w-28 rounded-full bg-white/5" />

                  <div className="mt-8 flex gap-2">
                    <div className="h-12 flex-1 rounded-xl bg-white/10" />
                    <div className="h-12 flex-1 rounded-xl bg-white/5" />
                    <div className="h-12 flex-1 rounded-xl bg-white/10" />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5">
                  <h3 className="font-semibold text-white">
                    AI Generated Interface
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Ready for production
                  </p>
                </div>
              </motion.div>

              {/* =========================
                  COLOR + TYPOGRAPHY
              ========================= */}

              <div className="grid grid-cols-2 gap-4">
                {/* COLOR */}

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.035]
                    p-4
                  "
                >
                  <p className="text-sm text-gray-400">
                    Color System
                  </p>

                  <div className="mt-4 flex gap-2">
                    <div className="h-8 w-8 rounded-lg bg-white" />

                    <div className="h-8 w-8 rounded-lg bg-gray-500" />

                    <div className="h-8 w-8 rounded-lg bg-gray-800" />

                    <div className="h-8 w-8 rounded-lg bg-black ring-1 ring-white/10" />
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
                    bg-white/[0.035]
                    p-4
                  "
                >
                  <p className="text-sm text-gray-400">
                    Typography
                  </p>

                  <p className="mt-3 text-4xl font-bold tracking-tight text-white">
                    Aa
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Inter / Geist
                  </p>
                </motion.div>
              </div>

              {/* =========================
                  COMPONENT LIBRARY
              ========================= */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  p-5
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-gray-300">
                    Components Library
                  </p>

                  <span className="text-sm text-gray-500">
                    240+
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="h-12 rounded-xl bg-white" />

                  <div className="h-12 rounded-xl bg-gray-500" />

                  <div className="h-12 rounded-xl bg-gray-800" />
                </div>
              </motion.div>

              {/* =========================
                  AI CODE
              ========================= */}

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
                <p className="text-gray-300">
                  AI.generate()
                </p>

                <p className="mt-2 text-gray-600">
                  ✓ UI created
                  <br />
                  ✓ Responsive
                  <br />
                  ✓ Production ready
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =========================
          DESIGN TOOL SCROLLER
      ========================= */}

      <div className="relative z-10 mt-32">
        <DesignScroll />
      </div>
    </section>
  );
}