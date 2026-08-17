import React, { useState } from "react";

const darkPalettes = [
  {
    id: 1,
    name: "Obsidian",
    colors: ["#030303", "#0A0A0A", "#171717", "#404040"],
  },
  {
    id: 2,
    name: "Carbon",
    colors: ["#09090B", "#18181B", "#27272A", "#52525B"],
  },
  {
    id: 3,
    name: "Midnight",
    colors: ["#020617", "#0F172A", "#1E293B", "#475569"],
  },
  {
    id: 4,
    name: "Graphite",
    colors: ["#111111", "#1C1C1C", "#2A2A2A", "#525252"],
  },
  {
    id: 5,
    name: "Dark Slate",
    colors: ["#0F172A", "#1E293B", "#334155", "#64748B"],
  },
  {
    id: 6,
    name: "Noir",
    colors: ["#050505", "#101010", "#202020", "#737373"],
  },
  {
    id: 7,
    name: "Dark Navy",
    colors: ["#020617", "#111827", "#1E3A5F", "#475569"],
  },
  {
    id: 8,
    name: "Eclipse",
    colors: ["#09090B", "#18181B", "#27272A", "#71717A"],
  },
  {
    id: 9,
    name: "Steel",
    colors: ["#111827", "#1F2937", "#374151", "#9CA3AF"],
  },
];

function PaletteCard({ palette }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const copyColor = async (color) => {
    await navigator.clipboard.writeText(color);
    setSelectedColor(color);

    setTimeout(() => {
      setSelectedColor(null);
    }, 1200);
  };

  return (
    <div className="group overflow-hidden rounded-[28px] border border-[#292929] bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-2 hover:border-[#404040] hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]">

      {/* Color Preview */}
      <div className="flex h-[210px] overflow-hidden">
        {palette.colors.map((color) => (
          <button
            key={color}
            onClick={() => copyColor(color)}
            className="relative h-full flex-1 transition-all duration-500 hover:flex-[1.4]"
            style={{ backgroundColor: color }}
          >
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/30 px-2 py-1 font-mono text-[8px] text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              {selectedColor === color ? "COPIED" : color}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between">

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#666]">
              Dark / {String(palette.id).padStart(2, "0")}
            </p>

            <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
              {palette.name}
            </h2>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#292929] text-sm text-[#777] transition-all hover:border-white hover:bg-white hover:text-black"
            onClick={() => copyColor(palette.colors[0])}
          >
            ↗
          </button>

        </div>

        <p className="mt-2 text-xs leading-5 text-[#777]">
          A refined dark color system designed for modern interfaces,
          dashboards and premium digital products.
        </p>

        {/* Colors */}
        <div className="mt-5 grid grid-cols-4 gap-2">

          {palette.colors.map((color) => (
            <button
              key={color}
              onClick={() => copyColor(color)}
              className="group/color text-left"
            >
              <div
                className="h-9 rounded-lg border border-white/5 transition-transform duration-300 group-hover/color:scale-105"
                style={{ backgroundColor: color }}
              />

              <p className="mt-2 font-mono text-[8px] uppercase text-[#666]">
                {selectedColor === color ? "Copied" : color}
              </p>
            </button>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-[#222] pt-4">

          <span className="text-[9px] uppercase tracking-[0.18em] text-[#555]">
            4 Colors
          </span>

          <span className="text-[9px] uppercase tracking-[0.16em] text-[#777]">
            Click color to copy
          </span>

        </div>

      </div>
    </div>
  );
}

function Dark() {
  return (
    <section className="min-h-screen bg-[#050505] p-6 md:p-10">

      {/* Header */}
      <div className="mb-10">

        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#666]">
          Color Library / Dark
        </p>

        <div className="mt-3 flex items-end justify-between">

          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white">
              Dark Themes
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#666]">
              Deep, neutral and sophisticated color combinations for
              dark interfaces and premium digital products.
            </p>
          </div>

          <div className="hidden rounded-full border border-[#292929] px-4 py-2 md:block">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#666]">
              {darkPalettes.length} Themes
            </span>
          </div>

        </div>
      </div>

      {/* Palette Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {darkPalettes.map((palette) => (
          <PaletteCard
            key={palette.id}
            palette={palette}
          />
        ))}

      </div>

    </section>
  );
}

export default Dark;