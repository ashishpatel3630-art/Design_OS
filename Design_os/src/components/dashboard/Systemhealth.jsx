import React from "react";

function Systemhealth() {
  return (
    <div className="w-[48%] rounded-2xl border border-[#e8e8e3] bg-[#f8f8f6] p-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-[#111111]">
            System Health
          </h2>
          <p className="mt-1 text-xs text-[#8a8a8a]">
            Monitor your Design OS workspace
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[#deded8] bg-white px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
          <span className="text-[11px] font-medium text-[#333333]">
            All Systems Operational
          </span>
        </div>
      </div>
      <div className="mt-5 rounded-xl border border-[#e5e5df] bg-white p-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-[#8a8a8a]">Overall System Health</p>
            <h3 className="mt-1 text-3xl font-bold tracking-tight text-[#111111]">
              99.9%
            </h3>
          </div>
          <span className="text-xs font-medium text-[#666666]">
            Last 30 days
          </span>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#eeeeea]">
          <div className="h-full w-[99.9%] rounded-full bg-[#111111]" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-[#e5e5df] bg-white p-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="text-sm font-medium text-[#222222]">
              Design System
            </span>
          </div>
          <p className="mt-2 text-[11px] text-[#8a8a8a]">Operational</p>
        </div>
        <div className="rounded-xl border border-[#e5e5df] bg-white p-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="text-sm font-medium text-[#222222]">
              Asset Library
            </span>
          </div>
          <p className="mt-2 text-[11px] text-[#8a8a8a]">Operational</p>
        </div>
        <div className="rounded-xl border border-[#e5e5df] bg-white p-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="text-sm font-medium text-[#222222]">
              Typography
            </span>
          </div>
          <p className="mt-2 text-[11px] text-[#8a8a8a]">Operational</p>
        </div>
        <div className="rounded-xl border border-[#e5e5df] bg-white p-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#111111]" />
            <span className="text-sm font-medium text-[#222222]">
              Color Engine
            </span>
          </div>
          <p className="mt-2 text-[11px] text-[#8a8a8a]">Operational</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-[#e5e5df] pt-3">
        <p className="text-[11px] text-[#999999]">Last checked 2 minutes ago</p>

        <button className="text-[11px] font-medium text-[#111111] hover:underline">
          View Status
        </button>
      </div>
    </div>
  );
}

export default Systemhealth;
