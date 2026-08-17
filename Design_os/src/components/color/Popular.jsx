import React, { useState } from "react";

const popularPalettes = [
  {
    id: 1,
    name: "Arctic Blue",
    category: "Modern",
    colors: ["#0F172A", "#1E293B", "#3B82F6", "#DBEAFE"],
    description: "Clean and modern blue palette for SaaS, dashboards and tech products.",
  },
  {
    id: 2,
    name: "Neo Noir",
    category: "Dark",
    colors: ["#050505", "#171717", "#404040", "#F5F5F5"],
    description: "Premium monochrome system inspired by modern editorial interfaces.",
  },
  {
    id: 3,
    name: "Emerald Studio",
    category: "Nature",
    colors: ["#022C22", "#065F46", "#10B981", "#D1FAE5"],
    description: "Rich emerald tones designed for finance, productivity and nature brands.",
  },
  {
    id: 4,
    name: "Warm Sand",
    category: "Minimal",
    colors: ["#292524", "#57534E", "#D6D3D1", "#FAFAF9"],
    description: "Soft neutral palette for minimal, elegant and editorial interfaces.",
  },
  {
    id: 5,
    name: "Royal Violet",
    category: "Creative",
    colors: ["#1E1B4B", "#4C1D95", "#8B5CF6", "#EDE9FE"],
    description: "Expressive violet combination for creative and AI-focused products.",
  },
  {
    id: 6,
    name: "Coral Energy",
    category: "Bold",
    colors: ["#431407", "#9A3412", "#F97316", "#FFEDD5"],
    description: "Warm orange palette with strong contrast and energetic personality.",
  },
  {
    id: 7,
    name: "Rose Cloud",
    category: "Pastel",
    colors: ["#4C0519", "#9F1239", "#FB7185", "#FFE4E6"],
    description: "Soft rose tones for modern lifestyle, fashion and creative products.",
  },
  {
    id: 8,
    name: "Ocean Glass",
    category: "Modern",
    colors: ["#082F49", "#0369A1", "#38BDF8", "#E0F2FE"],
    description: "Fresh ocean-inspired palette with strong visual hierarchy.",
  },
  {
    id: 9,
    name: "Golden Hour",
    category: "Luxury",
    colors: ["#422006", "#854D0E", "#CA8A04", "#FEF9C3"],
    description: "Elegant gold palette for luxury, premium and high-end interfaces.",
  },
  {
    id: 10,
    name: "Carbon Mint",
    category: "Dark",
    colors: ["#022C22", "#111827", "#374151", "#6EE7B7"],
    description: "Dark interface system with a sophisticated mint highlight.",
  },
  {
    id: 11,
    name: "Berry Cream",
    category: "Pastel",
    colors: ["#500724", "#9D174D", "#F472B6", "#FCE7F3"],
    description: "Rich berry tones balanced with a soft pink surface.",
  },
  {
    id: 12,
    name: "Steel Blue",
    category: "Professional",
    colors: ["#0C1A2A", "#1E3A5F", "#64748B", "#E2E8F0"],
    description: "Professional blue-gray system for enterprise applications.",
  },
];

function Popular() {
  const [selectedPalette, setSelectedPalette] = useState(null);

  return (
    <section className="min-h-screen bg-[#f7f7f4] p-8 md:p-10">

      {/* HEADER */}
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#999]">
            Color Library
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-[#111]">
            Popular Themes
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#888]">
            Explore popular color combinations carefully curated for modern
            digital products and interfaces.
          </p>
        </div>

        <div className="rounded-full border border-[#e5e5e0] bg-white px-4 py-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
            {popularPalettes.length} Themes
          </span>
        </div>

      </div>

      {/* PALETTE GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {popularPalettes.map((palette) => (

          <article
            key={palette.id}
            className="group overflow-hidden rounded-[28px] border border-[#e4e4df] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#cfcfca] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]"
          >

            {/* COLOR PREVIEW */}
            <button
              onClick={() => setSelectedPalette(palette)}
              className="relative flex h-[220px] w-full overflow-hidden text-left"
            >

              {palette.colors.map((color, index) => (

                <div
                  key={color}
                  className="relative h-full flex-1 transition-all duration-500 group-hover:flex-[1.25]"
                  style={{ backgroundColor: color }}
                >

                  {/* Color number */}
                  <span
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                      index < 2 ? "text-white/60" : "text-black/50"
                    }`}
                  >
                    0{index + 1}
                  </span>

                </div>

              ))}

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/10">

                <span className="translate-y-3 rounded-full bg-white px-4 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#111] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View Palette
                </span>

              </div>

            </button>

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#999]">
                    {palette.category}
                  </p>

                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#111]">
                    {palette.name}
                  </h2>

                </div>

                <button
                  onClick={() => setSelectedPalette(palette)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e0] text-sm text-[#555] transition-all duration-300 hover:bg-[#111] hover:text-white"
                >
                  ↗
                </button>

              </div>

              <p className="mt-3 text-[12px] leading-5 text-[#888]">
                {palette.description}
              </p>

              {/* HEX VALUES */}
              <div className="mt-5 grid grid-cols-4 gap-2">

                {palette.colors.map((color) => (

                  <div key={color}>

                    <div
                      className="h-8 rounded-lg border border-black/5"
                      style={{ backgroundColor: color }}
                    />

                    <p className="mt-1 truncate font-mono text-[8px] text-[#999]">
                      {color}
                    </p>

                  </div>

                ))}

              </div>

              {/* FOOTER */}
              <div className="mt-5 flex items-center justify-between border-t border-[#eeeeea] pt-4">

                <span className="font-mono text-[8px] uppercase tracking-widest text-[#aaa]">
                  4 Colors
                </span>

                <button
                  onClick={() => setSelectedPalette(palette)}
                  className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#555] transition-colors hover:text-black"
                >
                  Explore →
                </button>

              </div>

            </div>

          </article>

        ))}

      </div>

      {/* PALETTE DETAIL MODAL */}
      {selectedPalette && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5 backdrop-blur-sm"
          onClick={() => setSelectedPalette(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl overflow-hidden rounded-[32px] bg-white shadow-2xl"
          >

            {/* LARGE COLOR PREVIEW */}
            <div className="flex h-[180px]">

              {selectedPalette.colors.map((color) => (
                <div
                  key={color}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}

            </div>

            {/* DETAIL */}
            <div className="p-7">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
                    {selectedPalette.category}
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#111]">
                    {selectedPalette.name}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#888]">
                    {selectedPalette.description}
                  </p>

                </div>

                <button
                  onClick={() => setSelectedPalette(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e0] text-[#555] hover:bg-[#111] hover:text-white"
                >
                  ×
                </button>

              </div>

              {/* COLORS */}
              <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">

                {selectedPalette.colors.map((color) => (

                  <div
                    key={color}
                    className="overflow-hidden rounded-2xl border border-[#e5e5e0]"
                  >

                    <div
                      className="h-24"
                      style={{ backgroundColor: color }}
                    />

                    <div className="p-3">

                      <p className="font-mono text-[10px] font-medium text-[#111]">
                        {color}
                      </p>

                      <p className="mt-1 text-[8px] uppercase tracking-widest text-[#aaa]">
                        HEX
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* INFO */}
              <div className="mt-6 grid grid-cols-3 gap-3">

                <div className="rounded-2xl bg-[#f7f7f4] p-4">
                  <p className="text-[8px] uppercase tracking-widest text-[#999]">
                    Colors
                  </p>
                  <p className="mt-1 font-mono text-sm text-[#111]">
                    04
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f7f4] p-4">
                  <p className="text-[8px] uppercase tracking-widest text-[#999]">
                    Type
                  </p>
                  <p className="mt-1 text-sm text-[#111]">
                    {selectedPalette.category}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f7f7f4] p-4">
                  <p className="text-[8px] uppercase tracking-widest text-[#999]">
                    Format
                  </p>
                  <p className="mt-1 font-mono text-sm text-[#111]">
                    HEX
                  </p>
                </div>

              </div>

              {/* ACTIONS */}
              <div className="mt-6 flex gap-3">

                <button className="flex-1 rounded-full bg-[#111] py-3 text-[9px] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-black">
                  Copy Palette
                </button>

                <button className="rounded-full border border-[#e5e5e0] px-6 py-3 text-[9px] font-medium uppercase tracking-[0.18em] text-[#555] transition hover:border-[#111] hover:text-black">
                  Export
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Popular;