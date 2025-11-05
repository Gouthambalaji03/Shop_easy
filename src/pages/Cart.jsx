import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getDiscountedPrice,
  } = useCart()

  const handleIncreaseQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity + 1)
  }

  const handleDecreaseQuantity = (productId, currentQuantity) => {
    updateQuantity(productId, currentQuantity - 1)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  const totalPrice = getTotalPrice()
  const discountedPrice = getDiscountedPrice()
  const discountAmount = totalPrice - discountedPrice

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => {
                  const itemTotal = item.price * item.quantity
                  return (
                    <div
                      key={item.id}
                      className="p-6 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Product Image */}
                        <div className="w-full md:w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                                className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-semibold text-gray-700 transition-colors duration-200"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="w-12 text-center font-semibold text-gray-800">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                                className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 flex items-center justify-center font-semibold text-gray-700 transition-colors duration-200"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            {/* Price and Remove Button */}
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="text-sm text-gray-600">
                                  ${item.price.toFixed(2)} × {item.quantity}
                                </p>
                                <p className="text-lg font-bold text-blue-600">
                                  ${itemTotal.toFixed(2)}
                                </p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                                aria-label="Remove from cart"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>Discount (10%)</span>
                  <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${discountedPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block w-full text-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

