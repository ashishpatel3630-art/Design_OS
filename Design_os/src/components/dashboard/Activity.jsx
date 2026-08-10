import React from "react";
import {
  Palette,
  Type,
  WandSparkles,
  Heart,
  FolderPlus,
  ArrowUpRight,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: Palette,
    title: "Created a new color palette",
    project: "Midnight SaaS",
    time: "12 min ago",
  },
  {
    id: 2,
    icon: Type,
    title: "Updated typography system",
    project: "Editorial System",
    time: "2 hours ago",
  },
  {
    id: 3,
    icon: Heart,
    title: "Added palette to favorites",
    project: "Monochrome Pro",
    time: "5 hours ago",
  },
  {
    id: 4,
    icon: WandSparkles,
    title: "Created motion preset",
    project: "Micro Interactions",
    time: "Yesterday",
  },
  {
    id: 5,
    icon: FolderPlus,
    title: "Created a new collection",
    project: "SaaS Design System",
    time: "Yesterday",
  },
];

function Activity() {
  return (
    <section className="mb-10">

      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
            Timeline
          </p>

          <h2 className="mt-1 text-lg font-medium tracking-[-0.025em] text-white/85">
            Recent activity
          </h2>
        </div>

        <button className="group flex items-center gap-1.5 text-[10px] text-white/30 transition hover:text-white/70">
          View history

          <ArrowUpRight
            size={12}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025]">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className={`group flex items-center gap-4 px-5 py-4 transition hover:bg-white/[0.025] ${
                index !== activities.length - 1
                  ? "border-b border-white/[0.06]"
                  : ""
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.035]">
                <Icon
                  size={15}
                  strokeWidth={1.5}
                  className="text-white/40 transition group-hover:text-white/70"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-medium text-white/65">
                  {activity.title}
                </p>

                <p className="mt-1 truncate text-[9px] text-white/25">
                  {activity.project}
                </p>
              </div>

              <span className="shrink-0 text-[9px] text-white/20">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default Activity;