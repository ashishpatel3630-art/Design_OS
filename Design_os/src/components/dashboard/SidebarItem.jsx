import React from "react";
import { NavLink } from "react-router-dom";

function SidebarItem({ item }) {
  const activeClassName =
    "flex items-center gap-3 rounded-xl bg-[#111111] px-3 py-2.5 text-sm font-medium text-white shadow-sm";
  const inactiveClassName =
    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#5f5f5f] transition hover:bg-[#f0f0ee] hover:text-[#111111]";

  return (
    <NavLink
      to={item.path}
      end={item.path === "/dashboard"}
      className={({ isActive }) =>
        isActive ? activeClassName : inactiveClassName
      }
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[#e2e2dc] bg-white text-[11px]">
        {item.icon}
      </span>
      <span>{item.label}</span>
    </NavLink>
  );
}

export default SidebarItem;
