import React from "react";
import { NavLink } from "react-router-dom";
import {
  Palette,
  Type,
  WandSparkles,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const actions = [
  {
    title: "Color Realm",
    description: "Create and explore color palettes.",
    path: "/dashboard/colors",
    icon: Palette,
    label: "Colors",
  },
  {
    title: "Typography Lab",
    description: "Build beautiful type systems.",
    path: "/dashboard/typography",
    icon: Type,
    label: "Type",
  },
  {
    title: "Motion Playground",
    description: "Design smooth interactive motion.",
    path: "/dashboard/motion",
    icon: WandSparkles,
    label: "Motion",
  },
  {
    title: "AI Generator",
    description: "Generate design ideas with AI.",
    path: "/dashboard/ai",
    icon: Sparkles,
    label: "AI",
  },
];

function QuickActions() {
  return (
    <section className="mb-10">
      {/* HEADER */}
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#A3A3A3]">
            Create
          </p>

          <h2 className="mt-1 text-lg font-medium tracking-[-0.025em] text-[#262626]">
            Start creating
          </h2>
        </div>

        <span className="text-[10px] text-[#A3A3A3]">04 tools</span>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <NavLink
              key={action.path}
              to={action.path}
              className="group relative min-h-[180px] overflow-hidden rounded-xl border border-[#E5E5E5] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4D4D4] hover:bg-[#FAFAFA]"
            >
              {/* HOVER */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#F5F5F5] blur-3xl transition duration-500 group-hover:bg-[#E5E5E5]" />

              {/* ICON */}
              <div className="relative flex items-start justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] transition group-hover:border-[#D4D4D4] group-hover:bg-white">
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#737373] transition group-hover:text-[#111111]"
                  />
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="text-[#B3B3B3] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#111111]"
                />
              </div>

              {/* CONTENT */}
              <div className="relative mt-8">
                <h3 className="text-[13px] font-medium text-[#262626]">
                  {action.title}
                </h3>

                <p className="mt-1.5 max-w-[190px] text-[11px] leading-5 text-[#737373]">
                  {action.description}
                </p>
              </div>

              {/* LABEL */}
              <div className="absolute bottom-4 left-5">
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#B3B3B3] transition group-hover:text-[#737373]">
                  {action.label}
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;
