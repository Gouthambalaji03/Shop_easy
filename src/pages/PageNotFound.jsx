import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 mb-3 sm:mb-4">404</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8">Page Not Found</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors duration-200 text-sm sm:text-base"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound

