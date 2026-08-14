import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

const navItems = ["Home", "Products", "Explore"];

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl border-b border-white/10" />

      {/* AI Ambient Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight cursor-pointer interactive"
          onClick={() => navigate("/")}
        >
          <span className="text-white">Design</span>
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
            OS
          </span>
        </motion.div>

        {/* NAV LINKS */}
        <nav>
          <ul className="flex items-center gap-8 text-gray-400 font-medium">
            {navItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="group relative cursor-pointer interactive py-2"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                  {item}
                </span>

                {/* Silver Line */}
                <span className="absolute bottom-0 left-0 right-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-300 group-hover:scale-x-100" />

                {/* AI Glow */}
                <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* Dashboard Link */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => navigate("/dashboard")}
                className="interactive rounded-full border border-white/10 bg-white/5 px-6 py-2 text-gray-200 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105"
              >
                Dashboard
              </motion.button>

              {/* Logout */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="interactive group relative overflow-hidden rounded-full bg-red-600 px-6 py-2 font-semibold text-white transition-all hover:scale-105"
              >
                <span className="relative z-10">Logout</span>
              </motion.button>
            </>
          ) : (
            <>
              {/* Login */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => navigate("/login")}
                className="interactive rounded-full border border-white/10 bg-white/5 px-6 py-2 text-gray-200 backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/30 hover:scale-105"
              >
                Login
              </motion.button>

              {/* Get Started */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => navigate("/login")}
                className="interactive group relative overflow-hidden rounded-full bg-white px-6 py-2 font-semibold text-black transition-all hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-white transition">
                  Get Started
                </span>
              </motion.button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
