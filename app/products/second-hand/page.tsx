import ProductCard from "../../components/ProductCard";

const secondHandProducts = [
  {
    id: 1,
    name: "iPhone 12",
    price: 499,
    image: "/images/iphone12.jpg",
    condition: "Good"
  },
  {
    id: 2,
    name: "Samsung Galaxy S20",
    price: 399,
    image: "/images/galaxyS20.jpg",
    condition: "Excellent"
  },
  // Add 6-8 more products
];

export default function SecondHandProducts() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-8">
        Second Hand Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondHandProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
