import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function Navbar() {
  const { getTotalItems } = useCart()
  const cartItemCount = getTotalItems()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Shop Easy
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-12 h-12 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Shopping cart"
          >
            <svg
              className="w-6 h-6"
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
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
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
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
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

