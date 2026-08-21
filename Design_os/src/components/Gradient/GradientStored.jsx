import React, { useState } from "react";

const initialGradients = [
  {
    id: 1,
    name: "Aurora",
    type: "Linear",
    angle: 135,
    colors: ["#0FAFAD", "#302B63", "#24243E", "#00C6FF"],
    created: "Today",
  },
  {
    id: 2,
    name: "Sunset",
    type: "Linear",
    angle: 120,
    colors: ["#FF512F", "#F09819", "#FFB75E", "#ED4264"],
    created: "Today",
  },
  {
    id: 3,
    name: "Ocean",
    type: "Linear",
    angle: 135,
    colors: ["#021B79", "#0575E6", "#00C6FF", "#00F2FE"],
    created: "Today",
  },
  {
    id: 4,
    name: "Royal",
    type: "Radial",
    angle: 0,
    colors: ["#240046", "#5A189A", "#9D4EDD", "#E0AAFF"],
    created: "Yesterday",
  },
  {
    id: 5,
    name: "Emerald",
    type: "Linear",
    angle: 135,
    colors: ["#022C22", "#065F46", "#10B981", "#6EE7B7"],
    created: "Yesterday",
  },
  {
    id: 6,
    name: "Coral",
    type: "Linear",
    angle: 90,
    colors: ["#7F1D1D", "#DC2626", "#FB7185", "#FED7AA"],
    created: "Aug 18",
  },
  {
    id: 7,
    name: "Cyber",
    type: "Conic",
    angle: 90,
    colors: ["#00F5D4", "#00BBF9", "#4361EE", "#7209B7"],
    created: "Aug 18",
  },
  {
    id: 8,
    name: "Peach",
    type: "Linear",
    angle: 45,
    colors: ["#FF9A9E", "#FAD0C4", "#FBC2EB", "#A18CD1"],
    created: "Aug 17",
  },
  {
    id: 9,
    name: "Forest",
    type: "Radial",
    angle: 0,
    colors: ["#052E16", "#166534", "#22C55E", "#BEF264"],
    created: "Aug 17",
  },
  {
    id: 10,
    name: "Fire",
    type: "Linear",
    angle: 45,
    colors: ["#7F1D1D", "#EA580C", "#FACC15", "#FFF7ED"],
    created: "Aug 16",
  },
  {
    id: 11,
    name: "Candy",
    type: "Linear",
    angle: 135,
    colors: ["#FF6B9D", "#C084FC", "#818CF8", "#67E8F9"],
    created: "Aug 16",
  },
  {
    id: 12,
    name: "Deep Space",
    type: "Conic",
    angle: 180,
    colors: ["#020617", "#172554", "#312E81", "#581C87", "#BE185D"],
    created: "Aug 15",
  },
  {
    id: 13,
    name: "Mint",
    type: "Linear",
    angle: 120,
    colors: ["#064E3B", "#059669", "#34D399", "#A7F3D0"],
    created: "Aug 15",
  },
  {
    id: 14,
    name: "Berry",
    type: "Radial",
    angle: 0,
    colors: ["#4C0519", "#9D174D", "#DB2777", "#F9A8D4"],
    created: "Aug 14",
  },
  {
    id: 15,
    name: "Golden Hour",
    type: "Linear",
    angle: 135,
    colors: ["#451A03", "#B45309", "#F59E0B", "#FDE68A"],
    created: "Aug 14",
  },
  {
    id: 16,
    name: "Violet Dream",
    type: "Conic",
    angle: 90,
    colors: ["#2E1065", "#6D28D9", "#A855F7", "#EC4899"],
    created: "Aug 13",
  },
];
function GradientStored() {
  const [gradients, setGradients] = useState(initialGradients);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Linear", "Radial", "Conic"];

  const filteredGradients = gradients.filter((gradient) => {
    const matchesSearch = gradient.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === "All" || gradient.type === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const deleteGradient = (id) => {
    setGradients((prev) => prev.filter((gradient) => gradient.id !== id));
  };

  const copyGradient = async (gradient) => {
    const stops = gradient.colors
      .map((color, index) => {
        const position =
          index === 0 ? 0 : index === gradient.colors.length - 1 ? 100 : 50;

        return `${color} ${position}%`;
      })
      .join(", ");

    const css =
      gradient.type === "Radial"
        ? `radial-gradient(circle, ${stops})`
        : gradient.type === "Conic"
          ? `conic-gradient(from ${gradient.angle}deg, ${stops})`
          : `linear-gradient(${gradient.angle}deg, ${stops})`;

    await navigator.clipboard.writeText(css);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f1] text-[#111111]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-[#deded9] bg-[#f8f8f6]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-[1600px] px-6 py-5">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#111111]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A85]">
                  Foundation / Gradient
                </p>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight">
                Gradient Library
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#8A8A85]">
                Your saved gradients, organized and ready to use across your
                design system.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="rounded-xl border border-[#deded9] bg-white px-4 py-2.5">
                <span className="text-xs font-semibold">
                  {gradients.length}
                </span>
                <span className="ml-1.5 text-[10px] text-[#999999]">
                  gradients
                </span>
              </div>

              <button className="rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-[#242424]">
                + New Gradient
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1600px] px-6 py-7">
        {/* TOOLBAR */}
        <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl px-4 py-2.5 text-xs font-medium transition ${
                  activeFilter === filter
                    ? "bg-[#111111] text-white shadow-sm"
                    : "border border-[#deded9] bg-white text-[#777777] hover:border-[#bdbdb7] hover:text-[#111111]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#999999]">
                ⌕
              </span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search gradients..."
                className="h-10 w-64 rounded-xl border border-[#deded9] bg-white pl-9 pr-3 text-xs outline-none transition focus:border-[#111111]"
              />
            </div>

            {/* View */}
            <div className="flex rounded-xl border border-[#deded9] bg-white p-1">
              <button
                onClick={() => setView("grid")}
                className={`rounded-lg px-3 py-2 text-xs ${
                  view === "grid" ? "bg-[#111111] text-white" : "text-[#999999]"
                }`}
              >
                ▦
              </button>
              <button
                onClick={() => setView("list")}
                className={`rounded-lg px-3 py-2 text-xs ${
                  view === "list" ? "bg-[#111111] text-white" : "text-[#999999]"
                }`}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* EMPTY */}
        {filteredGradients.length === 0 && (
          <div className="rounded-[24px] border border-dashed border-[#d5d5d0] bg-white px-6 py-24 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f2f2ef] text-xl">
              ◌
            </div>
            <h2 className="mt-5 text-lg font-semibold">No gradients found</h2>
            <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-[#999999]">
              Try another search term or create a new gradient from the Gradient
              Studio.
            </p>
          </div>
        )}

        {/* GRID */}
        {view === "grid" && filteredGradients.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGradients.map((gradient) => (
              <article
                key={gradient.id}
                className="group overflow-hidden rounded-[22px] border border-[#deded9] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:border-[#c7c7c1] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                {/* Preview */}
                <div
                  className="relative h-52 overflow-hidden"
                  style={{
                    background:
                      gradient.type === "Radial"
                        ? `radial-gradient(circle, ${gradient.colors.join(", ")})`
                        : gradient.type === "Conic"
                          ? `conic-gradient(from ${gradient.angle}deg, ${gradient.colors.join(", ")})`
                          : `linear-gradient(${gradient.angle}deg, ${gradient.colors.join(", ")})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

                  <div className="absolute left-4 top-4 rounded-lg border border-white/20 bg-black/20 px-2.5 py-1.5 backdrop-blur-md">
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-white">
                      {gradient.type}
                    </span>
                  </div>

                  <div className="absolute right-4 top-4 flex translate-y-2 gap-1 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      onClick={() => copyGradient(gradient)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black/30 text-xs text-white backdrop-blur-md hover:bg-black/50"
                      title="Copy CSS"
                    >
                      ⧉
                    </button>
                    <button
                      onClick={() => deleteGradient(gradient.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black/30 text-xs text-white backdrop-blur-md hover:bg-black/50"
                      title="Delete"
                    >
                      ×
                    </button>
                  </div>

                  {gradient.type !== "Radial" && (
                    <div className="absolute bottom-4 left-4 rounded-lg border border-white/20 bg-black/20 px-2.5 py-1.5 backdrop-blur-md">
                      <span className="text-[9px] font-medium text-white">
                        {gradient.angle}°
                      </span>
                    </div>
                  )}
                </div>

                {/* Information */}
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-sm font-semibold">{gradient.name}</h2>
                      <p className="mt-1 text-[10px] text-[#999999]">
                        Saved {gradient.created}
                      </p>
                    </div>
                    <button className="text-[#A0A09A] transition hover:text-[#111111]">
                      ···
                    </button>
                  </div>

                  {/* Color chips */}
                  <div className="mt-4 flex items-center gap-2">
                    {gradient.colors.map((color, idx) => (
                      <div
                        key={`${gradient.id}-${color}-${idx}`}
                        className="flex items-center gap-1.5 rounded-lg border border-[#e3e3de] bg-[#fafaf8] px-2 py-1"
                      >
                        <span
                          className="h-2.5 w-2.5 rounded-full border border-[#d2d2cc]"
                          style={{ background: color }}
                        />
                        <span className="font-mono text-[8px] uppercase text-[#777777]">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* LIST */}
        {view === "list" && filteredGradients.length > 0 && (
          <div className="overflow-hidden rounded-[22px] border border-[#deded9] bg-white">
            {filteredGradients.map((gradient, index) => (
              <div
                key={gradient.id}
                className={`group flex items-center gap-5 p-4 transition hover:bg-[#fafaf8] ${
                  index !== filteredGradients.length - 1
                    ? "border-b border-[#e7e7e2]"
                    : ""
                }`}
              >
                <div
                  className="h-16 w-28 shrink-0 rounded-xl border border-[#deded9]"
                  style={{
                    background:
                      gradient.type === "Radial"
                        ? `radial-gradient(circle, ${gradient.colors.join(", ")})`
                        : gradient.type === "Conic"
                          ? `conic-gradient(from ${gradient.angle}deg, ${gradient.colors.join(", ")})`
                          : `linear-gradient(${gradient.angle}deg, ${gradient.colors.join(", ")})`,
                  }}
                />

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">{gradient.name}</p>
                  <p className="mt-1 text-[10px] text-[#999999]">
                    {gradient.type} · {gradient.angle}° · Saved{" "}
                    {gradient.created}
                  </p>
                </div>

                <div className="hidden items-center gap-2 md:flex">
                  {gradient.colors.map((color, idx) => (
                    <span
                      key={`${gradient.id}-${color}-${idx}`}
                      className="h-5 w-5 rounded-full border border-[#d5d5d0]"
                      style={{ background: color }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => copyGradient(gradient)}
                  className="rounded-xl border border-[#deded9] bg-white px-3 py-2 text-[10px] font-medium opacity-0 transition group-hover:opacity-100 hover:border-[#111111]"
                >
                  Copy CSS
                </button>

                <button
                  onClick={() => deleteGradient(gradient.id)}
                  className="text-xs text-[#A0A09A] hover:text-[#111111]"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default GradientStored;
