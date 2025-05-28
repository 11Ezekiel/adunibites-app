import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ada O.",
      text: "Aduni Bites exceeded my expectations! The food was fresh and flavorful. Highly recommended!",
      image: "/users/user1.jpg",
    },
    {
      name: "Chuka K.",
      text: "Fast delivery and amazing taste. I’ll definitely order again.",
      image: "/users/user2.jpg",
    },
    {
      name: "Ifeoma A.",
      text: "Everything was perfect – the packaging, the portions, and the price.",
      image: "/users/user3.jpg",
    },
  ];

  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10">
          What Our Customers Say
        </h2>

        {/* Mobile: scrollable | Desktop: grid */}
        <div className="grid-cols-1 md:grid md:grid-cols-3 gap-8 flex md:flex-none overflow-x-auto space-x-4 md:space-x-0 no-scrollbar">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-0 bg-[#f49620] p-6 rounded shadow-md text-left flex-shrink-0"
            >
              <p className="text-white italic mb-4">“{t.text}”</p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border"
                />
                <span className="font-semibold text-white">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
