import React from "react";
import {
  Search,
  Bell,
  Command,
  Plus,
  ChevronDown,
} from "lucide-react";

function DashboardTopbar() {
  return (
    <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-white/[0.08] bg-[#050505]/90 px-6 backdrop-blur-xl">

      {/* Left - Search */}
      <div className="flex items-center gap-4">

        <button className="group flex h-10 w-[300px] items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 text-left transition hover:border-white/[0.14] hover:bg-white/[0.04]">

          <Search
            size={16}
            strokeWidth={1.5}
            className="text-white/30"
          />

          <span className="flex-1 text-[12px] text-white/30">
            Search anything...
          </span>

          <div className="flex items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.04] px-1.5 py-1">
            <Command size={10} className="text-white/30" />
            <span className="text-[9px] text-white/30">
              K
            </span>
          </div>

        </button>

      </div>

      {/* Right */}
      <div className="flex items-center gap-2">

        {/* Create */}
        <button className="mr-2 flex h-9 items-center gap-2 rounded-lg bg-white px-3.5 text-[11px] font-medium text-black transition hover:bg-white/90">
          <Plus size={14} strokeWidth={2} />
          Create
        </button>

        {/* Notification */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-white/40 transition hover:bg-white/[0.05] hover:text-white">
          <Bell size={17} strokeWidth={1.5} />

          <span className="absolute right-[8px] top-[7px] h-1.5 w-1.5 rounded-full bg-white" />
        </button>

        {/* Divider */}
        <div className="mx-2 h-6 w-px bg-white/[0.08]" />

        {/* Workspace */}
        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-white/[0.05]">

          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[10px] font-semibold text-black">
            A
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-[11px] font-medium text-white/75">
              Ashish
            </p>

            <p className="text-[9px] text-white/30">
              Personal
            </p>
          </div>

          <ChevronDown
            size={13}
            strokeWidth={1.5}
            className="text-white/30"
          />

        </button>

      </div>

    </header>
  );
}

export default DashboardTopbar;