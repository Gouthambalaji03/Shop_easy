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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          <div className="text-6xl sm:text-7xl mb-6 animate-bounce">🛒</div>
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">Add some amazing products to get started!</p>
          <Link
            to="/products"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-3.5 px-8 sm:px-10 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="divide-y divide-gray-100">
                {cartItems.map((item) => {
                  const itemTotal = item.price * item.quantity
                  return (
                    <div
                      key={item.id}
                      className="p-4 sm:p-5 md:p-6 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                        {/* Product Image */}
                        <div className="w-full sm:w-28 md:w-36 h-28 sm:h-28 md:h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center overflow-hidden shrink-0 mx-auto sm:mx-0 shadow-md">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain p-3 transition-transform duration-300 hover:scale-110"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2 hidden sm:block">
                            {item.description}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-5">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-3 justify-center sm:justify-start">
                              <button
                                onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 flex items-center justify-center font-bold text-gray-700 transition-all duration-200 text-base sm:text-lg shadow-md hover:shadow-lg transform hover:scale-110 active:scale-95"
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="w-14 sm:w-16 text-center font-bold text-gray-900 text-base sm:text-lg bg-gray-50 rounded-lg py-2 border-2 border-gray-200">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 flex items-center justify-center font-bold text-gray-700 transition-all duration-200 text-base sm:text-lg shadow-md hover:shadow-lg transform hover:scale-110 active:scale-95"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            {/* Price and Remove Button */}
                            <div className="flex items-center justify-between sm:justify-end gap-4">
                              <div className="text-left sm:text-right">
                                <p className="text-xs sm:text-sm text-gray-500 mb-1">
                                  ₹{(item.price * 83).toFixed(2)} × {item.quantity}
                                </p>
                                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                  ₹{(itemTotal * 83).toFixed(2)}
                                </p>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 px-4 sm:px-5 rounded-lg transition-all duration-200 text-xs sm:text-sm whitespace-nowrap shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
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
            <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-7 lg:sticky lg:top-8 border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-5 sm:mb-6">Order Summary</h2>
              
              <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-7">
                <div className="flex justify-between text-sm sm:text-base text-gray-700 pb-3 border-b border-gray-200">
                  <span className="break-words font-medium">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-bold ml-2 whitespace-nowrap text-gray-900">₹{(totalPrice * 83).toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm sm:text-base text-green-600 pb-3 border-b border-gray-200">
                  <span className="font-medium">Discount (10%)</span>
                  <span className="font-bold whitespace-nowrap">-₹{(discountAmount * 83).toFixed(2)}</span>
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                    <span className="text-lg sm:text-xl font-bold text-gray-900">Total</span>
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
                      ₹{(discountedPrice * 83).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg transition-all duration-300 mb-3 sm:mb-4 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block w-full text-center bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-semibold py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
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

