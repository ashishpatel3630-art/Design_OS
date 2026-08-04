import Navbar from "../navbar/Navbar";
import ButtonUI from "../ui/ButtonUI";
import FeaturesSection from "./Features";
function Hero() {
  return (
    <>
      <Navbar />

      <section className="bg-linear-to-b from-[#75a3ff] via-[#cc87d8] to-[#f5b1f9] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-neutral-300 bg-white shadow-sm text-2xl font-semibold tracking-wide">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <p className="text-sm font-medium tracking-wide text-neutral-600">
              The Future Of Creative Design
            </p>
          </div>

          
          <h1 className="mt-10 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-amber-50">
            Create
            <br />
            <span className="bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
              Colors, Typography
            </span>
            <br />& Motion
          </h1>

          
          <p className="mx-20 max-w-3xl  gap-44 text-lg md:text-xl leading-8 text-neutral-300">
            Design OS is your all-in-one creative operating system for designersc
            and developers. Generate color systems, typography, gradients,
            animations, design tokens, and much more—all from one premium
            workspace.
          </p>

         
          <div className="mt-20 flex justify-center gap-6 flex-wrap">
            <ButtonUI text="Get Started" variant="primary" />
          <ButtonUI text="Live Demo" variant="secondary" />

          </div>
          
          <div className="mt-20 flex justify-center gap-32 flex-wrap">
            <div>
              <h2 className="text-4xl font-bold text-amber-50">100K+</h2>
              <p className="text-neutral-500 mt-2">Designers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-amber-50">500+</h2>
              <p className="text-neutral-500 mt-2">Components</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-amber-50">20+</h2>
              <p className="text-neutral-500 mt-2">Creative Tools</p>
            </div>

          </div>
          
        </div>
      </section>
       <div className="mt-20 flex justify-center gap-32 flex-wrap h-100vh bg-black">
            <FeaturesSection/>
          </div>
    </>
  );
}

export default Hero;
