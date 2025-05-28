import Image from "next/image";

const services = [
  {
    title: "Take-away & Collection",
    image: "/services/takeaway.jpg",
  },
  {
    title: "Catering for Events",
    image: "/services/catering.jpg",
  },
  {
    title: "Premium Private Dining",
    image: "/services/private-dining.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Product & Services at a Glance
        </h2>

        {/* Mobile: Horizontal scroll. Desktop: Grid */}
        <div className="grid-cols-1 md:grid md:grid-cols-3 gap-8 overflow-x-auto flex md:flex-none space-x-4 md:space-x-0 no-scrollbar">
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-0 bg-[#f49620] p-4 rounded-lg text-center shadow-lg flex-shrink-0"
            >
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
