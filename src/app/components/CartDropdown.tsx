"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartDropdown() {
  const { cart, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleViewCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    router.push("/cart");
  };

  const handleCheckout = () => {
    setOpen(false);
    router.push("/checkout");
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-transparent focus-visible:ring-0"
        >
          <ShoppingCart className="w-7 h-7 text-[#f49620]" />
          {cart.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[90vw] max-w-xs sm:w-80 p-4"
        align="end"
        sideOffset={8}
      >
        <h4 className="text-lg font-semibold mb-2">Cart Preview</h4>
        <Separator />

        {cart.length === 0 ? (
          <p className="text-sm text-gray-500 mt-4">Your cart is empty</p>
        ) : (
          <>
            <ScrollArea className="h-60">
              <div className="space-y-4 py-2 pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <Image
                      src={item.image || "/placeholder.jpg"}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {item.quantity} × €{item.price}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ✕
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <Separator className="my-3" />
            <div className="flex justify-between items-center text-sm font-medium">
              <span>Total:</span>
              <span>€{total.toFixed(2)}</span>
            </div>

            <div className="mt-4 flex justify-between gap-2">
              <button
                onClick={handleViewCart}
                className="text-sm text-[#f49620] hover:underline"
              >
                View Cart
              </button>
              <Button
                size="sm"
                className="bg-[#f49620] text-white hover:bg-[#d97e14]"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
