"use client";

import { useState } from "react";
import { Sparkles, Moon, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Colors", "Gradients", "Typography", "Components"];

  return (
    <nav className="fixed 
    top-2 
    left-0 
    right-0 
    z-50 
    px-4 
    pt-4 
    pb-2 
    pointer-events-none 
    flex 
    justify-center
    ">
      
      <div className="
      w-full 
      max-w-5xl
      pointer-events-auto 
      rounded-2xl border 
      border-white/10 
      bg-black 
      backdrop-blur-xl 
      px-5 
      py-3 
      shadow-2xl 
      transition-all
      ">
        <div className="
        flex 
        items-center 
        justify-between 
        gap-6
        ">
          
         
          <div className="
          flex 
          items-center 
          gap-3 
          cursor-pointer 
          shrink-0
          ">
            <div className="
            h-10 
            w-10 rounded-xl 
            bg-gradient-to-br from-purple-400 to-blue-600 
            flex items-center 
            justify-center 
            text-white 
            shadow-md">
              <Sparkles size={20} />
            </div>
            <h1 className="
            text-xl 
            font-bold 
            text-white 
            tracking-tight
            ">
              Design OS
            </h1>
          </div>

          
          <div className="
          hidden 
          lg:flex 
          items-center 
          gap-8 text-sm 
          text-gray-300 
          font-medium
          ">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="
                hover:text-white 
                transition-colors 
                duration-200 
                whitespace-nowrap
                "
              >
                {link}
              </a>
            ))}
          </div>

         
          <div className="
          flex 
          items-center 
          gap-3 
          sm:gap-4 
          shrink-0
          ">
           
            <button
              aria-label="Toggle theme"
              className="
              h-10 w-10 
              rounded-xl 
              border border-white/10 
              bg-white/5 
              hover:bg-white/10 
              flex items-center 
              justify-center 
              text-gray-300
               hover:text-white 
               transition-all
               "
            >
              <Moon size={18} />
            </button>

            
            <button className="
            hidden 
            sm:inline-flex 
            items-center 
            justify-center 
            gap-2 
            h-10 
            px-5 
            rounded-xl 
            bg-white 
            hover:bg-gray-100 
            text-slate-950 
            text-sm 
            font-semibold 
            leading-none 
            whitespace-nowrap 
            shadow-sm 
            hover:shadow-md 
            transition-all 
            active:scale-95
            ">
              <span className="
              flex 
              items-center 
              justify-center
              ">
                Explore
                </span>
              <ArrowRight size={16} className="
              text-slate-950 
              shrink-0
              " />
            </button>

            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="
              lg:hidden 
              h-10 
              w-10 
              rounded-xl 
              border border-white/10 
              bg-white/5 hover:bg-white/10 
              flex items-center 
              justify-center
            text-gray-300 
            hover:text-white 
             transition-all"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

       
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-3 text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="
                text-sm 
                font-medium 
                hover:text-white 
                transition-colors 
                py-1.5
                "
              >
                {link}
              </a>
            ))}
            <div className="
            pt-2 
            border-t border-white/10
            ">
              <button className="
              w-full 
              h-11 
              inline-flex 
              items-center 
              justify-center 
              gap-2 
              rounded-xl 
              bg-white 
              text-slate-950 
              font-semibold 
              text-sm 
              leading-none 
              hover:bg-gray-100 
              transition-all
              ">
                <span>Explore</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}