"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartContext";

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function FeaturedDishes() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await fetch("/api/featured-dishes");
        const data = await res.json();
        setDishes(data);
      } catch (error) {
        console.error("Error fetching featured dishes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDishes();
  }, []);

  if (loading)
    return (
      <p className="text-center  text-sm sm:text-base">
        Loading featured dishes...
      </p>
    );

  return (
    <section className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-10 ">
      <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-[#f49620]">
        Featured Dishes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="border rounded-lg overflow-hidden shadow-md bg-white"
          >
            <Image
              src={dish.image}
              alt={dish.name}
              width={400}
              height={250}
              className="w-full aspect-[4/3] sm:h-48 object-cover"
            />
            <div className="p-3 sm:p-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
                {dish.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-1 sm:mb-2">
                {dish.description}
              </p>
              <p className="text-[#f49620] font-bold text-sm sm:text-base mb-3 sm:mb-4">
                €{dish.price.toFixed(2)}
              </p>
              <Button
                onClick={() =>
                  addToCart({
                    id: dish.id,
                    name: dish.name,
                    price: dish.price,
                    quantity: 1,
                    image: dish.image,
                  })
                }
                className="w-full bg-[#f49620] text-white hover:bg-[#d97e14] text-sm sm:text-base py-2 sm:py-2.5"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
