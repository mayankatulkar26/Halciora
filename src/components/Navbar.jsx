import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark border-b border-white/10  w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Row */}
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Halcioara Logo"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/portfolio" className="hover:text-white transition">
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 text-gray-300">
            <Link
              to="/"
              className="hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium w-fit"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}