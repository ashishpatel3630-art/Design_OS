import React, { useState } from "react";

const palettes = [
  {
    id: 1,
    name: "Arctic Signal",
    category: "Cool",
    colors: ["#0F172A", "#1E293B", "#38BDF8", "#E0F2FE"],
    description: "A crisp blue system designed for modern SaaS interfaces.",
    usage: "Best for dashboards, SaaS products and technology brands.",
  },
  {
    id: 2,
    name: "Obsidian",
    category: "Dark",
    colors: ["#030712", "#111827", "#374151", "#F9FAFB"],
    description: "A refined monochrome system with strong contrast and depth.",
    usage: "Best for premium products, developer tools and dark interfaces.",
  },
  {
    id: 3,
    name: "Emerald Core",
    category: "Nature",
    colors: ["#052E16", "#166534", "#22C55E", "#DCFCE7"],
    description: "A balanced green palette inspired by natural systems.",
    usage: "Best for finance, sustainability and health products.",
  },
  {
    id: 4,
    name: "Terracotta",
    category: "Warm",
    colors: ["#431407", "#7C2D12", "#EA580C", "#FFEDD5"],
    description: "A warm earthy combination with a sophisticated editorial feel.",
    usage: "Best for lifestyle brands, portfolios and creative products.",
  },
  {
    id: 5,
    name: "Royal Violet",
    category: "Creative",
    colors: ["#1E1B4B", "#4338CA", "#8B5CF6", "#EDE9FE"],
    description: "A bold violet system created for expressive digital products.",
    usage: "Best for creative tools, AI products and experimental interfaces.",
  },
  {
    id: 6,
    name: "Rose Studio",
    category: "Soft",
    colors: ["#500724", "#9F1239", "#F43F5E", "#FFE4E6"],
    description: "A refined rose palette balancing strong and soft tones.",
    usage: "Best for fashion, beauty and consumer applications.",
  },
  {
    id: 7,
    name: "Oceanic",
    category: "Blue",
    colors: ["#082F49", "#0369A1", "#0EA5E9", "#E0F2FE"],
    description: "A deep ocean-inspired system with clear visual hierarchy.",
    usage: "Best for analytics, finance and enterprise interfaces.",
  },
  {
    id: 8,
    name: "Lime Energy",
    category: "Electric",
    colors: ["#1A2E05", "#3F6212", "#84CC16", "#ECFCCB"],
    description: "An energetic green-yellow combination with high visibility.",
    usage: "Best for sports, productivity and energetic brands.",
  },
  {
    id: 9,
    name: "Coffee House",
    category: "Earth",
    colors: ["#292524", "#57534E", "#A8A29E", "#F5F5F4"],
    description: "A warm neutral palette inspired by coffee and natural materials.",
    usage: "Best for restaurants, portfolios and editorial websites.",
  },
  {
    id: 10,
    name: "Cyber Red",
    category: "Bold",
    colors: ["#450A0A", "#991B1B", "#EF4444", "#FEE2E2"],
    description: "A high-impact red system designed for bold visual identities.",
    usage: "Best for gaming, sports and high-energy interfaces.",
  },
  {
    id: 11,
    name: "Sapphire",
    category: "Premium",
    colors: ["#172554", "#1E40AF", "#2563EB", "#DBEAFE"],
    description: "A premium blue palette with strong depth and clarity.",
    usage: "Best for fintech, enterprise and premium SaaS.",
  },
  {
    id: 12,
    name: "Sandstone",
    category: "Neutral",
    colors: ["#292524", "#78716C", "#D6D3D1", "#FAFAF9"],
    description: "A sophisticated neutral system with subtle tonal variation.",
    usage: "Best for minimal websites, architecture and design portfolios.",
  },
];

function getRGB(hex) {
  const value = hex.replace("#", "");

  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);

  return `${r}, ${g}, ${b}`;
}

function getHSL(hex) {
  let r = parseInt(hex.substring(1, 3), 16) / 255;
  let g = parseInt(hex.substring(3, 5), 16) / 255;
  let b = parseInt(hex.substring(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;

    s = l > 0.5
      ? d / (2 - max - min)
      : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      default:
        h = (r - g) / d + 4;
    }

    h /= 6;
  }

  return `${Math.round(h * 360)}°, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
}

function PaletteCard({ palette, onOpen }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#e5e5e0] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#d5d5d0] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

      {/* Preview */}
      <div className="relative flex h-[210px] overflow-hidden">

        {palette.colors.map((color) => (
          <div
            key={color}
            className="h-full flex-1 transition-all duration-500 group-hover:flex-[1.15]"
            style={{ backgroundColor: color }}
          />
        ))}

        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/[0.03]" />

        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur-md">
          <span className="text-[8px] uppercase tracking-[0.2em] text-white">
            {palette.category}
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#999]">
              Palette / {String(palette.id).padStart(2, "0")}
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#111]">
              {palette.name}
            </h2>
          </div>

          <button
            onClick={() => onOpen(palette)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e0] text-sm transition-all duration-300 hover:bg-[#111] hover:text-white"
          >
            ↗
          </button>

        </div>

        <p className="mt-2 text-[12px] leading-5 text-[#888]">
          {palette.description}
        </p>

        {/* Mini colors */}
        <div className="mt-5 grid grid-cols-4 gap-2">

          {palette.colors.map((color) => (
            <div key={color}>

              <div
                className="h-8 rounded-lg"
                style={{ backgroundColor: color }}
              />

              <p className="mt-1 font-mono text-[8px] text-[#999]">
                {color}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#eeeeea] pt-4">

          <span className="text-[9px] uppercase tracking-[0.18em] text-[#aaa]">
            4 Colors
          </span>

          <button
            onClick={() => onOpen(palette)}
            className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#555] transition hover:text-black"
          >
            Explore Palette →
          </button>

        </div>

      </div>
    </article>
  );
}

function PaletteDetails({ palette, onClose }) {
  const [copied, setCopied] = useState("");

  const copyColor = async (color) => {
    await navigator.clipboard.writeText(color);

    setCopied(color);

    setTimeout(() => {
      setCopied("");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-sm">

      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-[32px] bg-white shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lg shadow-sm backdrop-blur-md transition hover:bg-[#111] hover:text-white"
        >
          ×
        </button>

        {/* Large Palette */}
        <div className="flex h-[280px]">

          {palette.colors.map((color) => (
            <div
              key={color}
              className="group relative flex-1"
              style={{ backgroundColor: color }}
            >

              <button
                onClick={() => copyColor(color)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/20 px-4 py-2 opacity-0 backdrop-blur-md transition group-hover:opacity-100"
              >
                <span className="text-[9px] uppercase tracking-widest text-white">
                  {copied === color ? "Copied" : "Copy"}
                </span>
              </button>

            </div>
          ))}

        </div>

        <div className="p-8">

          {/* Header */}
          <div className="border-b border-[#eeeeea] pb-8">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
              Palette / {String(palette.id).padStart(2, "0")}
            </p>

            <div className="mt-2 flex items-end justify-between">

              <div>
                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#111]">
                  {palette.name}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#888]">
                  {palette.description}
                </p>
              </div>

              <span className="hidden rounded-full border border-[#e5e5e0] px-4 py-2 text-[9px] uppercase tracking-widest text-[#888] md:block">
                {palette.category}
              </span>

            </div>

          </div>

          {/* Color Information */}
          <div className="mt-8">

            <div className="mb-5 flex items-center justify-between">

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
                  Color Tokens
                </p>

                <h3 className="mt-1 text-lg font-semibold text-[#111]">
                  Color Information
                </h3>
              </div>

              <span className="font-mono text-[9px] text-[#999]">
                {palette.colors.length} TOKENS
              </span>

            </div>

            <div className="grid gap-3 md:grid-cols-2">

              {palette.colors.map((color, index) => (

                <div
                  key={color}
                  className="rounded-2xl border border-[#e8e8e3] p-4"
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="h-14 w-14 rounded-xl border border-black/5"
                      style={{ backgroundColor: color }}
                    />

                    <div className="flex-1">

                      <p className="text-[9px] uppercase tracking-widest text-[#aaa]">
                        Token {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-1 font-mono text-sm font-medium text-[#111]">
                        {color}
                      </p>

                    </div>

                    <button
                      onClick={() => copyColor(color)}
                      className="rounded-lg border border-[#e5e5e0] px-3 py-2 text-[8px] uppercase tracking-widest text-[#666] transition hover:bg-[#111] hover:text-white"
                    >
                      {copied === color ? "Copied" : "Copy"}
                    </button>

                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#eeeeea] pt-4">

                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-[#aaa]">
                        RGB
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-[#555]">
                        {getRGB(color)}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-[#aaa]">
                        HSL
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-[#555]">
                        {getHSL(color)}
                      </p>
                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Usage */}
          <div className="mt-8 rounded-2xl bg-[#f7f7f4] p-6">

            <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
              Recommended Usage
            </p>

            <p className="mt-2 text-sm leading-6 text-[#555]">
              {palette.usage}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

function TrendColor() {

  const [selectedPalette, setSelectedPalette] = useState(null);
  const [search, setSearch] = useState("");

  const filteredPalettes = palettes.filter((palette) =>
    `${palette.name} ${palette.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#f7f7f4] p-8 md:p-10">

      {/* Header */}
      <div className="mb-10">

        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8a85]">
          Colors / Library
        </p>

        <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>

            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#111] md:text-5xl">
              Trending Palettes
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#888]">
              Explore curated color systems designed for modern digital products,
              interfaces and brand identities.
            </p>

          </div>

          {/* Search */}
          <div className="relative">

            <input
              type="text"
              placeholder="Search palettes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-[#e5e5e0] bg-white px-5 py-3 text-xs outline-none transition focus:border-[#999] md:w-[240px]"
            />

          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="mb-8 flex gap-3">

        <div className="rounded-full border border-[#e5e5e0] bg-white px-4 py-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
            {filteredPalettes.length} Palettes
          </span>
        </div>

        <div className="rounded-full border border-[#e5e5e0] bg-white px-4 py-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
            48 Color Tokens
          </span>
        </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filteredPalettes.map((palette) => (

          <PaletteCard
            key={palette.id}
            palette={palette}
            onOpen={setSelectedPalette}
          />

        ))}

      </div>

      {/* Details Modal */}
      {selectedPalette && (
        <PaletteDetails
          palette={selectedPalette}
          onClose={() => setSelectedPalette(null)}
        />
      )}

    </section>
  );
}

export default TrendColor;