import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      quote:
        "Design OS completely changed how we build and maintain our visual system. Everything feels faster, cleaner, and more consistent.",
      name: "Alex Morgan",
      role: "Product Designer",
      company: "Northstar",
      initials: "AM",
    },
    {
      quote:
        "The ability to explore colors, typography, gradients, and motion from one workspace is incredibly powerful.",
      name: "Sarah Chen",
      role: "Creative Director",
      company: "Frame Studio",
      initials: "SC",
    },
    {
      quote:
        "It feels less like another design tool and more like the operating system for our entire design workflow.",
      name: "Daniel Reed",
      role: "Design Lead",
      company: "Arc Labs",
      initials: "DR",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white sm:px-10 lg:px-16">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1250px]">
        {/* HEADER */}
        <div className="mx-auto max-w-[850px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/35"
          >
            <span>Testimonials</span>
            <span className="text-white/15">•</span>
            <span>05</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[58px] md:text-[70px]"
          >
            Loved by people who
            <br />
            <span className="text-white/30">care about design.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-7 max-w-[620px] text-[15px] leading-7 text-white/40 sm:text-[17px]"
          >
            Designers and teams use Design OS to create faster, maintain
            consistency, and turn ideas into polished experiences.
          </motion.p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#0a0a0a] p-7 transition-colors duration-500 hover:border-white/[0.16]"
            >
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.035] blur-[70px] transition-all duration-500 group-hover:bg-white/[0.07]" />

              {/* Quote mark */}
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-lg text-white/50">
                “
              </div>

              {/* Quote */}
              <p className="relative mt-8 min-h-[150px] text-[16px] leading-7 tracking-[-0.01em] text-white/70">
                “{testimonial.quote}”
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-white/[0.07]" />

              {/* Person */}
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[10px] font-medium text-white/60"
                >
                  {testimonial.initials}
                </motion.div>

                <div>
                  <p className="text-[12px] font-medium text-white/80">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/30">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-white/30 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>

        {/* TRUST BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["AM", "SC", "DR", "JK", "LP"].map((initials, index) => (
                <div
                  key={initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-[#171717] text-[8px] text-white/50"
                >
                  {initials}
                </div>
              ))}
            </div>

            <div>
              <div className="text-[11px] text-white/60">
                Trusted by modern design teams
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/25">
                Designers · Developers · Creatives
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-[12px] text-white/70">
                  ★
                </span>
              ))}
            </div>

            <span className="text-[11px] text-white/35">4.9 / 5</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;