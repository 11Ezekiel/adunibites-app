"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Main Menu",
    image: "/categories/main-menu.jpg",
    link: "/menu/main",
  },
  {
    name: "Finger Food",
    image: "/categories/finger-food.jpg",
    link: "/menu/finger-food",
  },
  {
    name: "Wraps Flavours",
    image: "/categories/wraps.jpg",
    link: "/menu/wraps",
  },
  {
    name: "Wings",
    image: "/categories/wings.jpg",
    link: "/menu/wings",
  },
  {
    name: "Burgers",
    image: "/categories/burger.jpg",
    link: "/menu/burger",
  },
  {
    name: "Soups",
    image: "/categories/soup-menu.jpg",
    link: "/menu/soup",
  },
];

export default function CategoriesSection() {
  return (
    <section className="w-full bg-black px-4 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Explore Our Menu Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <Image
              src={cat.image}
              alt={cat.name}
              width={500}
              height={300}
              className="w-full h-44 sm:h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {cat.name}
              </h3>
              <Link
                href={cat.link}
                className="inline-block mt-2 px-4 py-2 text-sm sm:text-base font-medium bg-[#f49620] text-white rounded hover:bg-[#d97e14] transition"
              >
                View {cat.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
