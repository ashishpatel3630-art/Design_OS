// import React from "react";
// import { motion } from "framer-motion";
// import {
//   SiFigma,
//   SiAdobe,
//   SiStripe,
//   SiLinear,
//   SiFramer,
//   SiOpenai,
// } from "react-icons/si";

// const tools = [
//   {
//     name: "Figma",
//     desc: "Design systems & prototypes",
//     icon: SiFigma,
//   },
//   {
//     name: "Adobe",
//     desc: "Creative assets & visuals",
//     icon: SiAdobe,
//   },
//   {
//     name: "Stripe",
//     desc: "Beautiful SaaS experiences",
//     icon: SiStripe,
//   },
//   {
//     name: "Linear",
//     desc: "Fast product workflows",
//     icon: SiLinear,
//   },
//   {
//     name: "Framer Motion",
//     desc: "Advanced animations",
//     icon: SiFramer,
//   },
//   {
//     name: "AI Engine",
//     desc: "Intelligent design generation",
//     icon: SiOpenai,
//   },
// ];

// const cards = [...tools, ...tools];

// export default function DesignScroll() {
//   return (
//     <section className="relative py-32 bg-[#030303] overflow-hidden">
//       {/* Glow */}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[180px]" />

//       <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
//         {/* LEFT */}
//         <div>
//           <p className="uppercase tracking-[0.3em] text-sm text-purple-400">
//             DESIGN ECOSYSTEM
//           </p>

//           <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight">
//             One Universe.
//             <br />
//             <span className="bg-gradient-to-r from-white via-purple-300 to-blue-400 bg-clip-text text-transparent">
//               Every Tool.
//             </span>
//           </h2>

//           <p className="mt-8 text-lg text-gray-400 max-w-lg leading-8">
//             Design OS connects creativity, AI, animation, prototyping,
//             collaboration and development into one futuristic workspace.
//           </p>

//           <div className="mt-10 flex gap-4">
//             <button className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
//               Explore
//             </button>

//             <button className="px-7 py-3 rounded-full border border-white/15 text-white hover:border-purple-400 hover:text-purple-300 transition">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="relative h-[620px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
//           {/* Top Fade */}
//           <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030303] to-transparent z-20" />

//           {/* Bottom Fade */}
//           <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent z-20" />

//           <motion.div
//             animate={{
//               y: ["0%", "-50%"],
//             }}
//             transition={{
//               duration: 22,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//             className="flex flex-col gap-5 p-6"
//           >
//             {cards.map((tool, index) => {
//               const Icon = tool.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   whileHover={{
//                     scale: 1.04,
//                     x: -8,
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 220,
//                   }}
//                   className="group h-28 rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-xl px-6 flex items-center gap-5 hover:bg-white/[0.08] hover:border-purple-500/30 transition-all"
//                 >
//                   {/* Icon */}
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition">
//                     <Icon className="text-3xl text-white" />
//                   </div>

//                   {/* Text */}
//                   <div className="flex-1">
//                     <h3 className="text-xl font-semibold text-white">
//                       {tool.name}
//                     </h3>

//                     <p className="text-gray-400 mt-1">{tool.desc}</p>
//                   </div>

//                   {/* Status */}
//                   <div className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_15px_#22c55e]" />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
