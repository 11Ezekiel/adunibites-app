"use client";

import Image from "next/image";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen text-white">
      {/* Background Image */}
      <Image
        src="/hero-image.jpg"
        alt="Delicious food"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-5 bg-black/80" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight flex flex-wrap justify-center items-center">
          <span className="mr-2">Welcome to</span>
          <span className="text-[#f49620] flex">
            {["Aduni", "Bites."].map((word, i) => (
              <span key={i} className="flex ml-1">
                {word.split("").map((char, j) => (
                  <motion.span
                    key={`${word}-${j}`}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (i * 6 + j) * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        </div>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl max-w-md">
          Delicious meals delivered to your door.
        </p>

        <a
          href="#categories"
          className="mt-5 inline-flex items-center px-6 py-3 bg-[#f49620] text-white rounded-lg hover:bg-[#d97e14] transition text-base"
        >
          <Home className="mr-2 w-5 h-5" />
          Order Now
        </a>
      </div>
    </section>
  );
}
