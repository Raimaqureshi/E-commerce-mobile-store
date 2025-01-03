import ProductCard from "../../components/ProductCard";

const listingProducts = [
  {
    id: 1,
    name: "Google Pixel 7",
    price: 599,
    image: "/images/pixel7.jpg"
  },
  {
    id: 2,
    name: "OnePlus 10 Pro",
    price: 699,
    image: "/images/oneplus10.jpg"
  },
  // Add 6-8 more products
];

export default function ListingProducts() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-8">
        Listing Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
