import ProductCard from "../../components/ProductCard";

const secondHandProducts = [
  {
    id: 1,
    name: "iPhone 12",
    price: 499,
    image: "/images/iphone12.jpg",
    condition: "Good",
    description: "A gently used iPhone 12 in good condition."
  },
  {
    id: 2,
    name: "Samsung Galaxy S20",
    price: 399,
    image: "/images/galaxyS20.jpg",
    condition: "Excellent",
    description: "An excellent condition Samsung Galaxy S20."
  },
  // Add 6-8 more products
];

import { useCart } from "../../context/CartContext";

export default function SecondHandProducts() {
  const { addToCart } = useCart(); // Access the addToCart function
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-8">
        Second Hand Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondHandProducts.map((product) => (
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
