const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const styles = {
    primary: "bg-black text-white hover:bg-zinc-800",

    secondary: "bg-white border border-zinc-300 text-black hover:bg-zinc-100",
  };

  return (
    <button
      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
