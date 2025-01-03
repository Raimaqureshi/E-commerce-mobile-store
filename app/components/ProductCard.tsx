interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  condition?: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {product.condition && (
          <p className="text-sm text-gray-500">Condition: {product.condition}</p>
        )}
        <p className="text-xl font-bold mt-2">${product.price}</p>
      </div>
    </div>
  );
}
