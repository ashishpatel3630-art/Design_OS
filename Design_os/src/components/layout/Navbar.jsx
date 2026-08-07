import React from "react";
import { motion } from "framer-motion";


const navItems = [
  "Home",
  "Products",
  "Explore"
];


export default function Navbar() {


return (

<header
className="
fixed
top-0
left-0
right-0
z-50
h-20
"
>


{/* Glass Background */}

<div
className="
absolute
inset-0

bg-black/60

backdrop-blur-2xl

border-b

border-white/10
"
/>



{/* AI Ambient Glow */}

<div

className="
absolute

-top-20

left-1/2

-translate-x-1/2


h-40

w-[500px]


rounded-full


bg-purple-500/10


blur-[120px]

"
/>





<div

className="
relative

max-w-7xl

mx-auto

h-20

px-8

flex

items-center

justify-between

"

>





{/* LOGO */}

<motion.div

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:.6
}}

className="
text-3xl
font-bold
tracking-tight
cursor-pointer
interactive
"

>


<span className="text-white">

Design

</span>


<span

className="
bg-gradient-to-r

from-white

via-gray-300

to-gray-600

bg-clip-text

text-transparent
"

>

OS

</span>


</motion.div>








{/* NAV LINKS */}


<nav>

<ul

className="
flex

items-center

gap-8

text-gray-400

font-medium

"

>


{
navItems.map((item,index)=>(


<motion.li


key={item}


initial={{

opacity:0,

y:-20

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:index*0.15

}}



className="
group

relative

cursor-pointer

interactive

py-2

"

>


<span

className="
relative

z-10

transition-all

duration-300

group-hover:text-white

"

>

{item}

</span>





{/* Silver Line */}


<span

className="
absolute

left-0

bottom-0


h-[2px]


w-full


origin-left


scale-x-0


bg-gradient-to-r

from-transparent

via-white

to-transparent


transition-transform

duration-300


group-hover:scale-x-100

"

/>






{/* AI Glow */}


<span

className="
absolute

inset-0


rounded-lg


bg-white/10


opacity-0


blur-xl


transition-opacity


duration-300


group-hover:opacity-100

"

/>



</motion.li>


))

}


</ul>


</nav>









{/* SEARCH */}



<motion.div


initial={{

opacity:0,

y:-20

}}



animate={{

opacity:1,

y:0

}}



transition={{

delay:.4

}}



className="

group

flex

items-center

gap-3


rounded-xl


border

border-white/10


bg-white/5


px-4


py-2


backdrop-blur-xl


transition-all


hover:border-white/30


hover:shadow-[0_0_30px_rgba(255,255,255,.12)]

"

>



<svg

xmlns="http://www.w3.org/2000/svg"

className="
h-4
w-4
text-gray-500
group-hover:text-white
transition
"

fill="none"

viewBox="0 0 24 24"

stroke="currentColor"

>


<path

strokeLinecap="round"

strokeLinejoin="round"

strokeWidth={2}

d="
M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z
"

/>


</svg>




<input

type="text"

placeholder="Search..."

className="
bg-transparent

outline-none

text-sm

text-white

placeholder-gray-500

w-32

"

/>



<kbd

className="
rounded-md

border

border-white/10

bg-black/40

px-2

py-1

text-[10px]

text-gray-500

"

>

⌘ K

</kbd>



</motion.div>









{/* BUTTONS */}


<div

className="
flex
items-center
gap-3

"

>


{/* Login */}


<button

className="
interactive

rounded-full


border

border-white/10


bg-white/5


px-6


py-2


text-gray-200


backdrop-blur-xl


transition-all


hover:bg-white/10


hover:border-white/30


hover:scale-105


"

>

Login

</button>








{/* Register */}


<button


className="
interactive

group

relative

overflow-hidden


rounded-full


bg-white


px-6


py-2


font-semibold


text-black


transition-all


hover:scale-105

"


>


<span

className="
relative

z-10

group-hover:text-white

transition

"

>

Register

</span>




<div

className="
absolute

inset-0


translate-y-full


bg-gradient-to-r

from-purple-500

to-gray-900


transition-transform


duration-300


group-hover:translate-y-0

"

/>


</button>



</div>





</div>


</header>

);

}