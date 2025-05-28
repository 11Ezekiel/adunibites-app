import { NextResponse } from "next/server";

// Sample data - replace with your actual dishes data source
const allDishes = [
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
    name: "Fried Rice & Chicken",
    description: "Tasty Fried rice with grilled chicken.",
    price: 3500,
    image: "/dishes/fried-rice.jpg",
    category: "main",
  },
  {
    id: 3,
    name: "Rice and peas",
    description: "exclusive rice and peas.",
    price: 3500,
    image: "/dishes/rice-and-peas.jpg",
    category: "main",
  },
  {
    id: 4,
    name: "Pounded Yam & Egusi",
    description: "Delicious pounded yam served with rich egusi soup.",
    price: 4000,
    image: "/dishes/egusi.jpg",
    category: "soup",
  },
  {
    id: 5,
    name: "Efo riro and Pounded yam",
    description: "Delicious pounded yam served with rich efo riro soup.",
    price: 4000,
    image: "/dishes/efo-riro.jpg",
    category: "soup",
  },
  {
    id: 6,
    name: "Red stew",
    description: "mouth watering red stew with beef.",
    price: 2500,
    image: "/dishes/red-stew.jpg",
    category: "soup",
  },
  {
    id: 7,
    name: "Fried Plantain Combo",
    description: "Golden fried plantains with spicy sauce and beans.",
    price: 2800,
    image: "/dishes/plantain.jpg",
    category: "finger-food",
  },
  {
    id: 8,
    name: "Gizzdodo",
    description: "Golden Gizzdodo.",
    price: 3200,
    image: "/dishes/gizzdodo.jpg",
    category: "finger-food",
  },
  {
    id: 9,
    name: "Kelewele",
    description: "Delicious Kelewele just for you.",
    price: 3200,
    image: "/dishes/kelewele.jpg",
    category: "finger-food",
  },
  {
    id: 10,
    name: "Chicken wrap",
    description:
      "Crunchy fried chicken fillet, lettuce, juicy tomatoes, and a dollop of creamy mayo wrapped in a warm totilla.",
    price: 2800,
    image: "/dishes/chicken-wrap.jpg",
    category: "wraps",
  },
  {
    id: 11,
    name: "Shawarma",
    description:
      "Crunchy fried chicken fillet, lettuce, juicy tomatoes, and a dollop of creamy mayo wrapped in a warm totilla.",
    price: 2800,
    image: "/dishes/shawarma.jpg",
    category: "wraps",
  },
  {
    id: 12,
    name: "Suya wrap",
    description:
      "Crunchy fried chicken fillet, lettuce, juicy tomatoes, and a dollop of creamy mayo wrapped in a warm totilla.",
    price: 2800,
    image: "/dishes/suya-wrap.jpg",
    category: "wraps",
  },
  {
    id: 13,
    name: "Wings",
    description:
      "Crunchy fried chicken fillet, lettuce, juicy tomatoes, and a dollop of creamy mayo wrapped in a warm totilla.",
    price: 2800,
    image: "/dishes/wings.jpg",
    category: "wings",
  },
  {
    id: 14,
    name: "Fries",
    description:
      "Crunchy fried chicken fillet, lettuce, juicy tomatoes, and a dollop of creamy mayo wrapped in a warm totilla.",
    price: 2800,
    image: "/dishes/fries.jpg",
    category: "wings",
  },
  {
    id: 15,
    name: "Cheese fries",
    description:
      "Crunchy fried chicken fillet, lettuce, juicy tomatoes, and a dollop of creamy mayo wrapped in a warm totilla.",
    price: 2800,
    image: "/dishes/cheese-fries.jpg",
    category: "wings",
  },
  {
    id: 16,
    name: "Burgers",
    description:
      "Crispy, tender chicken, fresh lettuce, creamy mayo, and sweet crunchy onions",
    price: 2800,
    image: "/dishes/burger.jpg",
    category: "burger",
  },
  {
    id: 17,
    name: "Beef Burger",
    description:
      "Crispy, tender chicken, fresh lettuce, creamy mayo, and sweet crunchy onions",
    price: 2800,
    image: "/dishes/beef-burger.jpg",
    category: "burger",
  },
  {
    id: 18,
    name: "Cheese Burgers",
    description:
      "Crispy, tender chicken, fresh lettuce, creamy mayo, and sweet crunchy onions",
    price: 2800,
    image: "/dishes/cheese-burger.jpg",
    category: "burger",
  },
  // ... add more dishes
];

export async function GET() {
  return NextResponse.json(allDishes);
}
