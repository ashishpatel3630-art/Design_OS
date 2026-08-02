import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonUI({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `
px-6
py-3
rounded-full
font-medium
text-black
bg-["#020A20"]
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
