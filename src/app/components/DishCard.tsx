"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function DishCard({ dish }: { dish: Dish }) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent card navigation
    addToCart({ ...dish, quantity: 1 });
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col">
      {/* Wrap top section with Link */}
      <Link href={`/menu/${dish.category.toLowerCase()}/${dish.id}`}>
        <div>
          <Image
            src={dish.image}
            alt={dish.name}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">{dish.name}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
              {dish.description}
            </p>
            <p className="text-lg font-bold text-[#f49620]">€{dish.price}</p>
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4 mt-auto">
        <button
          onClick={handleAdd}
          className="w-full bg-[#f49620] hover:bg-[#d87f10] text-white font-medium py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
