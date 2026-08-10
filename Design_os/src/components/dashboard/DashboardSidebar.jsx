import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Palette,
  Type,
  WandSparkles,
  Folder,
  Heart,
  Layers3,
  Settings,
  HelpCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const mainNavigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Color Realm",
    path: "/dashboard/colors",
    icon: Palette,
  },
  {
    label: "Typography",
    path: "/dashboard/typography",
    icon: Type,
  },
  {
    label: "Motion",
    path: "/dashboard/motion",
    icon: WandSparkles,
  },
  {
    label: "AI Generator",
    path: "/dashboard/ai",
    icon: Sparkles,
  },
];

const libraryNavigation = [
  {
    label: "Collections",
    path: "/dashboard/collections",
    icon: Folder,
  },
  {
    label: "Favorites",
    path: "/dashboard/favorites",
    icon: Heart,
  },
  {
    label: "Design Tokens",
    path: "/dashboard/tokens",
    icon: Layers3,
  },
];

function DashboardSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-white/[0.08] bg-[#050505] text-white">
      {/* Logo */}
      <div className="flex h-[76px] items-center border-b border-white/[0.08] px-6">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06]">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>

          <div>
            <h1 className="text-[15px] font-semibold tracking-[-0.02em]">
              DESIGN OS
            </h1>

            <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-white/35">
              Creative Workspace
            </p>
          </div>
        </NavLink>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-6">
        {/* Workspace */}
        <div className="mb-7">
          <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
            Workspace
          </p>

          <nav className="space-y-1">
            {mainNavigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `
                    group flex h-10 items-center gap-3 rounded-lg px-3
                    text-[13px] font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-white/[0.09] text-white"
                        : "text-white/45 hover:bg-white/[0.05] hover:text-white/80"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={17}
                        strokeWidth={isActive ? 1.8 : 1.5}
                        className={
                          isActive
                            ? "text-white"
                            : "text-white/35 group-hover:text-white/70"
                        }
                      />

                      <span className="flex-1">{item.label}</span>

                      {item.label === "AI Generator" && (
                        <span className="rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-[8px] uppercase tracking-wider text-white/50">
                          AI
                        </span>
                      )}

                      {isActive && (
                        <ChevronRight size={14} className="text-white/30" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Library */}
        <div className="mb-7">
          <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
            Library
          </p>

          <nav className="space-y-1">
            {libraryNavigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    group flex h-10 items-center gap-3 rounded-lg px-3
                    text-[13px] font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-white/[0.09] text-white"
                        : "text-white/45 hover:bg-white/[0.05] hover:text-white/80"
                    }
                    `
                  }
                >
                  <Icon
                    size={17}
                    strokeWidth={1.5}
                    className="text-white/35 group-hover:text-white/70"
                  />

                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Upgrade */}
        <div className="px-1">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06]">
              <Sparkles size={15} className="text-white/70" />
            </div>

            <h3 className="text-[12px] font-medium text-white/90">
              Unlock Design OS Pro
            </h3>

            <p className="mt-1.5 text-[10px] leading-relaxed text-white/35">
              Get unlimited generations, advanced tools and more.
            </p>

            <button className="mt-3 flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/[0.07] py-2 text-[11px] font-medium text-white/70 transition hover:bg-white/[0.12] hover:text-white">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.08] p-3">
        <NavLink
          to="/dashboard/settings"
          className="group flex h-10 items-center gap-3 rounded-lg px-3 text-[13px] text-white/40 transition hover:bg-white/[0.05] hover:text-white/80"
        >
          <Settings size={17} strokeWidth={1.5} />
          <span>Settings</span>
        </NavLink>

        <button className="group flex h-10 w-full items-center gap-3 rounded-lg px-3 text-[13px] text-white/40 transition hover:bg-white/[0.05] hover:text-white/80">
          <HelpCircle size={17} strokeWidth={1.5} />
          <span>Help & Support</span>
        </button>

        {/* User */}
        <div className="mt-2 flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black">
            A
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-medium text-white/80">
              Ashish
            </p>

            <p className="truncate text-[9px] text-white/30">Free Workspace</p>
          </div>

          <div className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
