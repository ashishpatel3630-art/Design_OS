import React, { useState } from "react";

/* =========================================================
   TRENDING PALETTES — 50 PREMIUM COLOR SYSTEMS
========================================================= */

const palettes = [
  {
    id: 1,
    name: "Arctic Signal",
    category: "Cool",
    colors: ["#0F172A", "#1E293B", "#38BDF8", "#E0F2FE"],
    description: "A crisp blue system with a modern technology feel.",
    usage: "SaaS, dashboards, AI products, analytics.",
  },
  {
    id: 2,
    name: "Obsidian",
    category: "Dark",
    colors: ["#030712", "#111827", "#374151", "#F9FAFB"],
    description: "A sophisticated monochrome system with deep contrast.",
    usage: "Developer tools, premium SaaS, dark interfaces.",
  },
  {
    id: 3,
    name: "Emerald Core",
    category: "Nature",
    colors: ["#052E16", "#166534", "#22C55E", "#DCFCE7"],
    description: "A natural green palette with strong visual hierarchy.",
    usage: "Finance, health, sustainability.",
  },
  {
    id: 4,
    name: "Terracotta",
    category: "Warm",
    colors: ["#431407", "#7C2D12", "#EA580C", "#FFEDD5"],
    description: "Warm earthy tones with an editorial character.",
    usage: "Lifestyle, portfolios, creative brands.",
  },
  {
    id: 5,
    name: "Royal Violet",
    category: "Creative",
    colors: ["#1E1B4B", "#4338CA", "#8B5CF6", "#EDE9FE"],
    description: "A powerful violet system for expressive digital products.",
    usage: "AI, creative tools, experimental interfaces.",
  },
  {
    id: 6,
    name: "Rose Studio",
    category: "Soft",
    colors: ["#500724", "#9F1239", "#F43F5E", "#FFE4E6"],
    description: "Elegant rose tones balancing depth and softness.",
    usage: "Fashion, beauty, consumer products.",
  },
  {
    id: 7,
    name: "Oceanic",
    category: "Blue",
    colors: ["#082F49", "#0369A1", "#0EA5E9", "#E0F2FE"],
    description: "A deep ocean-inspired system with excellent clarity.",
    usage: "Analytics, finance, enterprise.",
  },
  {
    id: 8,
    name: "Lime Energy",
    category: "Electric",
    colors: ["#1A2E05", "#3F6212", "#84CC16", "#ECFCCB"],
    description: "An energetic lime system with high visibility.",
    usage: "Sports, productivity, energetic brands.",
  },
  {
    id: 9,
    name: "Coffee House",
    category: "Earth",
    colors: ["#292524", "#57534E", "#A8A29E", "#F5F5F4"],
    description: "Warm neutrals inspired by coffee and natural materials.",
    usage: "Restaurants, portfolios, editorial.",
  },
  {
    id: 10,
    name: "Cyber Red",
    category: "Bold",
    colors: ["#450A0A", "#991B1B", "#EF4444", "#FEE2E2"],
    description: "A high-impact red system for bold identities.",
    usage: "Gaming, sports, entertainment.",
  },
  {
    id: 11,
    name: "Sapphire",
    category: "Premium",
    colors: ["#172554", "#1E40AF", "#2563EB", "#DBEAFE"],
    description: "A premium blue palette with depth and authority.",
    usage: "Fintech, enterprise, premium SaaS.",
  },
  {
    id: 12,
    name: "Sandstone",
    category: "Neutral",
    colors: ["#292524", "#78716C", "#D6D3D1", "#FAFAF9"],
    description: "A refined neutral system with subtle tonal variation.",
    usage: "Architecture, minimal websites, portfolios.",
  },
  {
    id: 13,
    name: "Midnight Azure",
    category: "Dark Blue",
    colors: ["#020617", "#0C4A6E", "#0284C7", "#BAE6FD"],
    description: "Deep midnight tones paired with electric blue.",
    usage: "Fintech, cybersecurity, developer platforms.",
  },
  {
    id: 14,
    name: "Forest Mist",
    category: "Nature",
    colors: ["#022C22", "#115E59", "#2DD4BF", "#CCFBF1"],
    description: "A calm forest-inspired teal system.",
    usage: "Health, wellness, sustainability.",
  },
  {
    id: 15,
    name: "Carbon",
    category: "Monochrome",
    colors: ["#050505", "#171717", "#404040", "#FAFAFA"],
    description: "Pure neutral contrast for clean modern interfaces.",
    usage: "Design tools, portfolios, dashboards.",
  },
  {
    id: 16,
    name: "Solar Amber",
    category: "Warm",
    colors: ["#451A03", "#92400E", "#F59E0B", "#FEF3C7"],
    description: "A warm amber palette inspired by sunlight.",
    usage: "Finance, productivity, marketing.",
  },
  {
    id: 17,
    name: "Deep Plum",
    category: "Luxury",
    colors: ["#2E1065", "#581C87", "#A855F7", "#F3E8FF"],
    description: "A luxurious purple system with dramatic depth.",
    usage: "Luxury brands, AI, creative products.",
  },
  {
    id: 18,
    name: "Mint Circuit",
    category: "Fresh",
    colors: ["#022C22", "#047857", "#34D399", "#D1FAE5"],
    description: "Fresh mint tones with a digital character.",
    usage: "Fintech, health, productivity.",
  },
  {
    id: 19,
    name: "Crimson Night",
    category: "Dark Red",
    colors: ["#1C0505", "#7F1D1D", "#DC2626", "#FECACA"],
    description: "Dark crimson tones designed for dramatic interfaces.",
    usage: "Gaming, entertainment, media.",
  },
  {
    id: 20,
    name: "Slate Horizon",
    category: "Neutral",
    colors: ["#0F172A", "#334155", "#64748B", "#F1F5F9"],
    description: "A balanced slate system for professional products.",
    usage: "Enterprise, SaaS, dashboards.",
  },
  {
    id: 21,
    name: "Cobalt",
    category: "Electric",
    colors: ["#172554", "#1D4ED8", "#60A5FA", "#EFF6FF"],
    description: "A highly focused cobalt blue interface system.",
    usage: "Technology, SaaS, analytics.",
  },
  {
    id: 22,
    name: "Olive Grove",
    category: "Earth",
    colors: ["#1A2E05", "#365314", "#65A30D", "#ECFCCB"],
    description: "Muted olive tones inspired by natural landscapes.",
    usage: "Organic brands, sustainability, lifestyle.",
  },
  {
    id: 23,
    name: "Peach Bloom",
    category: "Soft",
    colors: ["#431407", "#9A3412", "#FB923C", "#FFEDD5"],
    description: "Soft peach tones with a warm modern feeling.",
    usage: "Consumer apps, lifestyle, social products.",
  },
  {
    id: 24,
    name: "Steel",
    category: "Industrial",
    colors: ["#111827", "#374151", "#6B7280", "#E5E7EB"],
    description: "Industrial gray tones with a technical personality.",
    usage: "Developer tools, hardware, dashboards.",
  },
  {
    id: 25,
    name: "Neon Mint",
    category: "Neon",
    colors: ["#022C22", "#065F46", "#10B981", "#A7F3D0"],
    description: "High-energy mint tones for modern digital experiences.",
    usage: "AI, startups, gaming.",
  },
  {
    id: 26,
    name: "Indigo Night",
    category: "Indigo",
    colors: ["#1E1B4B", "#3730A3", "#6366F1", "#E0E7FF"],
    description: "A sophisticated indigo system with strong contrast.",
    usage: "AI tools, SaaS, productivity.",
  },
  {
    id: 27,
    name: "Desert Sand",
    category: "Earth",
    colors: ["#451A03", "#78350F", "#D97706", "#FEF3C7"],
    description: "Natural desert tones with a refined warmth.",
    usage: "Travel, architecture, lifestyle.",
  },
  {
    id: 28,
    name: "Aqua Glass",
    category: "Fresh",
    colors: ["#042F2E", "#0F766E", "#2DD4BF", "#CCFBF1"],
    description: "A clean aqua palette inspired by glass and water.",
    usage: "Fintech, wellness, modern SaaS.",
  },
  {
    id: 29,
    name: "Graphite",
    category: "Dark",
    colors: ["#09090B", "#27272A", "#52525B", "#E4E4E7"],
    description: "A precise graphite system for sophisticated products.",
    usage: "Developer tools, design systems, SaaS.",
  },
  {
    id: 30,
    name: "Ruby",
    category: "Premium",
    colors: ["#450A0A", "#9F1239", "#E11D48", "#FFE4E6"],
    description: "Rich ruby tones with a premium visual identity.",
    usage: "Luxury, fashion, media.",
  },
  {
    id: 31,
    name: "Ice Blue",
    category: "Minimal",
    colors: ["#0C4A6E", "#0369A1", "#7DD3FC", "#F0F9FF"],
    description: "A lightweight blue palette with an airy aesthetic.",
    usage: "Healthcare, SaaS, productivity.",
  },
  {
    id: 32,
    name: "Pine",
    category: "Nature",
    colors: ["#022C22", "#064E3B", "#059669", "#D1FAE5"],
    description: "Deep pine greens with a modern natural character.",
    usage: "Finance, eco products, wellness.",
  },
  {
    id: 33,
    name: "Clay",
    category: "Earth",
    colors: ["#431407", "#7C2D12", "#C2410C", "#FFEDD5"],
    description: "Rich clay tones inspired by handcrafted materials.",
    usage: "Architecture, design, lifestyle.",
  },
  {
    id: 34,
    name: "Electric Violet",
    category: "Creative",
    colors: ["#1E1B4B", "#6D28D9", "#A855F7", "#F3E8FF"],
    description: "An expressive violet system with electric energy.",
    usage: "AI, Web3, creative technology.",
  },
  {
    id: 35,
    name: "Carbon Blue",
    category: "Dark",
    colors: ["#020617", "#172554", "#1E40AF", "#BFDBFE"],
    description: "Dark carbon tones combined with deep blue accents.",
    usage: "Cybersecurity, enterprise, developer tools.",
  },
  {
    id: 36,
    name: "Sage",
    category: "Natural",
    colors: ["#1C1917", "#57534E", "#84A98C", "#E7F0E8"],
    description: "Muted sage tones for calm and balanced interfaces.",
    usage: "Wellness, architecture, lifestyle.",
  },
  {
    id: 37,
    name: "Lava",
    category: "Bold",
    colors: ["#1C0505", "#7F1D1D", "#F97316", "#FFEDD5"],
    description: "A fiery system combining deep red and orange.",
    usage: "Gaming, sports, entertainment.",
  },
  {
    id: 38,
    name: "Royal Navy",
    category: "Premium",
    colors: ["#020617", "#172554", "#1E3A8A", "#DBEAFE"],
    description: "A timeless navy system with premium character.",
    usage: "Corporate, fintech, enterprise.",
  },
  {
    id: 39,
    name: "Pearl",
    category: "Minimal",
    colors: ["#18181B", "#71717A", "#D4D4D8", "#FAFAFA"],
    description: "Soft monochrome tones for understated interfaces.",
    usage: "Editorial, portfolios, architecture.",
  },
  {
    id: 40,
    name: "Tropical",
    category: "Fresh",
    colors: ["#064E3B", "#059669", "#2DD4BF", "#CCFBF1"],
    description: "A vibrant tropical palette with fresh energy.",
    usage: "Travel, lifestyle, consumer products.",
  },
  {
    id: 41,
    name: "Burnt Copper",
    category: "Luxury",
    colors: ["#431407", "#9A3412", "#C2410C", "#FED7AA"],
    description: "Rich copper tones with an elegant industrial feel.",
    usage: "Luxury, architecture, creative studios.",
  },
  {
    id: 42,
    name: "Digital Sky",
    category: "Technology",
    colors: ["#082F49", "#0369A1", "#38BDF8", "#F0F9FF"],
    description: "A bright digital blue system built for clarity.",
    usage: "Cloud products, SaaS, AI platforms.",
  },
  {
    id: 43,
    name: "Evergreen",
    category: "Nature",
    colors: ["#052E16", "#14532D", "#16A34A", "#DCFCE7"],
    description: "A deep evergreen system with fresh highlights.",
    usage: "Finance, sustainability, outdoor brands.",
  },
  {
    id: 44,
    name: "Magenta Pulse",
    category: "Creative",
    colors: ["#500724", "#9D174D", "#DB2777", "#FCE7F3"],
    description: "A vibrant magenta system for expressive products.",
    usage: "Entertainment, fashion, creative apps.",
  },
  {
    id: 45,
    name: "Titanium",
    category: "Industrial",
    colors: ["#18181B", "#3F3F46", "#A1A1AA", "#F4F4F5"],
    description: "A metallic-inspired neutral palette.",
    usage: "Hardware, automotive, developer products.",
  },
  {
    id: 46,
    name: "Golden Sand",
    category: "Warm",
    colors: ["#451A03", "#A16207", "#EAB308", "#FEF9C3"],
    description: "Warm golden tones with a premium finish.",
    usage: "Luxury, hospitality, finance.",
  },
  {
    id: 47,
    name: "Deep Teal",
    category: "Premium",
    colors: ["#042F2E", "#115E59", "#0D9488", "#CCFBF1"],
    description: "Deep teal tones balancing professionalism and freshness.",
    usage: "Fintech, health, enterprise SaaS.",
  },
  {
    id: 48,
    name: "Storm",
    category: "Dark",
    colors: ["#0F172A", "#1E293B", "#475569", "#CBD5E1"],
    description: "A cool storm-inspired neutral system.",
    usage: "Dashboards, analytics, developer tools.",
  },
  {
    id: 49,
    name: "Blush",
    category: "Soft",
    colors: ["#4C0519", "#9D174D", "#F472B6", "#FCE7F3"],
    description: "Soft blush tones with a sophisticated contrast.",
    usage: "Beauty, fashion, social products.",
  },
  {
    id: 50,
    name: "Black Pearl",
    category: "Luxury",
    colors: ["#050505", "#171717", "#262626", "#D4D4D4"],
    description:
      "A high-end black and silver system inspired by luxury materials.",
    usage: "Premium SaaS, luxury brands, portfolios.",
  },
];

/* =========================================================
   COLOR UTILITIES
========================================================= */

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

  let h = 0;
  let s = 0;

  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;

      case g:
        h = (b - r) / d + 2;
        break;

      case b:
        h = (r - g) / d + 4;
        break;

      default:
        break;
    }

    h /= 6;
  }

  return `${Math.round(h * 360)}°, ${Math.round(
    s * 100,
  )}%, ${Math.round(l * 100)}%`;
}

/* =========================================================
   PALETTE CARD
========================================================= */

function PaletteCard({ palette, onOpen }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#e5e5e0] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#d5d5d0] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
      {/* Color Preview */}

      <div className="relative flex h-[210px] overflow-hidden">
        {palette.colors.map((color) => (
          <div
            key={color}
            className="h-full flex-1 transition-all duration-500 group-hover:flex-[1.15]"
            style={{
              backgroundColor: color,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/[0.03]" />

        {/* Category */}

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
              Trending / {String(palette.id).padStart(2, "0")}
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#111]">
              {palette.name}
            </h2>
          </div>

          <button
            onClick={() => onOpen(palette)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e5e0] text-sm transition-all duration-300 hover:bg-[#111] hover:text-white"
            aria-label={`Open ${palette.name}`}
          >
            ↗
          </button>
        </div>

        <p className="mt-2 text-[12px] leading-5 text-[#888]">
          {palette.description}
        </p>

        {/* Mini Colors */}

        <div className="mt-5 grid grid-cols-4 gap-2">
          {palette.colors.map((color) => (
            <div key={color}>
              <div
                className="h-8 rounded-lg border border-black/5"
                style={{
                  backgroundColor: color,
                }}
              />

              <p className="mt-1 font-mono text-[8px] text-[#999]">{color}</p>
            </div>
          ))}
        </div>

        {/* Footer */}

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

/* =========================================================
   PALETTE DETAILS MODAL
========================================================= */

function PaletteDetails({ palette, onClose }) {
  const [copied, setCopied] = useState("");

  const copyColor = async (color) => {
    try {
      await navigator.clipboard.writeText(color);

      setCopied(color);

      setTimeout(() => {
        setCopied("");
      }, 1200);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm md:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[32px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lg shadow-sm backdrop-blur-md transition hover:bg-[#111] hover:text-white"
        >
          ×
        </button>

        {/* Large Preview */}

        <div className="flex h-[240px] md:h-[300px]">
          {palette.colors.map((color) => (
            <div
              key={color}
              className="group relative flex-1"
              style={{
                backgroundColor: color,
              }}
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

        {/* Information */}

        <div className="p-6 md:p-8">
          {/* Header */}

          <div className="border-b border-[#eeeeea] pb-8">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
              Trending / {String(palette.id).padStart(2, "0")}
            </p>

            <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">
                  {palette.name}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#888]">
                  {palette.description}
                </p>
              </div>

              <span className="w-fit rounded-full border border-[#e5e5e0] px-4 py-2 text-[9px] uppercase tracking-widest text-[#888]">
                {palette.category}
              </span>
            </div>
          </div>

          {/* Tokens */}

          <div className="mt-8">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
                  Color Tokens
                </p>

                <h3 className="mt-1 text-lg font-semibold text-[#111]">
                  Complete Color Information
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
                  className="rounded-2xl border border-[#e8e8e3] p-4 transition hover:border-[#ccc] hover:shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="h-14 w-14 rounded-xl border border-black/5"
                      style={{
                        backgroundColor: color,
                      }}
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
                        HEX
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-[#555]">
                        {color}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-[#aaa]">
                        RGB
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-[#555]">
                        {getRGB(color)}
                      </p>
                    </div>

                    <div className="col-span-2">
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

/* =========================================================
   TRENDING COLOR PAGE
========================================================= */

function TrendColor() {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [search, setSearch] = useState("");

  const filteredPalettes = palettes.filter((palette) =>
    `${palette.name} ${palette.category} ${palette.description}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <section className="min-h-screen bg-[#f7f7f4] p-6 md:p-10">
      {/* Header */}

      <div className="mb-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8a85]">
          Colors / Trending
        </p>

        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#111] md:text-5xl">
              Trending Palettes
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#888]">
              Explore the most popular color combinations for modern digital
              products, interfaces and visual identities.
            </p>
          </div>

          {/* Search */}

          <div>
            <input
              type="text"
              placeholder="Search palettes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-[#e5e5e0] bg-white px-5 py-3 text-xs outline-none transition focus:border-[#999] md:w-[260px]"
            />
          </div>
        </div>
      </div>

      {/* Stats */}

      <div className="mb-8 flex flex-wrap gap-3">
        <div className="rounded-full border border-[#e5e5e0] bg-white px-4 py-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
            {filteredPalettes.length} Trending Palettes
          </span>
        </div>

        <div className="rounded-full border border-[#e5e5e0] bg-white px-4 py-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
            200 Color Tokens
          </span>
        </div>
      </div>

      {/* Palette Grid */}

      {filteredPalettes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPalettes.map((palette) => (
            <PaletteCard
              key={palette.id}
              palette={palette}
              onOpen={setSelectedPalette}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] items-center justify-center rounded-[28px] border border-dashed border-[#ddd]">
          <div className="text-center">
            <p className="text-lg font-semibold text-[#222]">
              No palettes found
            </p>

            <p className="mt-2 text-sm text-[#999]">
              Try searching for blue, dark, nature, luxury, etc.
            </p>
          </div>
        </div>
      )}

      {/* Modal */}

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
