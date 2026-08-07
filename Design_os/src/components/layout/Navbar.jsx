import React from "react";
import { motion } from "framer-motion";
{["Home","Products","Explore"].map((item,index)=>(
<motion.li
key={item}
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
transition={{
 delay:index*0.15
}}
className="
cursor-pointer
text-gray-400
hover:text-white
transition
relative
group
"
>

{item}

<span className="
absolute
left-0
-bottom-1
h-[2px]
w-0
bg-yellow-400
transition-all
group-hover:w-full
">
</span>

</motion.li>
))}
function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="absolute inset-0 bg-black/50 backdrop-blur-2xl border-b border-white/10"></div>

      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-[500px] rounded-full bg-yellow-400/10 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <h1 className="text-3xl font-bold tracking-tight">
          <span className="text-white">Design</span>
          <span className="bg-gradient-to-r from-gray-500 via-gray-300 to-gray-600 bg-clip-text text-transparent">
            OS
          </span>
        </h1>

        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8 text-gray-400 font-medium">
            {["Home", "Products", "Explore"].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition-all duration-300 hover:text-white"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl hover:border-white/20 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-40"
            />

            <kbd className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[10px] text-gray-500">
              ⌘ K
            </kbd>
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-gray-200 backdrop-blur-lg transition hover:bg-white/10">
            Login
          </button>

          <button className="rounded-full border border-white/10 bg-white px-6 py-2 font-semibold text-black transition hover:bg-gray-200">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
