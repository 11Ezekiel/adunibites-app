import { notFound } from "next/navigation";
import DishCard from "@/app/components/DishCard";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const res = await fetch("http://localhost:3000/api/dishes", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dishes.");
  }

  const allDishes: Dish[] = await res.json();

  const filteredDishes = allDishes.filter(
    (dish) => dish.category.toLowerCase() === params.category.toLowerCase()
  );

  if (filteredDishes.length === 0) return notFound();

  return (
    <main className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 capitalize text-[#f49620]">
        {params.category.replace("-", " ")} Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </main>
  );
}
