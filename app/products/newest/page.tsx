import ProductCard from "../../components/ProductCard";

const newestProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "/images/iphone15.jpg",
    description: "The latest iPhone with advanced features."
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 899,
    image: "/images/galaxyS23.jpg",
    description: "The newest Galaxy phone with cutting-edge technology."
  },
  {
    id: 3,
    name: "Google Pixel 7",
    price: 799,
    image: "/images/pixel7.jpg",
    description: "A smartphone with an exceptional camera."
  },
  {
    id: 4,
    name: "OnePlus 11",
    price: 749,
    image: "/images/oneplus11.jpg",
    description: "A flagship phone with fast performance."
  },
  {
    id: 5,
    name: "Xiaomi 13 Pro",
    price: 699,
    image: "/images/xiaomi13pro.jpg",
    description: "A powerful phone with great value."
  },
  {
    id: 6,
    name: "Sony Xperia 1 IV",
    price: 999,
    image: "/images/xperia1iv.jpg",
    description: "A premium phone with a 4K display."
  },
  {
    id: 7,
    name: "Nokia G50",
    price: 299,
    image: "/images/nokiaG50.jpg",
    description: "An affordable smartphone with 5G support."
  },
  {
    id: 8,
    name: "Motorola Edge 30",
    price: 499,
    image: "/images/edge30.jpg",
    description: "A stylish phone with a high refresh rate display."
  },
];

import { useCart } from "../../context/CartContext";

export default function NewestProducts() {
  const { addToCart } = useCart(); // Access the addToCart function
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-8">
        Newest Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newestProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)} // Pass the addToCart function
          />
        ))}
      </div>
    </main>
  );
}
