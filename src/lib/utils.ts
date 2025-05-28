import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getDishesByCategory(category: string) {
  const res = await fetch(
    `https://your-api-url.com/dishes?category=${category}`
  );
  if (!res.ok) return [];
  return res.json();
}
