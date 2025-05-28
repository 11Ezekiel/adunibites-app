import { notFound } from "next/navigation";
import Image from "next/image";
import AddToCartButton from "@/app/components/AddToCartButton";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default async function DishDetailPage({
  params,
}: {
  params: { category: string; id: string };
}) {
  const res = await fetch("http://localhost:3000/api/dishes", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch dishes.");
  }

  const allDishes: Dish[] = await res.json();
  const dish = allDishes.find((d) => d.id === Number(params.id));

  if (!dish) return notFound();

  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Image
          src={dish.image}
          alt={dish.name}
          width={600}
          height={400}
          className="rounded-lg w-full h-auto object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold text-[#f49620]">{dish.name}</h1>
          <p className="mt-4 text-gray-700">{dish.description}</p>
          <p className="mt-4 font-bold text-xl">€{dish.price}</p>

          <AddToCartButton
            id={dish.id}
            name={dish.name}
            price={dish.price}
            image={dish.image}
          />
        </div>
      </div>
    </main>
  );
}
