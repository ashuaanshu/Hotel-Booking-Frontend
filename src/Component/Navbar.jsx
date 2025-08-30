import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* LOGO */}
        <div className="text-2xl font-bold">
          <Link to="/">LOGO</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 text-lg">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" className="hover:text-gray-300">
              Rooms
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <Link to="/rooms">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <span className="text-2xl">&#x2715;</span> // ✖ Close
            ) : (
              <span className="text-2xl">&#9776;</span> // ☰ Menu
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-4">
          <ul className="flex flex-col space-y-3 text-lg">
            <li>
              <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                Rooms
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
          <Link to="/rooms" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
