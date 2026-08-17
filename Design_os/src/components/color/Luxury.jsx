import React, { useState } from "react";

const luxuryThemes = [
  {
    id: "01",
    name: "Obsidian Gold",
    description:
      "Deep obsidian black paired with refined champagne tones for a sophisticated premium identity.",
    colors: ["#050505", "#111111", "#A88A52", "#E8D8B0"],
  },
  {
    id: "02",
    name: "Platinum Noir",
    description:
      "A high-contrast graphite and platinum system inspired by luxury technology.",
    colors: ["#070707", "#181818", "#777777", "#E5E5E5"],
  },
  {
    id: "03",
    name: "Champagne Silk",
    description:
      "Soft ivory and champagne tones creating an elegant editorial atmosphere.",
    colors: ["#211E19", "#665E52", "#C7B99A", "#F4EBDD"],
  },
  {
    id: "04",
    name: "Black Pearl",
    description:
      "A subtle monochromatic system with pearl highlights and deep black foundations.",
    colors: ["#030303", "#151515", "#464646", "#D1D1D1"],
  },
  {
    id: "05",
    name: "Royal Burgundy",
    description:
      "Deep burgundy tones combined with muted rose and dark charcoal for dramatic luxury.",
    colors: ["#16070B", "#42141F", "#762A3A", "#C89A9F"],
  },
  {
    id: "06",
    name: "Emerald Estate",
    description:
      "Deep forest emerald balanced with muted stone and antique-inspired neutrals.",
    colors: ["#06120E", "#12372D", "#4C695C", "#BBAE7B"],
  },
  {
    id: "07",
    name: "Espresso",
    description:
      "Rich coffee and warm cream tones inspired by premium hospitality brands.",
    colors: ["#120C08", "#30221A", "#735B49", "#E6D5C3"],
  },
  {
    id: "08",
    name: "Ivory House",
    description:
      "A quiet luxury palette built around ivory, stone and subtle warm contrast.",
    colors: ["#24211C", "#625D54", "#B9B2A5", "#F4EFE5"],
  },
  {
    id: "09",
    name: "Bronze Night",
    description:
      "Dark charcoal with restrained bronze accents for an exclusive evening aesthetic.",
    colors: ["#080807", "#191816", "#806442", "#C5A77A"],
  },
  {
    id: "10",
    name: "Onyx",
    description:
      "Ultra-dark neutrals with cool gray highlights for a minimal luxury interface.",
    colors: ["#020202", "#0D0D0D", "#353535", "#BDBDBD"],
  },
  {
    id: "11",
    name: "Velvet Wine",
    description:
      "A sophisticated wine palette designed for fashion, beauty and editorial experiences.",
    colors: ["#18080D", "#3A111B", "#691F32", "#B77B86"],
  },
  {
    id: "12",
    name: "Antique Brass",
    description:
      "A restrained brass and charcoal combination inspired by timeless interiors.",
    colors: ["#0B0B0A", "#24231F", "#756545", "#C7B58B"],
  },
  {
    id: "13",
    name: "Graphite Silver",
    description:
      "A contemporary metallic palette with precise neutral tones and polished contrast.",
    colors: ["#08090A", "#1B1D1F", "#555A5E", "#D4D7D9"],
  },
  {
    id: "14",
    name: "Deep Sapphire",
    description:
      "A sophisticated deep blue system with muted steel and icy highlights.",
    colors: ["#070D18", "#101D32", "#355477", "#C6D4E3"],
  },
  {
    id: "15",
    name: "Cedar",
    description:
      "Warm cedar, charcoal and sand tones inspired by luxury architecture and interiors.",
    colors: ["#130E0A", "#32251C", "#775A43", "#D9C4A9"],
  },
  {
    id: "16",
    name: "Pearl",
    description:
      "A delicate neutral system designed for understated luxury and clean editorial layouts.",
    colors: ["#191817", "#4A4844", "#A7A39B", "#EEECE6"],
  },
  {
    id: "17",
    name: "Royal Forest",
    description:
      "Deep green and muted gold tones creating an authoritative premium identity.",
    colors: ["#06110D", "#102D23", "#466151", "#B4A26B"],
  },
  {
    id: "18",
    name: "Cocoa",
    description:
      "Dark cocoa and cream create a warm, sophisticated palette for premium brands.",
    colors: ["#100B08", "#2B1D17", "#65483A", "#E2CDBD"],
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
    <article
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-[#deded9]
        bg-white
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#c8c8c2]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.10)]
      "
    >
      {/* Palette Preview */}
      <div className="relative flex h-[240px] overflow-hidden">
        {theme.colors.map((color) => (
          <button
            key={color}
            onClick={() => copyColor(color)}
            className="
              relative
              h-full
              flex-1
              transition-all
              duration-500
              hover:flex-[1.5]
            "
            style={{ backgroundColor: color }}
            title={`Copy ${color}`}
          >
            <span
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                rounded-full
                bg-black/20
                px-3
                py-1.5
                font-mono
                text-[8px]
                tracking-wider
                text-white/80
                opacity-0
                backdrop-blur-md
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
              {copied === color ? "COPIED" : color}
            </span>
          </button>
        ))}

        {/* Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-white/5
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Theme Number */}
        <div className="absolute left-5 top-5">
          <span
            className="
              rounded-full
              border
              border-white/20
              bg-black/20
              px-3
              py-1
              font-mono
              text-[8px]
              tracking-widest
              text-white/70
              backdrop-blur-md
            "
          >
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

        {/* Description */}
        <p className="mt-3 text-[12px] leading-5 text-[#888]">
          {theme.description}
        </p>

        {/* Colors */}
        <div className="mt-6 grid grid-cols-4 gap-2">
          {theme.colors.map((color) => (
            <button
              key={color}
              onClick={() => copyColor(color)}
              className="group/color min-w-0 text-left"
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

          <button
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#555]
              transition-all
              duration-300
              hover:tracking-[0.22em]
              hover:text-black
            "
          >
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