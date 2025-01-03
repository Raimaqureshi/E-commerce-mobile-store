import ProductCard from "../../components/ProductCard";

const newestProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "/images/iphone15.jpg"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 899,
    image: "/images/galaxyS23.jpg"
  },
  // Add 6-8 more products
];

export default function NewestProducts() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-8">
        Newest Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
