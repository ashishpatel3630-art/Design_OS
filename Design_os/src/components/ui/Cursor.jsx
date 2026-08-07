import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";


const outerSpring = {
  stiffness: 250,
  damping: 25,
  mass: 0.5,
};


const innerSpring = {
  stiffness: 500,
  damping: 30,
  mass: 0.1,
};



export default function Cursor() {


const canvasRef = useRef(null);

const particles = useRef([]);


const previous = useRef({
  x:-100,
  y:-100
});



const [visible,setVisible] = useState(false);
const [hover,setHover] = useState(false);
const [click,setClick] = useState(false);



const mouseX = useMotionValue(-100);
const mouseY = useMotionValue(-100);



const outerX = useSpring(
  mouseX,
  outerSpring
);


const outerY = useSpring(
  mouseY,
  outerSpring
);



const innerX = useSpring(
  mouseX,
  innerSpring
);


const innerY = useSpring(
  mouseY,
  innerSpring
);





/*
 Mouse Tracking
*/

useEffect(()=>{


const move=(e)=>{


setVisible(true);


const x=e.clientX;
const y=e.clientY;


const vx=x-previous.current.x;
const vy=y-previous.current.y;



mouseX.set(x);
mouseY.set(y);



const speed=Math.sqrt(
vx*vx + vy*vy
);



if(speed>2){


const amount=Math.min(
Math.floor(speed/5),
2
);



for(let i=0;i<amount;i++){


particles.current.push({

x:x+(Math.random()-0.5)*10,

y:y+(Math.random()-0.5)*10,


size:
Math.random()*2+1,


vx:
-vx*0.08+
(Math.random()-0.5),


vy:
-vy*0.08+
(Math.random()-0.5),



life:0,


maxLife:
Math.random()*25+25,



color:

Math.random()>0.85

?

"#8B5CF6"

:

"#E5E7EB"

});


}


}



previous.current={
x,
y
};


};




const mouseDown=()=>setClick(true);

const mouseUp=()=>setClick(false);



const hoverCheck=(e)=>{


const target=e.target;


const active =
target.closest(
"button,a,input,.interactive"
);


setHover(Boolean(active));


};



const leave=()=>setVisible(false);



window.addEventListener(
"mousemove",
move
);


window.addEventListener(
"mousedown",
mouseDown
);


window.addEventListener(
"mouseup",
mouseUp
);


window.addEventListener(
"mouseover",
hoverCheck
);


document.addEventListener(
"mouseleave",
leave
);




return()=>{


window.removeEventListener(
"mousemove",
move
);


window.removeEventListener(
"mousedown",
mouseDown
);


window.removeEventListener(
"mouseup",
mouseUp
);


window.removeEventListener(
"mouseover",
hoverCheck
);


document.removeEventListener(
"mouseleave",
leave
);


};


},[]);






/*
 Particle Canvas
*/

useEffect(()=>{


const canvas=canvasRef.current;


if(!canvas)
return;



const ctx=canvas.getContext("2d");



const resize=()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

};



resize();



window.addEventListener(
"resize",
resize
);



let frame;



const animate=()=>{


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.current.forEach(
(p,index)=>{


p.x+=p.vx;

p.y+=p.vy;


p.life++;



const opacity =
1-(p.life/p.maxLife);



if(p.life>=p.maxLife){


particles.current.splice(
index,
1
);


return;

}



ctx.save();



ctx.globalAlpha=opacity;


ctx.fillStyle=p.color;


ctx.shadowColor=p.color;


ctx.shadowBlur=15;



ctx.beginPath();


ctx.arc(
p.x,
p.y,
p.size,
0,
Math.PI*2
);


ctx.fill();


ctx.restore();



}

);



frame=requestAnimationFrame(
animate
);


};



animate();



return()=>{


cancelAnimationFrame(frame);


window.removeEventListener(
"resize",
resize
);


};



},[]);






if(!visible)
return null;



return (

<>



{/* Particle Layer */}

<canvas

ref={canvasRef}

className="
fixed
inset-0
z-[9997]
pointer-events-none
"

/>





{/* White AI Core */}


<motion.div


style={{

x:innerX,

y:innerY,

translateX:"-50%",

translateY:"-50%"

}}



animate={{

scale:

click

?

2

:

hover

?

1.4

:

1

}}



transition={{

type:"spring",

stiffness:500,

damping:25

}}



className="

fixed

top-0

left-0


z-[9999]


pointer-events-none


w-3

h-3


rounded-full


bg-white



shadow-[0_0_20px_rgba(255,255,255,.9),0_0_60px_rgba(139,92,246,.5)]


hidden

md:block

"

/>







{/* Soft AI Hover Glow */}



<motion.div



style={{

x:outerX,

y:outerY,

translateX:"-50%",

translateY:"-50%"

}}



animate={{

opacity:

hover

?

0.7

:

0,


scale:

hover

?

3

:

1

}}



transition={{

duration:.3

}}



className="

fixed

top-0

left-0


z-[9998]


pointer-events-none


w-12

h-12


rounded-full


bg-white/20


blur-xl


hidden

md:block

"

/>



</>

);

}