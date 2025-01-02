// app/cart/page.tsx
"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty!</p>
      ) : (
        <div className="mt-4">
          {cart.map((item) => (
            <div key={item.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-600 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 text-center">
        <Link
          href="/checkout"
          className="bg-green-600 text-white py-2 px-4 rounded"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
