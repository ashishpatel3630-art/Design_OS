import React, { useState } from "react";

const darkPalettes = [
  {
    id: "01",
    name: "Obsidian",
    description:
      "Ultra-dark monochrome tones designed for minimal and high-contrast interfaces.",
    colors: ["#030303", "#0A0A0A", "#171717", "#404040"],
  },
  {
    id: "02",
    name: "Carbon",
    description:
      "Dense charcoal tones creating a technical and sophisticated dark interface.",
    colors: ["#09090B", "#18181B", "#27272A", "#52525B"],
  },
  {
    id: "03",
    name: "Midnight",
    description:
      "Deep navy-black tones inspired by night skies and modern software interfaces.",
    colors: ["#020617", "#0F172A", "#1E293B", "#475569"],
  },
  {
    id: "04",
    name: "Graphite",
    description:
      "Balanced graphite shades for clean professional dashboards and applications.",
    colors: ["#111111", "#1C1C1C", "#2A2A2A", "#525252"],
  },
  {
    id: "05",
    name: "Slate",
    description:
      "Cool slate tones that add subtle depth while maintaining excellent readability.",
    colors: ["#0F172A", "#1E293B", "#334155", "#64748B"],
  },
  {
    id: "06",
    name: "Noir",
    description:
      "Pure black foundations with controlled gray highlights for premium interfaces.",
    colors: ["#050505", "#101010", "#202020", "#737373"],
  },
  {
    id: "07",
    name: "Deep Navy",
    description:
      "A rich navy system designed for enterprise, analytics and technology products.",
    colors: ["#020617", "#111827", "#1E3A5F", "#475569"],
  },
  {
    id: "08",
    name: "Eclipse",
    description:
      "A neutral black system with soft gray transitions inspired by an eclipse.",
    colors: ["#09090B", "#18181B", "#27272A", "#71717A"],
  },
  {
    id: "09",
    name: "Steel",
    description:
      "Industrial blue-gray tones providing a precise and technical visual language.",
    colors: ["#111827", "#1F2937", "#374151", "#9CA3AF"],
  },
  {
    id: "10",
    name: "Dark Forest",
    description:
      "Deep green-black tones for calm, natural and sophisticated dark experiences.",
    colors: ["#03110A", "#08251A", "#14532D", "#3F6F52"],
  },
  {
    id: "11",
    name: "Deep Wine",
    description:
      "Dark burgundy shades creating a dramatic and cinematic interface aesthetic.",
    colors: ["#18070C", "#2B0B13", "#58101F", "#8B4554"],
  },
  {
    id: "12",
    name: "Dark Coffee",
    description:
      "Warm espresso tones designed for editorial, lifestyle and premium applications.",
    colors: ["#120C09", "#211510", "#3B241B", "#6B4A3A"],
  },
  {
    id: "13",
    name: "Deep Teal",
    description:
      "A dark teal system combining cool depth with subtle green undertones.",
    colors: ["#031211", "#062B2A", "#115E59", "#3F8882"],
  },
  {
    id: "14",
    name: "Indigo Night",
    description:
      "Deep indigo and blue-violet tones for creative technology interfaces.",
    colors: ["#080716", "#11102A", "#27245A", "#514E8A"],
  },
  {
    id: "15",
    name: "Iron",
    description:
      "Heavy industrial grays designed for developer tools and technical products.",
    colors: ["#0A0A0A", "#171717", "#292929", "#666666"],
  },
  {
    id: "16",
    name: "Deep Ocean",
    description:
      "Dark ocean blues with subtle cyan highlights for data-heavy interfaces.",
    colors: ["#03111C", "#06243A", "#0C4A6E", "#387D9E"],
  },
  {
    id: "17",
    name: "Dark Sand",
    description:
      "Warm dark neutrals inspired by stone, sand and architectural materials.",
    colors: ["#11100E", "#211F1A", "#3D3930", "#716B5E"],
  },
  {
    id: "18",
    name: "Shadow",
    description:
      "A restrained black and gray palette focused on depth, hierarchy and clarity.",
    colors: ["#020202", "#0C0C0C", "#191919", "#383838"],
  },
];

function getLuminance(hex) {
  const rgb = hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((value) => parseInt(value, 16) / 255);

  const [r, g, b] = rgb;

  const transform = (value) =>
    value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);

  const R = transform(r);
  const G = transform(g);
  const B = transform(b);

  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function PaletteCard({ palette }) {
  const [selectedColor, setSelectedColor] = useState(null);

  const copyColor = async (color) => {
    try {
      await navigator.clipboard.writeText(color);

      setSelectedColor(color);

      setTimeout(() => {
        setSelectedColor(null);
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
        border-[#292929]
        bg-[#0D0D0D]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#404040]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
      "
    >
      {/* Palette Preview */}
      <div className="relative flex h-[220px] overflow-hidden">
        {palette.colors.map((color) => {
          const isLight = getLuminance(color) > 0.45;

          return (
            <button
              key={color}
              onClick={() => copyColor(color)}
              className="
                relative
                h-full
                flex-1
                transition-all
                duration-500
                hover:flex-[1.4]
              "
              style={{ backgroundColor: color }}
              title={`Copy ${color}`}
            >
              <span
                className={`
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  bg-black/30
                  px-3
                  py-1.5
                  font-mono
                  text-[8px]
                  tracking-wider
                  opacity-0
                  backdrop-blur-md
                  transition-opacity
                  group-hover:opacity-100
                  ${isLight ? "text-black==" : "text-white"}
                `}
              >
                {selectedColor === color ? "COPIED" : color}
              </span>
            </button>
          );
        })}

        {/* Overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/30
            via-transparent
            to-white/5
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* Label */}
        <div className="absolute left-5 top-5">
          <span
            className="
              rounded-full
              border
              border-white/10
              bg-black/30
              px-3
              py-1.5
              font-mono
              text-[8px]
              uppercase
              tracking-widest
              text-white/70
              backdrop-blur-md
            "
          >
            DARK / {palette.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#666]">
              Dark Color System
            </p>

            <h2 className="mt-2 text-[23px] font-semibold tracking-[-0.03em] text-white">
              {palette.name}
            </h2>
          </div>

          <button
            onClick={() => copyColor(palette.colors[0])}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#292929]
              text-sm
              text-[#777]
              transition-all
              duration-300
              hover:border-white
              hover:bg-white
              hover:text-black
            "
            aria-label={`Copy ${palette.name}`}
          >
            ↗
          </button>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs leading-5 text-[#777]">
          {palette.description}
        </p>

        {/* Colors */}
        <div className="mt-6 grid grid-cols-4 gap-2">
          {palette.colors.map((color) => (
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
                  border-white/5
                  transition-all
                  duration-300
                  group-hover/color:-translate-y-1
                  group-hover/color:scale-[1.03]
                "
                style={{ backgroundColor: color }}
              />

              <p className="mt-2 truncate font-mono text-[8px] uppercase text-[#666]">
                {selectedColor === color ? "COPIED" : color}
              </p>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-[#222] pt-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#888]" />

            <span className="text-[9px] uppercase tracking-[0.18em] text-[#555]">
              4 Colors
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.16em] text-[#666]">
            Click to copy
          </span>
        </div>
      </div>
    </article>
  );
}

function Dark() {
  return (
    <section className="min-h-screen bg-[#fff] p-6 sm:p-8 md:p-10 ">
      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#666]">
              Color Library / Dark
            </p>

            <h1
              className="
                mt-3
                text-4xl
                font-semibold
                tracking-[-0.05em]
                text-black
                sm:text-5xl
              "
            >
              Dark Themes
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#666]">
              Deep, refined and sophisticated color systems designed for dark
              interfaces, dashboards, developer tools and premium digital
              products.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-3">
            <div className="rounded-full border border-[#292929] bg-[#0D0D0D] px-4 py-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#fff]">
                {darkPalettes.length} Themes
              </span>
            </div>

            <div className="rounded-full border border-[#292929] bg-[#0D0D0D] px-4 py-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#fff]">
                72 Tokens
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-[#222]" />
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