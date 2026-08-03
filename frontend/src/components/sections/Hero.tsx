"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ButtonUI from "../ui/ButtonUI";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden px-6 lg:px-20 pt-20 flex flex-col justify-between">
      {/* Background Glow */}
      <div className="absolute top-20 right-40 w-96 h-96 bg-purple-200 blur-[120px] rounded-full opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center w-full my-auto">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-xs font-medium mb-6">
            The Future of Creative Design
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-black">
            Create Colors
            <br />
            Typography &
            <br />
            Motion Like
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Never Before.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-500 text-sm leading-relaxed">
            Design Universe OS is an all-in-one creative operating system
            that helps designers explore colors, typography, motion and
            interactive experiences with AI powered tools.
          </p>

          {/* BUTTONS (Using ButtonUI) */}
          <div className="flex flex-wrap gap-4 mt-8 items-center">
            <ButtonUI text="Enter Universe" />
            <ButtonUI text="Explore Palette" variant="secondary" />
          </div>
        </motion.div>

        {/* RIGHT DESIGN */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[520px]"
        >
          {/* MAIN IMAGE */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 w-[90%] rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-gray-50"
          >
            <Image
              src="/dashboard.png"
              alt="Dashboard Preview"
              width={700}
              height={500}
              className="rounded-2xl w-full object-cover"
            />
          </motion.div>

          {/* Floating Card 1 (Typography) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-48 left-0 bg-white rounded-xl shadow-xl border border-gray-100 p-5 w-44 z-10"
          >
            <h3 className="text-4xl font-bold font-serif text-black">Ag</h3>
            <p className="text-xs text-gray-400 mt-1">Typography</p>
          </motion.div>

          {/* Floating Card 2 (Color Palette) */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-0 bg-white rounded-xl shadow-xl border border-gray-100 p-5 w-52 z-10"
          >
            <div className="flex gap-2">
              <span className="w-8 h-8 bg-purple-600 rounded-md" />
              <span className="w-8 h-8 bg-blue-500 rounded-md" />
              <span className="w-8 h-8 bg-yellow-400 rounded-md" />
            </div>
            <p className="text-xs mt-3 text-gray-500 font-medium">Color Generator</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Bottom Color Strip (From Reference Image) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden lg:flex justify-end pb-8 max-w-7xl mx-auto w-full"
      >
        <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-gray-200 shadow-lg">
          <span className="w-8 h-8 rounded-lg bg-[#8B0000]" />
          <span className="w-8 h-8 rounded-lg bg-[#4B0082]" />
          <span className="w-8 h-8 rounded-lg bg-[#0000FF]" />
          <span className="w-8 h-8 rounded-lg bg-[#A52A2A]" />
          <span className="w-8 h-8 rounded-lg bg-[#FFFF00]" />
        </div>
      </motion.div>
    </section>
  );
}