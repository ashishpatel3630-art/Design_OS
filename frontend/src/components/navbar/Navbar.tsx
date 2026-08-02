"use client";

import { Sparkles, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      px-8
      py-4
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-black/30
        backdrop-blur-xl
        px-6
        py-3
        shadow-xl
        "
      >
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-br
            from-purple-500
            to-blue-500
            "
          >
            <Sparkles size={22} />
          </div>

          <h1
            className="
            text-xl
            font-bold
            tracking-wide
            "
          >
            Design OS
          </h1>
        </div>

        {/* Navigation */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-sm
          text-gray-300
          "
        >
          <a className="hover:text-white transition">Colors</a>

          <a className="hover:text-white transition">Gradients</a>

          <a className="hover:text-white transition">Typography</a>

          <a className="hover:text-white transition">Components</a>
        </div>

        {/* Actions */}

        <div className="flex items-center gap-4">
          <button
            className="
            h-10
            w-10
            rounded-xl
            border
            border-white/10
            bg-white/5
            hover:bg-white/10
            transition
            "
          >
            <Moon size={18} />
          </button>

          <button
            className="
            hidden
            md:block
            rounded-xl
            bg-white
            px-5
            py-2
            text-black
            font-medium
            hover:scale-105
            transition
            "
          >
            Build System
          </button>
        </div>
      </div>
    </nav>
  );
}
