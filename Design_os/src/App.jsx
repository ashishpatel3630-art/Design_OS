import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import DesignTools from "./components/sections/DesignTools";
import Cursor from "./components/ui/Cursor";
import DesignSection from "./components/sections/DesignSection";
import Features from "./components/sections/Features";
import Showcase from "./components/sections/Showcase";
import Testimonials from "./components/sections/Testimonials";
import Footer from "./components/layout/Footer";
function App(){


  return (
    <>
    <Cursor/>
    <Navbar/>
    <Hero/>
    <DesignTools/>
    <DesignSection/>
    <Features/>
    <Showcase/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App;