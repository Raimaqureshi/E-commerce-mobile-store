"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false); // State for order confirmation

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    setOrderPlaced(true); // Show confirmation message
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-gray-900 mt-6">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-center mt-4 py-16 text-xl">Your cart is empty!</p>
      ) : (
        <div className="mt-4">
          {/* Order Summary */}
          <h2 className="text-2xl font-semibold text-gray-900">Order Summary</h2>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-right mb-8">
            <h2 className="text-2xl font-semibold">Total: ${totalPrice}</h2>
          </div>

          {/* Show confirmation message */}
          {orderPlaced ? (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Order Placed Successfully!</h2>
              <p>Thank you for your purchase. Your order has been placed.</p>
            </div>
          ) : (
            <>
              {/* Shipping Form */}
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Shipping Details</h2>
              <form
                onSubmit={handlePlaceOrder}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block font-semibold text-gray-700">
                    Address
                  </label>
                  <textarea
                    id="address"
                    placeholder="Enter your shipping address"
                    className="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label htmlFor="city" className="block font-semibold text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter your city"
                    className="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="postal" className="block font-semibold text-gray-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postal"
                    placeholder="Enter your postal code"
                    className="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900"
                >
                  Place Order
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
