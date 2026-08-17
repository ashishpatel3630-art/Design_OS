import React from "react";

function SidebarSection({ title, children }) {
  return (
    <div className="space-y-2">
      <p className="px-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8a8a85]">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export default SidebarSection;
