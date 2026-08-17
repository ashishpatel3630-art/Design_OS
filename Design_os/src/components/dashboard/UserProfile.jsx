import React from "react";

function UserProfile() {
  return (
    <div className="rounded-2xl border border-[#e8e8e3] bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-sm font-semibold text-white">
          <img src="src/assets/images/ashish.png" className="rounded-full"></img>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#111111]">Ashish Patel</p>
          <p className="text-xs text-[#787873]">Owner & Product Designer</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
