import React from "react";
import { Sparkles, ArrowUpRight, Clock3 } from "lucide-react";

function DashboardHeader() {
  return (
    <section className="mb-8">
      {/* TOP */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A3A3A3]">
              Creative Workspace
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[#111111] sm:text-4xl">
            Good afternoon, Ashish.
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#737373]">
            Explore your design tools, create something new, and bring your
            ideas to life.
          </p>
        </div>

        {/* RECENT */}
        <button className="group flex w-fit items-center gap-2 rounded-lg border border-[#E5E5E5] bg-white px-3.5 py-2.5 text-[11px] text-[#737373] transition duration-200 hover:border-[#D4D4D4] hover:bg-[#F5F5F5] hover:text-[#111111]">
          <Clock3 size={14} strokeWidth={1.5} />

          <span>Recent activity</span>

          <ArrowUpRight
            size={13}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* AI BANNER */}
      <div className="mt-7 overflow-hidden rounded-xl border border-[#E5E5E5] bg-white">
        <div className="relative flex flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center">
          <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-[#F5F5F5] blur-3xl" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#E5E5E5] bg-[#F5F5F5]">
              <Sparkles
                size={17}
                strokeWidth={1.5}
                className="text-[#525252]"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[13px] font-medium text-[#262626]">
                  Design with AI
                </h2>

                <span className="rounded-full border border-[#E5E5E5] bg-[#F5F5F5] px-2 py-0.5 text-[8px] uppercase tracking-[0.12em] text-[#737373]">
                  New
                </span>
              </div>

              <p className="mt-1 text-[11px] text-[#737373]">
                Generate palettes, typography systems, and motion concepts from
                a simple prompt.
              </p>
            </div>
          </div>

          <button className="relative flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#111111] px-4 py-2.5 text-[11px] font-medium text-white transition hover:bg-[#262626]">
            <Sparkles size={13} />
            Try AI Generator
          </button>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;
