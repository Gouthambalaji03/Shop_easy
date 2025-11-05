import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
              Welcome to Shop Easy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 px-4 font-medium">
              Discover amazing products at great prices
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 sm:py-4 px-10 sm:px-12 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95"
            >
              Browse Products
            </Link>
            <Link
              to="/about"
              className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 sm:py-4 px-10 sm:px-12 rounded-xl transition-all duration-300 text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 border-2 border-gray-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

