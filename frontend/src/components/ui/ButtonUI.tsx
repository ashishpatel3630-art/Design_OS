"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
}

export default function ButtonUI({
  text,
  variant = "primary",
}: ButtonProps) {

return (
<motion.button
  type="button"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}

 className={`
group relative overflow-hidden

flex items-center justify-center gap-4

px-12 py-6

rounded-full

font-bold
text-3xl

mt-10

transition-all duration-300

${
  variant === "primary"
    ? `
      bg-gradient-to-r
      from-violet-600
      via-purple-600
      to-blue-600

      text-white

      shadow-[0_0_50px_rgba(139,92,246,0.6)]
    `
    : `
      bg-white/10
      backdrop-filter
      backdrop-blur-xl
      border border-white/20
      text-white
    `
}
`}
>


{/* Shine Effect */}
<span
className="
absolute inset-0
bg-gradient-to-r
from-transparent
via-white/40
to-transparent

-translate-x-full
group-hover:translate-x-full

transition-transform
duration-700
"
/>


{/* Spark Icon */}
<Sparkles
size={24}
className="
relative z-10
group-hover:rotate-12
transition-transform
"
/>


{/* Text */}
<span className="relative z-10">
{text}
</span>


{/* Arrow */}
<ArrowRight
size={24}
className="
relative z-10
group-hover:translate-x-2
transition-transform
"
/>


</motion.button>
);
}