import "./globals.css";
import { ReactNode } from "react";
import Header from "@/app/components/Header";
import { CartProvider } from "@/context/cartContext";
import Hero from "./components/Hero";

export const metadata = {
  title: "My Food App",
  description: "Order delicious meals easily!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans scroll-smooth">
        <CartProvider>
          <Header />
          <Hero />
          <main className="max-w-6xl mx-auto px-4 pt-20 pb-6">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
