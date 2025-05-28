import DishCard from "@/app/components/DishCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface SearchParams {
  search?: string;
}

export default async function MenuPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const res = await fetch("http://localhost:3000/api/dishes", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dishes.");
  }

  const allDishes: Dish[] = await res.json();
  const searchQuery = searchParams.search?.toLowerCase() || "";

  const filteredDishes = allDishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery)
  );

  return (
    <main className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#f49620]">
        {searchQuery ? `Search Results for "${searchQuery}"` : "All Dishes"}
      </h2>

      {filteredDishes.length === 0 ? (
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-600 ">
            Sorry, no dishes found matching your search.
          </p>
          <Link href="/menu">
            <Button className="bg-[#f49620] hover:bg-[#d97e14] text-white">
              Clear Search
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      )}
    </main>
  );
}
