// app/checkout/page.tsx
"use client";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600">Checkout</h1>
      {cart.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty!</p>
      ) : (
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Order Summary</h2>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-semibold">Total: ${totalPrice}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
