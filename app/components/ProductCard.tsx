import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductCard({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: () => void;
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={300}
        className="w-full rounded"
      />
      <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-lg font-bold mt-2 text-blue-500">${product.price}</p>
      <button
        onClick={addToCart}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
