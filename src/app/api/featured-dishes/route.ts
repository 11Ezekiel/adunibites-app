import { NextResponse } from "next/server";

export async function GET() {
  const featuredDishes = [
    {
      id: 1,
      name: "Jollof Rice & Chicken",
      description: "Tasty jollof rice with grilled chicken.",
      price: 3500,
      image: "/dishes/jollof.jpg",
      category: "main",
    },

    {
      id: 2,
      name: "Pounded Yam & Egusi",
      description: "Delicious pounded yam served with rich egusi soup.",
      price: 4000,
      image: "/dishes/egusi.jpg",
      category: "soup",
    },

    {
      id: 3,
      name: "Fried Plantain Combo",
      description: "Golden fried plantains with spicy sauce and beans.",
      price: 2800,
      image: "/dishes/plantain.jpg",
      category: "finger-food",
    },
    {
      id: 4,
      name: "Chicken wrap",
      description:
        "Crunchy fried chicken fillet, lettuce, juicy tomatoes, and a dollop of creamy mayo wrapped in a warm totilla.",
      price: 2800,
      image: "/dishes/chicken-wrap.jpg",
      category: "wraps",
    },
    {
      id: 5,
      name: "Wings",
      description:
        "Crunchy fried chicken fillet, lettuce, juicy tomatoes, and a dollop of creamy mayo wrapped in a warm totilla.",
      price: 2800,
      image: "/dishes/wings.jpg",
      category: "wings",
    },
    {
      id: 6,
      name: "Burgers",
      description:
        "Crispy, tender chicken, fresh lettuce, creamy mayo, and sweet crunchy onions",
      price: 2800,
      image: "/dishes/burger.jpg",
      category: "burgers",
    },
  ];

  return NextResponse.json(featuredDishes);
}
