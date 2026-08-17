import React, { useState } from "react";

const luxuryThemes = [
  {
    id: "01",
    name: "Obsidian Gold",
    description: "Deep black paired with warm metallic tones for premium interfaces.",
    colors: ["#0A0A0A", "#171717", "#B89B5E", "#E8D9B5"],
  },
  {
    id: "02",
    name: "Royal Noir",
    description: "A dramatic dark palette designed for elegant, high-contrast products.",
    colors: ["#080808", "#1C1C1C", "#6B5B45", "#D6C6A8"],
  },
  {
    id: "03",
    name: "Champagne",
    description: "Soft champagne neutrals with sophisticated warm undertones.",
    colors: ["#2A2520", "#665B4E", "#C8B99A", "#F2E8D5"],
  },
  {
    id: "04",
    name: "Velvet",
    description: "Rich burgundy tones balanced with deep charcoal and muted rose.",
    colors: ["#1A080D", "#45151F", "#7A2638", "#D4A3A9"],
  },
  {
    id: "05",
    name: "Emerald Estate",
    description: "Dark emerald and antique metallic tones inspired by luxury interiors.",
    colors: ["#071612", "#123C31", "#567A68", "#C6B887"],
  },
  {
    id: "06",
    name: "Midnight Silver",
    description: "Cool graphite tones with polished silver highlights.",
    colors: ["#050505", "#171A1D", "#555B60", "#D8DADC"],
  },
];

function LuxuryCard({ theme }) {
  const [copied, setCopied] = useState(null);

  const copyColor = async (color) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(color);

      setTimeout(() => {
        setCopied(null);
      }, 1200);
    } catch (error) {
      console.error("Could not copy color:", error);
    }
  };

  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#deded9] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#c8c8c2] hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)]">

      {/* Palette */}
      <div className="relative flex h-[240px] overflow-hidden">

        {theme.colors.map((color) => (
          <button
            key={color}
            onClick={() => copyColor(color)}
            className="relative h-full flex-1 transition-all duration-500 hover:flex-[1.5]"
            style={{ backgroundColor: color }}
            title={`Copy ${color}`}
          >
            <span
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                font-mono
                text-[8px]
                tracking-wider
                text-white/70
              "
            >
              {copied === color ? "COPIED" : color}
            </span>
          </button>
        ))}

        {/* Luxury overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Index */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 font-mono text-[8px] tracking-widest text-white/70 backdrop-blur-md">
            LUXURY / {theme.id}
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
              Premium Color System
            </p>

            <h2 className="mt-2 text-[23px] font-semibold tracking-[-0.03em] text-[#111]">
              {theme.name}
            </h2>
          </div>

          <button
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#deded9]
              text-sm
              text-[#555]
              transition-all
              duration-300
              hover:bg-[#111]
              hover:text-white
            "
            aria-label={`Open ${theme.name}`}
          >
            ↗
          </button>

        </div>

        <p className="mt-3 text-[12px] leading-5 text-[#888]">
          {theme.description}
        </p>

        {/* Color information */}
        <div className="mt-6 grid grid-cols-4 gap-2">

          {theme.colors.map((color) => (
            <button
              key={color}
              onClick={() => copyColor(color)}
              className="group/color text-left"
            >
              <div
                className="
                  h-10
                  rounded-lg
                  border
                  border-black/5
                  transition-all
                  duration-300
                  group-hover/color:-translate-y-1
                "
                style={{ backgroundColor: color }}
              />

              <p className="mt-2 truncate font-mono text-[8px] text-[#999]">
                {copied === color ? "COPIED" : color}
              </p>
            </button>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#eeeeea] pt-4">

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#111]" />

            <span className="text-[8px] uppercase tracking-[0.18em] text-[#999]">
              4 Colors
            </span>
          </div>

          <button className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#555] transition-all duration-300 hover:tracking-[0.22em] hover:text-black">
            Explore Palette →
          </button>

        </div>

      </div>
    </article>
  );
}

function Luxury() {
  return (
    <section className="min-h-screen bg-[#f7f7f4] p-6 sm:p-10">

      {/* Header */}
      <div className="mb-10">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#888]">
              Color Library / Luxury
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#111] sm:text-5xl">
              Luxury Themes
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#888]">
              Sophisticated color systems designed for premium brands,
              editorial interfaces, fashion products and high-end experiences.
            </p>
          </div>

          <div className="hidden rounded-full border border-[#deded9] bg-white px-4 py-2 sm:block">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
              {luxuryThemes.length} Themes
            </span>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-[#deded9]" />

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {luxuryThemes.map((theme) => (
          <LuxuryCard
            key={theme.id}
            theme={theme}
          />
        ))}

      </div>

    </section>
  );
}

export default Luxury;