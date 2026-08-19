import React, { useMemo, useState } from "react";
import {
  Search,
  Sun,
  Bell,
  Type,
  Copy,
  RotateCcw,
  Check,
  ChevronDown,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  SlidersHorizontal,
  Sparkles,
  Command,
  Minus,
  Plus,
  Wand2,
  Maximize2,
  Lock,
  Info,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const presets = {
  Modern: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 72,
    lineHeight: 1.08,
    letterSpacing: -2,
    text: "Typography gives ideas a visual voice.",
  },

  Luxury: {
    fontFamily: "Georgia",
    fontWeight: "400",
    fontSize: 76,
    lineHeight: 1.05,
    letterSpacing: -1.5,
    text: "Crafted with intention.",
  },

  Editorial: {
    fontFamily: "Georgia",
    fontWeight: "400",
    fontSize: 68,
    lineHeight: 1.12,
    letterSpacing: -1,
    text: "Ideas deserve beautiful typography.",
  },

  Minimal: {
    fontFamily: "Helvetica",
    fontWeight: "500",
    fontSize: 64,
    lineHeight: 1.1,
    letterSpacing: -2,
    text: "Less noise. More clarity.",
  },

  Tech: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 64,
    lineHeight: 1.08,
    letterSpacing: -2.5,
    text: "Build systems that scale.",
  },
};

const fonts = [
  "Inter",
  "Helvetica",
  "Arial",
  "Georgia",
  "Times New Roman",
];

const pairings = [
  {
    heading: "Inter",
    body: "Inter",
    description: "Clean & Modern",
    sample: "Aa",
  },
  {
    heading: "Helvetica",
    body: "Inter",
    description: "Minimal & Neutral",
    sample: "Aa",
  },
  {
    heading: "Georgia",
    body: "Inter",
    description: "Editorial & Elegant",
    sample: "Aa",
  },
  {
    heading: "Arial",
    body: "Helvetica",
    description: "Simple & Professional",
    sample: "Aa",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

function TypographyLab() {
  const [activePreset, setActivePreset] = useState("Modern");
  const [mode, setMode] = useState("Heading");

  const [fontFamily, setFontFamily] = useState("Inter");
  const [fontWeight, setFontWeight] = useState("700");
  const [fontSize, setFontSize] = useState(72);
  const [lineHeight, setLineHeight] = useState(1.1);
  const [letterSpacing, setLetterSpacing] = useState(-2);
  const [textAlign, setTextAlign] = useState("left");

  const [previewText, setPreviewText] = useState(
    "Typography gives ideas a visual voice."
  );

  const [copied, setCopied] = useState(false);

  /* =========================================================
     PRESET
  ========================================================= */

  const applyPreset = (preset) => {
    const config = presets[preset];

    setActivePreset(preset);
    setFontFamily(config.fontFamily);
    setFontWeight(config.fontWeight);
    setFontSize(config.fontSize);
    setLineHeight(config.lineHeight);
    setLetterSpacing(config.letterSpacing);
    setPreviewText(config.text);
  };

  /* =========================================================
     RESET
  ========================================================= */

  const resetTypography = () => {
    applyPreset("Modern");
    setMode("Heading");
    setTextAlign("left");
  };

  /* =========================================================
     CSS OUTPUT
  ========================================================= */

  const cssOutput = useMemo(
    () => `font-family: "${fontFamily}";
font-size: ${fontSize}px;
font-weight: ${fontWeight};
line-height: ${lineHeight};
letter-spacing: ${letterSpacing}px;
text-align: ${textAlign};`,
    [
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      letterSpacing,
      textAlign,
    ]
  );

  /* =========================================================
     COPY
  ========================================================= */

  const copyCSS = async () => {
    try {
      await navigator.clipboard.writeText(cssOutput);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      console.error("Clipboard unavailable");
    }
  };

  /* =========================================================
     FONT SIZE
  ========================================================= */

  const decreaseSize = () => {
    setFontSize((value) => Math.max(24, value - 2));
  };

  const increaseSize = () => {
    setFontSize((value) => Math.min(120, value + 2));
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#111111]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 h-[70px] border-b border-[#E5E5E5] bg-white/90 backdrop-blur-2xl">

        <div className="mx-auto flex h-full max-w-[1680px] items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* BRAND */}

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DDDDDD] bg-[#F8F8F8]">
              <Type size={16} strokeWidth={1.7} />
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h1 className="text-[14px] font-semibold tracking-[-0.035em]">
                  Typography Lab
                </h1>

                <span className="text-[10px] text-[#BBBBBB]">
                  /
                </span>

                <span className="text-[9px] uppercase tracking-[0.15em] text-[#999999]">
                  Design OS
                </span>

              </div>

              <p className="mt-0.5 hidden text-[9px] text-[#AAAAAA] sm:block">
                Type system generator
              </p>

            </div>

          </div>

          {/* SEARCH */}

          <button
            className="
              hidden
              h-9
              w-[350px]
              items-center
              gap-3
              rounded-lg
              border
              border-[#E4E4E4]
              bg-[#F8F8F8]
              px-3
              text-left
              transition
              hover:border-[#CCCCCC]
              hover:bg-white
              md:flex
            "
          >

            <Search
              size={14}
              strokeWidth={1.6}
              className="text-[#999999]"
            />

            <span className="flex-1 text-[10px] text-[#999999]">
              Search fonts, styles, combinations...
            </span>

            <span className="flex items-center gap-1 rounded-md border border-[#DDDDDD] bg-white px-1.5 py-1 text-[8px] text-[#999999]">
              <Command size={9} />
              K
            </span>

          </button>

          {/* ACTIONS */}

          <div className="flex items-center gap-2">

            <button
              aria-label="Theme"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-[#E3E3E3]
                bg-white
                text-[#666666]
                transition
                hover:border-[#CCCCCC]
                hover:bg-[#F5F5F5]
                hover:text-[#111111]
              "
            >
              <Sun size={14} />
            </button>

            <button
              aria-label="Notifications"
              className="
                relative
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-[#E3E3E3]
                bg-white
                text-[#666666]
                transition
                hover:bg-[#F5F5F5]
              "
            >
              <Bell size={14} />

              <span className="absolute right-[6px] top-[6px] h-1.5 w-1.5 rounded-full bg-[#111111]" />
            </button>

            <div className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[10px] font-medium text-white">
              A
            </div>

          </div>

        </div>

      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mx-auto max-w-[1680px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">

        {/* ===================================================
            PAGE INTRO
        =================================================== */}

        <div className="mb-9">

          <div className="flex items-start justify-between gap-5">

            <div>

              <div className="mb-2 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />

                <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#999999]">
                  Foundation
                </span>

              </div>

              <h2 className="text-[28px] font-semibold tracking-[-0.055em] sm:text-[36px]">
                Typography
              </h2>

              <p className="mt-2 max-w-[600px] text-[11px] leading-5 text-[#888888]">
                Build, tune and preview a complete typography system
                with precision.
              </p>

            </div>

            <button
              onClick={resetTypography}
              className="
                hidden
                items-center
                gap-2
                rounded-lg
                border
                border-[#E1E1E1]
                bg-white
                px-3
                py-2
                text-[10px]
                text-[#666666]
                transition
                hover:border-[#CCCCCC]
                hover:bg-[#FAFAFA]
                hover:text-[#111111]
                sm:flex
              "
            >
              <RotateCcw size={12} />
              Reset
            </button>

          </div>

        </div>

        {/* ===================================================
            PRESETS + MODE
        =================================================== */}

        <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

          <div className="flex flex-wrap items-center gap-1.5">

            <span className="mr-2 text-[9px] font-medium uppercase tracking-[0.18em] text-[#999999]">
              Presets
            </span>

            {Object.keys(presets).map((preset) => (

              <button
                key={preset}
                onClick={() => applyPreset(preset)}
                className={`
                  rounded-md
                  px-3
                  py-1.5
                  text-[10px]
                  font-medium
                  transition-all
                  ${
                    activePreset === preset
                      ? "bg-[#111111] text-white shadow-[0_3px_12px_rgba(0,0,0,0.14)]"
                      : "text-[#666666] hover:bg-[#EAEAEA] hover:text-[#111111]"
                  }
                `}
              >
                {preset}
              </button>

            ))}

          </div>

          <div className="flex items-center justify-between gap-3 xl:justify-end">

            <span className="text-[9px] uppercase tracking-[0.16em] text-[#AAAAAA]">
              Preview mode
            </span>

            <div className="flex rounded-lg border border-[#E3E3E3] bg-white p-1">

              {["Heading", "Paragraph"].map((item) => (

                <button
                  key={item}
                  onClick={() => setMode(item)}
                  className={`
                    rounded-md
                    px-4
                    py-1.5
                    text-[9px]
                    font-medium
                    transition
                    ${
                      mode === item
                        ? "bg-[#111111] text-white"
                        : "text-[#777777] hover:text-[#111111]"
                    }
                  `}
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

        </div>

        {/* ===================================================
            EDITOR
        =================================================== */}

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_390px]">

          {/* =================================================
              PREVIEW
          ================================================= */}

          <section className="overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white">

            {/* PREVIEW HEADER */}

            <div className="flex items-center justify-between border-b border-[#E8E8E8] px-5 py-3.5">

              <div>

                <div className="flex items-center gap-2">

                  <span className="flex h-5 w-5 items-center justify-center rounded bg-[#F2F2F2]">
                    <Sparkles size={10} />
                  </span>

                  <p className="text-[10px] font-medium">
                    Live Preview
                  </p>

                </div>

                <p className="mt-1 text-[9px] text-[#999999]">
                  {activePreset} type system
                </p>

              </div>

              <div className="flex items-center gap-2">

                <button
                  onClick={copyCSS}
                  className="
                    flex
                    h-8
                    items-center
                    gap-2
                    rounded-md
                    border
                    border-[#E2E2E2]
                    bg-white
                    px-3
                    text-[9px]
                    font-medium
                    text-[#666666]
                    transition
                    hover:border-[#CCCCCC]
                    hover:bg-[#F8F8F8]
                    hover:text-[#111111]
                  "
                >

                  {copied ? (
                    <>
                      <Check size={12} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      Copy CSS
                    </>
                  )}

                </button>

                <button
                  onClick={resetTypography}
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-md
                    border
                    border-[#E2E2E2]
                    text-[#666666]
                    transition
                    hover:bg-[#F5F5F5]
                  "
                  aria-label="Reset"
                >
                  <RotateCcw size={12} />
                </button>

              </div>

            </div>

            {/* CANVAS */}

            <div className="min-h-[570px] bg-[#F8F8F8] p-4 sm:p-8 lg:p-12">

              <div
                className="
                  flex
                  min-h-[530px]
                  w-full
                  flex-col
                  justify-center
                  rounded-xl
                  border
                  border-[#E5E5E5]
                  bg-white
                  px-6
                  py-10
                  shadow-[0_24px_70px_rgba(0,0,0,0.045)]
                  sm:px-12
                  lg:px-16
                "
              >

                {/* META */}

                <div className="mb-auto flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <div className="h-1.5 w-1.5 rounded-full bg-[#111111]" />

                    <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-[#AAAAAA]">
                      Typography Preview
                    </span>

                  </div>

                  <span className="rounded-full border border-[#E4E4E4] px-2.5 py-1 text-[8px] uppercase tracking-[0.12em] text-[#888888]">
                    {mode}
                  </span>

                </div>

                {/* EDITABLE TEXT */}

                <div className="my-auto py-16">

                  <p
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) =>
                      setPreviewText(e.currentTarget.textContent || "")
                    }
                    style={{
                      fontFamily,
                      fontWeight,
                      fontSize:
                        mode === "Heading"
                          ? `clamp(40px, 6vw, ${fontSize}px)`
                          : "20px",
                      lineHeight:
                        mode === "Heading"
                          ? lineHeight
                          : 1.7,
                      letterSpacing:
                        mode === "Heading"
                          ? `${letterSpacing}px`
                          : "0px",
                      textAlign,
                    }}
                    className="
                      min-h-[100px]
                      cursor-text
                      break-words
                      text-[#111111]
                      outline-none
                      selection:bg-[#111111]
                      selection:text-white
                    "
                  >
                    {previewText}
                  </p>

                </div>

                {/* TOKEN INFO */}

                <div className="mt-auto border-t border-[#EEEEEE] pt-5">

                  <div className="flex flex-wrap gap-x-8 gap-y-4">

                    <Token
                      label="Family"
                      value={fontFamily}
                    />

                    <Token
                      label="Weight"
                      value={fontWeight}
                    />

                    <Token
                      label="Size"
                      value={`${fontSize}px`}
                    />

                    <Token
                      label="Line"
                      value={lineHeight}
                    />

                    <Token
                      label="Tracking"
                      value={`${letterSpacing}px`}
                    />

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              SETTINGS
          ================================================= */}

          <aside className="h-fit overflow-hidden rounded-2xl border border-[#E1E1E1] bg-white">

            {/* SETTINGS HEADER */}

            <div className="flex items-center justify-between border-b border-[#E8E8E8] px-5 py-4">

              <div className="flex items-center gap-2">

                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#F2F2F2]">
                  <SlidersHorizontal size={11} />
                </div>

                <div>

                  <h3 className="text-[11px] font-semibold">
                    Typography Settings
                  </h3>

                  <p className="mt-0.5 text-[8px] text-[#AAAAAA]">
                    Fine tune your system
                  </p>

                </div>

              </div>

              <span className="flex items-center gap-1.5 text-[8px] uppercase tracking-[0.12em] text-[#777777]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#111111]" />
                Live
              </span>

            </div>

            {/* SETTINGS BODY */}

            <div className="space-y-6 p-5">

              {/* FONT FAMILY */}

              <SettingBlock label="Font Family">

                <div className="relative">

                  <select
                    value={fontFamily}
                    onChange={(e) => {
                      setFontFamily(e.target.value);
                      setActivePreset("Custom");
                    }}
                    className="
                      w-full
                      appearance-none
                      rounded-lg
                      border
                      border-[#E1E1E1]
                      bg-[#FAFAFA]
                      px-3
                      py-2.5
                      pr-9
                      text-[10px]
                      font-medium
                      outline-none
                      transition
                      hover:border-[#CCCCCC]
                      focus:border-[#999999]
                    "
                  >

                    {fonts.map((font) => (
                      <option key={font}>
                        {font}
                      </option>
                    ))}

                  </select>

                  <ChevronDown
                    size={13}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]"
                  />

                </div>

              </SettingBlock>

              {/* WEIGHT */}

              <SettingBlock label="Weight">

                <div className="grid grid-cols-[1fr_58px] gap-2">

                  <select
                    value={fontWeight}
                    onChange={(e) => {
                      setFontWeight(e.target.value);
                      setActivePreset("Custom");
                    }}
                    className="
                      rounded-lg
                      border
                      border-[#E1E1E1]
                      bg-[#FAFAFA]
                      px-3
                      py-2.5
                      text-[10px]
                      outline-none
                      focus:border-[#999999]
                    "
                  >

                    <option value="400">Regular</option>
                    <option value="500">Medium</option>
                    <option value="600">Semibold</option>
                    <option value="700">Bold</option>
                    <option value="800">Extra Bold</option>

                  </select>

                  <div className="flex items-center justify-center rounded-lg border border-[#E1E1E1] bg-[#FAFAFA] font-mono text-[9px] text-[#777777]">
                    {fontWeight}
                  </div>

                </div>

              </SettingBlock>

              {/* SIZE */}

              <Slider
                label="Font Size"
                value={fontSize}
                min={24}
                max={120}
                step={1}
                unit="px"
                onChange={(value) => {
                  setFontSize(value);
                  setActivePreset("Custom");
                }}
                controls
                onDecrease={decreaseSize}
                onIncrease={increaseSize}
              />

              {/* LINE HEIGHT */}

              <Slider
                label="Line Height"
                value={lineHeight}
                min={0.8}
                max={2}
                step={0.05}
                unit=""
                onChange={(value) => {
                  setLineHeight(value);
                  setActivePreset("Custom");
                }}
              />

              {/* LETTER SPACING */}

              <Slider
                label="Letter Spacing"
                value={letterSpacing}
                min={-5}
                max={5}
                step={0.5}
                unit="px"
                onChange={(value) => {
                  setLetterSpacing(value);
                  setActivePreset("Custom");
                }}
              />

              {/* ALIGNMENT */}

              <SettingBlock label="Text Alignment">

                <div className="grid grid-cols-4 gap-1 rounded-lg border border-[#E3E3E3] bg-[#FAFAFA] p-1">

                  <AlignButton
                    active={textAlign === "left"}
                    onClick={() => setTextAlign("left")}
                    icon={<AlignLeft size={13} />}
                  />

                  <AlignButton
                    active={textAlign === "center"}
                    onClick={() => setTextAlign("center")}
                    icon={<AlignCenter size={13} />}
                  />

                  <AlignButton
                    active={textAlign === "right"}
                    onClick={() => setTextAlign("right")}
                    icon={<AlignRight size={13} />}
                  />

                  <AlignButton
                    active={textAlign === "justify"}
                    onClick={() => setTextAlign("justify")}
                    icon={<AlignJustify size={13} />}
                  />

                </div>

              </SettingBlock>

              {/* COLOR */}

              <SettingBlock label="Text Color">

                <div className="flex items-center justify-between rounded-lg border border-[#E1E1E1] bg-[#FAFAFA] px-3 py-2.5">

                  <div className="flex items-center gap-2.5">

                    <div className="h-5 w-5 rounded border border-[#CCCCCC] bg-[#111111]" />

                    <span className="font-mono text-[9px] text-[#666666]">
                      #111111
                    </span>

                  </div>

                  <span className="text-[8px] uppercase tracking-[0.1em] text-[#AAAAAA]">
                    Default
                  </span>

                </div>

              </SettingBlock>

              {/* SYSTEM STATUS */}

              <div className="rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] p-3.5">

                <div className="flex items-start gap-3">

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E5E5E5]">
                    <Wand2 size={12} />
                  </div>

                  <div>

                    <p className="text-[9px] font-semibold">
                      System optimized
                    </p>

                    <p className="mt-1 text-[8px] leading-4 text-[#999999]">
                      Your current type scale is balanced for
                      hierarchy and readability.
                    </p>

                  </div>

                </div>

              </div>

              {/* CSS PREVIEW */}

              <div className="border-t border-[#EEEEEE] pt-5">

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-[#999999]">
                    CSS Output
                  </span>

                  <button
                    onClick={copyCSS}
                    className="flex items-center gap-1 text-[9px] text-[#777777] hover:text-[#111111]"
                  >
                    {copied ? (
                      <>
                        <Check size={10} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={10} />
                        Copy
                      </>
                    )}
                  </button>

                </div>

                <pre
                  className="
                    overflow-x-auto
                    rounded-lg
                    border
                    border-[#E5E5E5]
                    bg-[#F8F8F8]
                    p-3
                    font-mono
                    text-[8px]
                    leading-5
                    text-[#666666]
                  "
                >
                  {cssOutput}
                </pre>

              </div>

            </div>

          </aside>

        </div>

        {/* ===================================================
            FONT PAIRINGS
        =================================================== */}

        <section className="mt-12">

          <div className="mb-5 flex items-end justify-between">

            <div>

              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#AAAAAA]">
                Recommendations
              </p>

              <h2 className="mt-1.5 text-[19px] font-semibold tracking-[-0.035em]">
                Font Pairings
              </h2>

              <p className="mt-1 text-[9px] text-[#999999]">
                Curated combinations for different visual directions.
              </p>

            </div>

            <button className="hidden items-center gap-1 text-[9px] font-medium text-[#777777] transition hover:text-[#111111] sm:flex">
              Explore library
              <ChevronDown
                size={11}
                className="-rotate-90"
              />
            </button>

          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">

            {pairings.map((pair) => (

              <button
                key={`${pair.heading}-${pair.body}`}
                onClick={() => {
                  setFontFamily(pair.heading);
                  setActivePreset("Custom");
                }}
                className="
                  group
                  rounded-xl
                  border
                  border-[#E1E1E1]
                  bg-white
                  p-5
                  text-left
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#CCCCCC]
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)]
                "
              >

                <div className="flex items-start justify-between">

                  <div>

                    <p className="text-[8px] uppercase tracking-[0.16em] text-[#AAAAAA]">
                      Pairing
                    </p>

                    <p className="mt-2 text-[11px] font-medium">
                      {pair.heading}

                      <span className="mx-1.5 text-[#BBBBBB]">
                        ×
                      </span>

                      {pair.body}
                    </p>

                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-md border border-[#EEEEEE] text-[#999999] transition group-hover:bg-[#111111] group-hover:text-white">

                    <ChevronDown
                      size={12}
                      className="-rotate-90"
                    />

                  </div>

                </div>

                <div className="mt-8">

                  <p
                    style={{
                      fontFamily: pair.heading,
                    }}
                    className="text-[40px] font-semibold tracking-[-0.07em] text-[#111111]"
                  >
                    {pair.sample}
                  </p>

                  <p className="mt-3 text-[9px] text-[#888888]">
                    {pair.description}
                  </p>

                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#EEEEEE] pt-3">

                  <span className="text-[8px] uppercase tracking-[0.12em] text-[#AAAAAA]">
                    Apply pairing
                  </span>

                  <span className="text-[10px] text-[#999999] transition group-hover:translate-x-1 group-hover:text-[#111111]">
                    →
                  </span>

                </div>

              </button>

            ))}

          </div>

        </section>

        {/* ===================================================
            MOBILE RESET
        =================================================== */}

        <button
          onClick={resetTypography}
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-[#E1E1E1]
            bg-white
            py-2.5
            text-[9px]
            text-[#666666]
            sm:hidden
          "
        >
          <RotateCcw size={12} />
          Reset Typography
        </button>

      </main>

    </div>
  );
}

/* =========================================================
   TOKEN
========================================================= */

function Token({ label, value }) {
  return (
    <div>

      <p className="mb-1 text-[7px] uppercase tracking-[0.18em] text-[#AAAAAA]">
        {label}
      </p>

      <p className="font-mono text-[9px] text-[#555555]">
        {value}
      </p>

    </div>
  );
}

/* =========================================================
   SETTING BLOCK
========================================================= */

function SettingBlock({ label, children }) {
  return (
    <div>

      <div className="mb-2 flex items-center justify-between">

        <label className="text-[9px] font-medium text-[#555555]">
          {label}
        </label>

      </div>

      {children}

    </div>
  );
}

/* =========================================================
   SLIDER
========================================================= */

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
  controls = false,
  onDecrease,
  onIncrease,
}) {
  return (
    <SettingBlock label={label}>

      <div className="space-y-2.5">

        <div className="flex items-center gap-3">

          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) =>
              onChange(Number(e.target.value))
            }
            className="
              h-1
              w-full
              cursor-pointer
              appearance-none
              rounded-full
              bg-[#E5E5E5]
              accent-black
            "
          />

          <span className="w-12 text-right font-mono text-[9px] text-[#777777]">
            {value}
            {unit}
          </span>

        </div>

        {controls && (

          <div className="flex items-center justify-between">

            <button
              onClick={onDecrease}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                border
                border-[#E2E2E2]
                bg-white
                text-[#777777]
                transition
                hover:bg-[#F5F5F5]
                hover:text-[#111111]
              "
            >
              <Minus size={11} />
            </button>

            <span className="font-mono text-[8px] text-[#AAAAAA]">
              {min} — {max} {unit}
            </span>

            <button
              onClick={onIncrease}
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-md
                border
                border-[#E2E2E2]
                bg-white
                text-[#777777]
                transition
                hover:bg-[#F5F5F5]
                hover:text-[#111111]
              "
            >
              <Plus size={11} />
            </button>

          </div>

        )}

      </div>

    </SettingBlock>
  );
}

/* =========================================================
   ALIGNMENT BUTTON
========================================================= */

function AlignButton({ active, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        h-8
        items-center
        justify-center
        rounded-md
        transition
        ${
          active
            ? "bg-[#111111] text-white shadow-sm"
            : "text-[#888888] hover:bg-[#EEEEEE] hover:text-[#111111]"
        }
      `}
    >
      {icon}
    </button>
  );
}

export default TypographyLab;