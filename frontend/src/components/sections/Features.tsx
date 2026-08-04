import React from "react";

function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
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
              to-blue-500 
              bg-clip-text 
              text-transparent
            "
            >
              Designer
            </span>{" "}
            Needs
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
            Explore powerful tools that help you create, automate and ship
            beautiful designs faster.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
