"use client";

import { useCart } from "@/context/cartContext"; // update the path if different
import { useState } from "react";

type Props = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

export default function AddToCartButton({ id, name, price, image }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // reset after 2s
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-6 px-6 py-2 rounded transition text-white ${
        added ? "bg-green-600" : "bg-[#f49620] hover:bg-orange-600"
      }`}
    >
      {added ? "Added!" : "Add to Cart"}
    </button>
  );
}
