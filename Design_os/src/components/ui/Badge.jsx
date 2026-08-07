import { motion } from "framer-motion";

export default function Badge() {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      className="
flex
items-center
gap-3
px-5
py-2
rounded-full
border
border-white/10
bg-white/[0.05]
backdrop-blur-xl
text-sm
text-gray-300
shadow-[0_0_40px_rgba(255,255,255,0.08)]
"
    >
      <span
        className="
w-2
h-2
rounded-full
bg-[#fff]
animate-pulse
"
      />
      AI Design Intelligence
    </motion.div>
  );
}
