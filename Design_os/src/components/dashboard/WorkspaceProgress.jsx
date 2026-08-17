import React from "react";

function WorkspaceProgress() {
  return (
    <div className="rounded-2xl border border-[#e8e8e3] bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium text-[#111111]">Workspace Progress</p>
        <span className="text-xs text-[#787873]">78%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-[#f0f0ed]">
        <div className="h-full w-[78%] rounded-full bg-[#111111]" />
      </div>
    </div>
  );
}

export default WorkspaceProgress;
