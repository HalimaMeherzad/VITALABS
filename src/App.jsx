import { useCallback, useState } from 'react'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Benefits from './components/Benefits.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Science from './components/Science.jsx'
import Testimonials from './components/Testimonials.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import ProductModal from './components/ProductModal.jsx'

export default function App() {
  const [quickView, setQuickView] = useState(null)
  const handleQuickView = useCallback((product) => setQuickView(product), [])
  const closeQuickView = useCallback(() => setQuickView(null), [])

  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Benefits />
        <ProductGrid onQuickView={handleQuickView} />
        <Science />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer />
      {quickView && <ProductModal product={quickView} onClose={closeQuickView} />}
    </CartProvider>
  )
}
