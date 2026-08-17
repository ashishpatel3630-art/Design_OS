import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Search, Settings, Sparkles } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Topbar({ title, subtitle, actions }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-[#eceae5] bg-[#f8f8f6] px-6 py-4 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">
            Dashboard
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-[-0.05em] text-[#111111]">
            {title || "Overview"}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-xl border border-[#e7e7e2] bg-white px-3 py-2 text-sm text-[#666] md:flex">
            <Search size={14} />
            <span>{subtitle || "Search workspace"}</span>
          </div>

          {actions}

          <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e7e7e2] bg-white text-[#555]">
            <Sparkles size={15} />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e7e7e2] bg-white text-[#555]">
            <Bell size={15} />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#e7e7e2] bg-white text-[#555]">
            <Settings size={15} />
          </button>

          <div className="flex items-center gap-3 rounded-xl border border-[#e7e7e2] bg-white px-2 py-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-xs font-medium text-white">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div className="hidden text-left md:block">
              <p className="text-xs font-medium text-[#111111]">
                {user?.name || "Ashish"}
              </p>
              <p className="text-[10px] text-[#777]">Design Lead</p>
            </div>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="rounded-lg bg-[#111111] px-2 py-1 text-[10px] font-medium text-white"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
