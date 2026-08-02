import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `
px-6
py-3
rounded-full
font-medium
text-white
bg-gradient-to-r
from-purple-500
to-cyan-500
transition-all
duration-300
hover:scale-105
hover:shadow-lg
`,
        className,
      )}
    >
      {children}
    </button>
  );
}
