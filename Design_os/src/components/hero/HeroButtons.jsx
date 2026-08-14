import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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

function HeroButtons({ onGetStarted }) {
  const navigate = useNavigate();

  return (
    <div>
      <motion.div variants={item} className="flex gap-5 mt-12">
        <motion.button
          onClick={() => navigate("/login")}
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
          onClick={onGetStarted || (() => navigate("/login"))}
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
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HeroButtons;
