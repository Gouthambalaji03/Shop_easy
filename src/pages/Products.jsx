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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-xl">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our Products
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 capitalize">
                    {product.category}
                  </span>
                </div>
                
                <button
                  onClick={() => handleCartAction(product)}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    isInCart(product.id)
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
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

