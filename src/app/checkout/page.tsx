"use client";

import { useCart } from "@/context/cartContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    if (!name || !address || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Order placed successfully!");
    clearCart();
    router.push("/thank-you");
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6">
      <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">
        Checkout
      </h1>

      {/* User Input Fields */}
      <div className="space-y-4 mb-8">
        <Input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
        <Input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full"
        />
        <Input
          placeholder="Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full"
        />
      </div>

      <Separator className="mb-4" />

      {/* Order Summary */}
      <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
      <div className="space-y-2 text-sm">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between flex-wrap">
            <span className="max-w-[60%]">
              {item.quantity} × {item.name}
            </span>
            <span className="text-right w-full sm:w-auto sm:text-left">
              €{(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <Separator className="my-2" />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>€{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        className="mt-6 bg-[#f49620] text-white hover:bg-[#d97e14] w-full"
        onClick={handleSubmit}
      >
        Place Order
      </Button>
    </div>
  );
}
