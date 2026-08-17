import React from "react";

const minimalPalettes = [
  {
    id: "M01",
    name: "Pure Neutral",
    description:
      "A timeless grayscale system for clean and focused interfaces.",
    colors: ["#0A0A0A", "#262626", "#737373", "#D4D4D4", "#F5F5F5"],
  },
  {
    id: "M02",
    name: "Warm Minimal",
    description:
      "Soft warm neutrals for elegant editorial and product designs.",
    colors: ["#1C1917", "#44403C", "#78716C", "#D6D3D1", "#FAFAF9"],
  },
  {
    id: "M03",
    name: "Stone",
    description:
      "Balanced stone tones designed for calm and sophisticated layouts.",
    colors: ["#292524", "#57534E", "#A8A29E", "#D6D3D1", "#F5F5F4"],
  },
  {
    id: "M04",
    name: "Soft Gray",
    description:
      "A subtle gray palette for modern dashboards and SaaS products.",
    colors: ["#111827", "#374151", "#6B7280", "#D1D5DB", "#F9FAFB"],
  },
  {
    id: "M05",
    name: "Paper",
    description:
      "An editorial-inspired palette combining ink, paper and soft gray.",
    colors: ["#18181B", "#3F3F46", "#71717A", "#E4E4E7", "#FAFAFA"],
  },
  {
    id: "M06",
    name: "Cream & Ink",
    description: "High-contrast neutrals with a refined premium character.",
    colors: ["#171717", "#404040", "#737373", "#E7E5E4", "#FFFDF7"],
  },
  {
    id: "M07",
    name: "Graphite",
    description: "Deep graphite tones with restrained neutral highlights.",
    colors: ["#09090B", "#27272A", "#52525B", "#A1A1AA", "#F4F4F5"],
  },
  {
    id: "M08",
    name: "Cloud",
    description:
      "Light and airy neutrals for minimal interfaces and landing pages.",
    colors: ["#1F2937", "#4B5563", "#9CA3AF", "#E5E7EB", "#FFFFFF"],
  },
  {
    id: "M09",
    name: "Modern Taupe",
    description:
      "Muted taupe shades for elegant lifestyle and portfolio interfaces.",
    colors: ["#292524", "#57534E", "#A8A29E", "#E7E5E4", "#FAF9F7"],
  },
];

function Minimal() {
  const handleCopy = async (color) => {
    await navigator.clipboard.writeText(color);
  };

  return (
    <section className="min-h-screen bg-[#f7f7f4] p-8 md:p-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8A8A85]">
          Color Library / Minimal
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#111]">
              Minimal Palettes
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#8A8A85]">
              Carefully balanced neutral color systems for clean, modern and
              timeless interfaces.
            </p>
          </div>

          <div className="rounded-full border border-[#E5E5E0] bg-white px-4 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
              {minimalPalettes.length} Collections
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {minimalPalettes.map((palette) => (
          <article
            key={palette.id}
            className="group overflow-hidden rounded-[28px] border border-[#E5E5E0] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#D2D2CD] hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]"
          >
            {/* Palette */}
            <div className="relative flex h-[240px] overflow-hidden">
              {palette.colors.map((color, index) => (
                <button
                  key={color}
                  onClick={() => handleCopy(color)}
                  title={`Copy ${color}`}
                  className="relative h-full flex-1 transition-all duration-500 hover:flex-[1.8]"
                  style={{ backgroundColor: color }}
                >
                  <span
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap font-mono text-[8px] tracking-widest opacity-0 transition-opacity duration-300 group-hover:opacity-70 ${
                      index > 2 ? "text-black" : "text-white"
                    }`}
                  >
                    {color}
                  </span>
                </button>
              ))}

              {/* Palette number */}
              <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1.5 backdrop-blur-md">
                <span className="font-mono text-[8px] tracking-widest text-[#555]">
                  {palette.id}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#999]">
                    Minimal Collection
                  </p>

                  <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#111]">
                    {palette.name}
                  </h2>
                </div>

                <button
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E5E0] text-sm text-[#555] transition-all duration-300 hover:bg-[#111] hover:text-white"
                  title="Open palette"
                >
                  ↗
                </button>
              </div>

              <p className="mt-3 text-[12px] leading-5 text-[#8A8A85]">
                {palette.description}
              </p>

              {/* Color values */}
              <div className="mt-6 space-y-2">
                {palette.colors.map((color, index) => (
                  <button
                    key={color}
                    onClick={() => handleCopy(color)}
                    className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-[#F7F7F4]"
                  >
                    <span
                      className="h-7 w-7 rounded-lg border border-black/5"
                      style={{ backgroundColor: color }}
                    />

                    <span className="flex-1">
                      <span className="block font-mono text-[9px] text-[#555]">
                        {color}
                      </span>

                      <span className="text-[8px] uppercase tracking-wider text-[#aaa]">
                        {index === 0
                          ? "Primary"
                          : index === palette.colors.length - 1
                            ? "Surface"
                            : `Token ${index + 1}`}
                      </span>
                    </span>

                    <span className="text-[8px] uppercase tracking-widest text-[#aaa]">
                      Copy
                    </span>
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-[#EEEEEA] pt-4">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#aaa]">
                  {palette.colors.length} Colors
                </span>

                <button className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#555] transition-colors hover:text-black">
                  Explore Palette →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Minimal;
