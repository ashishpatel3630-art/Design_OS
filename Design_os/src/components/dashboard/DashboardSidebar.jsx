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
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-[#E5E5E5] bg-[#FAFAFA] text-[#111111]">
      {/* LOGO */}
      <div className="border-b border-[#E5E5E5] px-5 py-5">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4D4D4] bg-white">
            <div className="h-3 w-3 rounded-sm bg-[#111111]" />
          </div>

          <div>
            <h1 className="text-[15px] font-semibold tracking-[-0.02em] text-[#111111]">
              DESIGN OS
            </h1>

            <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-[#A3A3A3]">
              Creative Workspace
            </p>
          </div>
        </NavLink>
      </div>

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto px-3 py-6">
        {/* Workspace */}
        <div className="mb-7">
          <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#A3A3A3]">
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
                    `group flex h-10 items-center gap-3 rounded-lg px-3 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#111111] text-white"
                        : "text-[#737373] hover:bg-[#F0F0F0] hover:text-[#111111]"
                    }`
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
                            : "text-[#A3A3A3] group-hover:text-[#111111]"
                        }
                      />

                      <span className="flex-1">{item.label}</span>

                      {item.label === "AI Generator" && (
                        <span
                          className={`rounded-md border px-1.5 py-0.5 text-[8px] uppercase tracking-wider ${
                            isActive
                              ? "border-white/20 bg-white/10 text-white/70"
                              : "border-[#E5E5E5] bg-[#F5F5F5] text-[#737373]"
                          }`}
                        >
                          AI
                        </span>
                      )}

                      {isActive && (
                        <ChevronRight size={14} className="text-white/60" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* LIBRARY */}
        <div className="mb-7">
          <p className="mb-3 px-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#A3A3A3]">
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
                    `group flex h-10 items-center gap-3 rounded-lg px-3 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[#111111] text-white"
                        : "text-[#737373] hover:bg-[#F0F0F0] hover:text-[#111111]"
                    }`
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
                            : "text-[#A3A3A3] group-hover:text-[#111111]"
                        }
                      />

                      <span className="flex-1">{item.label}</span>

                      {isActive && (
                        <ChevronRight size={14} className="text-white/60" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* PRO CARD */}
        <div className="px-1">
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-4">
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E5E5] bg-[#F5F5F5]">
              <Sparkles size={15} className="text-[#525252]" />
            </div>

            <h3 className="text-[12px] font-medium text-[#111111]">
              Unlock Design OS Pro
            </h3>

            <p className="mt-1.5 text-[10px] leading-relaxed text-[#737373]">
              Get unlimited generations, advanced tools and more.
            </p>

            <button className="mt-3 flex w-full items-center justify-center rounded-lg bg-[#111111] py-2 text-[11px] font-medium text-white transition hover:bg-[#262626]">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#E5E5E5] p-3">
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `group flex h-10 items-center gap-3 rounded-lg px-3 text-[13px] transition ${
              isActive
                ? "bg-[#111111] text-white"
                : "text-[#737373] hover:bg-[#F0F0F0] hover:text-[#111111]"
            }`
          }
        >
          <Settings size={17} strokeWidth={1.5} />
          <span>Settings</span>
        </NavLink>

        <button className="group flex h-10 w-full items-center gap-3 rounded-lg px-3 text-[13px] text-[#737373] transition hover:bg-[#F0F0F0] hover:text-[#111111]">
          <HelpCircle size={17} strokeWidth={1.5} />
          <span>Help & Support</span>
        </button>

        {/* USER */}
        <div className="mt-2 flex items-center gap-3 rounded-lg border border-[#E5E5E5] bg-white p-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111111] text-[11px] font-semibold text-white">
            A
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[11px] font-medium text-[#262626]">
              Ashish
            </p>

            <p className="truncate text-[9px] text-[#A3A3A3]">Free Workspace</p>
          </div>

          <div className="h-1.5 w-1.5 rounded-full bg-[#737373]" />
        </div>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
