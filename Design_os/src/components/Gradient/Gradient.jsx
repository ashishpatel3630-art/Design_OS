import React, { useMemo, useState } from "react";
import GradientStored from "./GradientStored";
const presets = [
  {
    name: "Obsidian",
    colors: ["#050505", "#1A1A1A", "#F5F5F5"],
  },
  {
    name: "Carbon",
    colors: ["#050505", "#151515", "#6B6B67"],
  },
  {
    name: "Paper",
    colors: ["#FFFFFF", "#F5F5F5", "#D9D9D4"],
  },
  {
    name: "Graphite",
    colors: ["#111111", "#3A3A3A", "#A0A09A"],
  },
  {
    name: "Steel",
    colors: ["#0A0A0A", "#414141", "#D5D5D0"],
  },
  {
    name: "Mist",
    colors: ["#EAEAE6", "#F7F7F5", "#FFFFFF"],
  },
];

function Gradient() {
  const [type, setType] = useState("linear");
  const [angle, setAngle] = useState(135);

  const [colors, setColors] = useState([
    { color: "#050505", position: 0 },
    { color: "#777777", position: 50 },
    { color: "#FFFFFF", position: 100 },
  ]);

  const [copied, setCopied] = useState(false);
  const [activePreview, setActivePreview] = useState("canvas");

  const gradient = useMemo(() => {
    const stops = colors
      .map((item) => `${item.color} ${item.position}%`)
      .join(", ");

    if (type === "radial") {
      return `radial-gradient(circle at center, ${stops})`;
    }

    if (type === "conic") {
      return `conic-gradient(from ${angle}deg, ${stops})`;
    }

    return `linear-gradient(${angle}deg, ${stops})`;
  }, [type, angle, colors]);

  const updateColor = (index, value) => {
    setColors((prev) =>
      prev.map((item, i) => (i === index ? { ...item, color: value } : item)),
    );
  };

  const updatePosition = (index, value) => {
    setColors((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, position: Number(value) } : item,
      ),
    );
  };

  const addColor = () => {
    if (colors.length >= 5) return;

    const last = colors[colors.length - 1];
    const secondLast = colors[colors.length - 2];

    const position = Math.round((last.position + secondLast.position) / 2);

    setColors((prev) => [
      ...prev,
      {
        color: "#999999",
        position,
      },
    ]);
  };

  const removeColor = (index) => {
    if (colors.length <= 2) return;

    setColors((prev) => prev.filter((_, i) => i !== index));
  };

  const randomize = () => {
    const randomHex = () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    setColors([
      {
        color: randomHex(),
        position: 0,
      },
      {
        color: randomHex(),
        position: 50,
      },
      {
        color: randomHex(),
        position: 100,
      },
    ]);

    setAngle(Math.floor(Math.random() * 360));
  };

  const applyPreset = (preset) => {
    setColors(
      preset.colors.map((color, index) => ({
        color,
        position:
          index === 0 ? 0 : index === preset.colors.length - 1 ? 100 : 50,
      })),
    );
  };

  const copyCSS = async () => {
    await navigator.clipboard.writeText(`background: ${gradient};`);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1600);
  };

  const reset = () => {
    setType("linear");
    setAngle(135);

    setColors([
      {
        color: "#050505",
        position: 0,
      },
      {
        color: "#777777",
        position: 50,
      },
      {
        color: "#FFFFFF",
        position: 100,
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f1] text-[#111111]">
      {/* ========================================
          TOP BAR
      ======================================== */}

      <header className="sticky top-0 z-30 border-b border-[#deded9] bg-[#f8f8f6]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
              <div className="h-4 w-4 rounded-full border border-white/70" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A85]">
                  Foundation
                </p>

                <span className="text-[#C7C7C2]">/</span>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A8A85]">
                  Gradient
                </p>
              </div>

              <h1 className="mt-0.5 text-lg font-semibold tracking-tight">
                Gradient Studio
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={randomize}
              className="hidden rounded-xl border border-[#deded9] bg-white px-4 py-2.5 text-xs font-medium shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-[#bdbdb7] hover:shadow-md sm:block"
            >
              ✦ Randomize
            </button>

            <button
              onClick={reset}
              className="rounded-xl border border-[#deded9] bg-white px-4 py-2.5 text-xs font-medium shadow-sm transition duration-200 hover:border-[#bdbdb7]"
            >
              Reset
            </button>

            <button
              onClick={copyCSS}
              className="rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#242424] hover:shadow-lg"
            >
              {copied ? "✓ Copied" : "Copy CSS"}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================
          MAIN
      ======================================== */}

      <main className="mx-auto max-w-[1600px] px-5 py-6 sm:px-6">
        {/* Intro */}

        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium text-[#8A8A85]">
              Build your visual language
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Create something beautiful.
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-[#8A8A85] sm:text-right">
            Craft precise gradients with multiple color stops, directional
            control and production-ready CSS.
          </p>
        </div>

        {/* ========================================
            WORKSPACE
        ======================================== */}

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_390px]">
          {/* ======================================
              PREVIEW
          ====================================== */}

          <section className="overflow-hidden rounded-[24px] border border-[#deded9] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            {/* Preview Header */}

            <div className="flex items-center justify-between border-b border-[#e7e7e2] px-5 py-4">
              <div>
                <p className="text-sm font-semibold">Canvas</p>

                <p className="mt-0.5 text-[11px] text-[#969690]">
                  Live preview
                </p>
              </div>

              <div className="flex items-center gap-1 rounded-xl border border-[#e7e7e2] bg-[#f7f7f5] p-1">
                {["canvas", "full"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActivePreview(item)}
                    className={`rounded-lg px-3 py-1.5 text-[10px] font-medium capitalize transition ${
                      activePreview === item
                        ? "bg-white text-[#111111] shadow-sm"
                        : "text-[#999999]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Canvas */}

            <div className="p-5">
              <div
                className={`group relative overflow-hidden rounded-[18px] border border-[#deded9] transition-all duration-500 ${
                  activePreview === "full" ? "min-h-[620px]" : "min-h-[500px]"
                }`}
                style={{
                  background: gradient,
                }}
              >
                {/* subtle grid */}

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* center label */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-2xl border border-white/20 bg-black/20 px-5 py-4 text-center shadow-2xl backdrop-blur-xl">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/60">
                      Gradient Preview
                    </p>

                    <p className="mt-2 text-xs font-medium text-white">
                      {type.toUpperCase()} · {angle}°
                    </p>
                  </div>
                </div>

                {/* bottom info */}

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/20 bg-black/25 p-4 backdrop-blur-xl sm:flex-row sm:items-center">
                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                        Current value
                      </p>

                      <p className="mt-1 truncate font-mono text-[10px] text-white/90">
                        {gradient}
                      </p>
                    </div>

                    <button
                      onClick={copyCSS}
                      className="shrink-0 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-[10px] font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Rail */}

            <div className="border-t border-[#e7e7e2] p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A85]">
                  Gradient map
                </p>

                <span className="text-[10px] text-[#A0A09A]">
                  {colors.length} stops
                </span>
              </div>

              <div className="relative">
                <div
                  className="h-3 rounded-full border border-[#dcdcd7]"
                  style={{
                    background: gradient,
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-between px-0">
                  {colors.map((item, index) => (
                    <div
                      key={index}
                      className="h-5 w-5 rounded-full border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                      style={{
                        background: item.color,
                        marginLeft:
                          index === 0
                            ? "0%"
                            : index === colors.length - 1
                              ? "0%"
                              : `${item.position - 10}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ======================================
              INSPECTOR
          ====================================== */}

          <aside className="h-fit rounded-[24px] border border-[#deded9] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            {/* Inspector Header */}

            <div className="border-b border-[#e7e7e2] px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Inspector</p>

                  <p className="mt-0.5 text-[11px] text-[#969690]">
                    Gradient properties
                  </p>
                </div>

                <span className="rounded-lg bg-[#111111] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                  {type}
                </span>
              </div>
            </div>

            <div className="space-y-7 p-5">
              {/* TYPE */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A85]">
                    Type
                  </label>

                  <span className="text-[10px] text-[#B0B0AA]">01</span>
                </div>

                <div className="grid grid-cols-3 gap-1 rounded-xl bg-[#f4f4f1] p-1">
                  {["linear", "radial", "conic"].map((item) => (
                    <button
                      key={item}
                      onClick={() => setType(item)}
                      className={`rounded-lg py-2.5 text-[10px] font-medium capitalize transition ${
                        type === item
                          ? "bg-white text-[#111111] shadow-sm"
                          : "text-[#969690] hover:text-[#111111]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* ANGLE */}

              {type !== "radial" && (
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A85]">
                      Angle
                    </label>

                    <div className="flex items-center gap-1 rounded-lg bg-[#f4f4f1] px-2.5 py-1.5">
                      <span className="text-xs font-semibold">{angle}</span>

                      <span className="text-[9px] text-[#999999]">DEG</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="h-1.5 w-full cursor-pointer accent-black"
                  />

                  <div className="mt-2 flex justify-between text-[9px] text-[#B0B0AA]">
                    <span>0°</span>

                    <span>90°</span>

                    <span>180°</span>

                    <span>270°</span>

                    <span>360°</span>
                  </div>
                </div>
              )}

              {/* COLOR STOPS */}

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A85]">
                      Color stops
                    </label>

                    <p className="mt-1 text-[10px] text-[#B0B0AA]">
                      Control each transition point
                    </p>
                  </div>

                  <button
                    onClick={addColor}
                    disabled={colors.length >= 5}
                    className="rounded-lg border border-[#deded9] bg-[#f7f7f5] px-2.5 py-1.5 text-[10px] font-medium transition hover:border-[#bdbdb7] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    + Add stop
                  </button>
                </div>

                <div className="space-y-2.5">
                  {colors.map((item, index) => (
                    <div
                      key={index}
                      className="group rounded-xl border border-[#e5e5e0] bg-[#fafaf8] p-3 transition hover:border-[#cfcfc8]"
                    >
                      <div className="flex items-center gap-2">
                        {/* Color */}

                        <input
                          type="color"
                          value={item.color}
                          onChange={(e) => updateColor(index, e.target.value)}
                          className="h-9 w-10 cursor-pointer rounded-lg border border-[#dcdcd7] bg-white p-1"
                        />

                        {/* Hex */}

                        <input
                          value={item.color}
                          onChange={(e) => updateColor(index, e.target.value)}
                          className="h-9 min-w-0 flex-1 rounded-lg border border-[#e4e4df] bg-white px-3 font-mono text-[10px] font-medium uppercase outline-none transition focus:border-[#111111]"
                        />

                        {/* Position */}

                        <div className="flex h-9 items-center rounded-lg border border-[#e4e4df] bg-white px-2">
                          <input
                            type="number"
                            min="0"
                            max="100"
                            value={item.position}
                            onChange={(e) =>
                              updatePosition(index, e.target.value)
                            }
                            className="w-8 bg-transparent text-right text-[10px] font-semibold outline-none"
                          />

                          <span className="ml-0.5 text-[9px] text-[#999999]">
                            %
                          </span>
                        </div>

                        {colors.length > 2 && (
                          <button
                            onClick={() => removeColor(index)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-[#A0A09A] opacity-0 transition hover:bg-[#eeeeea] hover:text-[#111111] group-hover:opacity-100"
                          >
                            ×
                          </button>
                        )}
                      </div>

                      {/* Position Slider */}

                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={item.position}
                        onChange={(e) => updatePosition(index, e.target.value)}
                        className="mt-3 h-1 w-full cursor-pointer accent-black"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CSS */}

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8A85]">
                    CSS Output
                  </label>

                  <button
                    onClick={copyCSS}
                    className="text-[10px] font-medium text-[#555555] hover:text-black hover:underline"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-[#111111] p-4">
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-white/5 blur-2xl" />

                  <code className="relative block break-all font-mono text-[10px] leading-5 text-white/80">
                    <span className="text-white/40">background:</span>{" "}
                    {gradient};
                  </code>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ========================================
            PRESETS
        ======================================== */}

        <section className="mt-5 rounded-[24px] border border-[#deded9] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold">Curated presets</p>

              <p className="mt-1 text-[11px] text-[#969690]">
                Start with a refined foundation and make it yours.
              </p>
            </div>

            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#B0B0AA]">
              {presets.length} presets
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className="group overflow-hidden rounded-2xl border border-[#e4e4df] bg-[#fafaf8] text-left transition duration-300 hover:-translate-y-1 hover:border-[#c8c8c2] hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]"
              >
                <div
                  className="relative h-28 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${preset.colors.join(", ")})`,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                  </div>

                  <div className="absolute bottom-3 left-3 rounded-lg border border-white/20 bg-black/20 px-2 py-1 backdrop-blur-md">
                    <span className="text-[9px] font-medium text-white">
                      Apply
                    </span>
                  </div>
                </div>

                <div className="p-3">
                  <p className="text-xs font-semibold">{preset.name}</p>

                  <div className="mt-2 flex gap-1">
                    {preset.colors.map((color) => (
                      <span
                        key={color}
                        className="h-2 w-2 rounded-full border border-[#d5d5d0]"
                        style={{
                          background: color,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ========================================
            FOOTER INFO
        ======================================== */}

        <div className="mt-5 flex flex-col justify-between gap-2 px-1 text-[10px] text-[#A0A09A] sm:flex-row">
          <span>Design OS · Gradient Studio</span>

          <span>
            {colors.length} color stops · {type} gradient · {angle}°
          </span>
        </div>
        <GradientStored/>
      </main>
      
    </div>
  );
}

export default Gradient;
