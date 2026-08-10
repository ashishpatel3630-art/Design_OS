import React from "react";
import { ArrowUpRight, MoreHorizontal, Palette, Type, WandSparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Midnight SaaS",
    type: "Color System",
    updated: "12 min ago",
    icon: Palette,
    colors: ["#050505", "#171717", "#525252", "#A3A3A3", "#F5F5F5"],
  },
  {
    id: 2,
    title: "Editorial System",
    type: "Typography",
    updated: "2 hours ago",
    icon: Type,
    colors: ["#0A0A0A", "#262626", "#737373", "#D4D4D4", "#FAFAFA"],
  },
  {
    id: 3,
    title: "Micro Interactions",
    type: "Motion",
    updated: "Yesterday",
    icon: WandSparkles,
    colors: ["#111111", "#1A1A1A", "#404040", "#8A8A8A", "#FFFFFF"],
  },
];

function RecentProjects() {
  return (
    <section className="mb-10">
      
      {/* Header */}
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
            Workspace
          </p>

          <h2 className="mt-1 text-lg font-medium tracking-[-0.025em] text-white/85">
            Recent projects
          </h2>
        </div>

        <button className="group flex items-center gap-1.5 text-[10px] text-white/30 transition hover:text-white/70">
          View all

          <ArrowUpRight
            size={12}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] transition duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
            >

              {/* Preview */}
              <div className="relative h-[150px] overflow-hidden border-b border-white/[0.07] bg-[#080808]">

                <div className="absolute inset-4 flex overflow-hidden rounded-lg border border-white/[0.06]">
                  {project.colors.map((color) => (
                    <div
                      key={color}
                      className="h-full flex-1"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/70 px-3 py-2 text-[10px] text-white backdrop-blur-md">
                    Open project
                    <ArrowUpRight size={12} />
                  </button>
                </div>

              </div>

              {/* Details */}
              <div className="p-4">

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                      <Icon
                        size={14}
                        strokeWidth={1.5}
                        className="text-white/50"
                      />
                    </div>

                    <div>
                      <h3 className="text-[12px] font-medium text-white/80">
                        {project.title}
                      </h3>

                      <p className="mt-0.5 text-[9px] text-white/30">
                        {project.type}
                      </p>
                    </div>

                  </div>

                  <button className="flex h-7 w-7 items-center justify-center rounded-md text-white/20 transition hover:bg-white/[0.06] hover:text-white/60">
                    <MoreHorizontal size={15} />
                  </button>

                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">

                  <span className="text-[9px] text-white/25">
                    Updated {project.updated}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.12em] text-white/20">
                    Design OS
                  </span>

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default RecentProjects;