import React from "react";
import { motion } from "framer-motion";
import { FiDroplet, FiType, FiActivity, FiLayers, FiSun } from "react-icons/fi";

const tools = [
  {
    title: "Color Intelligence",
    desc: "Generate intelligent color systems for premium brands.",
    icon: <FiDroplet />,
  },
  {
    title: "Typography Engine",
    desc: "Create beautiful font combinations and design scales.",
    icon: <FiType />,
  },
  {
    title: "Motion Studio",
    desc: "Build smooth animations and interaction systems.",
    icon: <FiActivity />,
  },
  {
    title: "Shadow Generator",
    desc: "Create realistic depth and glass effects.",
    icon: <FiLayers />,
  },
  {
    title: "Gradient AI",
    desc: "Generate cinematic gradients instantly.",
    icon: <FiSun />,
  },
];

function DesignTools() {
  return (
    <section
      className="
        relative
        py-32
        overflow-hidden
        bg-[#050505]
        "
    >
      {/* Ambient Glow */}

      <div
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[300px]
        bg-gray-900
        blur-[140px]
        rounded-full
        "
      />

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-center
            max-w-4xl
            mx-auto
            "
        >
          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            tracking-tight
            text-white
            "
          >
            Everything a{" "}
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
              Designer
            </span>{" "}
            Needs
          </h1>

          <p
            className="
            mt-6
            text-gray-400
            text-lg
"
          >
            Design OS powered by AI. Create colors, typography, motion and
            complete design systems from one intelligent workspace.
          </p>
        </motion.div>

        {/* Tool Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-6
            mt-20
"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -15,
                rotateX: 5,
                scale: 1.04,
              }}
              style={{
                transformPerspective: 1000,
              }}
              viewport={{
                once: true,
              }}
              className="
                group
                relative
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                p-6
                overflow-hidden
                "
            >
              {/* Moving Glow */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                bg-gradient-to-br
                from-white/20
                via-transparent
                to-transparent
                "
              />

              {/* Icon */}

              <div
                className="
            relative
            w-14
            h-14
            rounded-2xl
            flex
            items-center
            justify-center
            text-2xl
            text-black
            bg-gradient-to-br
            from-white
            to-gray-400
            mb-6
            shadow-lg
            group-hover:scale-110
            transition
            duration-300
"
              >
                {tool.icon}
              </div>

              <h3
                className="
                relative
                text-white
                font-semibold
                text-lg
                "
              >
                {tool.title}
              </h3>

              <p
                className="
                relative
                text-gray-400
                text-sm
                mt-3
                leading-relaxed
                "
              >
                {tool.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignTools;
