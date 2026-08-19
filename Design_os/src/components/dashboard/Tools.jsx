import React from "react";
import {
  Palette,
  Type,
  Move3D,
  Layers3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const tools = [
  {
    id: 1,
    category: "FOUNDATION",
    title: "Colors & Palette",
    description:
      "Build, explore and manage complete color systems for your interfaces.",
    icon: Palette,
    type: "colors",
  },
  {
    id: 2,
    category: "FOUNDATION",
    title: "Typography",
    description:
      "Create scalable type systems with precise control over hierarchy and spacing.",
    icon: Type,
    type: "type",
  },
  {
    id: 3,
    category: "MOTION",
    title: "Motion",
    description:
      "Design smooth transitions, interactions and motion systems for your interface.",
    icon: Move3D,
    type: "motion",
  },
  {
    id: 4,
    category: "EFFECTS",
    title: "Shadow",
    description:
      "Generate refined shadow systems with complete control over depth and softness.",
    icon: Layers3,
    type: "shadow",
  },
  {
    id: 5,
    category: "EFFECTS",
    title: "Gradient",
    description:
      "Create beautiful gradients and reusable visual backgrounds for your system.",
    icon: Sparkles,
    type: "gradient",
  },
];

function ToolPreview({ type, compact = false }) {
  if (type === "colors") {
    return (
      <div className={`mt-4 flex items-center ${compact ? "gap-1.5" : "gap-2"}`}>
        {["#111111", "#333333", "#666666", "#999999", "#CCCCCC", "#F2F2F2"].map(
          (color) => (
            <div
              key={color}
              className={`${compact ? "h-5 w-5" : "h-9 w-9"} rounded-md border border-black/5 transition-transform duration-300 group-hover:-translate-y-1`}
              style={{ backgroundColor: color }}
            />
          ),
        )}
      </div>
    );
  }

  if (type === "type") {
    return (
      <div className={`mt-4 flex items-end ${compact ? "gap-1.5" : "gap-2"}`}>
        {[
          ["H1", compact ? "text-[10px]" : "text-[20px]"],
          ["H2", compact ? "text-[9px]" : "text-[18px]"],
          ["H3", compact ? "text-[8px]" : "text-[16px]"],
          ["H4", compact ? "text-[7px]" : "text-[14px]"],
        ].map(([label, size]) => (
          <div
            key={label}
            className={`${compact ? "h-6 min-w-6 px-1.5" : "h-9 min-w-9 px-2"} flex items-center justify-center rounded-md bg-[#171717] text-white transition-transform duration-300 group-hover:-translate-y-1`}
          >
            <span className={`${size} font-semibold`}>{label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "motion") {
    return (
      <div className="mt-4 flex items-center gap-3">
        <div className={`${compact ? "h-7 w-7" : "h-10 w-10"} rounded-lg border border-[#DCDCDC] bg-[#F5F5F5] transition-transform duration-500 group-hover:translate-x-6`} />
        <div className="h-px flex-1 bg-[#DCDCDC]" />
        <div className={`flex items-center justify-center rounded-full bg-[#111111] ${compact ? "h-5 w-5" : "h-8 w-8"}`}>
          <div className={`${compact ? "h-1.5 w-1.5" : "h-2 w-2"} rounded-full bg-white`} />
        </div>
      </div>
    );
  }

  if (type === "shadow") {
    return (
      <div className="mt-4 flex items-center gap-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className={`${compact ? "h-8 w-8" : "h-12 w-12"} rounded-lg border border-[#EEEEEE] bg-white transition-transform duration-300 group-hover:-translate-y-1`}
            style={{
              boxShadow: `0 ${compact ? 6 + item * 4 : 8 + item * 5}px ${compact ? 12 + item * 6 : 20 + item * 8}px rgba(0,0,0,${
                0.06 + item * 0.03
              })`,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "gradient") {
    return (
      <div className={`${compact ? "mt-4 h-8" : "mt-6 h-12"} overflow-hidden rounded-lg border border-[#E5E5E5] bg-gradient-to-r from-[#111111] via-[#777777] to-[#F1F1F1] transition-all duration-500 group-hover:scale-[1.01]`} />
    );
  }

  return null;
}

export default function Tools({ compact = false }) {
  if (compact) {
    return (
      <section className="rounded-[28px] border border-[#e2e2dd] bg-white p-5 shadow-[0_18px_45px_rgba(17,17,17,0.04)]">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8a8a85]">
              Design System
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.05em] text-[#111111]">
              Tools
            </h3>
          </div>

          <span className="rounded-full border border-[#e5e5e0] bg-[#f7f7f5] px-2 py-1 text-[8px] font-medium uppercase tracking-[0.16em] text-[#777777]">
            05
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {tools.slice(0, 4).map((tool) => {
            const Icon = tool.icon;

            return (
              <div
                key={tool.id}
                className="group rounded-2xl border border-[#ecece7] bg-[#f9f9f7] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#d7d7d2] hover:shadow-[0_16px_32px_rgba(17,17,17,0.03)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#e6e6e2] bg-white text-[#555]">
                    <Icon size={14} strokeWidth={1.8} />
                  </div>
                  <ArrowUpRight size={12} className="text-[#a0a09a]" />
                </div>

                <div className="mt-4">
                  <p className="text-[7px] font-medium uppercase tracking-[0.18em] text-[#a0a09a]">
                    {tool.category}
                  </p>
                  <h4 className="mt-2 text-sm font-semibold tracking-[-0.04em] text-[#111111]">
                    {tool.title}
                  </h4>
                </div>

                <ToolPreview type={tool.type} compact />
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F6F6F4] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#999994]">
                Design System
              </span>
            </div>

            <h1 className="text-[34px] font-semibold tracking-[-0.055em] text-[#111111] sm:text-[42px]">
              Tools
            </h1>

            <p className="mt-2 max-w-[560px] text-[11px] leading-5 text-[#8A8A85]">
              A collection of focused tools for building, exploring and refining
              your design system.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-[#E1E1DC] bg-white px-3 py-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
            <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-[#777777]">
              05 Tools
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <a
                href={`#${tool.type}`}
                key={tool.id}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  min-h-[300px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#E2E2DD]
                  bg-white
                  p-6
                  pb-14
                  text-left
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#CFCFC9]
                  hover:shadow-[0_24px_60px_rgba(0,0,0,0.07)]
                  focus:outline-none focus:ring-2 focus:ring-[#111111] focus:ring-offset-2
                "
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E6E6E2] bg-[#F8F8F6] text-[#555555] transition-all duration-300 group-hover:bg-[#111111] group-hover:text-white">
                      <Icon size={15} strokeWidth={1.7} />
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E8E8E4] text-[#AAAAA5] transition-all duration-300 group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white">
                      <ArrowUpRight size={13} />
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#A0A09A]">
                      {tool.category}
                    </p>

                    <h2 className="mt-2 text-[23px] font-semibold tracking-[-0.045em] text-[#111111]">
                      {tool.title}
                    </h2>

                    <p className="mt-2 max-w-[340px] text-[10px] leading-[1.7] text-[#8A8A85]">
                      {tool.description}
                    </p>
                  </div>

                  <ToolPreview type={tool.type} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 border-t border-[#EEEEEA] bg-white px-6 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#AAAAA5]">
                      Open tool
                    </span>

                    <span className="text-[10px] text-[#999994] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#111111]">
                      →
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
