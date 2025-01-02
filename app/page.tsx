import Head from 'next/head';
import Link from 'next/link'
import Image from "next/image";
export default function Home() {
  return (
    <>
    <Head>
      <title>AK-Zone - Your One Stop Shop for Mobile Phones</title>
      <meta name="description" content="Browse through a wide selection of latest and second-hand mobile phones at affordable prices." />
    </Head>
    <main className="min-h-screen bg-gray-100 p-6">
     
      <section className="bg-[url('https://t3.ftcdn.net/jpg/06/94/28/90/360_F_694289007_cj0ETFKmIH6gLfE3RJC3dUkQtDeoDOXT.jpg')] bg-cover text-white py-20 px-4 text-left rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 ml-6">Welcome to AK-Zone</h1>
        <p className="text-lg ml-6">
          Your one-stop shop for the latest and second-hand mobile phones.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block bg-white text-blue-600 py-2 px-6 ml-6 rounded-lg font-semibold hover:bg-gray-100 transform transition-transform duration-300 hover:translate-y-1"
        >
          Start Shopping
        </Link>
      </section>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg"
              width={300}
              height={300}
              alt="iPhone 15 Pro Max - Front View"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                iPhone 15 Pro Max
              </h3>
              <p className="text-gray-600 mt-2">
                Discover the latest features with this amazing product.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://images.samsung.com/pk/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg"
              width={300}
              height={300}
              alt="samsung s23 ultra"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Samsung S23 Ultra
              </h3>
              <p className="text-gray-600 mt-2">
                The perfect choice for anyone looking for reliability and style.
              </p>
            </div>
          </div>
     
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://cdn.kemik.gt/reviews/2023/10/713eEl39eLL.jpg"
              alt="google pixel"
              width={300}
              height={300}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Google Pixel 8 Pro</h3>
              <p className="text-gray-600 mt-2">
                Experience innovation with this premium product.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src="https://amateurphotographer.com/wp-content/uploads/sites/7/2023/09/xiaomi-13t-pro-phone-jw-ap-P9250157.jpg"
              width={300}
              height={300}
              alt="xiaomi 13t pro"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Xiaomi 13T Pro
              </h3>
              <p className="text-gray-600 mt-2">
                The perfect choice for anyone looking for reliability and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Wide Selection
            </h3>
            <p className="text-gray-700">
              Browse through a wide range of the latest and second-hand mobile
              phones at affordable prices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Trusted Quality
            </h3>
            <p className="text-gray-700">
              All our products are tested and guaranteed to meet your
              expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Fast Shipping
            </h3>
            <p className="text-gray-700">
              We ensure that your orders are delivered quickly and safely to
              your doorstep.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 bg-[url('https://global.hisense.com/dam/jcr:983144b1-36db-44ba-af97-7c15d37daa71/product-overview-hisense-smartphone-kv.h60-5g.jpg')] bg-cover py-12 px-4 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-white">
          Ready to Find Your Next Phone?
        </h2>
        <p className="text-center text-white mt-2">
          Check out our shop to explore the latest and second-hand phones.
        </p>
        <div className="text-center mt-6">
          <Link
            href="/shop"
            className="bg-white text-blue-600 py-2 px-6 rounded-lg font-semibold hover:bg-gray-100 transform transition-transform duration-300 hover:translate-x-1"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
