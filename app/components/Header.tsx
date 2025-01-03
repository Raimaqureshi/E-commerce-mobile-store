"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">AK-Zone</h1>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>

        <nav
          className={`absolute md:static top-16 right-0 bg-gray-800 md:bg-transparent w-full md:w-auto md:flex md:items-center transition-transform ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 items-center">
            <li>
              <Link href="/" onClick={handleLinkClick} className="hover:text-gray-300 block py-2 md:py-0">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" onClick={handleLinkClick} className="hover:text-gray-300 block py-2 md:py-0">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/products" onClick={handleLinkClick} className="hover:text-gray-300 block py-2 md:py-0">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" onClick={handleLinkClick} className="flex justify-center items-center hover:text-gray-300 py-2 md:py-0">
                <FaShoppingCart className="mr-2" /> Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
