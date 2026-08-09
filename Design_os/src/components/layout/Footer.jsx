import React from "react";
import { motion } from "framer-motion";

function Footer() {
  const links = {
    Product: ["Features", "Home", "Login", "Explore"],
    Resources: ["Documentation", "Guides", "Community", "Support"],
    Company: ["About", "Contact", "Careers", "Twitter"],
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#050505] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1250px] px-6 sm:px-10 lg:px-16">
        {/* CTA */}
        <div className="border-b border-white/[0.08] py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
              <span>Design OS</span>
              <span className="text-white/10">•</span>
              <span>Build Better</span>
            </div>

            <h2 className="mx-auto max-w-[800px] text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[58px] md:text-[72px]">
              Your design system
              <br />
              <span className="text-white/30">starts here.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-[520px] text-[15px] leading-7 text-white/35">
              One workspace for colors, typography, gradients, motion, shadows,
              and everything your team needs to design consistently.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-[11px] font-medium text-black shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
              >
                Start Building
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[11px] font-medium text-white/60 backdrop-blur-xl transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                Explore Features
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid gap-14 py-16 md:grid-cols-[1.5fr_2fr]">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <div className="h-3.5 w-3.5 rounded-[4px] bg-white" />
              </div>

              <span className="text-[15px] font-semibold tracking-[-0.02em]">
                Design OS
              </span>
            </div>

            <p className="mt-5 max-w-[320px] text-[12px] leading-6 text-white/30">
              A unified workspace for building, managing, and scaling modern
              visual systems.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <p className="mb-5 text-[9px] font-medium uppercase tracking-[0.2em] text-white/25">
                  {category}
                </p>

                <div className="space-y-3.5">
                  {items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block w-fit text-[11px] text-white/40 transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-5 border-t border-white/[0.08] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-white/25">
            © 2026 Design OS. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-[10px] text-white/25 transition-colors hover:text-white/60"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[10px] text-white/25 transition-colors hover:text-white/60"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-[10px] text-white/25 transition-colors hover:text-white/60"
            >
              Cookies
            </a>
          </div>

          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-white/25">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-white/50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-white/60" />
            </span>
            Developed By Ashish Patel
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
