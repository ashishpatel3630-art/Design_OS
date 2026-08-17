import React from "react";
import { Link } from "react-router-dom";
import { dashboardNav } from "../../data/navigation";
import SidebarSection from "./SidebarSection";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="hidden w-[260px] shrink-0 border-r border-[#e8e8e3] bg-[#f3f3f1] p-5 lg:flex lg:flex-col">
      <Link to="/dashboard" className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111111] text-sm font-semibold text-white">
          D
        </div>
        <div>
          <div className="text-sm font-semibold tracking-[-0.03em]">Design OS</div>
          <div className="text-[9px] uppercase tracking-[0.22em] text-[#8a8a85]">Workspace</div>
        </div>
      </Link>

      <nav className="space-y-6">
        {dashboardNav.map((section) => (
          <SidebarSection key={section.section} title={section.section}>
            {section.items.map((item) => (
              <SidebarItem key={item.path} item={item} />
            ))}
          </SidebarSection>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-[#e7e7e2] bg-white p-4 shadow-sm">
        <p className="text-[9px] uppercase tracking-[0.18em] text-[#8a8a85]">Status</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-[#111111]">System synced</span>
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
