import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'
import ReachOut from './pages/ReachOut.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/reach" element={<ReachOut />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App