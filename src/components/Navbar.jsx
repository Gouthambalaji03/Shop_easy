import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function Navbar() {
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Shop Easy
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            <Link
              to="/"
              className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-semibold transition-all duration-200 hover:scale-105 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/products"
              className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-semibold transition-all duration-200 hover:scale-105 relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-semibold transition-all duration-200 hover:scale-105 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="text-sm lg:text-base text-gray-700 hover:text-blue-600 font-semibold transition-all duration-200 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 bg-gray-50 hover:bg-blue-50 rounded-full p-2"
            aria-label="Shopping cart"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shadow-lg animate-pulse">
                {cartItemCount > 9 ? '9+' : cartItemCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden pb-4">
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className="text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-200 py-2 px-3 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-200 py-2 px-3 rounded-lg"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-200 py-2 px-3 rounded-lg"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm sm:text-base text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-200 py-2 px-3 rounded-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

