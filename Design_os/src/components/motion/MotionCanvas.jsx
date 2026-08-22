import React from "react";

function MotionCanvas({
  animationKey,
  replayKey,
  duration,
  delay,
  easing,
  iteration,
  direction,
  fillMode,
  elementType,
  text = "Design OS",
}) {

  const animationStyle = {
    animationName: animationKey,
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
    animationTimingFunction: easing,
    animationIterationCount: iteration === "infinite"
      ? "infinite"
      : Number(iteration),
    animationDirection: direction,
    animationFillMode: fillMode,
  };


  const renderElement = () => {

    if (elementType === "button") {

      return (
        <button
          key={`${animationKey}-${replayKey}`}
          className="motion-object h-14 min-w-[190px] rounded-2xl bg-[#111111] px-8 text-sm font-medium text-white shadow-[0_25px_70px_rgba(0,0,0,0.18)]"
          style={animationStyle}
        >
          {text}
        </button>
      );

    }


    if (elementType === "text") {

      return (
        <div
          key={`${animationKey}-${replayKey}`}
          className="motion-object"
          style={animationStyle}
        >
          <span className="text-6xl font-semibold tracking-[-0.06em] text-[#111111]">
            {text}
          </span>
        </div>
      );

    }


    if (elementType === "box") {

      return (
        <div
          key={`${animationKey}-${replayKey}`}
          className="motion-object flex h-44 w-44 items-center justify-center rounded-[28px] bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
          style={animationStyle}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
            {text}
          </span>
        </div>
      );

    }


    if (elementType === "circle") {

      return (
        <div
          key={`${animationKey}-${replayKey}`}
          className="motion-object flex h-44 w-44 items-center justify-center rounded-full bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
          style={animationStyle}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
            {text}
          </span>
        </div>
      );

    }


    if (elementType === "navbar") {

      return (
        <nav
          key={`${animationKey}-${replayKey}`}
          className="motion-object flex h-16 w-[440px] items-center justify-between rounded-2xl border border-[#deded9] bg-white px-6 shadow-[0_25px_70px_rgba(0,0,0,0.1)]"
          style={animationStyle}
        >

          <span className="text-sm font-semibold">
            Design OS
          </span>

          <div className="flex gap-6 text-[10px] text-[#888888]">
            <span>Home</span>
            <span>Work</span>
            <span>About</span>
          </div>

        </nav>
      );

    }


    return null;
  };


  return (

    <section className="relative flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden bg-[#f7f7f5]">

      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(#e4e4df 1px, transparent 1px), linear-gradient(90deg, #e4e4df 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />


      {/* CENTER CROSS */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2">

        <div className="absolute left-1/2 top-0 h-full w-px bg-[#deded9]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-[#deded9]" />

      </div>


      {/* CENTER ELEMENT */}

      <div className="relative z-10 flex h-full w-full items-center justify-center">

        {renderElement()}

      </div>


      {/* TOP STATUS */}

      <div className="absolute left-5 top-5 rounded-xl border border-[#deded9] bg-white/85 px-3 py-2 backdrop-blur-xl">

        <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
          Live Preview
        </p>

        <p className="mt-1 font-mono text-[9px] text-[#333333]">
          {animationKey}
        </p>

      </div>


      {/* ELEMENT LABEL */}

      <div className="absolute bottom-5 left-5 rounded-xl border border-[#deded9] bg-white/85 px-3 py-2 backdrop-blur-xl">

        <span className="text-[9px] uppercase tracking-[0.15em] text-[#999999]">
          Element
        </span>

        <span className="ml-2 text-[9px] font-semibold">
          {elementType}
        </span>

      </div>


      {/* CENTER POINT */}

      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111]/20" />

    </section>

  );
}

export default MotionCanvas;