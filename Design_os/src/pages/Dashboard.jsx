import React from "react";
import { useLocation } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import ColorGenerator from "../components/color/ColorGenerator";
import TypographyLab from "../components/typography/TypographyLab";
import WorkspaceProgress from "../components/dashboard/WorkspaceProgress";
import UserProfile from "../components/dashboard/UserProfile";

function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    switch (currentPath) {
      case "/dashboard/colors":
        return (
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#e7e7e2] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-[-0.05em] text-[#111111]">Color Realm</h2>
              <p className="mt-2 text-sm text-[#666]">Generate and refine color palettes for your brand system.</p>
            </div>
            <ColorGenerator />
          </div>
        );
      case "/dashboard/typography":
        return (
          <div className="space-y-6">
            <TypographyLab />
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
              <div className="rounded-3xl border border-[#e7e7e2] bg-white p-6 shadow-sm">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">Overview</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#111111]">Design system health is strong.</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#666]">
                  Your workspace is moving quickly, with recent projects, style updates, and palette refinements ready to ship.
                </p>
              </div>

              <div className="space-y-6">
                <UserProfile />
                <WorkspaceProgress />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Projects", value: "24", tone: "bg-[#111111]" },
                { label: "Palettes", value: "18", tone: "bg-[#525252]" },
                { label: "Motion Kits", value: "09", tone: "bg-[#8d8d8d]" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#e7e7e2] bg-white p-6 shadow-sm">
                  <div className={`mb-4 h-2.5 w-12 rounded-full ${item.tone}`} />
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-[#111111]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <DashboardLayout
      title={currentPath === "/dashboard/colors" ? "Color Realm" : currentPath === "/dashboard/typography" ? "Typography Lab" : "Overview"}
      subtitle={currentPath === "/dashboard/colors" ? "Find, tune, and export colors" : "Search workspace"}
      actions={
        <button className="rounded-xl bg-[#111111] px-4 py-2 text-xs font-medium text-white">
          + New project
        </button>
      }
    >
      {renderContent()}
    </DashboardLayout>
  );
}

export default Dashboard;
