import React from "react";
import {
  ArrowUpRight,
  MoreHorizontal,
  Palette,
  Type,
  WandSparkles,
} from "lucide-react";

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
      {/* HEADER */}
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A3A3A3]">
            Workspace
          </p>

          <h2 className="mt-1 text-lg font-medium tracking-[-0.025em] text-[#262626]">
            Recent projects
          </h2>
        </div>

        <button className="group flex items-center gap-1.5 text-[10px] text-[#A3A3A3] transition hover:text-[#111111]">
          View all
          <ArrowUpRight
            size={12}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* PROJECTS */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl border border-[#E5E5E5] bg-white transition duration-300 hover:border-[#D4D4D4] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
            >
              {/* PREVIEW */}
              <div className="relative h-[150px] overflow-hidden border-b border-[#E5E5E5] bg-[#FAFAFA]">
                <div className="absolute inset-4 flex overflow-hidden rounded-lg border border-[#E5E5E5]">
                  {project.colors.map((color) => (
                    <div
                      key={color}
                      className="h-full flex-1"
                      style={{
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </div>

                {/* HOVER */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/10 group-hover:opacity-100">
                  <button className="flex items-center gap-2 rounded-lg border border-[#D4D4D4] bg-white px-3 py-2 text-[10px] text-[#111111] shadow-lg">
                    Open project
                    <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>

              {/* DETAILS */}
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E5E5] bg-[#FAFAFA]">
                      <Icon
                        size={14}
                        strokeWidth={1.5}
                        className="text-[#737373]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[12px] font-medium text-[#262626]">
                        {project.title}
                      </h3>

                      <p className="mt-0.5 text-[9px] text-[#A3A3A3]">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <button className="flex h-7 w-7 items-center justify-center rounded-md text-[#B3B3B3] transition hover:bg-[#F5F5F5] hover:text-[#111111]">
                    <MoreHorizontal size={15} />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#E5E5E5] pt-3">
                  <span className="text-[9px] text-[#A3A3A3]">
                    Updated {project.updated}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.12em] text-[#B3B3B3]">
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
