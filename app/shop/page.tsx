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
      "https://static2.realme.net/images/realme-13-plus-5g/specs/m/gold.png",
      "https://static2.realme.net/images/realme-13-plus-5g/specs/m/purple.jpg",
    ],
    colors: ["Red", "Blue"],
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    images: [
      "/images/product2-black.jpg",
      "/images/product2-white.jpg",
    ],
    colors: ["Black", "White"],
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    images: [
      "/images/purple.jpg",
      "/purple.jpg",
    ],
    colors: ["Gray", "Orange"],
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
