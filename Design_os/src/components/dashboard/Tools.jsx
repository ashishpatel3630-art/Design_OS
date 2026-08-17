import React from "react";

const tools = [
  {
    category: "COLOR & PALETTE",
    title: "Colors & Palette",
    description:
      "Build, explore and manage beautiful color systems for your designs.",
    type: "colors",
  },
  {
    category: "TYPOGRAPHY",
    title: "Typography",
    description:
      "Create consistent type scales and customize every heading with ease.",
    type: "typography",
  },
   {
    category: "MOTION",
    title: "Motion Studio",
    description:
      "Create smooth interactions, transitions and motion systems for your interface.",
    type: "motion",
  },
  {
    category: "SHADOW",
    title: "Shadow Generator",
    description:
      "Design subtle or dramatic shadows with complete control over depth and blur.",
    type: "shadow",
  },
  {
    category: "GRADIENT",
    title: "Gradient Generator",
    description:
      "Create smooth, modern gradients and customize every layer of your visual system.",
    type: "gradient",
  }
];

function ToolPreview({ type }) {
  if (type === "colors") {
    return (
      <div className="flex gap-2.5 mt-6">
        {["#050505", "#111111", "#1A1A1A", "#2A2A2A", "#8A8A8A", "#F5F5F5"].map(
          (color) => (
            <div
              key={color}
              className="h-10 w-10 rounded-lg border border-[#2a2a2a] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              style={{ backgroundColor: color }}
            />
          ),
        )}
      </div>
    );
  }

  if (type === "typography") {
    return (
      <div className="flex gap-2.5 mt-6">
        {["H1", "H2", "H3", "H4", "H5", "H6"].map((heading, index) => (
          <div
            key={heading}
            className="h-10 w-10 rounded-lg bg-[#111111] text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a2a2a]"
          >
            <span
              className="font-bold"
              style={{
                fontSize: `${25 - index * 2}px`,
              }}
            >
              {heading}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "gradient") {
    return (
      <div className="mt-6">
        <div
          className="
            h-12 
            w-full 
            rounded-xl 
            border 
            border-[#2a2a2a]
            bg-gradient-to-r 
            from-[#050505] 
            via-[#555555] 
            to-[#f5f5f5]
            transition-all
            duration-500
            hover:scale-[1.02]
          "
        />

        <div className="flex justify-between mt-2 text-[9px] uppercase tracking-widest text-[#8a8a8a]">
          <span>#050505</span>
          <span>#F5F5F5</span>
        </div>
      </div>
    );
  }

  if (type === "shadow") {
    return (
      <div className="mt-6 flex items-center gap-6">
        <div
          className="
            h-14 
            w-14 
            rounded-xl 
            bg-white 
            border 
            border-[#e7e7e2]
            shadow-[0_15px_35px_rgba(0,0,0,0.15)]
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-[0_25px_50px_rgba(0,0,0,0.20)]
          "
        />

        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-widest text-[#8a8a8a]">
            Depth
          </p>
          <p className="text-sm font-medium text-[#111111]">Soft Elevation</p>
        </div>
      </div>
    );
  }

  if (type === "motion") {
    return (
      <div className="mt-6 flex items-center gap-4">
        <div className="relative h-10 w-full overflow-hidden rounded-lg bg-[#111111]">
          <div
            className="
              absolute
              left-2
              top-2
              h-6
              w-6
              rounded-md
              bg-white
              animate-[slide_2s_ease-in-out_infinite]
            "
          />
        </div>
      </div>
    );
  }

  return null;
}

function ToolCard({ tool }) {
  return (
    <div
      className="
        group
        w-full
        sm:w-[380px]
        min-h-[250px]
        rounded-3xl
        border
        border-[#e7e7e2]
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:border-[#cfcfca]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
      "
    >
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-[#8a8a85]">
          {tool.category}
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#111111]">
          {tool.title}
        </h1>

        <p className="mt-2 text-sm leading-6 text-[#8a8a85]">
          {tool.description}
        </p>

        <ToolPreview type={tool.type} />
      </div>
    </div>
  );
}

function Tools() {
  return (
    <section className="w-full">
      <div className="flex flex-wrap gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.title} tool={tool} />
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(320px);
          }

          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Tools;
