import React from "react";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import QuickActions from "../components/dashboard/QuickActions";
import RecentProjects from "../components/dashboard/RecentProjects";
import Activity from "../components/dashboard/Activity";

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#111111]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="ml-[260px] min-h-screen">
        {/* Top navigation */}
        <DashboardTopbar />

        {/* Dashboard */}
        <main className="p-6 lg:p-8">
          <DashboardHeader />

          <QuickActions />

          <RecentProjects />

          <Activity />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
