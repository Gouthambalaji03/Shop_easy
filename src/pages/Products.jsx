import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useCart } from '../context/CartContext.jsx'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { addToCart, removeFromCart, isInCart } = useCart()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
        setError(null)
      } catch (err) {
        setError('Failed to fetch products. Please try again later.')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleCartAction = (product) => {
    if (isInCart(product.id)) {
      removeFromCart(product.id)
    } else {
      addToCart(product)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-blue-200 border-t-blue-600"></div>
          <p className="mt-6 text-sm sm:text-base font-medium text-gray-700">Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="text-center max-w-md bg-white rounded-xl shadow-lg p-8">
          <div className="text-5xl mb-4">⚠️</div>
          <p className="text-red-600 text-base sm:text-lg md:text-xl font-semibold">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Our Products
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">Discover amazing products at great prices</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
            >
              <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-gray-600 capitalize">{product.category}</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 line-clamp-2 sm:line-clamp-3 flex-1">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div>
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      ₹{(product.price * 83).toFixed(2)}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleCartAction(product)}
                  className={`w-full py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg ${
                    isInCart(product.id)
                      ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
                  }`}
                >
                  {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

