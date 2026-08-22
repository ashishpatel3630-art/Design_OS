import React, { useMemo, useState } from "react";

const presets = [
  {
    name: "Smooth",
    duration: 500,
    easing: "ease-out",
    delay: 0,
    scale: 1.04,
    y: -8,
  },
  {
    name: "Snappy",
    duration: 220,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    delay: 0,
    scale: 1.06,
    y: -6,
  },
  {
    name: "Elegant",
    duration: 800,
    easing: "ease-in-out",
    delay: 0,
    scale: 1.02,
    y: -4,
  },
  {
    name: "Quick",
    duration: 150,
    easing: "ease-out",
    delay: 0,
    scale: 1.03,
    y: -3,
  },
];

const easingOptions = [
  "linear",
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
  "cubic-bezier(0.16, 1, 0.3, 1)",
];

function Motion() {
  const [duration, setDuration] = useState(500);
  const [delay, setDelay] = useState(0);
  const [easing, setEasing] = useState("ease-out");
  const [scale, setScale] = useState(1.04);
  const [y, setY] = useState(-8);
  const [radius, setRadius] = useState(20);
  const [playing, setPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  const transition = useMemo(
    () => `transform ${duration}ms ${easing} ${delay}ms`,
    [duration, easing, delay],
  );

  const css = `transition: ${transition};
transform: scale(${scale}) translateY(${y}px);`;

  const play = () => {
    setPlaying(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPlaying(true);
      });
    });
  };

  const copyCSS = async () => {
    await navigator.clipboard.writeText(css);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const applyPreset = (preset) => {
    setDuration(preset.duration);
    setEasing(preset.easing);
    setDelay(preset.delay);
    setScale(preset.scale);
    setY(preset.y);
    play();
  };

  const reset = () => {
    setDuration(500);
    setDelay(0);
    setEasing("ease-out");
    setScale(1.04);
    setY(-8);
    setRadius(20);
    play();
  };

  return (
    <div className="min-h-screen bg-[#f4f4f1] text-[#111111]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-[#deded9] bg-[#f8f8f6]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#111111]">
              <div className="h-4 w-4 rounded-full border border-white/70" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8a85]">
                  Foundation
                </p>

                <span className="text-[#c7c7c2]">/</span>

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8a85]">
                  Motion
                </p>
              </div>

              <h1 className="text-lg font-semibold tracking-tight">
                Motion Studio
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={reset}
              className="rounded-xl border border-[#deded9] bg-white px-4 py-2.5 text-xs font-medium transition hover:border-[#bdbdb7]"
            >
              Reset
            </button>

            <button
              onClick={copyCSS}
              className="rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition hover:bg-[#242424]"
            >
              {copied ? "✓ Copied" : "Copy CSS"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-5 py-7 sm:px-6">
        {/* INTRO */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium text-[#8a8a85]">
              Build your interaction language
            </p>

            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Make interfaces feel alive.
            </h2>
          </div>

          <p className="max-w-md text-xs leading-5 text-[#8a8a85] sm:text-right">
            Design precise transitions, easing curves and movement systems for
            polished digital experiences.
          </p>
        </div>

        {/* WORKSPACE */}
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_390px]">
          {/* PREVIEW */}
          <section className="overflow-hidden rounded-[24px] border border-[#deded9] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between border-b border-[#e7e7e2] px-5 py-4">
              <div>
                <p className="text-sm font-semibold">Motion Canvas</p>

                <p className="mt-0.5 text-[11px] text-[#969690]">
                  Interactive live preview
                </p>
              </div>

              <button
                onClick={play}
                className="rounded-xl border border-[#deded9] bg-[#f7f7f5] px-3 py-2 text-[10px] font-medium transition hover:border-[#bdbdb7]"
              >
                ↻ Replay
              </button>
            </div>

            <div className="p-5">
              <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[20px] border border-[#deded9] bg-[#111111]">
                {/* Grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Object */}
                <div
                  key={playing}
                  style={{
                    animation: `motionPreview ${duration}ms ${easing} ${delay}ms both`,
                    "--scale": scale,
                    "--y": `${y}px`,
                    "--radius": `${radius}px`,
                  }}
                  className="relative z-10 h-40 w-40 border border-white/20 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                >
                  <div className="absolute inset-3 border border-black/10" />

                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
                      Motion
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl sm:flex-row sm:items-center">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                        Current transition
                      </p>

                      <p className="mt-1 font-mono text-[10px] text-white/80">
                        {duration}ms · {easing}
                      </p>
                    </div>

                    <span className="rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 text-[9px] text-white/60">
                      {scale}× SCALE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="border-t border-[#e7e7e2] p-5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                  Timeline
                </p>

                <span className="font-mono text-[10px] text-[#999999]">
                  0 — {duration + delay}ms
                </span>
              </div>

              <div className="relative h-14 rounded-xl border border-[#e4e4df] bg-[#fafaf8]">
                <div className="absolute left-0 right-0 top-1/2 h-px bg-[#deded9]" />

                <div
                  className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#111111]"
                  style={{
                    width: `${Math.min((duration / 1000) * 100, 100)}%`,
                  }}
                />

                <div className="absolute left-0 top-2 text-[8px] text-[#aaa]">
                  0ms
                </div>

                <div className="absolute right-0 top-2 text-[8px] text-[#aaa]">
                  {duration}ms
                </div>

                <div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-[8px] uppercase tracking-wider text-[#aaa]">
                  Transition
                </div>
              </div>
            </div>
          </section>

          {/* INSPECTOR */}
          <aside className="h-fit rounded-[24px] border border-[#deded9] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
            <div className="border-b border-[#e7e7e2] px-5 py-4">
              <p className="text-sm font-semibold">Motion Inspector</p>

              <p className="mt-0.5 text-[11px] text-[#969690]">
                Fine tune your animation
              </p>
            </div>

            <div className="space-y-7 p-5">
              {/* DURATION */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                    Duration
                  </label>

                  <span className="rounded-lg bg-[#f4f4f1] px-2.5 py-1.5 font-mono text-[10px] font-semibold">
                    {duration}ms
                  </span>
                </div>

                <input
                  type="range"
                  min="50"
                  max="2000"
                  value={duration}
                  onChange={(e) => {
                    setDuration(Number(e.target.value));
                    play();
                  }}
                  className="h-1.5 w-full accent-black"
                />

                <div className="mt-2 flex justify-between text-[9px] text-[#aaa]">
                  <span>50ms</span>
                  <span>1s</span>
                  <span>2s</span>
                </div>
              </div>

              {/* DELAY */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                    Delay
                  </label>

                  <span className="font-mono text-[10px] font-semibold">
                    {delay}ms
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={delay}
                  onChange={(e) => setDelay(Number(e.target.value))}
                  className="h-1.5 w-full accent-black"
                />
              </div>

              {/* EASING */}
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                  Easing
                </label>

                <select
                  value={easing}
                  onChange={(e) => {
                    setEasing(e.target.value);
                    play();
                  }}
                  className="mt-3 w-full rounded-xl border border-[#deded9] bg-[#fafaf8] px-3 py-3 text-xs outline-none focus:border-[#111111]"
                >
                  {easingOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              {/* SCALE */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                    Scale
                  </label>

                  <span className="font-mono text-[10px] font-semibold">
                    {scale.toFixed(2)}×
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="1.2"
                  step="0.01"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="h-1.5 w-full accent-black"
                />
              </div>

              {/* Y MOVEMENT */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                    Y Movement
                  </label>

                  <span className="font-mono text-[10px] font-semibold">
                    {y}px
                  </span>
                </div>

                <input
                  type="range"
                  min="-50"
                  max="50"
                  value={y}
                  onChange={(e) => setY(Number(e.target.value))}
                  className="h-1.5 w-full accent-black"
                />
              </div>

              {/* RADIUS */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                    Radius
                  </label>

                  <span className="font-mono text-[10px] font-semibold">
                    {radius}px
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="40"
                  value={radius}
                  onChange={(e) => setRadius(Number(e.target.value))}
                  className="h-1.5 w-full accent-black"
                />
              </div>

              {/* CSS */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
                    CSS Output
                  </label>

                  <button
                    onClick={copyCSS}
                    className="text-[10px] font-medium hover:underline"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="overflow-hidden rounded-xl bg-[#111111] p-4">
                  <code className="block whitespace-pre-wrap break-all font-mono text-[10px] leading-5 text-white/80">
                    {css}
                  </code>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* PRESETS */}
        <section className="mt-5 rounded-[24px] border border-[#deded9] bg-white p-5">
          <div className="mb-5">
            <p className="text-sm font-semibold">Motion Presets</p>

            <p className="mt-1 text-[11px] text-[#969690]">
              Start with a professionally tuned motion curve.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className="group rounded-2xl border border-[#e4e4df] bg-[#fafaf8] p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-[#c8c8c2] hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold">{preset.name}</p>

                  <span className="text-[9px] text-[#aaa]">
                    {preset.duration}ms
                  </span>
                </div>

                <div className="mt-5 flex h-12 items-center overflow-hidden rounded-xl bg-[#111111] px-3">
                  <div
                    className="h-6 w-6 rounded-md bg-white transition-all"
                    style={{
                      transition: `transform ${preset.duration}ms ${preset.easing}`,
                    }}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[9px] text-[#999999]">
                    {preset.easing}
                  </span>

                  <span className="text-[9px] font-medium text-[#555] group-hover:text-black">
                    Apply →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="mt-5 flex justify-between px-1 text-[10px] text-[#a0a09a]">
          <span>Design OS · Motion Studio</span>

          <span>
            {duration}ms · {easing} · {scale.toFixed(2)}×
          </span>
        </div>
      </main>

      <style>{`
        @keyframes motionPreview {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(20px);
          }

          100% {
            opacity: 1;
            transform: scale(var(--scale)) translateY(var(--y));
          }
        }
      `}</style>
    </div>
  );
}

export default Motion;
