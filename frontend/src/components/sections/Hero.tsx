import ButtonUI from "@/components/ui/Button";

function Hero() {
  return (
    <div>
      <div className="">
        <div className="">
          <div
            className="
            h-10
            w-fit 
            px-4 
            rounded-4xl 
            border 
            border-blue-500 
            text-sm 
            font-medium 
            text-purple-400
            "
          >
            <p>The Future of Creative Design</p>
          </div>
          <div
            className="
            w-300
            h-fit
            
            "
          >
            <h1 className="text-8xl font-bold text-black">
              CREATE COLORS
              <br></br>
              TYPOGRAPHY &<br></br>
              MOTION LIKE
              <br></br>
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 to-red-500 
           bg-clip-text 
           text-transparent
           "
              >
                {" "}
                NEVER BEFORE
              </span>
            </h1>
            <p>
              Design OS is a design system platform that helps you create
              beautiful and consistent user interfaces. It provides a set of
              tools and components that make it easy to build and maintain your
              design system.
            </p>
          </div>
          <ButtonUI>
            Get Started
          </ButtonUI>
        </div>
    
      </div>
    </div>
  );
}

export default Hero;
