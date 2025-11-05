import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to Shop Easy</h1>
          <p className="text-xl text-gray-600 mb-8">Discover amazing products at great prices</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

