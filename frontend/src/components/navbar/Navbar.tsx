"use client";

import { useState } from "react";
import { Sparkles, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Colors", "Gradients", "Typography", "Components"];

  return (
    <nav className="w-full bg-black border-b border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="
            h-10 w-10
            rounded-xl
            bg-blue-500
            flex items-center justify-center
            text-white
          "
            >
              <Sparkles size={22} />
            </div>

            <h1 className="text-xl font-bold text-white">Design OS</h1>
          </div>

          {/* Desktop Links */}
          <div
            className="
          hidden lg:flex
          items-center
          gap-8
          text-sm
          text-gray-400
          "
          >
            {navLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <button
              className="
            h-10 w-10
            rounded-xl
            border border-white/10
            bg-white/5
            flex items-center justify-center
            text-gray-300
          "
            >
              <Moon size={18} />
            </button>

            <button
              className="
            hidden sm:inline-flex
            items-center justify-center
            h-9
            px-5
            rounded-lg
            bg-white
            text-black
            text-sm
            font-medium
            whitespace-nowrap
            "
            >
              Build System
            </button>

            <button
              className="
            lg:hidden
            h-10 w-10
            rounded-xl
            border border-white/10
            bg-white/5
            flex items-center justify-center
            text-gray-300
          "
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
