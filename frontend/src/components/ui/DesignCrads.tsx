import Image from "next/image";

const cards = [
  {
    id: 1,
    image: "https://picsum.photos/600/400?random=1",
    title: "Color Generator",
    description: "Generate unlimited beautiful color palettes in seconds.",
  },
  {
    id: 2,
    image: "https://picsum.photos/600/400?random=2",
    title: "Font Pairing",
    description: "Discover perfect font combinations for your next project.",
  },
  {
    id: 3,
    image: "https://picsum.photos/600/400?random=3",
    title: "Gradient Maker",
    description: "Create stunning gradients with live preview.",
  },
  {
    id: 4,
    image: "https://picsum.photos/600/400?random=4",
    title: "Icon Library",
    description: "Explore thousands of modern and customizable icons.",
  },
  {
    id: 5,
    image: "https://picsum.photos/600/400?random=5",
    title: "Mockup Tool",
    description: "Showcase your designs with premium mockups.",
  },
];

export default function DesignCards() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-hide sm:gap-6 lg:grid lg:grid-cols-3 lg:overflow-visible">
        {cards.map((card) => (
          <article
            key={card.id}
            className="group min-w-[280px] max-w-[320px] rounded-3xl border border-white/10 bg-[#111111] shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] sm:min-w-[300px] lg:min-w-0"
          >
            <div className="relative overflow-hidden rounded-t-3xl">
              <Image
                src={card.image}
                alt={card.title}
                width={600}
                height={400}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                unoptimized
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}