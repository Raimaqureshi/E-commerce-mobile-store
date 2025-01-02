import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-700 text-white py-4">
      <div className="max-w-7xl mx-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">AK-Zone</h1>

        <ul className="flex space-x-6">
          <li>
      <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
       <Link href="/shop" className="hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
       <Link href="/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
      <Link href="/cart" className="flex items-center hover:text-gray-300">
            <FaShoppingCart className="mr-2" />
          </Link>
        </ul>
      </div>
    </header>
  );
}
