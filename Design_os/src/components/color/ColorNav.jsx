import React from "react";

const categories = [
  "Trending",
  "Popular",
  "Nature",
  "Minimal",
  "Pastel",
  "Dark",
  "Luxury",
];

function ColorNav({ activeCategory, setActiveCategory }) {
  return (
    <nav className="mb-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">

        {categories.map((category) => {
          const active = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                relative shrink-0 rounded-full
                border px-5 py-2.5
                text-[10px] font-medium uppercase
                tracking-[0.16em]
                transition-all duration-300

                ${
                  active
                    ? "border-[#111] bg-[#111] text-white shadow-sm"
                    : "border-[#e5e5e0] bg-white text-[#777] hover:border-[#cfcfca] hover:text-[#111]"
                }
              `}
            >
              {category}

              {active && (
                <span className="absolute -bottom-[5px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#111]" />
              )}
            </button>
          );
        })}

      </div>
    </nav>
  );
}

export default ColorNav;