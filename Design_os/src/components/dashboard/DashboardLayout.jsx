import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ title, subtitle, actions, children }) {
  return (
    <div className="min-h-screen bg-[#f5f5f3] text-[#111111]">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col bg-[#f7f7f5]">
          <Topbar title={title} subtitle={subtitle} actions={actions} />
          <main className="flex-1 p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
