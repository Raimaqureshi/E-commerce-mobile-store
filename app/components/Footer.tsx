const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">
                Welcome to AK-Zone, your one-stop shop for the latest and second-hand mobile phones. Quality and satisfaction guaranteed.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="/" className="hover:text-white">Home</a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-white">Shop</a>
                </li>
                <li>
                  <a href="/cart" className="hover:text-white">Cart</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">Contact Us</a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Phone: +92 123 456 7890</li>
                <li>Email: support@akzone.com</li>
                <li>Address: Karachi, Pakistan</li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            © 2025 AK-Zone. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  