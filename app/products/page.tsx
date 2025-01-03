import Link from 'next/link';

export default function Products() {
  const categories = [
    { 
      name: "Newest Phones", 
      path: "/products/newest", 
      image: "https://media.croma.com/image/upload/v1705640288/Croma%20Assets/Communication/Mobiles/Images/303838_oqpio4.png" 
    },
    { 
      name: "Second-Hand Phones", 
      path: "/products/second-hand", 
      image: "https://files.oaiusercontent.com/file-31zALQedXM74Q4214M42a7?se=2025-01-03T11%3A29%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7af2b428-e6b9-4ed2-bb27-473cea33d99b.webp&sig=0lEi/QUQWKVu5DeRxkYvlWBPIav9trKOTFDIi/QeRBQ%3D" 
    },
    { 
      name: "Listening", 
      path: "/products/listing", 
      image: "https://files.oaiusercontent.com/file-9njDKmSJDKgG7dEmztEALz?se=2025-01-03T11%3A33%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D92dfc683-4cc1-4762-b47e-d6f695ec2c17.webp&sig=Wl50hfpucxrv026%2BudR6H40ZpsrTJG266Hdm%2BsLOPGU%3D"
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
            <img 
              src={category.image} 
              alt={category.name} 
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
