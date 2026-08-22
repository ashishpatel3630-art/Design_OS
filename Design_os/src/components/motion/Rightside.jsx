import React from "react";

const animationGroups = [
  {
    name: "Entrance",
    items: [
      "fadeIn",
      "fadeInUp",
      "fadeInDown",
      "fadeInLeft",
      "fadeInRight",
      "slideInUp",
      "slideInDown",
      "slideInLeft",
      "slideInRight",
      "zoomIn",
      "bounceIn",
      "flipInX",
      "flipInY",
      "rotateIn",
    ],
  },
  {
    name: "Attention",
    items: [
      "bounce",
      "flash",
      "pulse",
      "rubberBand",
      "shakeX",
      "shakeY",
      "swing",
      "tada",
      "wobble",
      "jello",
    ],
  },
  {
    name: "Exit",
    items: [
      "fadeOut",
      "fadeOutUp",
      "fadeOutDown",
      "fadeOutLeft",
      "fadeOutRight",
      "slideOutUp",
      "slideOutDown",
      "zoomOut",
      "flipOutX",
      "flipOutY",
    ],
  },
  {
    name: "Text",
    items: [
      "textReveal",
      "textSlideUp",
      "textSlideDown",
      "trackingIn",
      "trackingOut",
      "focusIn",
      "focusOut",
      "blurIn",
      "blurOut",
      "textZoom",
      "textBounce",
    ],
  },
  {
    name: "3D",
    items: [
      "rotateX",
      "rotateY",
      "rotateZ",
      "flipX",
      "flipY",
      "cubeIn",
      "perspectiveIn",
    ],
  },
];

function formatName(name) {
  return name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase());
}

function Rightside({ activeAnimation, setActiveAnimation, replay }) {
  return (
    <aside className="flex h-full w-[330px] shrink-0 flex-col border-l border-[#deded9] bg-white">
      {/* Header */}
      <div className="border-b border-[#e7e7e2] p-5">
        <p className="text-sm font-semibold">Animations</p>

        <p className="mt-1 text-[11px] text-[#999999]">
          Choose an animation to preview
        </p>
      </div>

      {/* Search */}
      <div className="border-b border-[#e7e7e2] p-4">
        <input
          placeholder="Search animations..."
          className="h-10 w-full rounded-xl border border-[#deded9] bg-[#fafaf8] px-3 text-xs outline-none focus:border-[#111111]"
        />
      </div>

      {/* Library */}
      <div className="flex-1 overflow-y-auto p-3">
        {animationGroups.map((group) => (
          <div key={group.name} className="mb-6">
            <div className="mb-2 flex items-center justify-between px-2">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#999999]">
                {group.name}
              </p>

              <span className="text-[9px] text-[#c0c0ba]">
                {group.items.length}
              </span>
            </div>

            <div className="space-y-1">
              {group.items.map((animation) => (
                <button
                  key={animation}
                  onClick={() => {
                    setActiveAnimation(animation);
                    replay();
                  }}
                  className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition ${
                    activeAnimation === animation
                      ? "bg-[#111111] text-white"
                      : "text-[#555555] hover:bg-[#f4f4f1] hover:text-[#111111]"
                  }`}
                >
                  <span className="text-[11px] font-medium">
                    {formatName(animation)}
                  </span>

                  <span
                    className={`text-[10px] transition ${
                      activeAnimation === animation
                        ? "text-white/50"
                        : "text-[#c0c0ba] group-hover:text-[#777777]"
                    }`}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Rightside;