import React from "react";
import { ArrowUpRight, Heart, MoreHorizontal } from "lucide-react";

const palettes = [
  {
    name: "Midnight SaaS",
    colors: ["#050505", "#171717", "#404040", "#A3A3A3", "#F5F5F5"],
    updated: "12 min ago",
  },
  {
    name: "Editorial",
    colors: ["#0A0A0A", "#262626", "#525252", "#D4D4D4", "#FAFAFA"],
    updated: "2 hours ago",
  },
  {
    name: "Monochrome",
    colors: ["#000000", "#141414", "#292929", "#737373", "#FFFFFF"],
    updated: "Yesterday",
  },
];

function SavedPalettes() {
  return (
    <section className="mt-12 pb-10">

      {/* Header */}
      <div className="mb-5 flex items-end justify-between">

        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
            Library
          </p>

          <h2 className="mt-1 text-lg font-medium text-white/80">
            Saved palettes
          </h2>
        </div>

        <button className="group flex items-center gap-1.5 text-[10px] text-white/30 transition hover:text-white/70">
          View all

          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>

      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {palettes.map((palette) => (
          <div
            key={palette.name}
            className="group rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 transition hover:border-white/[0.14] hover:bg-white/[0.04]"
          >

            {/* Colors */}
            <div className="flex h-28 overflow-hidden rounded-lg">

              {palette.colors.map((color) => (
                <div
                  key={color}
                  className="flex-1 transition group-hover:flex-[1.08]"
                  style={{ backgroundColor: color }}
                />
              ))}

            </div>

            {/* Info */}
            <div className="mt-4 flex items-center justify-between">

              <div>
                <h3 className="text-[11px] font-medium text-white/70">
                  {palette.name}
                </h3>

                <p className="mt-1 text-[9px] text-white/25">
                  Updated {palette.updated}
                </p>
              </div>

              <div className="flex items-center gap-1">

                <button className="flex h-7 w-7 items-center justify-center rounded-md text-white/20 transition hover:bg-white/[0.06] hover:text-white/60">
                  <Heart size={13} />
                </button>

                <button className="flex h-7 w-7 items-center justify-center rounded-md text-white/20 transition hover:bg-white/[0.06] hover:text-white/60">
                  <MoreHorizontal size={14} />
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default SavedPalettes;