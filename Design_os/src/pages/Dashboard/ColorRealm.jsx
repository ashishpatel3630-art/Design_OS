import React from "react";
import ColorGenerator from "../../components/color/ColorGenerator";
import SavedPalettes from "../../components/color/SavedPalettes";

function ColorRealm() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <main className="px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">

          {/* Page Header */}
          <div className="mb-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
              Design Tool / Colors
            </p>

            <div className="mt-2 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h1 className="text-3xl font-medium tracking-[-0.04em] text-white/90 sm:text-4xl">
                  Color Realm
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/35">
                  Create, explore and refine beautiful color systems for your
                  next interface.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2">
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                  Palette Generator
                </span>
              </div>
            </div>
          </div>

          {/* Generator */}
          <ColorGenerator />

          {/* Saved palettes */}
          <SavedPalettes />

        </div>
      </main>
    </div>
  );
}

export default ColorRealm;