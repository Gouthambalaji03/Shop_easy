import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart from localStorage on initialization
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      
      if (existingItem) {
        // If item exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // If item doesn't exist, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  // Update quantity of an item
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Check if product is in cart
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId)
  }

  // Get total items count
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  // Calculate total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Calculate total price with 10% discount
  const getDiscountedPrice = () => {
    const total = getTotalPrice()
    return total * 0.9 // 10% discount
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    isInCart,
    getTotalItems,
    getTotalPrice,
    getDiscountedPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

