import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";

const listingProducts = [
  {
    id: 1,
    name: "Headphone",
    price: 159,
    image: "/images/headphone.webp",
    description: "High-quality headphones with noise-canceling technology.",
  },
  {
    id: 2,
    name: "EarBuds",
    price: 99,
    image: "/images/listen1.webp",
    description: "Compact and powerful earbuds with deep bass.",
  },
  {
    id: 3,
    name: "Handfree",
    price: 69,
    image: "/images/listen2.jpg",
    description: "Lightweight handfree with crystal clear sound quality.",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 199,
    image: "/images/speaker.jpg",
    description: "Portable speaker with rich sound and long battery life.",
  },
  {
    id: 5,
    name: "Smartwatch",
    price: 249,
    image: "/images/watch.jpg",
    description: "Smartwatch with fitness tracking and notifications.",
  },
  {
    id: 6,
    name: "Wireless Charger",
    price: 49,
    image: "/images/charger.jpg",
    description: "Fast and efficient wireless charging pad.",
  },
];

export default function ListingProducts() {
  const { addToCart } = useCart(); // Hook for cart management

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-8">
        Listing Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listingProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </main>
  );
}
