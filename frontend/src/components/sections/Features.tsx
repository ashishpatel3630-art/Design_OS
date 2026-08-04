import React from "react";

function FeaturesSection() {

  const features = [
    {
      title: "Color Generator",
      desc: "Generate beautiful color palettes using AI.",
    },
    {
      title: "Typography",
      desc: "Create perfect font combinations instantly.",
    },
    {
      title: "Motion",
      desc: "Design smooth animations and interactions.",
    },
    {
      title: "Shadow Generator",
      desc: "Create realistic modern shadow systems.",
    },
    {
      title: "Gradient Generator",
      desc: "Build stunning gradients for your designs.",
    },
  ];


  return (
    <section className="relative overflow-hidden py-24">


      {/* Background Glow */}
      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        h-96
        w-96
        rounded-full
        bg-purple-500/20
        blur-[120px]
        "
      />


      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-20
        "
      >


        {/* Heading */}

        <div className="text-center mb-16">

          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            text-white
            "
          >

            Everything a{" "}

            <span
              className="
              bg-gradient-to-r
              from-purple-500
              via-blue-500
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              Designer
            </span>

            {" "}Needs

          </h1>



          <p
            className="
            mt-6
            text-lg
            text-gray-400
            max-w-2xl
            mx-auto
            "
          >
            Explore powerful tools that help you create,
            automate and ship beautiful designs faster.
          </p>

        </div>



        {/* Feature Cards */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-6
          "
        >

          {
            features.map((feature,index)=>(

              <div
                key={index}
                className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-6
                hover:-translate-y-3
                transition-all
                duration-500
                "
              >


                <div
                  className="
                  h-12
                  w-12
                  rounded-xl
                  bg-gradient-to-br
                  from-purple-500
                  to-blue-500
                  mb-6
                  "
                />


                <h2
                  className="
                  text-xl
                  font-semibold
                  text-white
                  "
                >
                  {feature.title}
                </h2>


                <p
                  className="
                  mt-3
                  text-sm
                  text-gray-400
                  "
                >
                  {feature.desc}
                </p>


              </div>

            ))
          }

        </div>




        {/* Feature Showcase */}

        <div
          className="
          mt-32
          grid
          lg:grid-cols-2
          gap-12
          items-center
          "
        >


          {/* Left Content */}

          <div>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
              leading-tight
              "
            >
              Design.
              Animate.
              Export.

              <span
                className="
                block
                bg-gradient-to-r
                from-purple-500
                to-blue-500
                bg-clip-text
                text-transparent
                "
              >
                All In One Place.
              </span>

            </h2>


            <p
              className="
              mt-6
              text-gray-400
              text-lg
              "
            >
              Create stunning interfaces, generate assets,
              animate interactions and export production-ready
              designs from one powerful workspace.
            </p>



            <button
              className="
              mt-8
              rounded-full
              bg-white
              px-8
              py-3
              text-black
              font-semibold
              hover:scale-105
              transition
              "
            >
              Explore Tools
            </button>


          </div>





          {/* Right Image Preview */}


          <div
            className="
            relative
            h-[420px]
            rounded-3xl
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-xl
            overflow-hidden
            "
          >

            <div
              className="
              absolute
              inset-8
              rounded-2xl
              bg-gradient-to-br
              from-purple-500/20
              to-blue-500/20
              "
            />


            <div
              className="
              relative
              z-10
              flex
              items-center
              justify-center
              h-full
              text-gray-500
              "
            >
              Design Dashboard Preview
            </div>


          </div>


        </div>


      </div>

    </section>
  );
}


export default FeaturesSection;