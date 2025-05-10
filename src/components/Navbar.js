import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ["Home", "Shop", "About", "Contact"];

  return (
    <nav className="bg-[#F5F5F5] text-[#1E1E1E] px-6 py-4 shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#CDA274] tracking-wide">
          <Link to="/home">ClothLux</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-[#8D8D8D] transition duration-300 ease-in-out">
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-1 shadow-sm border border-[#E0E0E0] transition-all focus-within:shadow-md w-full md:w-auto md:min-w-[250px]">
          <i className="fas fa-search text-[#8D8D8D] mr-2"></i>
          <input
            type="text"
            placeholder="Search products..."
            className="outline-none bg-transparent w-full text-sm text-[#1E1E1E] placeholder-[#8D8D8D]"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isOpen ? "true" : "false"}>
          <i className="fas fa-bars transition-transform duration-300 hover:scale-110"></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-4 bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden ${isOpen ? "max-h-60 py-4 px-4" : "max-h-0 p-0"}`}
      >
        <ul className="flex flex-col gap-4 text-base font-medium">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-[#8D8D8D] transition-colors duration-300">
              <Link to={`/${item.toLowerCase()}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
