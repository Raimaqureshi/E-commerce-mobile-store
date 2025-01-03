"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "../context/CartContext"; 
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "realme 13+ 5g",
    price: 100,
    images: [
      "/images/gold.png",
      "/images/purple.jpg",
    ],
    colors: ["Tan", "Purple"],
  },
  {
    id: 2,
    name: "Vivo X90 Pro",
    price: 200,
    images: [
      "/images/vivo black.jpg",
      "/images/vivored.jpg",
      "/images/vivo x90.png",
    ],
    colors: ["Black", "Red" , "Blue"],
  },
  {
    id: 3,
    name: "Vivo Y25 5G",
    price: 300,
    images: [
      "/images/vivo yellow.png",
      "/images/vivo1 black.jpg",
      "/images/vivo blue.png"
    ],
    colors: ["Yellow", "Black" , "Blue"],
  },
];

const ShopPage = () => {
  const { cart, addToCart } = useCart(); 
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleColorSelect = (productId: number, color: string) => {
    const product = products.find((prod) => prod.id === productId);
    if (product) {
      const colorIndex = product.colors.indexOf(color);
      setSelectedImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[productId] = product.images[colorIndex];
        return newImages;
      });
    }
  };

  const handleAddToCart = (product: { id: number; name: string; price: number }) => {
    addToCart(product); 
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Shop Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>

            <div className="mt-4">
              <Image
                src={selectedImages[product.id] || product.images[0]} 
                alt={product.name}
                width={200}
                height={200}
                className="w-full rounded"
              />
            </div>

            <div className="flex mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full mr-2 border-2 border-white`}
                  title={color}
                  onClick={() => handleColorSelect(product.id, color)}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>

            <button
              onClick={() => handleAddToCart(product)} 
              className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>

           
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full">
        <Link href="/cart" className="text-xl">
          🛒 {cart.length}
        </Link>
      </div>
    </div>
  );
};

export default ShopPage;
