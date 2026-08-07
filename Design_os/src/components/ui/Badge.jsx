import { motion } from "framer-motion";
const Badge = ({children})=>{
return(
<motion.div
animate={{
boxShadow:[
"0 0 0px rgba(234,179,8,0)",
"0 0 25px rgba(234,179,8,0.3)",
"0 0 0px rgba(234,179,8,0)"
]
}}
transition={{
duration:3,
repeat:Infinity
}}
className="
inline-flex
items-center
rounded-full
border
border-yellow-400/20
bg-white/5
backdrop-blur-xl
text-white
px-5
py-2
text-sm
"
>
{children}
</motion.div>
)
}

export default Badge;