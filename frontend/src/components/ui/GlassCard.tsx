import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "hero",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-lg
        p-6
        transition-all
        duration-300
        hover:bg-white/20
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}