import { useState } from "react";
import { motion } from "framer-motion";

const palettes = [
  {
    name: "Monochrome",
    category: "Minimal",
    likes: "2.4k",
    colors: ["#050505", "#222222", "#555555", "#999999", "#F5F5F5"],
  },
  {
    name: "Carbon",
    category: "Dark",
    likes: "1.8k",
    colors: ["#0A0A0A", "#1A1A1A", "#2A2A2A", "#666666", "#FFFFFF"],
  },
  {
    name: "Soft Concrete",
    category: "Neutral",
    likes: "3.2k",
    colors: ["#222222", "#555555", "#8A8A8A", "#D0D0D0", "#F5F5F5"],
  },
  {
    name: "Editorial",
    category: "Luxury",
    likes: "2.1k",
    colors: ["#111111", "#333333", "#777777", "#CCCCCC", "#FAFAFA"],
  },
  {
    name: "Graphite",
    category: "Modern",
    likes: "1.6k",
    colors: ["#050505", "#171717", "#303030", "#707070", "#E5E5E5"],
  },
  {
    name: "Paper",
    category: "Minimal",
    likes: "2.7k",
    colors: ["#191919", "#555555", "#999999", "#DDDDDD", "#FFFFFF"],
  },
  {
    name: "Steel",
    category: "Technology",
    likes: "1.3k",
    colors: ["#111111", "#292929", "#454545", "#8A8A8A", "#EEEEEE"],
  },
  {
    name: "Ash",
    category: "Neutral",
    likes: "1.9k",
    colors: ["#181818", "#383838", "#666666", "#AAAAAA", "#F2F2F2"],
  },
  {
    name: "White Space",
    category: "Clean",
    likes: "1.2k",
    colors: ["#000000", "#444444", "#888888", "#CCCCCC", "#FFFFFF"],
  },
];

const filters = [
  "All",
  "Trending",
  "New",
  "Minimal",
  "Dark",
  "Neutral",
  "Luxury",
];

export default function ColorDashboard() {
  const [selectedPalette, setSelectedPalette] = useState(palettes[0]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPalettes = palettes.filter((palette) => {
    const matchesFilter =
      activeFilter === "All" ||
      palette.category.toLowerCase() === activeFilter.toLowerCase();

    const matchesSearch =
      palette.name.toLowerCase().includes(search.toLowerCase()) ||
      palette.category.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const copyColor = async (color) => {
    await navigator.clipboard.writeText(color);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[220px] border-r border-black/10 bg-[#FAFAFA] lg:block">
        {/* Logo */}
        <div className="flex h-[72px] items-center gap-3 border-b border-black/10 px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
            D
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight">DESIGN OS</p>

            <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
              Creative System
            </p>
          </div>
        </div>

        {/* Navigation */}

        <div className="px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
            Realms
          </p>

          <SidebarItem active icon="◈" label="Color Realm" />

          <SidebarItem icon="T" label="Typography Lab" />

          <SidebarItem icon="✦" label="Motion Playground" />

          <SidebarItem icon="◎" label="AI Generator" />

          <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
            Universe
          </p>

          <SidebarItem icon="□" label="Collections" />
          <SidebarItem icon="◇" label="Daily Challenges" />
          <SidebarItem icon="○" label="Community" />
          <SidebarItem icon="☆" label="Favorites" />
        </div>

        {/* Bottom card */}

        <div className="absolute bottom-5 left-4 right-4 rounded-2xl border border-black/10 bg-white p-4">
          <p className="text-xs font-semibold">Design Level</p>

          <div className="mt-2 flex items-center justify-between">
            <span className="text-xl font-bold">07</span>
            <span className="text-[10px] text-black/40">1840 / 2500 XP</span>
          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/10">
            <div className="h-full w-[72%] rounded-full bg-black" />
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="lg:pl-[220px]">
        {/* TOPBAR */}

        <header className="sticky top-0 z-30 flex h-[72px] items-center gap-6 border-b border-black/10 bg-white/90 px-6 backdrop-blur-xl">
          {/* Search */}

          <div className="relative max-w-[480px] flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40">
              ⌕
            </span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search palettes, colors, moods..."
              className="
                h-11
                w-full
                rounded-xl
                border
                border-black/10
                bg-[#FAFAFA]
                pl-11
                pr-16
                text-sm
                outline-none
                transition
                focus:border-black/30
              "
            />

            <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-black/10 px-2 py-1 text-[10px] text-black/40">
              ⌘ K
            </span>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button className="hidden rounded-xl border border-black/10 px-4 py-2.5 text-sm font-medium transition hover:bg-black hover:text-white md:block">
              + Add Palette
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10">
              ◐
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10">
              ♧
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
              DU
            </div>
          </div>
        </header>

        {/* CONTENT */}

        <div className="grid xl:grid-cols-[1fr_390px]">
          {/* =================================================
              PALETTE CONTENT
          ================================================= */}

          <section className="min-w-0 px-6 py-8 lg:px-8">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                Color Realm
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Curated Color Palettes
              </h1>

              <p className="mt-2 text-sm text-black/50">
                Build, explore and generate professional color systems.
              </p>
            </div>

            {/* FILTERS */}

            <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    shrink-0
                    rounded-lg
                    border
                    px-4
                    py-2
                    text-xs
                    font-medium
                    transition
                    ${
                      activeFilter === filter
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white text-black/60 hover:border-black/30 hover:text-black"
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* SECTION TITLE */}

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Trending Palettes</h2>

                <p className="text-xs text-black/40">
                  Selected by the Design OS community
                </p>
              </div>

              <button className="text-xs font-medium text-black/50 hover:text-black">
                View all →
              </button>
            </div>

            {/* PALETTE GRID */}

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredPalettes.map((palette, index) => (
                <motion.button
                  key={palette.name}
                  onClick={() => setSelectedPalette(palette)}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className={`
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    bg-white
                    text-left
                    transition
                    ${
                      selectedPalette.name === palette.name
                        ? "border-black shadow-[0_15px_40px_rgba(0,0,0,0.10)]"
                        : "border-black/10 hover:border-black/30"
                    }
                  `}
                >
                  {/* Colors */}

                  <div className="relative flex h-[150px]">
                    {palette.colors.map((color) => (
                      <div
                        key={color}
                        className="group/color relative flex-1"
                        style={{
                          backgroundColor: color,
                        }}
                      >
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            copyColor(color);
                          }}
                          className="
                            absolute
                            left-1/2
                            top-1/2
                            -translate-x-1/2
                            -translate-y-1/2
                            scale-75
                            rounded-md
                            bg-white
                            px-2
                            py-1
                            text-[9px]
                            font-medium
                            opacity-0
                            shadow-lg
                            transition
                            group-hover/color:scale-100
                            group-hover/color:opacity-100
                          "
                        >
                          {color}
                        </span>
                      </div>
                    ))}

                    {/* Favorite */}

                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm shadow-sm">
                      ♡
                    </span>
                  </div>

                  {/* Card Info */}

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-semibold">
                          {palette.name}
                        </h3>

                        <p className="mt-1 text-xs text-black/40">
                          {palette.category} · Minimal
                        </p>
                      </div>

                      <span className="text-xs text-black/40">
                        ♡ {palette.likes}
                      </span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* =================================================
                AI GENERATOR
            ================================================= */}

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-[#F7F7F7] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                  AI Color Engine
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Generate a palette
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-black/50">
                  Describe your project and Design OS will create a complete
                  color system automatically.
                </p>

                <button className="mt-6 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80">
                  ✦ Generate Palette
                </button>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                  Popular Searches
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "SaaS Dashboard",
                    "Modern Website",
                    "Portfolio",
                    "Mobile App",
                    "AI Product",
                    "Editorial",
                    "Minimal",
                    "Dark UI",
                  ].map((item) => (
                    <button
                      key={item}
                      className="rounded-lg border border-black/10 bg-[#FAFAFA] px-3 py-2 text-xs text-black/60 transition hover:border-black hover:text-black"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              RIGHT DETAILS PANEL
          ================================================= */}

          <aside className="hidden min-h-[calc(100vh-72px)] border-l border-black/10 bg-[#FAFAFA] xl:block">
            <div className="sticky top-[72px] p-6">
              {/* Header */}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-black/40">
                    Selected Palette
                  </p>

                  <h2 className="mt-1 text-lg font-semibold">
                    Palette Details
                  </h2>
                </div>

                <button className="text-lg">☆</button>
              </div>

              {/* Large Palette */}

              <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
                <div className="flex h-[180px]">
                  {selectedPalette.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => copyColor(color)}
                      className="group relative flex-1"
                      style={{
                        backgroundColor: color,
                      }}
                    >
                      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-md bg-white/90 px-2 py-1 text-[9px] font-medium opacity-0 shadow transition group-hover:opacity-100">
                        {color}
                      </span>
                    </button>
                  ))}
                </div>

                {/* HEX LIST */}

                <div className="divide-y divide-black/10 bg-white">
                  {selectedPalette.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => copyColor(color)}
                      className="flex w-full items-center justify-between px-4 py-3 text-xs transition hover:bg-black/[0.03]"
                    >
                      <span className="font-mono text-black/70">{color}</span>

                      <span className="text-black/30">Copy</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}

              <div className="mt-6">
                <h3 className="text-2xl font-semibold">
                  {selectedPalette.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  A carefully balanced {selectedPalette.category.toLowerCase()}
                  color system designed for modern digital products.
                </p>
              </div>

              {/* Actions */}

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  onClick={() => copyColor(selectedPalette.colors.join(", "))}
                  className="rounded-xl bg-black py-3 text-sm font-semibold text-white transition hover:bg-black/80"
                >
                  Copy Palette
                </button>

                <button className="rounded-xl border border-black/10 bg-white py-3 text-sm font-semibold transition hover:border-black">
                  Save
                </button>
              </div>

              {/* Export */}

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Export</h3>

                  <button className="text-xs text-black/40">View All</button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <ExportButton title="CSS Variables" symbol="{}" />

                  <ExportButton title="Tailwind" symbol="⌁" />

                  <ExportButton title="SCSS" symbol="#" />

                  <ExportButton title="Figma Tokens" symbol="F" />
                </div>
              </div>

              {/* Preview */}

              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">Preview</h3>

                  <button className="text-xs text-black/40">
                    Full Preview →
                  </button>
                </div>

                <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
                  <div className="h-24 rounded-xl bg-[#F5F5F5] p-3">
                    <div className="h-2 w-16 rounded-full bg-black" />

                    <div className="mt-3 flex gap-2">
                      <div className="h-12 flex-1 rounded-lg bg-black" />

                      <div className="h-12 flex-1 rounded-lg bg-[#D0D0D0]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   SIDEBAR ITEM
========================================================= */

function SidebarItem({ icon, label, active = false }) {
  return (
    <button
      className={`
        mb-1
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        text-sm
        transition
        ${
          active
            ? "bg-black text-white"
            : "text-black/60 hover:bg-black/5 hover:text-black"
        }
      `}
    >
      <span className="w-5 text-center text-xs">{icon}</span>

      {label}
    </button>
  );
}

/* =========================================================
   EXPORT BUTTON
========================================================= */

function ExportButton({ title, symbol }) {
  return (
    <button className="rounded-xl border border-black/10 bg-white p-3 text-left transition hover:border-black">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-xs font-semibold text-white">
        {symbol}
      </div>

      <p className="mt-3 text-xs font-medium">{title}</p>
    </button>
  );
}
