import React, { useState } from "react";
import {
  Search,
  Sun,
  Bell,
  ChevronDown,
  Type,
  Copy,
  RotateCcw,
} from "lucide-react";

const presets = ["Modern", "Luxury", "Editorial", "Minimal", "Tech"];

const fonts = ["Inter", "Helvetica", "Arial", "Georgia", "Times New Roman"];

const pairings = [
  {
    heading: "Inter",
    body: "Inter",
    description: "Clean & Modern",
  },
  {
    heading: "Helvetica",
    body: "Inter",
    description: "Minimal & Neutral",
  },
  {
    heading: "Georgia",
    body: "Inter",
    description: "Editorial & Elegant",
  },
  {
    heading: "Arial",
    body: "Helvetica",
    description: "Simple & Professional",
  },
];

function TypographyLab() {
  const [activePreset, setActivePreset] = useState("Modern");
  const [mode, setMode] = useState("Heading");

  const [fontFamily, setFontFamily] = useState("Inter");
  const [fontWeight, setFontWeight] = useState("700");
  const [fontSize, setFontSize] = useState(72);
  const [lineHeight, setLineHeight] = useState(1.1);
  const [letterSpacing, setLetterSpacing] = useState("-2px");
  const [textAlign, setTextAlign] = useState("left");

  const [previewText, setPreviewText] = useState(
    "Design is Intelligence Made Visible.",
  );

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#111111]">
      {/* ===================================================== */}
      {/* TOP HEADER */}
      {/* ===================================================== */}

      <header className="flex h-[72px] items-center justify-between border-b border-[#E5E5E5] bg-white px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5E5E5] bg-[#F7F7F7]">
            <Type size={17} className="text-[#333333]" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[16px] font-semibold tracking-[-0.03em]">
                Typography Lab
              </h1>

              <span className="text-[#999999]">✦</span>
            </div>

            <p className="text-[10px] uppercase tracking-[0.18em] text-[#999999]">
              Design OS
            </p>
          </div>
        </div>

        {/* Search */}

        <div className="hidden h-9 w-[300px] items-center gap-3 rounded-lg border border-[#E5E5E5] bg-[#F8F8F8] px-3 md:flex">
          <Search size={15} strokeWidth={1.5} className="text-[#999999]" />

          <span className="flex-1 text-[11px] text-[#999999]">
            Search fonts, styles, combinations...
          </span>

          <span className="rounded border border-[#DDDDDD] bg-white px-1.5 py-0.5 text-[9px] text-[#999999]">
            ⌘ K
          </span>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E5E5] bg-white text-[#666666] transition hover:bg-[#F3F3F3]">
            <Sun size={15} />
          </button>

          <button className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E5E5] bg-white text-[#666666]">
            <Bell size={15} />

            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#111111]" />
          </button>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111111] text-[10px] font-medium text-white">
            A
          </div>
        </div>
      </header>

      {/* ===================================================== */}
      {/* PAGE CONTENT */}
      {/* ===================================================== */}

      <main className="mx-auto max-w-[1450px] px-8 py-7">
        {/* ================================================= */}
        {/* PRESETS */}
        {/* ================================================= */}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="mr-2 text-[10px] uppercase tracking-[0.16em] text-[#999999]">
              Presets
            </span>

            {presets.map((preset) => (
              <button
                key={preset}
                onClick={() => setActivePreset(preset)}
                className={`rounded-md px-3 py-1.5 text-[10px] transition ${
                  activePreset === preset
                    ? "bg-[#111111] text-white"
                    : "text-[#666666] hover:bg-[#EDEDED]"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Heading / Paragraph */}

          <div className="flex rounded-lg border border-[#E5E5E5] bg-white p-1">
            {["Heading", "Paragraph"].map((item) => (
              <button
                key={item}
                onClick={() => setMode(item)}
                className={`rounded-md px-4 py-1.5 text-[10px] transition ${
                  mode === item ? "bg-[#111111] text-white" : "text-[#777777]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ================================================= */}
        {/* MAIN EDITOR */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_380px]">
          {/* =============================================== */}
          {/* PREVIEW */}
          {/* =============================================== */}

          <section className="overflow-hidden rounded-2xl border border-[#E3E3E3] bg-white">
            {/* Preview header */}

            <div className="flex items-center justify-between border-b border-[#E8E8E8] px-5 py-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#999999]">
                  Live Preview
                </p>

                <p className="mt-0.5 text-[11px] text-[#555555]">
                  {activePreset} typography system
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => navigator.clipboard?.writeText(previewText)}
                  className="flex h-8 items-center gap-2 rounded-md border border-[#E5E5E5] px-3 text-[10px] text-[#666666] hover:bg-[#F5F5F5]"
                >
                  <Copy size={13} />
                  Copy
                </button>

                <button
                  onClick={() =>
                    setPreviewText("Design is Intelligence Made Visible.")
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E5E5E5] text-[#666666] hover:bg-[#F5F5F5]"
                >
                  <RotateCcw size={13} />
                </button>
              </div>
            </div>

            {/* Actual typography canvas */}

            <div className="flex min-h-[560px] items-center justify-center bg-[#FAFAFA] p-12">
              <div className="w-full max-w-[780px] rounded-xl border border-[#E8E8E8] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#AAAAAA]">
                    Typography Preview
                  </span>

                  <span className="rounded-full border border-[#E5E5E5] px-2.5 py-1 text-[9px] text-[#888888]">
                    {mode}
                  </span>
                </div>

                <p
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => setPreviewText(e.currentTarget.textContent)}
                  style={{
                    fontFamily,
                    fontWeight,
                    fontSize: `${mode === "Heading" ? fontSize : 20}px`,
                    lineHeight: mode === "Heading" ? lineHeight : 1.7,
                    letterSpacing: mode === "Heading" ? letterSpacing : "0px",
                    textAlign,
                  }}
                  className="outline-none text-[#111111]"
                >
                  {previewText}
                </p>

                <div className="mt-12 border-t border-[#EEEEEE] pt-5">
                  <div className="flex flex-wrap gap-6 text-[9px] uppercase tracking-[0.15em] text-[#999999]">
                    <span>{fontFamily}</span>

                    <span>{fontWeight}</span>

                    <span>{fontSize}px</span>

                    <span>{lineHeight} LH</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =============================================== */}
          {/* SETTINGS */}
          {/* =============================================== */}

          <aside className="rounded-2xl border border-[#E3E3E3] bg-white">
            <div className="border-b border-[#E8E8E8] px-5 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-[13px] font-medium">Typography Settings</h2>

                <span className="text-[9px] uppercase tracking-[0.15em] text-[#999999]">
                  Live
                </span>
              </div>
            </div>

            <div className="space-y-6 p-5">
              {/* Font Family */}

              <SettingBlock label="Font Family">
                <select
                  value={fontFamily}
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full rounded-lg border border-[#E3E3E3] bg-[#FAFAFA] px-3 py-2.5 text-[11px] outline-none"
                >
                  {fonts.map((font) => (
                    <option key={font}>{font}</option>
                  ))}
                </select>
              </SettingBlock>

              {/* Weight */}

              <SettingBlock label="Weight">
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={fontWeight}
                    onChange={(e) => setFontWeight(e.target.value)}
                    className="rounded-lg border border-[#E3E3E3] bg-[#FAFAFA] px-3 py-2.5 text-[11px]"
                  >
                    <option value="400">Regular</option>
                    <option value="500">Medium</option>
                    <option value="600">Semibold</option>
                    <option value="700">Bold</option>
                    <option value="800">Extra Bold</option>
                  </select>

                  <div className="flex items-center rounded-lg border border-[#E3E3E3] bg-[#FAFAFA] px-3 text-[11px] text-[#777777]">
                    {fontWeight}
                  </div>
                </div>
              </SettingBlock>

              {/* Size */}

              <Slider
                label="Size"
                value={fontSize}
                min={24}
                max={120}
                unit="px"
                onChange={setFontSize}
              />

              {/* Line Height */}

              <Slider
                label="Line Height"
                value={lineHeight}
                min={0.8}
                max={2}
                step={0.1}
                unit=""
                onChange={setLineHeight}
              />

              {/* Letter Spacing */}

              <SettingBlock label="Letter Spacing">
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="-5"
                    max="5"
                    step="0.5"
                    value={parseFloat(letterSpacing)}
                    onChange={(e) => setLetterSpacing(`${e.target.value}px`)}
                    className="w-full accent-black"
                  />

                  <span className="w-12 text-right text-[10px] text-[#777777]">
                    {letterSpacing}
                  </span>
                </div>
              </SettingBlock>

              {/* Alignment */}

              <SettingBlock label="Text Align">
                <div className="grid grid-cols-4 gap-1 rounded-lg border border-[#E5E5E5] p-1">
                  {["left", "center", "right", "justify"].map((align) => (
                    <button
                      key={align}
                      onClick={() => setTextAlign(align)}
                      className={`rounded-md py-2 text-[9px] capitalize ${
                        textAlign === align
                          ? "bg-[#111111] text-white"
                          : "text-[#777777] hover:bg-[#F3F3F3]"
                      }`}
                    >
                      {align}
                    </button>
                  ))}
                </div>
              </SettingBlock>

              {/* Text Color */}

              <SettingBlock label="Text Color">
                <div className="flex items-center justify-between rounded-lg border border-[#E3E3E3] bg-[#FAFAFA] px-3 py-2.5">
                  <span className="font-mono text-[10px] text-[#777777]">
                    #111111
                  </span>

                  <div className="h-5 w-5 rounded border border-[#CCCCCC] bg-[#111111]" />
                </div>
              </SettingBlock>
            </div>
          </aside>
        </div>

        {/* ================================================= */}
        {/* FONT PAIRINGS */}
        {/* ================================================= */}

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#999999]">
                Recommendations
              </p>

              <h2 className="mt-1 text-[17px] font-medium tracking-[-0.02em]">
                Font Pairing Suggestions
              </h2>
            </div>

            <button className="text-[10px] text-[#777777] hover:text-[#111111]">
              View all →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            {pairings.map((pair) => (
              <button
                key={`${pair.heading}-${pair.body}`}
                className="group rounded-xl border border-[#E3E3E3] bg-white p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#CCCCCC] hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-[#AAAAAA]">
                      Pairing
                    </p>

                    <p className="mt-2 text-[13px] font-medium text-[#111111]">
                      {pair.heading} × {pair.body}
                    </p>
                  </div>

                  <ChevronDown
                    size={13}
                    className="rotate-[-90deg] text-[#BBBBBB] transition group-hover:translate-x-1 group-hover:text-[#555555]"
                  />
                </div>

                <div className="mt-7">
                  <p className="text-2xl font-semibold tracking-[-0.04em]">
                    Aa
                  </p>

                  <p className="mt-2 text-[10px] text-[#888888]">
                    {pair.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* ========================================================= */
/* SMALL REUSABLE COMPONENTS                                 */
/* ========================================================= */

function SettingBlock({ label, children }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label className="text-[10px] font-medium text-[#555555]">
          {label}
        </label>
      </div>

      {children}
    </div>
  );
}

function Slider({ label, value, min, max, step = 1, unit, onChange }) {
  return (
    <SettingBlock label={label}>
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-black"
        />

        <span className="w-12 text-right text-[10px] text-[#777777]">
          {value}
          {unit}
        </span>
      </div>
    </SettingBlock>
  );
}

export default TypographyLab;
