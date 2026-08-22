import React from "react";

function MotionTimeline({
  duration,
  setDuration,
  delay,
  setDelay,
  easing,
  setEasing,
  replay,
  activeAnimation,
  elementType,
}) {

  const css = `animation: ${activeAnimation} ${duration}ms ${easing} ${delay}ms both;`;

  return (
    <section className="shrink-0 border-t border-[#deded9] bg-white">

      {/* CONTROL BAR */}

      <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-4">

        {/* DURATION */}

        <div>

          <div className="mb-2 flex justify-between">

            <label className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
              Duration
            </label>

            <span className="font-mono text-[9px] font-semibold">
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
              replay();
            }}
            className="w-full accent-black"
          />

        </div>


        {/* DELAY */}

        <div>

          <div className="mb-2 flex justify-between">

            <label className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
              Delay
            </label>

            <span className="font-mono text-[9px] font-semibold">
              {delay}ms
            </span>

          </div>

          <input
            type="range"
            min="0"
            max="1000"
            value={delay}
            onChange={(e) => {
              setDelay(Number(e.target.value));
              replay();
            }}
            className="w-full accent-black"
          />

        </div>


        {/* EASING */}

        <div>

          <label className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
            Easing
          </label>

          <select
            value={easing}
            onChange={(e) => {
              setEasing(e.target.value);
              replay();
            }}
            className="mt-2 h-9 w-full rounded-xl border border-[#deded9] bg-[#fafaf8] px-3 text-[9px] outline-none"
          >

            <option value="linear">
              linear
            </option>

            <option value="ease">
              ease
            </option>

            <option value="ease-in">
              ease-in
            </option>

            <option value="ease-out">
              ease-out
            </option>

            <option value="ease-in-out">
              ease-in-out
            </option>

            <option value="cubic-bezier(0.16,1,0.3,1)">
              Expo
            </option>

            <option value="cubic-bezier(0.22,1,0.36,1)">
              Smooth
            </option>

            <option value="cubic-bezier(0.34,1.56,0.64,1)">
              Spring
            </option>

          </select>

        </div>


        {/* REPLAY */}

        <div className="flex items-end">

          <button
            onClick={replay}
            className="h-9 w-full rounded-xl bg-[#111111] text-[9px] font-medium text-white transition hover:bg-[#242424]"
          >
            ↻ Replay
          </button>

        </div>

      </div>


      {/* TIMELINE */}

      <div className="border-t border-[#e7e7e2] px-4 py-3">

        <div className="mb-2 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
              Timeline
            </p>

            <span className="text-[9px] text-[#cccccc]">
              /
            </span>

            <span className="text-[9px] text-[#999999]">
              {elementType}
            </span>

            <span className="text-[9px] text-[#cccccc]">
              /
            </span>

            <span className="font-mono text-[9px]">
              {activeAnimation}
            </span>

          </div>

          <span className="font-mono text-[9px] text-[#aaa]">
            0 — {duration + delay}ms
          </span>

        </div>


        <div className="relative h-10 overflow-hidden rounded-xl border border-[#e3e3de] bg-[#fafaf8]">

          {/* TICKS */}

          <div className="absolute inset-0 flex justify-between px-2">

            {Array.from({ length: 11 }).map((_, index) => (

              <div
                key={index}
                className="h-full w-px bg-[#e9e9e4]"
              />

            ))}

          </div>


          {/* TRACK */}

          <div
            className="absolute left-2 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-[#111111] transition-all"
            style={{
              width: `calc(${Math.min(
                ((duration + delay) / 2000) * 100,
                100
              )}% - 8px)`,
            }}
          />


          {/* START */}

          <span className="absolute bottom-1 left-2 font-mono text-[7px] text-[#aaa]">
            0ms
          </span>


          {/* END */}

          <span className="absolute bottom-1 right-2 font-mono text-[7px] text-[#aaa]">
            {duration + delay}ms
          </span>

        </div>


        {/* CSS */}

        <div className="mt-2 flex items-center justify-between">

          <code className="truncate font-mono text-[8px] text-[#888888]">
            {css}
          </code>

          <button
            onClick={() => navigator.clipboard.writeText(css)}
            className="ml-3 shrink-0 text-[8px] font-medium hover:underline"
          >
            Copy CSS
          </button>

        </div>

      </div>

    </section>
  );
}

export default MotionTimeline;