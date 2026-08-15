import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Bell, Command, Plus, ChevronDown, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function DashboardTopbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-[#E5E5E5] bg-white/90 px-6 backdrop-blur-xl">
      {/* SEARCH */}
      <div className="flex items-center gap-4">
        <button className="group flex h-10 w-[300px] items-center gap-3 rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] px-3 text-left transition hover:border-[#D4D4D4] hover:bg-[#F5F5F5]">
          <Search size={16} strokeWidth={1.5} className="text-[#A3A3A3]" />

          <span className="flex-1 text-[12px] text-[#A3A3A3]">
            Search anything...
          </span>

          <div className="flex items-center gap-1 rounded-md border border-[#E5E5E5] bg-white px-1.5 py-1">
            <Command size={10} className="text-[#A3A3A3]" />

            <span className="text-[9px] text-[#A3A3A3]">K</span>
          </div>
        </button>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2">
        <button className="mr-2 flex h-9 items-center gap-2 rounded-lg bg-[#111111] px-3.5 text-[11px] font-medium text-white transition hover:bg-[#262626]">
          <Plus size={14} strokeWidth={2} />
          Create
        </button>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-[#737373] transition hover:bg-[#F5F5F5] hover:text-[#111111]">
          <Bell size={17} strokeWidth={1.5} />

          <span className="absolute right-[8px] top-[7px] h-1.5 w-1.5 rounded-full bg-[#111111]" />
        </button>

        <div className="mx-2 h-6 w-px bg-[#E5E5E5]" />

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-[#F5F5F5]"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#111111] text-[10px] font-semibold text-white">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-[11px] font-medium text-[#262626]">
                {user?.name || "User"}
              </p>

              <p className="text-[9px] text-[#A3A3A3]">Personal</p>
            </div>

            <ChevronDown size={13} strokeWidth={1.5} className="text-[#A3A3A3]" />
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white border border-[#E5E5E5] shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition rounded-lg"
              >
                <LogOut size={14} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardTopbar;
