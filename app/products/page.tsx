import Link from 'next/link';

export default function Products() {
  const categories = [
    { 
      name: "Newest Phones", 
      path: "/products/newest", 
      image: "https://via.placeholder.com/300x200.png?text=Newest+Phones" // Example image URL
    },
    { 
      name: "Second-Hand Phones", 
      path: "/products/second-hand", 
      image: "https://via.placeholder.com/300x200.png?text=Second-Hand+Phones" // Example image URL
    },
    { 
      name: "Listening", 
      path: "/products/listing", 
      image: "https://via.placeholder.com/300x200.png?text=Listening" // Example image URL
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl text-center font-bold text-blue-600">
        Products
      </h1>
      <div className="mt-4">
        {categories.map((category) => (
          <div key={category.name} className="p-4 bg-white rounded-lg shadow-md mb-4">
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-52 object-cover rounded-lg mb-4" 
            />
            <h2 className="text-xl font-bold">{category.name}</h2>
            <Link href={category.path}
               className="mt-2 bg-blue-600 text-white px-4 py-2 rounded inline-block">
                View Products
              
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
