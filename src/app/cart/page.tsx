"use client";

import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600">
          Start adding delicious meals to your cart.
        </p>
      </div>
    );
  }

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-8 text-[#f49620]">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
              <Image
                src={item.image || "/placeholder.jpg"}
                alt={item.name}
                width={80}
                height={80}
                className="object-cover rounded w-20 h-20"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  €{item.price.toFixed(2)}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right flex flex-col gap-2">
              <p className="font-semibold">
                €{(item.price * item.quantity).toFixed(2)}
              </p>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-10">
        <h2 className="text-xl font-bold mb-2">
          Subtotal: €{total.toFixed(2)}
        </h2>
        <Button
          onClick={handleCheckout}
          className="bg-[#f49620] hover:bg-[#d97e14] text-white px-6 w-full sm:w-auto"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
