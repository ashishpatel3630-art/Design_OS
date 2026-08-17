import React, { useState } from "react";

const minimalPalettes = [
  {
    id: "M01",
    name: "Pure Neutral",
    description:
      "A timeless grayscale system for clean, focused and highly adaptable interfaces.",
    colors: ["#0A0A0A", "#262626", "#737373", "#D4D4D4", "#F5F5F5"],
  },
  {
    id: "M02",
    name: "Warm Paper",
    description:
      "Soft paper-inspired neutrals with subtle warmth for refined editorial layouts.",
    colors: ["#1C1917", "#44403C", "#78716C", "#D6D3D1", "#FAFAF9"],
  },
  {
    id: "M03",
    name: "Stone",
    description:
      "Balanced stone tones designed for calm, sophisticated and natural interfaces.",
    colors: ["#292524", "#57534E", "#A8A29E", "#D6D3D1", "#F5F5F4"],
  },
  {
    id: "M04",
    name: "Soft Gray",
    description:
      "A restrained gray system for modern SaaS products, dashboards and productivity tools.",
    colors: ["#111827", "#374151", "#6B7280", "#D1D5DB", "#F9FAFB"],
  },
  {
    id: "M05",
    name: "Paper & Ink",
    description:
      "An editorial combination of deep ink, muted graphite and clean paper tones.",
    colors: ["#18181B", "#3F3F46", "#71717A", "#E4E4E7", "#FAFAFA"],
  },
  {
    id: "M06",
    name: "Cream & Ink",
    description:
      "High-contrast neutrals with a warm cream surface and sophisticated character.",
    colors: ["#171717", "#404040", "#737373", "#E7E5E4", "#FFFDF7"],
  },
  {
    id: "M07",
    name: "Graphite",
    description:
      "Deep graphite tones paired with restrained gray highlights for modern interfaces.",
    colors: ["#09090B", "#27272A", "#52525B", "#A1A1AA", "#F4F4F5"],
  },
  {
    id: "M08",
    name: "Cloud",
    description:
      "Light and airy neutrals for spacious landing pages and contemporary products.",
    colors: ["#1F2937", "#4B5563", "#9CA3AF", "#E5E7EB", "#FFFFFF"],
  },
  {
    id: "M09",
    name: "Modern Taupe",
    description:
      "Muted taupe shades for elegant lifestyle, architecture and portfolio experiences.",
    colors: ["#292524", "#57534E", "#A8A29E", "#E7E5E4", "#FAF9F7"],
  },
  {
    id: "M10",
    name: "Mist",
    description:
      "A cool neutral palette inspired by morning fog and minimal Scandinavian design.",
    colors: ["#1E293B", "#475569", "#94A3B8", "#CBD5E1", "#F8FAFC"],
  },
  {
    id: "M11",
    name: "Sage Minimal",
    description:
      "A subtle botanical neutral system with a restrained muted green accent.",
    colors: ["#1C211D", "#374138", "#667568", "#C9D1C5", "#F4F6F1"],
  },
  {
    id: "M12",
    name: "Sand",
    description:
      "Natural sand-inspired tones for warm, elegant and understated experiences.",
    colors: ["#29251F", "#575047", "#8F867A", "#D6CEC2", "#F7F3EC"],
  },
  {
    id: "M13",
    name: "Blue Gray",
    description:
      "A cool blue-gray system offering subtle personality without visual noise.",
    colors: ["#17202A", "#344454", "#64788A", "#C3CED8", "#F4F7F9"],
  },
  {
    id: "M14",
    name: "Clay",
    description:
      "Muted clay and neutral tones for modern creative and lifestyle interfaces.",
    colors: ["#29201D", "#51403A", "#80665B", "#CBB6AA", "#F5EFEB"],
  },
  {
    id: "M15",
    name: "Mono Editorial",
    description:
      "A sophisticated monochrome system inspired by premium print and editorial design.",
    colors: ["#111111", "#333333", "#666666", "#B5B5B5", "#F2F2F2"],
  },
];

function MinimalCard({ palette }) {
  const [copied, setCopied] = useState("");

  const handleCopy = async (color) => {
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
    <article className="group overflow-hidden rounded-[28px] border border-[#E5E5E0] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#D2D2CD] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

      {/* Palette Preview */}
      <div className="relative flex h-[240px] overflow-hidden">
        {palette.colors.map((color, index) => (
          <button
            key={color}
            onClick={() => handleCopy(color)}
            title={`Copy ${color}`}
            className="relative h-full flex-1 transition-all duration-500 hover:flex-[1.6]"
            style={{ backgroundColor: color }}
          >
            <span
              className={`absolute bottom-5 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap font-mono text-[8px] tracking-widest opacity-0 transition-all duration-300 group-hover:opacity-70 ${
                index >= 3 ? "text-black" : "text-white"
              }`}
            >
              {copied === color ? "COPIED" : color}
            </span>
          </button>
        ))}

        {/* Number */}
        <div className="absolute left-4 top-4 rounded-full border border-black/5 bg-white/80 px-3 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[8px] tracking-widest text-[#555]">
            {palette.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
              Minimal Collection
            </p>

            <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#111]">
              {palette.name}
            </h2>
          </div>

          <button
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E5E0] text-sm text-[#555] transition-all duration-300 hover:bg-[#111] hover:text-white"
            title={`Explore ${palette.name}`}
          >
            ↗
          </button>

        </div>

        {/* Description */}
        <p className="mt-3 text-[12px] leading-5 text-[#888]">
          {palette.description}
        </p>

        {/* Color Tokens */}
        <div className="mt-6 space-y-2">

          {palette.colors.map((color, index) => (
            <button
              key={color}
              onClick={() => handleCopy(color)}
              className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-all duration-300 hover:bg-[#F7F7F4]"
            >

              {/* Swatch */}
              <span
                className="h-8 w-8 shrink-0 rounded-lg border border-black/5 transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: color }}
              />

              {/* Info */}
              <span className="min-w-0 flex-1">

                <span className="block font-mono text-[9px] text-[#555]">
                  {copied === color ? "COPIED" : color}
                </span>

                <span className="mt-0.5 block text-[8px] uppercase tracking-[0.12em] text-[#AAA]">
                  {index === 0
                    ? "Primary"
                    : index === palette.colors.length - 1
                      ? "Surface"
                      : `Token ${String(index + 1).padStart(2, "0")}`}
                </span>

              </span>

              {/* Copy */}
              <span className="text-[8px] uppercase tracking-widest text-[#AAA]">
                {copied === color ? "Done" : "Copy"}
              </span>

            </button>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-[#EEEEEA] pt-4">

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#111]" />

            <span className="text-[9px] uppercase tracking-[0.18em] text-[#AAA]">
              {palette.colors.length} Colors
            </span>
          </div>

          <button className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#555] transition-all duration-300 hover:tracking-[0.2em] hover:text-black">
            Explore Palette →
          </button>

        </div>

      </div>
    </article>
  );
}

function Minimal() {
  return (
    <section className="min-h-screen bg-[#F7F7F4] p-6 sm:p-8 md:p-10">

      {/* Header */}
      <div className="mb-10">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8A8A85]">
              Color Library / Minimal
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#111] sm:text-5xl">
              Minimal Palettes
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#8A8A85]">
              Carefully balanced color systems for clean, modern and
              timeless digital experiences.
            </p>

          </div>

          {/* Stats */}
          <div className="flex gap-2">

            <div className="rounded-full border border-[#E5E5E0] bg-white px-4 py-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
                {minimalPalettes.length} Collections
              </span>
            </div>

            <div className="rounded-full border border-[#E5E5E0] bg-white px-4 py-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
                {minimalPalettes.length * 5} Tokens
              </span>
            </div>

          </div>

        </div>

        <div className="mt-8 h-px w-full bg-[#E2E2DD]" />

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {minimalPalettes.map((palette) => (
          <MinimalCard
            key={palette.id}
            palette={palette}
          />
        ))}

      </div>

    </section>
  );
}

export default Minimal;