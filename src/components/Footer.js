import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-[#CDA274] mb-2">ClothLux</h2>
          <p className="text-[#8D8D8D] text-sm">
            Where minimal meets luxe — curated fashion for the modern soul.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FFFFFF]">Shop</h3>
          <ul className="space-y-2 text-[#8D8D8D] text-sm">
            <li className="hover:text-[#CDA274] cursor-pointer">Men</li>
            <li className="hover:text-[#CDA274] cursor-pointer">Women</li>
            <li className="hover:text-[#CDA274] cursor-pointer">Accessories</li>
            <li className="hover:text-[#CDA274] cursor-pointer">New Arrivals</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FFFFFF]">Company</h3>
          <ul className="space-y-2 text-[#8D8D8D] text-sm">
            <li className="hover:text-[#CDA274] cursor-pointer">About Us</li>
            <li className="hover:text-[#CDA274] cursor-pointer">Careers</li>
            <li className="hover:text-[#CDA274] cursor-pointer">Blog</li>
            <li className="hover:text-[#CDA274] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FFFFFF]">Stay Updated</h3>
          <p className="text-[#8D8D8D] text-sm mb-3">
            Subscribe to get style tips, offers, and updates.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md bg-[#FFFFFF] text-[#1E1E1E] placeholder-[#8D8D8D] text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#CDA274] text-[#1E1E1E] text-sm font-medium py-2 rounded-md hover:bg-[#b98c5f] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-[#8D8D8D] text-sm border-t border-[#8D8D8D]/20 pt-4">
        © {new Date().getFullYear()} ClothLux. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
