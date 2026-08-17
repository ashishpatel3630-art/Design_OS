import React, { useState } from "react";

const naturePalettes = [
  {
    id: "N01",
    name: "Forest Canopy",
    description:
      "Deep woodland greens inspired by dense forest layers and natural foliage.",
    colors: ["#132A13", "#31572C", "#4F772D", "#90A955", "#ECF39E"],
    usage: "Branding, sustainability, wellness, outdoor products.",
  },
  {
    id: "N02",
    name: "Moss & Stone",
    description:
      "Muted moss greens combined with mineral-inspired neutral tones.",
    colors: ["#283618", "#606C38", "#A3B18A", "#DAD7CD", "#344E41"],
    usage: "Architecture, interiors, lifestyle and editorial design.",
  },
  {
    id: "N03",
    name: "Ocean Coast",
    description:
      "Fresh coastal blues inspired by clear water, sky and ocean horizons.",
    colors: ["#023047", "#126782", "#219EBC", "#8ECAE6", "#CAF0F8"],
    usage: "Travel, SaaS, wellness, finance and technology.",
  },
  {
    id: "N04",
    name: "Desert Earth",
    description:
      "Warm sandstone and clay tones inspired by desert landscapes.",
    colors: ["#3D2B1F", "#7F5539", "#B08968", "#DDB892", "#EDE0D4"],
    usage: "Fashion, architecture, lifestyle and creative brands.",
  },
  {
    id: "N05",
    name: "Botanical",
    description:
      "Soft botanical greens designed for calm and organic interfaces.",
    colors: ["#1B4332", "#2D6A4F", "#40916C", "#74C69D", "#D8F3DC"],
    usage: "Health, beauty, wellness and eco-friendly products.",
  },
  {
    id: "N06",
    name: "Rainforest",
    description:
      "Rich tropical greens inspired by dense rainforest vegetation.",
    colors: ["#081C15", "#1B4332", "#2D6A4F", "#52B788", "#B7E4C7"],
    usage: "Environmental products, travel and lifestyle brands.",
  },
  {
    id: "N07",
    name: "Autumn Forest",
    description:
      "Deep woodland greens paired with warm autumn earth tones.",
    colors: ["#283618", "#606C38", "#BC6C25", "#DDA15E", "#FEFAE0"],
    usage: "Fashion, restaurants, editorial and seasonal campaigns.",
  },
  {
    id: "N08",
    name: "Mountain Mist",
    description:
      "Muted pine, stone and mist tones inspired by high mountain landscapes.",
    colors: ["#1F2933", "#344E41", "#588157", "#A3B18A", "#DAD7CD"],
    usage: "Outdoor, architecture, travel and premium editorial products.",
  },
  {
    id: "N09",
    name: "Wild Meadow",
    description:
      "Fresh green tones inspired by open fields and wild grasslands.",
    colors: ["#143601", "#245501", "#4F772D", "#90A955", "#ECF39E"],
    usage: "Agriculture, sustainability, food and wellness.",
  },
  {
    id: "N10",
    name: "Deep Ocean",
    description:
      "Dark marine tones inspired by the deepest layers of the ocean.",
    colors: ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6"],
    usage: "Technology, finance, analytics and premium interfaces.",
  },
  {
    id: "N11",
    name: "Pine Ridge",
    description:
      "Cool pine greens with muted mountain neutrals.",
    colors: ["#102A24", "#1F4D3A", "#52796F", "#84A98C", "#CAD2C5"],
    usage: "Outdoor brands, productivity tools and modern dashboards.",
  },
  {
    id: "N12",
    name: "Clay Valley",
    description:
      "Earthy clay colors inspired by natural rock formations.",
    colors: ["#3A2618", "#6F4E37", "#A47148", "#C8A27A", "#EFE0C8"],
    usage: "Architecture, furniture, interiors and lifestyle brands.",
  },
  {
    id: "N13",
    name: "Arctic Lake",
    description:
      "Cool icy blues inspired by frozen lakes and northern landscapes.",
    colors: ["#102A43", "#243B53", "#486581", "#9FB3C8", "#E6F0F5"],
    usage: "Technology, travel, productivity and clean interfaces.",
  },
  {
    id: "N14",
    name: "Olive Grove",
    description:
      "Mediterranean olive greens paired with warm natural neutrals.",
    colors: ["#283618", "#606C38", "#87986A", "#C2C5AA", "#F1F0E2"],
    usage: "Food, hospitality, fashion and premium lifestyle brands.",
  },
  {
    id: "N15",
    name: "River Stone",
    description:
      "Soft mineral neutrals inspired by smooth stones beside clear rivers.",
    colors: ["#1F2933", "#52616B", "#7B8B8A", "#B8C4C2", "#E9EFEC"],
    usage: "Minimal products, architecture and wellness platforms.",
  },
  {
    id: "N16",
    name: "Tropical Leaf",
    description:
      "Energetic tropical greens inspired by lush leaves and humid forests.",
    colors: ["#064E3B", "#047857", "#10B981", "#6EE7B7", "#ECFDF5"],
    usage: "Travel, wellness, fitness and sustainable products.",
  },
  {
    id: "N17",
    name: "Golden Prairie",
    description:
      "Warm grassland tones inspired by sunlit fields and dry prairie landscapes.",
    colors: ["#3F3D1F", "#6B6B2D", "#A3A847", "#D6D68A", "#F3F0C7"],
    usage: "Agriculture, editorial, food and outdoor brands.",
  },
  {
    id: "N18",
    name: "Volcanic Earth",
    description:
      "Dark volcanic neutrals with subtle mineral and lava-inspired warmth.",
    colors: ["#171412", "#322A25", "#5C4033", "#8C6651", "#D8C2B0"],
    usage: "Luxury, architecture, fashion and premium digital products.",
  },
  {
    id: "N19",
    name: "Coastal Sand",
    description:
      "Soft ocean blues and warm sand tones inspired by quiet beaches.",
    colors: ["#163A43", "#3C6E71", "#8FB9A8", "#D8C3A5", "#F4E9D8"],
    usage: "Hospitality, travel, wellness and lifestyle brands.",
  },
  {
    id: "N20",
    name: "Wild Berry",
    description:
      "Deep berry and forest tones inspired by wild woodland fruits.",
    colors: ["#24111A", "#4A1F32", "#73304A", "#A66A7B", "#E4C6CE"],
    usage: "Beauty, fashion, editorial and creative products.",
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

  let h = 0;
  let s = 0;

  const l = (max + min) / 2;

  if (max !== min) {
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

  return `${Math.round(h * 360)}°, ${Math.round(
    s * 100
  )}%, ${Math.round(l * 100)}%`;
}

function NatureCard({ palette, onOpen }) {
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
    <article className="group overflow-hidden rounded-[28px] border border-[#E5E5E0] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-[#D2D2CD] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]">

      {/* Preview */}
      <div className="relative flex h-[230px] overflow-hidden">

        {palette.colors.map((color) => (
          <button
            key={color}
            onClick={() => copyColor(color)}
            className="relative h-full flex-1 transition-all duration-500 hover:flex-[1.5]"
            style={{ backgroundColor: color }}
            title={`Copy ${color}`}
          >
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/20 px-3 py-1.5 font-mono text-[8px] text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
              {copied === color ? "COPIED" : color}
            </span>
          </button>
        ))}

        {/* Category */}
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white">
            Nature / {palette.id}
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
              Natural Color System
            </p>

            <h2 className="mt-2 text-[22px] font-semibold tracking-[-0.03em] text-[#111]">
              {palette.name}
            </h2>
          </div>

          <button
            onClick={() => onOpen(palette)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E5E0] text-sm text-[#555] transition-all duration-300 hover:bg-[#111] hover:text-white"
            aria-label={`Explore ${palette.name}`}
          >
            ↗
          </button>

        </div>

        <p className="mt-3 text-[12px] leading-5 text-[#888]">
          {palette.description}
        </p>

        {/* Tokens */}
        <div className="mt-6 grid grid-cols-5 gap-2">

          {palette.colors.map((color, index) => (
            <button
              key={color}
              onClick={() => copyColor(color)}
              className="group/color text-left"
              title={`Copy ${color}`}
            >
              <div
                className="h-9 rounded-lg border border-black/5 transition-all duration-300 group-hover/color:-translate-y-1"
                style={{ backgroundColor: color }}
              />

              <p className="mt-1 truncate font-mono text-[8px] text-[#999]">
                {copied === color ? "COPIED" : color}
              </p>

              <p className="mt-0.5 text-[7px] uppercase tracking-wider text-[#AAA]">
                {index === 0
                  ? "Primary"
                  : index === 4
                    ? "Surface"
                    : `Token ${index + 1}`}
              </p>
            </button>
          ))}

        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#EEEEEA] pt-4">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: palette.colors[2] }}
            />

            <span className="text-[9px] uppercase tracking-[0.18em] text-[#AAA]">
              5 Colors
            </span>
          </div>

          <button
            onClick={() => onOpen(palette)}
            className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#555] transition-all duration-300 hover:tracking-[0.2em] hover:text-black"
          >
            Explore →
          </button>

        </div>

      </div>
    </article>
  );
}

function NatureDetails({ palette, onClose }) {
  const [copied, setCopied] = useState("");

  const copyColor = async (color) => {
    try {
      await navigator.clipboard.writeText(color);

      setCopied(color);

      setTimeout(() => {
        setCopied("");
      }, 1200);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5 backdrop-blur-md">

      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[32px] bg-white shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-lg shadow-sm backdrop-blur-md transition hover:bg-black hover:text-white"
        >
          ×
        </button>

        {/* Large Palette */}
        <div className="flex h-[280px]">

          {palette.colors.map((color) => (
            <button
              key={color}
              onClick={() => copyColor(color)}
              className="group relative flex-1"
              style={{ backgroundColor: color }}
            >
              <span className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-black/20 px-4 py-2 font-mono text-[9px] text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                {copied === color ? "COPIED" : color}
              </span>
            </button>
          ))}

        </div>

        {/* Details */}
        <div className="p-8">

          <div className="border-b border-[#EEEEEA] pb-8">

            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#999]">
              Nature / {palette.id}
            </p>

            <h2 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-[#111]">
              {palette.name}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#888]">
              {palette.description}
            </p>

          </div>

          {/* Tokens */}
          <div className="mt-8">

            <div className="flex items-end justify-between">

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#999]">
                  Color Tokens
                </p>

                <h3 className="mt-1 text-xl font-semibold text-[#111]">
                  Complete Color Information
                </h3>
              </div>

              <span className="font-mono text-[9px] text-[#999]">
                05 TOKENS
              </span>

            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">

              {palette.colors.map((color, index) => (
                <div
                  key={color}
                  className="rounded-2xl border border-[#E5E5E0] p-4"
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="h-14 w-14 rounded-xl border border-black/5"
                      style={{ backgroundColor: color }}
                    />

                    <div className="flex-1">

                      <p className="text-[8px] uppercase tracking-widest text-[#AAA]">
                        {index === 0
                          ? "Primary"
                          : index === 4
                            ? "Surface"
                            : `Token ${String(index + 1).padStart(2, "0")}`}
                      </p>

                      <p className="mt-1 font-mono text-sm font-medium text-[#111]">
                        {color}
                      </p>

                    </div>

                    <button
                      onClick={() => copyColor(color)}
                      className="rounded-lg border border-[#E5E5E0] px-3 py-2 text-[8px] uppercase tracking-widest text-[#666] transition hover:bg-[#111] hover:text-white"
                    >
                      {copied === color ? "Copied" : "Copy"}
                    </button>

                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#EEEEEA] pt-4">

                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-[#AAA]">
                        RGB
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-[#555]">
                        {getRGB(color)}
                      </p>
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-[#AAA]">
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
          <div className="mt-8 rounded-2xl bg-[#F7F7F4] p-6">

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

function Nature() {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [search, setSearch] = useState("");

  const filteredPalettes = naturePalettes.filter((palette) =>
    `${palette.name} ${palette.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-[#F7F7F4] p-6 sm:p-8 md:p-10">

      {/* Header */}
      <div className="mb-10">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <div>

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8A8A85]">
              Colors / Nature
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#111] sm:text-5xl">
              Nature Palettes
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#8A8A85]">
              Curated color systems inspired by forests, oceans, mountains,
              deserts, botanical landscapes and the natural world.
            </p>

          </div>

          {/* Search + Stats */}
          <div className="flex flex-col gap-2 sm:flex-row">

            <input
              type="text"
              placeholder="Search palettes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-full border border-[#E5E5E0] bg-white px-5 py-3 text-xs outline-none transition focus:border-[#999] sm:w-[220px]"
            />

            <div className="rounded-full border border-[#E5E5E0] bg-white px-4 py-3">

              <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
                {filteredPalettes.length} Palettes
              </span>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="mt-6 flex gap-2">

          <div className="rounded-full border border-[#E5E5E0] bg-white px-4 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
              {filteredPalettes.length * 5} Color Tokens
            </span>
          </div>

          <div className="rounded-full border border-[#E5E5E0] bg-white px-4 py-2">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#888]">
              20 Collections
            </span>
          </div>

        </div>

        <div className="mt-8 h-px w-full bg-[#E2E2DD]" />

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filteredPalettes.map((palette) => (
          <NatureCard
            key={palette.id}
            palette={palette}
            onOpen={setSelectedPalette}
          />
        ))}

      </div>

      {/* Empty State */}
      {filteredPalettes.length === 0 && (
        <div className="flex min-h-[300px] items-center justify-center">

          <div className="text-center">

            <p className="text-sm font-medium text-[#333]">
              No palettes found
            </p>

            <p className="mt-1 text-xs text-[#999]">
              Try another palette name.
            </p>

          </div>

        </div>
      )}

      {/* Details Modal */}
      {selectedPalette && (
        <NatureDetails
          palette={selectedPalette}
          onClose={() => setSelectedPalette(null)}
        />
      )}

    </section>
  );
}

export default Nature;