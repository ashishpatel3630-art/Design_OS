import React, { useMemo, useState } from "react";

const presets = [
  {
    name: "Soft",
    x: 0,
    y: 8,
    blur: 24,
    spread: -4,
    opacity: 0.08,
    color: "#000000",
    inset: false,
  },
  {
    name: "Floating",
    x: 0,
    y: 18,
    blur: 45,
    spread: -10,
    opacity: 0.14,
    color: "#000000",
    inset: false,
  },
  {
    name: "Elevated",
    x: 0,
    y: 12,
    blur: 30,
    spread: -6,
    opacity: 0.12,
    color: "#000000",
    inset: false,
  },
  {
    name: "Sharp",
    x: 0,
    y: 4,
    blur: 10,
    spread: 0,
    opacity: 0.18,
    color: "#000000",
    inset: false,
  },
  {
    name: "Inner",
    x: 0,
    y: 4,
    blur: 14,
    spread: -4,
    opacity: 0.16,
    color: "#000000",
    inset: true,
  },
];

function Shadow() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(12);
  const [blur, setBlur] = useState(30);
  const [spread, setSpread] = useState(-6);
  const [opacity, setOpacity] = useState(0.12);
  const [color, setColor] = useState("#000000");
  const [inset, setInset] = useState(false);
  const [copied, setCopied] = useState(false);

  const shadowColor = useMemo(() => {
    const hex = color.replace("#", "");

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }, [color, opacity]);

  const shadow = useMemo(() => {
    return `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${shadowColor}`;
  }, [x, y, blur, spread, shadowColor, inset]);

  const css = `box-shadow: ${shadow};`;

  const copyCSS = async () => {
    await navigator.clipboard.writeText(css);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const applyPreset = (preset) => {
    setX(preset.x);
    setY(preset.y);
    setBlur(preset.blur);
    setSpread(preset.spread);
    setOpacity(preset.opacity);
    setColor(preset.color);
    setInset(preset.inset);
  };

  const reset = () => {
    setX(0);
    setY(12);
    setBlur(30);
    setSpread(-6);
    setOpacity(0.12);
    setColor("#000000");
    setInset(false);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f1] text-[#111111]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-[#deded9] bg-[#f8f8f6]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111] shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
              <div className="h-4 w-4 rounded-md border border-white/70 shadow-[0_4px_10px_rgba(255,255,255,0.2)]" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8a85]">
                  Foundation
                </p>

                <span className="text-[#c7c7c2]">/</span>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8a85]">
                  Shadow
                </p>
              </div>

              <h1 className="mt-0.5 text-lg font-semibold tracking-tight">
                Shadow Studio
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={reset}
              className="rounded-xl border border-[#deded9] bg-white px-4 py-2.5 text-xs font-medium shadow-sm transition hover:border-[#bdbdb7]"
            >
              Reset
            </button>

            <button
              onClick={copyCSS}
              className="rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-[#242424]"
            >
              {copied ? "✓ Copied" : "Copy CSS"}
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1600px] px-5 py-7 sm:px-6">
        {/* INTRO */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium text-[#8a8a85]">
              Build your elevation system
            </p>

            <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em]">
              Create depth with precision.
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-[#8a8a85] sm:text-right">
            Design refined shadows for cards, surfaces, buttons and components
            with complete control over depth, softness and opacity.
          </p>
        </div>

        {/* WORKSPACE */}
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_390px]">
          {/* PREVIEW */}
          <section className="overflow-hidden rounded-[24px] border border-[#deded9] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between border-b border-[#e7e7e2] px-5 py-4">
              <div>
                <p className="text-sm font-semibold">Preview</p>

                <p className="mt-0.5 text-[11px] text-[#969690]">
                  Live shadow canvas
                </p>
              </div>

              <span className="rounded-lg bg-[#f5f5f2] px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-[#777777]">
                Box Shadow
              </span>
            </div>

            <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#f7f7f5] p-10">
              {/* subtle grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(#e5e5e0 1px, transparent 1px), linear-gradient(90deg, #e5e5e0 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* preview object */}
              <div
                className="relative z-10 flex h-64 w-64 items-center justify-center rounded-[28px] border border-[#eeeeea] bg-white"
                style={{
                  boxShadow: shadow,
                }}
              >
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111]">
                    <div className="h-5 w-5 rounded-lg border border-white/70" />
                  </div>

                  <p className="mt-4 text-sm font-semibold">Shadow Preview</p>

                  <p className="mt-1 text-[10px] text-[#999999]">
                    Live elevation
                  </p>
                </div>
              </div>

              {/* bottom CSS */}
              <div className="absolute inset-x-5 bottom-5">
                <div className="flex flex-col justify-between gap-3 rounded-2xl border border-[#deded9] bg-white/90 p-4 shadow-lg backdrop-blur-xl sm:flex-row sm:items-center">
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#999999]">
                      Current shadow
                    </p>

                    <p className="mt-1 truncate font-mono text-[10px] text-[#333333]">
                      {css}
                    </p>
                  </div>

                  <button
                    onClick={copyCSS}
                    className="shrink-0 rounded-lg bg-[#111111] px-3 py-2 text-[10px] font-medium text-white"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* INSPECTOR */}
          <aside className="h-fit rounded-[24px] border border-[#deded9] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <div className="border-b border-[#e7e7e2] px-5 py-4">
              <p className="text-sm font-semibold">Inspector</p>

              <p className="mt-0.5 text-[11px] text-[#969690]">
                Fine tune your shadow
              </p>
            </div>

            <div className="space-y-7 p-5">
              {/* X */}
              <Control
                label="Horizontal"
                value={x}
                min={-100}
                max={100}
                suffix="px"
                onChange={setX}
              />

              {/* Y */}
              <Control
                label="Vertical"
                value={y}
                min={-100}
                max={100}
                suffix="px"
                onChange={setY}
              />

              {/* BLUR */}
              <Control
                label="Blur"
                value={blur}
                min={0}
                max={100}
                suffix="px"
                onChange={setBlur}
              />

              {/* SPREAD */}
              <Control
                label="Spread"
                value={spread}
                min={-50}
                max={50}
                suffix="px"
                onChange={setSpread}
              />

              {/* OPACITY */}
              <Control
                label="Opacity"
                value={Math.round(opacity * 100)}
                min={0}
                max={100}
                suffix="%"
                onChange={(value) => setOpacity(value / 100)}
              />

              {/* COLOR */}
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                  Shadow Color
                </label>

                <div className="mt-3 flex gap-2">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-10 w-12 cursor-pointer rounded-lg border border-[#deded9] bg-white p-1"
                  />

                  <input
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="h-10 flex-1 rounded-lg border border-[#deded9] bg-[#fafaf8] px-3 font-mono text-[10px] uppercase outline-none focus:border-[#111111]"
                  />
                </div>
              </div>

              {/* INSET */}
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                      Inner Shadow
                    </p>

                    <p className="mt-1 text-[10px] text-[#aaa9a3]">
                      Render shadow inside the element
                    </p>
                  </div>

                  <button
                    onClick={() => setInset(!inset)}
                    className={`relative h-6 w-11 rounded-full transition ${
                      inset ? "bg-[#111111]" : "bg-[#deded9]"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                        inset ? "left-6" : "left-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* CSS */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                    CSS Output
                  </label>

                  <button
                    onClick={copyCSS}
                    className="text-[10px] font-medium text-[#555555] hover:underline"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl bg-[#111111] p-4">
                  <code className="block break-all font-mono text-[10px] leading-5 text-white/80">
                    <span className="text-white/40">box-shadow:</span> {shadow};
                  </code>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* PRESETS */}
        <section className="mt-5 rounded-[24px] border border-[#deded9] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.03)]">
          <div className="mb-5">
            <p className="text-sm font-semibold">Curated shadows</p>

            <p className="mt-1 text-[11px] text-[#969690]">
              Start with a refined elevation preset.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className="group rounded-2xl border border-[#e4e4df] bg-[#fafaf8] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c8c8c2] hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]"
              >
                <div
                  className="mx-auto flex h-24 w-full items-center justify-center rounded-xl bg-white transition duration-300 group-hover:scale-[0.98]"
                  style={{
                    boxShadow: `${preset.inset ? "inset " : ""}${preset.x}px ${preset.y}px ${preset.blur}px ${preset.spread}px rgba(0,0,0,${preset.opacity})`,
                  }}
                >
                  <div className="h-8 w-8 rounded-lg bg-[#111111]" />
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold">{preset.name}</p>

                  <p className="mt-1 font-mono text-[9px] text-[#999999]">
                    {preset.x}px {preset.y}px {preset.blur}px
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <div className="mt-5 flex justify-between px-1 text-[10px] text-[#a0a09a]">
          <span>Design OS · Shadow Studio</span>

          <span>
            {x}px · {y}px · {blur}px blur · {Math.round(opacity * 100)}% opacity
          </span>
        </div>
      </main>
    </div>
  );
}

function Control({ label, value, min, max, suffix, onChange }) {
  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
          {label}
        </label>

        <div className="flex items-center rounded-lg bg-[#f4f4f1] px-2.5 py-1.5">
          <span className="text-xs font-semibold">{value}</span>

          <span className="ml-1 text-[9px] text-[#999999]">{suffix}</span>
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer accent-black"
      />

      <div className="mt-2 flex justify-between text-[9px] text-[#b0b0aa]">
        <span>
          {min}
          {suffix}
        </span>
        <span>
          {max}
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default Shadow;
