export default function Badge({

children

}:{

children:React.ReactNode;

}){


return (

<span

className="
px-4
py-1
rounded-full
text-sm
bg-white/10
border
border-white/20
backdrop-blur-md
"

>

{children}

</span>

)

}