import React from "react";

function Tools() {
  return (
    <div
      className="
    w-[400px] 
    h-[250px] 
    rounded-3xl 
    border-[#e7e7e2] 
    bg-white 
    p-6 
    shadow-sm"
    >
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">
          COlOR & PALETTE
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#111111]">
          Colors & Palette
        </h1>
        <p className="mt-2 text-sm leading-6 text-[#8a8a85]">
          Build,explore and manage beautiful color systems for you designs.
        </p>
        <div className="flex gap-4">
          <div
            className="
            h-10 
            w-10
            bg-red-500
            mt-6
            rounded-md
            "
          ></div>
          <div
            className="
            h-10 
            w-10
            bg-green-500
            mt-6
            rounded-md
            "
          ></div>
          <div
            className="
            h-10 
            w-10
            bg-purple-500
            mt-6
            rounded-md
            "
          ></div>
          <div
            className="
            h-10 
            w-10
            bg-blue-500
            mt-6
            rounded-md
            "
          ></div>
          <div
            className="
            h-10 
            w-10
            bg-pink-500
            mt-6
            rounded-md
            "
          ></div>
          <div
            className="
            h-10 
            w-10
            bg-gray-500
            mt-6
            rounded-md
            "
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
