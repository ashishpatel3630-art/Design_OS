import React from "react";

const naturePalettes = [
  {
    id: 1,
    name: "Forest Canopy",
    description: "Deep greens inspired by dense forest layers.",
    colors: ["#132A13", "#31572C", "#4F772D", "#90A955", "#ECF39E"],
  },
  {
    id: 2,
    name: "Moss & Stone",
    description: "Natural olive tones balanced with earthy neutrals.",
    colors: ["#283618", "#606C38", "#A3B18A", "#DAD7CD", "#344E41"],
  },
  {
    id: 3,
    name: "Ocean Coast",
    description: "Cool coastal tones inspired by clear ocean water.",
    colors: ["#023047", "#126782", "#219EBC", "#8ECAE6", "#CAF0F8"],
  },
  {
    id: 4,
    name: "Desert Earth",
    description: "Warm sand and clay tones from desert landscapes.",
    colors: ["#3D2B1F", "#7F5539", "#B08968", "#DDB892", "#EDE0D4"],
  },
  {
    id: 5,
    name: "Botanical",
    description: "Soft botanical greens for calm natural interfaces.",
    colors: ["#1B4332", "#2D6A4F", "#40916C", "#74C69D", "#D8F3DC"],
  },
  {
    id: 6,
    name: "Rainforest",
    description: "Rich tropical greens with subtle earthy contrast.",
    colors: ["#081C15", "#1B4332", "#2D6A4F", "#52B788", "#B7E4C7"],
  },
  {
    id: 7,
    name: "Autumn Forest",
    description: "Earthy autumn colors mixed with deep woodland shades.",
    colors: ["#283618", "#606C38", "#BC6C25", "#DDA15E", "#FEFAE0"],
  },
  {
    id: 8,
    name: "Mountain Mist",
    description: "Muted stone, pine and mist tones.",
    colors: ["#1F2933", "#344E41", "#588157", "#A3B18A", "#DAD7CD"],
  },
  {
    id: 9,
    name: "Wild Meadow",
    description: "Fresh greens with soft floral-inspired contrast.",
    colors: ["#143601", "#245501", "#4F772D", "#90A955", "#ECF39E"],
  },
];

function NatureCard({ palette }) {
  return (
    <div className="group overflow-hidden rounded-[28px] border border-[#e5e5e0] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]">

      {/* Large Palette Preview */}
      <div className="relative flex h-[210px] overflow-hidden">
        {palette.colors.map((color, index) => (
          <div
            key={color}
            className="h-full flex-1 transition-all duration-500 group-hover:flex-[1.15]"
            style={{ backgroundColor: color }}
          >
            <span className="absolute bottom-3 hidden font-mono text-[9px] text-white/70 group-hover:block">
              {color}
            </span>
          </div>
        ))}

        {/* Hover label */}
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1 backdrop-blur-md">
          <span className="text-[8px] uppercase tracking-[0.2em] text-white">
            Nature
          </span>
        </div>
      </div>

      {/* Information */}
      <div className="p-5">

        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#999]">
              Nature / {String(palette.id).padStart(2, "0")}
            </p>

            <h2 className="mt-1 text-xl font-semibold tracking-tight text-[#111]">
              {palette.name}
            </h2>
          </div>

          <button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e5e0] text-sm text-[#555] transition-all duration-300 hover:bg-[#111] hover:text-white"
            aria-label={`Open ${palette.name}`}
          >
            ↗
          </button>
        </div>

        <p className="mt-2 text-[12px] leading-5 text-[#888]">
          {palette.description}
        </p>

        {/* Color Tokens */}
        <div className="mt-5 grid grid-cols-5 gap-2">
          {palette.colors.map((color) => (
            <div key={color}>
              <div
                className="h-8 rounded-lg border border-black/5 transition-transform duration-300 group-hover:scale-[1.03]"
                style={{ backgroundColor: color }}
              />

              <p className="mt-1 truncate font-mono text-[8px] text-[#999]">
                {color}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-[#eeeeea] pt-4">

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4F772D]" />

            <span className="text-[9px] uppercase tracking-[0.18em] text-[#aaa]">
              5 Colors
            </span>
          </div>

          <button className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#555] transition-all hover:tracking-[0.2em] hover:text-black">
            Explore →
          </button>

        </div>

      </div>
    </div>
  );
}

function Nature() {
  return (
    <section className="min-h-screen bg-[#f7f7f4] p-10">

      {/* Header */}
      <div className="mb-10">

        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8a85]">
          Colors / Nature
        </p>

        <div className="mt-2 flex items-end justify-between">

          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#111]">
              Nature Palettes
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-[#8a8a85]">
              Natural color systems inspired by forests, oceans, mountains,
              earth and botanical landscapes.
            </p>
          </div>

          <span className="hidden rounded-full border border-[#e5e5e0] bg-white px-4 py-2 text-[9px] uppercase tracking-widest text-[#888] sm:block">
            {naturePalettes.length} Palettes
          </span>

        </div>
      </div>

      {/* Palette Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

        {naturePalettes.map((palette) => (
          <NatureCard
            key={palette.id}
            palette={palette}
          />
        ))}

      </div>

    </section>
  );
}

export default Nature;