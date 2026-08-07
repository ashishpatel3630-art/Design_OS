const SectionTitle = ({
  title,
  subtitle,
}) => {
  return (
    <div className="text-center mb-14">

      <h2 className="text-5xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionTitle;