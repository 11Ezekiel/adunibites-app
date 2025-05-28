"use client";

import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartDropdown from "./CartDropdown";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/menu?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header className="w-full bg-black text-white py-3 px-4 md:py-4 md:px-6 shadow-md fixed z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="MyFoodApp Logo"
            width={28}
            height={28}
            className="w-7 h-7 md:w-10 md:h-10 object-contain"
          />
          <span className="text-base md:text-xl font-bold text-[#f49620] whitespace-nowrap">
            Aduni Bites
          </span>
        </Link>

        {/* Search Input */}
        <form
          onSubmit={handleSearch}
          className="flex-1 max-w-xs sm:max-w-md md:max-w-lg mx-2"
        >
          <input
            type="text"
            placeholder="Search dishes..."
            className="w-full px-3 py-2 text-sm rounded-md border border-[#f49620] bg-transparent placeholder-white text-white focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        {/* Cart and Login */}
        <div className="flex items-center gap-4 shrink-0">
          <CartDropdown />
          <Link href="/login">
            <Button
              variant="ghost"
              className="bg-[#f49620] text-white hover:bg-[#d97e14] px-3 py-2 text-sm"
            >
              <User className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
