import React from "react";

function MotionTimeline({
  duration,
  setDuration,
  delay,
  setDelay,
  easing,
  setEasing,
  replay,
}) {
  return (
    <section className="border-t border-[#deded9] bg-white">
      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 p-5 md:grid-cols-4">
        {/* Duration */}
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
              Duration
            </label>

            <span className="font-mono text-[10px] font-semibold">
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

        {/* Delay */}
        <div>
          <div className="mb-2 flex justify-between">
            <label className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
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
            className="w-full accent-black"
          />
        </div>

        {/* Easing */}
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
            className="mt-2 h-9 w-full rounded-xl border border-[#deded9] bg-[#fafaf8] px-3 text-[10px] outline-none"
          >
            <option>linear</option>
            <option>ease</option>
            <option>ease-in</option>
            <option>ease-out</option>
            <option>ease-in-out</option>
            <option>cubic-bezier(0.16,1,0.3,1)</option>
            <option>cubic-bezier(0.22,1,0.36,1)</option>
            <option>cubic-bezier(0.34,1.56,0.64,1)</option>
          </select>
        </div>

        {/* Replay */}
        <div className="flex items-end">
          <button
            onClick={replay}
            className="h-9 w-full rounded-xl bg-[#111111] text-[10px] font-medium text-white transition hover:bg-[#242424]"
          >
            ↻ Replay Animation
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="border-t border-[#e7e7e2] px-5 py-4">
        <div className="mb-3 flex justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#999999]">
            Timeline
          </p>

          <span className="font-mono text-[9px] text-[#aaa]">
            0 — {duration + delay}ms
          </span>
        </div>

        <div className="relative h-12 overflow-hidden rounded-xl border border-[#e3e3de] bg-[#fafaf8]">
          {/* Tick lines */}
          <div className="absolute inset-0 flex justify-between px-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="h-full w-px bg-[#e9e9e4]"
              />
            ))}
          </div>

          {/* Animation Track */}
          <div
            className="absolute left-2 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[#111111]"
            style={{
              width: `calc(${Math.min(
                (duration / 2000) * 100,
                100,
              )}% - 8px)`,
            }}
          />

          {/* Start */}
          <span className="absolute bottom-1 left-2 font-mono text-[8px] text-[#aaa]">
            0ms
          </span>

          {/* End */}
          <span className="absolute bottom-1 right-2 font-mono text-[8px] text-[#aaa]">
            {duration}ms
          </span>
        </div>
      </div>
    </section>
  );
}

export default MotionTimeline;