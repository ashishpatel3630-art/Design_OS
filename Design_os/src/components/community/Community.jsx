import {
  ArrowUpRight,
  ExternalLink,
  MessageCircle,
  Play,
  Users,
} from "lucide-react";

export default function Community() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-[#080808]">

      {/* =====================================================
          SUBTLE BACKGROUND GRID
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(#000 1px, transparent 1px),
              linear-gradient(90deg, #000 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-12">

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="max-w-5xl">

          {/* Badge */}

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.025] px-3 py-1.5">

            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
              Design OS Community
            </span>

          </div>

          {/* Heading */}

          <h1 className="text-[52px] font-medium leading-[0.94] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[88px]">

            Built around
            <br />

            <span className="text-black/25">
              people, ideas &amp; Patrex.
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-base leading-7 text-black/45 md:text-lg md:leading-8">

            Connect with the people behind Patrex Media, discover what
            we&apos;re building, explore creative work, and become part of
            the ecosystem shaping the next generation of digital products.

          </p>

        </div>


        {/* =====================================================
            PATREX MEDIA FEATURE
        ===================================================== */}

        <div className="mt-20 overflow-hidden rounded-2xl border border-black/10 bg-[#f7f7f7]">

          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

            {/* LEFT */}

            <div className="relative min-h-[430px] overflow-hidden border-b border-black/10 p-8 md:p-12 lg:border-b-0 lg:border-r">

              {/* Giant P */}

              <div className="pointer-events-none absolute -right-10 -top-24 select-none text-[230px] font-bold leading-none tracking-[-0.12em] text-black/[0.035] md:text-[300px]">
                P
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">

                {/* PATREX IDENTITY */}

                <div>

                  <div className="flex items-center gap-3">

                    {/* Logo */}

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white">

                      <span className="text-lg font-bold tracking-[-0.08em]">
                        P
                      </span>

                    </div>

                    {/* Brand */}

                    <div>

                      <div className="text-sm font-bold tracking-[-0.02em]">
                        PATREX MEDIA
                      </div>

                      <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-black/35">
                        Creative Technology Studio
                      </div>

                    </div>

                  </div>


                  {/* Title */}

                  <h2 className="mt-12 max-w-xl text-3xl font-medium leading-tight tracking-[-0.045em] md:text-4xl">

                    Where creative technology
                    <br />

                    meets execution.

                  </h2>


                  {/* Description */}

                  <p className="mt-5 max-w-lg text-sm leading-7 text-black/40">

                    Patrex Media brings together design, development,
                    AI, branding and digital experiences to build
                    products that actually ship.

                  </p>

                </div>


                {/* TAGS */}

                <div className="mt-12 flex flex-wrap gap-2">

                  {[
                    "Design",
                    "Development",
                    "AI",
                    "Branding",
                    "Digital Products",
                  ].map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[10px] text-black/45"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div className="flex min-h-[430px] flex-col justify-between p-8 md:p-12">

              <div>

                <div className="flex items-center justify-between">

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
                    Community Partner
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-black/30"
                  />

                </div>


                <div className="mt-20">

                  <div className="text-7xl font-medium leading-none tracking-[-0.08em]">
                    01
                  </div>

                  <div className="mt-3 text-xs text-black/25">
                    ecosystem
                  </div>

                </div>

              </div>


              {/* LINK */}

              <a
                href="#"
                className="flex items-center justify-between border-t border-black/10 pt-5 text-sm text-black/50 transition hover:text-black"
              >

                <span>
                  Explore Patrex Media
                </span>

                <ArrowUpRight size={16} />

              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            COMMUNITY CARDS
        ===================================================== */}

        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {/* PEOPLE */}

          <CommunityCard
            icon={<Users size={18} />}
            eyebrow="PEOPLE"
            title="Meet the ecosystem."
            description="Discover the designers, developers, creators and builders connected to Patrex Media."
            action="Meet the community"
          />


          {/* WORK */}

          <CommunityCard
            icon={<Play size={18} />}
            eyebrow="WORK"
            title="See what we're building."
            description="Explore projects, experiments, visual work and digital products created across the ecosystem."
            action="Explore projects"
          />


          {/* CONNECT */}

          <CommunityCard
            icon={<MessageCircle size={18} />}
            eyebrow="CONNECT"
            title="Start a conversation."
            description="Have an idea, collaboration or project? Connect directly with the Patrex Media ecosystem."
            action="Get involved"
          />

        </div>


        {/* =====================================================
            PATREX ECOSYSTEM
        ===================================================== */}

        <div className="mt-24">

          <div className="mb-8">

            <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
              Patrex Ecosystem
            </div>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] md:text-4xl">

              One ecosystem.
              <br />

              <span className="text-black/25">
                Multiple ways to build.
              </span>

            </h2>

          </div>


          {/* ECOSYSTEM GRID */}

          <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-4">

            <EcosystemCard
              number="01"
              title="Design"
              description="Interfaces, systems and experiences."
            />

            <EcosystemCard
              number="02"
              title="Technology"
              description="Web, AI and digital infrastructure."
            />

            <EcosystemCard
              number="03"
              title="Media"
              description="Content, branding and digital storytelling."
            />

            <EcosystemCard
              number="04"
              title="Products"
              description="Ideas transformed into real products."
            />

          </div>

        </div>


        {/* =====================================================
            PATREX COMMUNITY STATEMENT
        ===================================================== */}

        <div className="mt-24 rounded-2xl border border-black/10 bg-[#080808] p-8 text-white md:p-12">

          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">

            <div>

              <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Patrex Media × Design OS
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.045em] md:text-5xl">

                Design is better when
                <br />

                <span className="text-white/30">
                  people build together.
                </span>

              </h2>

            </div>


            <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-semibold text-black transition hover:bg-white/85">

              Join Patrex

              <ArrowUpRight size={15} />

            </button>

          </div>

        </div>


        {/* =====================================================
            SOCIAL
        ===================================================== */}

        <div className="mt-24 border-t border-black/10 pt-10">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
                Follow the ecosystem
              </div>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em]">
                Stay connected with Patrex.
              </h3>

              <p className="mt-2 text-sm text-black/35">
                Follow the work. Watch the experiments. Join the journey.
              </p>

            </div>


            <div className="flex flex-wrap gap-2">

              <SocialButton
                icon={
                  <span className="text-[10px] font-bold">
                    IG
                  </span>
                }
                label="Instagram"
              />

              <SocialButton
                icon={
                  <span className="text-[10px] font-bold">
                    in
                  </span>
                }
                label="LinkedIn"
              />

              <SocialButton
                icon={<ExternalLink size={14} />}
                label="Patrex Media"
              />

            </div>

          </div>

        </div>


        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <div className="mt-28 border-t border-black/10 pt-12">

          <p className="max-w-5xl text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-black/75 sm:text-4xl md:text-5xl lg:text-6xl">

            Not just a community.
            <br />

            <span className="text-black/20">
              An ecosystem for people who build.
            </span>

          </p>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   COMMUNITY CARD
========================================================= */

function CommunityCard({
  icon,
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <div className="group rounded-2xl border border-black/10 bg-[#f7f7f7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-[#f2f2f2]">

      {/* ICON */}

      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-black/45 transition group-hover:text-black">

        {icon}

      </div>


      {/* CONTENT */}

      <div className="mt-10">

        <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/30">
          {eyebrow}
        </div>

        <h3 className="mt-3 text-xl font-medium tracking-[-0.03em]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-black/40">
          {description}
        </p>

      </div>


      {/* ACTION */}

      <button className="mt-8 flex items-center gap-2 text-xs text-black/45 transition group-hover:text-black">

        {action}

        <ArrowUpRight size={14} />

      </button>

    </div>
  );
}


/* =========================================================
   ECOSYSTEM CARD
========================================================= */

function EcosystemCard({
  number,
  title,
  description,
}) {
  return (
    <div className="group min-h-[230px] bg-[#f7f7f7] p-7 transition hover:bg-[#eeeeee]">

      {/* TOP */}

      <div className="flex items-center justify-between">

        <span className="text-[10px] text-black/20">
          {number}
        </span>

        <ArrowUpRight
          size={15}
          className="text-black/20 transition group-hover:text-black"
        />

      </div>


      {/* CONTENT */}

      <div className="mt-20">

        <h3 className="text-lg font-medium tracking-[-0.025em]">
          {title}
        </h3>

        <p className="mt-2 max-w-[200px] text-xs leading-6 text-black/30">
          {description}
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({
  icon,
  label,
}) {
  return (
    <button className="group flex items-center gap-2 rounded-lg border border-black/10 bg-black/[0.02] px-4 py-2.5 text-xs text-black/45 transition hover:border-black/20 hover:bg-black/[0.05] hover:text-black">

      {icon}

      <span>
        {label}
      </span>

      <ArrowUpRight
        size={12}
        className="text-black/20 transition group-hover:text-black"
      />

    </button>
  );
}