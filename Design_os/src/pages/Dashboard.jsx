import React from "react";
import { useLocation } from "react-router-dom";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import ColorGenerator from "../components/color/ColorGenerator";
import TypographyLab from "../components/typography/TypographyLab";
import Recent from "../components/dashboard/Recent";
import Systemhealth from "../components/dashboard/Systemhealth";
import Tools from "../components/dashboard/Tools";
import Team from "../components/dashboard/Team";
import ColorRealm from "./ColorRealm";
import Gradient from "../components/Gradient/Gradient";
function Dashboard() {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderContent = () => {
    switch (currentPath) { 
      case "/dashboard/colors":
        return (
          <div className="space-y-6">
            <ColorRealm />
            <ColorGenerator />
          </div>
        );
      case "/dashboard/typography":
        return (
          <div className="space-y-6">
            <TypographyLab />
          </div>
        );
        case "/dashboard/typography":
          return(
          <div className="space-y-6">
            <Gradient/>
          </div>
        );
  
      default:
        return (
          <div className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-[30px] border border-[#e7e7e2] bg-white p-7 shadow-[0_20px_60px_rgba(17,17,17,0.04)] sm:p-8">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">
                  Overview
                </p>
                <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-[0.05em] text-[#111111] sm:text-4xl">
                  Design Smarter.
                  <span className="mt-1 block">Build Better.</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[#666666]">
                  Design OS brings your entire design system into one powerful
                  platform—helping you create, organize, and scale beautiful
                  interfaces faster and more consistently.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 ">
                  <button className="rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-medium text-white transition hover:bg-[#232323]">
                    Open workspace
                  </button>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Projects", value: "14", info: "Active Projects" },
                    { label: "Teams", value: "08", info: "Active Members" },
                    {
                      label: "Efficiency",
                      value: "92%",
                      info: "Overall Health",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-[#efefe9] bg-[#f8f8f6] p-4"
                    >
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold tracking-[-0.06em] text-[#111111]">
                        {item.value}
                      </p>
                      <p className="mt-2 text-[12px]">{item.info}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <Recent />
                  <Systemhealth />
                </div>
              </div>

              <div className="space-y-6">
                <Tools compact />
                <Team />
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
