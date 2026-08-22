import React, { useMemo, useState } from "react";

function formatName(name) {
  return name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

function Rightside({
  elementType,
  activeAnimation,
  setActiveAnimation,
  replay,
  animations,
}) {
  const [search, setSearch] = useState("");

  const filteredAnimations = useMemo(() => {
    return animations.filter((animation) =>
      animation.toLowerCase().includes(search.toLowerCase())
    );
  }, [animations, search]);

  return (
    <aside className="flex h-full w-[300px] shrink-0 min-h-0 flex-col border-l border-[#deded9] bg-white">

      {/* HEADER */}

      <div className="shrink-0 border-b border-[#e7e7e2] p-5">

        <p className="text-sm font-semibold">
          Animation Library
        </p>

        <p className="mt-1 text-[10px] leading-4 text-[#999999]">
          Animations available for your {elementType}.
        </p>

      </div>


      {/* SEARCH */}

      <div className="shrink-0 border-b border-[#e7e7e2] p-4">

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search animation..."
          className="h-10 w-full rounded-xl border border-[#deded9] bg-[#fafaf8] px-3 text-[10px] outline-none transition focus:border-[#111111]"
        />

      </div>


      {/* COUNT */}

      <div className="shrink-0 px-4 py-3">

        <div className="flex items-center justify-between">

          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#999999]">
            Available
          </span>

          <span className="rounded-lg bg-[#f4f4f1] px-2 py-1 font-mono text-[9px]">
            {filteredAnimations.length}
          </span>

        </div>

      </div>


      {/* SCROLLABLE LIBRARY */}

      <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-6">

        <div className="space-y-1">

          {filteredAnimations.map((animation) => (

            <button
              key={animation}
              onClick={() => {
                setActiveAnimation(animation);
                replay();
              }}
              className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition ${
                activeAnimation === animation
                  ? "bg-[#111111] text-white shadow-sm"
                  : "text-[#555555] hover:bg-[#f4f4f1] hover:text-[#111111]"
              }`}
            >

              <div className="flex items-center gap-3">

                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-[9px] ${
                    activeAnimation === animation
                      ? "bg-white/10"
                      : "bg-[#f4f4f1]"
                  }`}
                >
                  ✦
                </span>

                <span className="text-[10px] font-medium">
                  {formatName(animation)}
                </span>

              </div>


              <span
                className={`text-[10px] ${
                  activeAnimation === animation
                    ? "text-white/50"
                    : "text-[#c0c0ba]"
                }`}
              >
                →
              </span>

            </button>

          ))}


          {filteredAnimations.length === 0 && (

            <div className="px-4 py-10 text-center">

              <p className="text-xs font-medium">
                No animation found
              </p>

              <p className="mt-1 text-[9px] text-[#999999]">
                Try another search.
              </p>

            </div>

          )}

        </div>

      </div>

    </aside>
  );
}

export default Rightside;