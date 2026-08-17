import React from "react";
import { useLocation } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import ColorGenerator from "../components/color/ColorGenerator";
import TypographyLab from "../components/typography/TypographyLab";
import WorkspaceProgress from "../components/dashboard/WorkspaceProgress";
import UserProfile from "../components/dashboard/UserProfile";
import Tools from "../components/dashboard/Tools";
// import ColorStored from "../components/color/ColorStored";
import ColorRealm from "./ColorRealm";
function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    switch (currentPath) {
      case "/dashboard/colors":
        return (
          <div className="space-y-6">
            <ColorRealm/>
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
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">
                  Overview
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.06em] text-[#111111] uppercase">
                  Design Smarter.
                  Build Better.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#666]">
                 Design OS brings your entire design system into one powerful platfrom—helping you create, organize,
                and scale beautiful interfaces faster and more consistently.
                </p>
              </div>

              <div className="space-y-6">
                <UserProfile />
                <WorkspaceProgress />
              </div>
              <div>
              <Tools/>
              </div>
            </div>

            
          </div>
        );
    }
  };

  return (
    <DashboardLayout
      title={
        currentPath === "/dashboard/colors"
          ? "Color Realm"
          : currentPath === "/dashboard/typography"
            ? "Typography Lab"
            : "Overview"
      }
      subtitle={
        currentPath === "/dashboard/colors"
          ? "Find, tune, and export colors"
          : "Search workspace"
      }
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
