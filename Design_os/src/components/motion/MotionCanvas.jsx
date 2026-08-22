import React from "react";

function MotionCanvas({
  animationKey,
  duration,
  delay,
  easing,
  text = "Design OS",
}) {
  return (
    <section className="relative flex min-h-[600px] flex-1 items-center justify-center overflow-hidden bg-[#f7f7f5]">
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#e5e5e0 1px, transparent 1px), linear-gradient(90deg, #e5e5e0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Animated Object */}
      <div
        key={animationKey}
        className="motion-object relative z-10 flex h-44 w-[360px] items-center justify-center rounded-[28px] border border-[#deded9] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
        style={{
          animationDuration: `${duration}ms`,
          animationDelay: `${delay}ms`,
          animationTimingFunction: easing,
          animationFillMode: "both",
          animationName: animationKey,
        }}
      >
        <span className="text-4xl font-semibold tracking-[-0.04em] text-[#111111]">
          {text}
        </span>
      </div>

      {/* Canvas Label */}
      <div className="absolute bottom-5 left-5 rounded-xl border border-[#deded9] bg-white/80 px-3 py-2 backdrop-blur-xl">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
          Live Preview
        </p>
      </div>
    </section>
  );
}

export default MotionCanvas;