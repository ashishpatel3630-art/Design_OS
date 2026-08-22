import React, { useState } from "react";
import MotionCanvas from "./MotionCanvas";
import MotionTimeline from "./MotionTimeline";
import Rightside from "./Rightside";
import "./motion.css";

const elementTypes = [
  { id: "button", label: "Button", icon: "▣" },
  { id: "text", label: "Text", icon: "T" },
  { id: "div", label: "Div", icon: "□" },
  { id: "box", label: "Box", icon: "▤" },
  { id: "circle", label: "Circle", icon: "○" },
  { id: "navbar", label: "Navbar", icon: "☰" },
];

const animations = {
  button: [
    "fadeIn",
    "slideInUp",
    "slideInDown",
    "slideInLeft",
    "slideInRight",
    "zoomIn",
    "bounceIn",
    "rotateIn",
    "pulse",
    "bounce",
    "shakeX",
    "shakeY",
    "swing",
    "tada",
    "rubberBand",
  ],

  text: [
    "fadeIn",
    "fadeInUp",
    "fadeInDown",
    "fadeInLeft",
    "fadeInRight",
    "textReveal",
    "textSlideUp",
    "textSlideDown",
    "trackingIn",
    "focusIn",
    "blurIn",
    "textZoom",
    "textBounce",
    "bounce",
    "pulse",
  ],

  div: [
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
    "rotateIn",
    "flipInX",
    "flipInY",
    "bounceIn",
  ],

  box: [
    "fadeIn",
    "slideInUp",
    "slideInDown",
    "slideInLeft",
    "slideInRight",
    "zoomIn",
    "rotateIn",
    "flipInX",
    "flipInY",
    "cubeIn",
    "perspectiveIn",
    "pulse",
    "shakeX",
    "swing",
  ],

  circle: [
    "fadeIn",
    "zoomIn",
    "bounceIn",
    "rotateIn",
    "pulse",
    "bounce",
    "swing",
    "tada",
    "wobble",
    "jello",
  ],

  navbar: [
    "fadeIn",
    "fadeInDown",
    "fadeInUp",
    "slideInDown",
    "slideInUp",
    "slideInLeft",
    "slideInRight",
    "zoomIn",
    "flipInX",
    "flipInY",
  ],
};

function Motion() {
  const [elementType, setElementType] = useState("button");
  const [activeAnimation, setActiveAnimation] = useState("bounceIn");

  const [duration, setDuration] = useState(700);
  const [delay, setDelay] = useState(0);
  const [easing, setEasing] = useState(
    "cubic-bezier(0.16, 1, 0.3, 1)"
  );

  const [replayKey, setReplayKey] = useState(0);

  const replay = () => {
    setReplayKey((value) => value + 1);
  };

  const changeElement = (type) => {
    setElementType(type);

    const firstAnimation = animations[type][0];

    setActiveAnimation(firstAnimation);

    setReplayKey((value) => value + 1);
  };

  const changeAnimation = (animation) => {
    setActiveAnimation(animation);

    setReplayKey((value) => value + 1);
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#f4f4f1] text-[#111111]">

      {/* HEADER */}
      <header className="flex h-[68px] shrink-0 items-center justify-between border-b border-[#deded9] bg-[#f8f8f6] px-5">

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#999999]">
            Design OS / Foundation
          </p>

          <h1 className="mt-1 text-lg font-semibold tracking-tight">
            Motion Studio
          </h1>
        </div>

        <div className="flex items-center gap-2">

          <div className="rounded-xl border border-[#deded9] bg-white px-3 py-2">
            <span className="text-[9px] uppercase tracking-wider text-[#999999]">
              Element
            </span>

            <span className="ml-2 text-[10px] font-semibold">
              {elementType}
            </span>
          </div>

          <div className="rounded-xl border border-[#deded9] bg-white px-3 py-2">
            <span className="text-[9px] uppercase tracking-wider text-[#999999]">
              Animation
            </span>

            <span className="ml-2 text-[10px] font-semibold">
              {activeAnimation}
            </span>
          </div>

        </div>
      </header>


      {/* WORKSPACE */}
      <div className="flex min-h-0 flex-1">

        {/* LEFT SIDEBAR */}
        <aside className="flex w-[190px] shrink-0 flex-col border-r border-[#deded9] bg-white">

          <div className="border-b border-[#e7e7e2] p-4">

            <p className="text-xs font-semibold">
              Elements
            </p>

            <p className="mt-1 text-[10px] leading-4 text-[#999999]">
              Choose what you want to animate.
            </p>

          </div>


          <div className="flex-1 overflow-y-auto p-3">

            <div className="space-y-1">

              {elementTypes.map((element) => (

                <button
                  key={element.id}
                  onClick={() => changeElement(element.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${
                    elementType === element.id
                      ? "bg-[#111111] text-white"
                      : "text-[#555555] hover:bg-[#f4f4f1]"
                  }`}
                >

                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-current/10 text-xs">
                    {element.icon}
                  </span>

                  <span className="text-[11px] font-medium">
                    {element.label}
                  </span>

                </button>

              ))}

            </div>

          </div>

        </aside>


        {/* CENTER */}
        <main className="flex min-w-0 flex-1 flex-col">

          <MotionCanvas
            elementType={elementType}
            animationKey={activeAnimation}
            replayKey={replayKey}
            duration={duration}
            delay={delay}
            easing={easing}
          />

          <MotionTimeline
            duration={duration}
            setDuration={setDuration}
            delay={delay}
            setDelay={setDelay}
            easing={easing}
            setEasing={setEasing}
            replay={replay}
            activeAnimation={activeAnimation}
            elementType={elementType}
          />

        </main>


        {/* RIGHT */}
        <Rightside
          elementType={elementType}
          activeAnimation={activeAnimation}
          setActiveAnimation={changeAnimation}
          replay={replay}
          animations={animations[elementType]}
        />

      </div>

    </div>
  );
}

export default Motion;