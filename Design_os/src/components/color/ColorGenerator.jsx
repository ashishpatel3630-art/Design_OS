import React, { useState } from "react";
import {
  Copy,
  Dice5,
  Download,
  Heart,
  Lock,
  Plus,
  RefreshCw,
  Save,
  Unlock,
} from "lucide-react";
const initialColors = [
  "#050505",
  "#171717",
  "#404040",
  "#A3A3A3",
  "#F5F5F5",
];
function generateColor() {
  const characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function ColorGenerator() {
  const [colors, setColors] = useState(initialColors);

  const [locked, setLocked] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [copied, setCopied] = useState(null);

  const generatePalette = () => {
    setColors((currentColors) =>
      currentColors.map((color, index) =>
        locked[index] ? color : generateColor()
      )
    );
  };

  const toggleLock = (index) => {
    setLocked((current) =>
      current.map((value, i) => (i === index ? !value : value))
    );
  };

  const copyColor = async (color, index) => {
    try {
      await navigator.clipboard.writeText(color);

      setCopied(index);

      setTimeout(() => {
        setCopied(null);
      }, 1200);
    } catch (error) {
      console.error("Failed to copy color:", error);
    }
  };

  const addColor = () => {
    if (colors.length >= 8) return;

    setColors((current) => [...current, generateColor()]);
    setLocked((current) => [...current, false]);
  };

  const removeColor = (index) => {
    if (colors.length <= 3) return;

    setColors((current) => current.filter((_, i) => i !== index));
    setLocked((current) => current.filter((_, i) => i !== index));
  };

  return (
    <section>

      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
            Current palette
          </p>

          <p className="mt-1 text-xs text-white/40">
            Lock colors you want to keep.
          </p>
        </div>

        <div className="flex items-center gap-2">

          <button
            onClick={generatePalette}
            className="flex items-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-2 text-[10px] font-medium text-white/65 transition hover:bg-white/[0.08] hover:text-white"
          >
            <Dice5 size={14} strokeWidth={1.5} />
            Randomize
          </button>

          <button
            onClick={generatePalette}
            className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[10px] font-medium text-black transition hover:bg-white/90"
          >
            <RefreshCw size={14} strokeWidth={1.5} />
            Generate
          </button>

        </div>
      </div>

      {/* Palette */}
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A]">

        {/* Color preview */}
        <div className="flex h-[300px] w-full flex-col sm:h-[360px] sm:flex-row">

          {colors.map((color, index) => (
            <div
              key={`${color}-${index}`}
              className="group relative min-h-[60px] flex-1 transition-all duration-500 hover:flex-[1.25]"
              style={{ backgroundColor: color }}
            >

              {/* Color information */}
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition duration-300 group-hover:opacity-100">

                <div className="rounded-lg border border-white/10 bg-black/50 p-3 backdrop-blur-xl">

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[11px] font-medium text-white">
                      {color}
                    </span>

                    <button
                      onClick={() => toggleLock(index)}
                      className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10"
                    >
                      {locked[index] ? (
                        <Lock size={13} />
                      ) : (
                        <Unlock size={13} />
                      )}
                    </button>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Color values */}
        <div className="border-t border-white/[0.07]">

          <div
            className="grid"
            style={{
              gridTemplateColumns: `repeat(${colors.length}, minmax(0, 1fr))`,
            }}
          >
            {colors.map((color, index) => (
              <div
                key={`${color}-value-${index}`}
                className="group border-r border-white/[0.06] last:border-r-0"
              >
                <button
                  onClick={() => copyColor(color, index)}
                  className="w-full px-3 py-4 text-left transition hover:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between gap-2">

                    <span className="font-mono text-[10px] text-white/55">
                      {copied === index ? "COPIED" : color}
                    </span>

                    <Copy
                      size={12}
                      className="text-white/20 transition group-hover:text-white/50"
                    />

                  </div>
                </button>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] px-4 py-3">

          <div className="flex items-center gap-2">

            <button
              onClick={addColor}
              disabled={colors.length >= 8}
              className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[9px] text-white/30 transition hover:bg-white/[0.05] hover:text-white/70 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Plus size={12} />
              Add color
            </button>

            <button className="flex items-center gap-1.5 rounded-md px-2 py-1.5 text-[9px] text-white/30 transition hover:bg-white/[0.05] hover:text-white/70">
              <Heart size={12} />
              Favorite
            </button>

          </div>

          <div className="flex items-center gap-2">

            <button className="flex items-center gap-1.5 rounded-md border border-white/[0.07] px-3 py-1.5 text-[9px] text-white/35 transition hover:bg-white/[0.05] hover:text-white/70">
              <Save size={12} />
              Save palette
            </button>

            <button className="flex items-center gap-1.5 rounded-md border border-white/[0.07] px-3 py-1.5 text-[9px] text-white/35 transition hover:bg-white/[0.05] hover:text-white/70">
              <Download size={12} />
              Export
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ColorGenerator;