import DesignCards from "./DesignerSection";
function DesignerSection() {
  return (
    <div>
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-20
          py-20
          flex
          flex-col
          gap-4
        "
      >
        <h1 className="text-4xl font-bold text-center mb-4">
        Everthing a <span className="bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Designer</span> Needs
      </h1>
      <h3 className="text-lg text-gray-600 text-center">
        Explore powerful tools that help you create , automate and ship beautiful designs faster
      </h3>
      </div>
      <DesignCards/>
    </div>
  )
}

export default DesignerSection
