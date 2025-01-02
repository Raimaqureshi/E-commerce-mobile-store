export default function Products() {
    const categories = ["Newest Phones", "Second-Hand Phones", "listening"];
  
    return (
      <main className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl text-center font-bold text-blue-600">
          Products
        </h1>
        <div className="mt-4">
          {categories.map((category) => (
            <div key={category} className="p-4 bg-white rounded-lg shadow-md mb-4">
              <h2 className="text-xl font-bold">{category}</h2>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
                View Products
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  }
  