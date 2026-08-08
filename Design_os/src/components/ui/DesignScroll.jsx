import { motion } from "framer-motion";

const tools = [
  {
    name: "Figma",
    description: "Design systems",
    symbol: "F",
  },
  {
    name: "Framer",
    description: "Web experiences",
    symbol: "Fr",
  },
  {
    name: "Adobe",
    description: "Creative tools",
    symbol: "A",
  },
  {
    name: "Linear",
    description: "Product workflow",
    symbol: "L",
  },
  {
    name: "Vercel",
    description: "Ship faster",
    symbol: "▲",
  },
  {
    name: "Stripe",
    description: "Payments",
    symbol: "S",
  },
  {
    name: "OpenAI",
    description: "AI generation",
    symbol: "◎",
  },
  {
    name: "Notion",
    description: "Workspace",
    symbol: "N",
  },
  {
    name: "Webflow",
    description: "Visual development",
    symbol: "W",
  },
  {
    name: "Spline",
    description: "3D design",
    symbol: "S",
  },
];

const duplicatedTools = [...tools, ...tools];

export default function DesignScroll() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.025]
          blur-[160px]
        "
      />

      {/* =====================================================
          HEADING
      ====================================================== */}

      <div className="relative z-10 mx-auto mb-16 max-w-4xl px-6 text-center">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-gray-600
          "
        >
          Connected Creative Ecosystem
        </p>

        <h2
          className="
            mt-5
            text-4xl
            font-semibold
            tracking-tight
            text-white
            md:text-6xl
          "
        >
          Your entire creative
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
            universe, connected.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-gray-500
            leading-7
          "
        >
          Design OS brings your favorite creative and productivity tools into
          one intelligent workspace.
        </p>
      </div>

      {/* =====================================================
          FIRST MARQUEE
      ====================================================== */}

      <div className="relative">
        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-40
            bg-gradient-to-r
            from-black
            to-transparent
          "
        />

        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-40
            bg-gradient-to-l
            from-black
            to-transparent
          "
        />

        <motion.div
          className="flex w-max gap-5"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <motion.div
              key={`${tool.name}-${index}`}
              whileHover={{
                y: -12,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="
                group
                relative
                h-40
                w-64
                shrink-0
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                backdrop-blur-xl
                transition-colors
                duration-500
                hover:border-white/20
                hover:bg-white/[0.05]
              "
            >
              {/* Hover light */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-white/0
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-white/[0.08]
                "
              />

              {/* Icon */}

              <div className="relative flex items-center justify-between">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-lg
                    font-semibold
                    text-white
                    shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                    transition-all
                    duration-500
                    group-hover:border-white/25
                    group-hover:bg-white/10
                  "
                >
                  {tool.symbol}
                </div>

                <span
                  className="
                    text-xs
                    text-gray-700
                    transition-colors
                    duration-500
                    group-hover:text-gray-400
                  "
                >
                  {String((index % tools.length) + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Text */}

              <div className="relative mt-6">
                <h3
                  className="
                    text-lg
                    font-medium
                    text-white
                  "
                >
                  {tool.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-gray-600
                    transition-colors
                    duration-500
                    group-hover:text-gray-400
                  "
                >
                  {tool.description}
                </p>
              </div>

              {/* Bottom animation */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-white
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          SECOND MARQUEE
      ====================================================== */}

      <div className="relative mt-6">
        {/* Left fade */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-40
            bg-gradient-to-r
            from-black
            to-transparent
          "
        />

        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-40
            bg-gradient-to-l
            from-black
            to-transparent
          "
        />

        <motion.div
          className="flex w-max gap-5"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            x: {
              duration: 42,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicatedTools.map((tool, index) => (
            <motion.div
              key={`reverse-${tool.name}-${index}`}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="
                group
                relative
                h-32
                w-52
                shrink-0
                overflow-hidden
                rounded-3xl
                border
                border-white/[0.07]
                bg-white/[0.02]
                p-5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-white/[0.045]
              "
            >
              <div className="flex items-center gap-4">
                {/* Icon */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-500
                    group-hover:border-white/25
                    group-hover:bg-white/10
                  "
                >
                  {tool.symbol}
                </div>

                {/* Text */}

                <div>
                  <h3
                    className="
                      font-medium
                      text-white
                    "
                  >
                    {tool.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-gray-600
                      transition-colors
                      duration-500
                      group-hover:text-gray-400
                    "
                  >
                    {tool.description}
                  </p>
                </div>
              </div>

              {/* Hover line */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-white
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM LABEL
      ====================================================== */}

      <div className="relative z-10 mt-16 text-center">
        <div
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-2.5
            backdrop-blur-xl
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-white
              shadow-[0_0_12px_rgba(255,255,255,0.8)]
            "
          />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              text-gray-500
            "
          >
            10+ Creative Tools Connected
          </span>
        </div>
      </div>
    </section>
  );
}
