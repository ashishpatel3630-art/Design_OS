import React from "react";
import { Sparkles, ArrowUpRight, Clock3 } from "lucide-react";

function DashboardHeader() {
  return (
    <section className="mb-8">
      {/* Top row */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/35">
              Creative Workspace
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Good afternoon, Ashish.
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-white/35">
            Explore your design tools, create something new, and bring your
            ideas to life.
          </p>
        </div>

        {/* Right action */}
        <button className="group flex w-fit items-center gap-2 rounded-lg border border-white/[0.09] bg-white/[0.035] px-3.5 py-2.5 text-[11px] text-white/60 transition duration-200 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white">
          <Clock3 size={14} strokeWidth={1.5} />

          <span>Recent activity</span>

          <ArrowUpRight
            size={13}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* AI banner */}
      <div className="mt-7 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025]">
        <div className="relative flex flex-col justify-between gap-5 p-5 sm:flex-row sm:items-center">
          {/* Subtle background */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl" />

          <div className="relative flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.05]">
              <Sparkles size={17} strokeWidth={1.5} className="text-white/70" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[13px] font-medium text-white/85">
                  Design with AI
                </h2>

                <span className="rounded-full border border-white/[0.08] bg-white/[0.05] px-2 py-0.5 text-[8px] uppercase tracking-[0.12em] text-white/35">
                  New
                </span>
              </div>

              <p className="mt-1 text-[11px] text-white/30">
                Generate palettes, typography systems, and motion concepts from
                a simple prompt.
              </p>
            </div>
          </div>

          <button className="relative flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[11px] font-medium text-black transition hover:bg-white/90">
            <Sparkles size={13} />
            Try AI Generator
          </button>
        </div>
      </div>
    </section>
  );
}

export default DashboardHeader;
