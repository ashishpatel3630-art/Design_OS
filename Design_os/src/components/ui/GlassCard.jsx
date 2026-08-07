const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;