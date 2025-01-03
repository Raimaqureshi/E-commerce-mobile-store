import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

export default function Products() {
  const categories = [
    { 
      name: "Newest Phones", 
      path: "/products/newest", 
      image: "/images/product1.png" 
    },
    { 
      name: "Second-Hand Phones", 
      path: "/products/second-hand", 
      image: "/images/product 2.webp" 
    },
    { 
      name: "Listening", 
      path: "/products/listing", 
      image: "/images/product3.webp"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-gray-900 mt-6">
        Products
      </h1>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <div key={category.name} className="p-4 w-full sm:w-80 bg-white rounded-lg shadow-md mb-4">
            <Image 
              src={category.image} 
              alt={category.name} 
              width={300} // Set appropriate width
              height={300} // Set appropriate height
              className="w-auto h-80 object-cover rounded-lg mb-4" 
            />
            <h2 className="text-xl font-bold text-black">{category.name}</h2>
            <Link href={category.path}
               className="mt-2 bg-black text-white px-4 py-2 rounded inline-block">
                View Products
              
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
