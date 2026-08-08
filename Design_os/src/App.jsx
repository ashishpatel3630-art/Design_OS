import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import DesignTools from "./components/sections/DesignTools";
import Cursor from "./components/ui/Cursor";
import DesignSection from "./components/sections/DesignSection";
import Features from "./components/sections/Features";

function App(){

  return (
    <>
    <Cursor/>
    <Navbar/>
    <Hero/>
    <DesignTools/>
    <DesignSection/>
    <Features/>
    
    </>
  )
}

export default App;