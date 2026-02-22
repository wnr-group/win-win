import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy, useState } from 'react'
import Layout from './components/layout/Layout'
import LoadingSpinner from './components/ui/LoadingSpinner'
import QuoteModal from './components/common/QuoteModal'
import WhatsAppButton from './components/common/WhatsAppButton'
import FloatingCTA from './components/common/FloatingCTA'
import ScrollToTop from './components/common/ScrollToTop'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  const openQuoteModal = () => setIsQuoteModalOpen(true)
  const closeQuoteModal = () => setIsQuoteModalOpen(false)

  return (
    <>
      <ScrollToTop />
      <Layout openQuoteModal={openQuoteModal}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home openQuoteModal={openQuoteModal} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:brand/:slug" element={<ProductDetail openQuoteModal={openQuoteModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact openQuoteModal={openQuoteModal} />} />
          </Routes>
        </Suspense>
      </Layout>

      {/* Global UI Elements */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      <WhatsAppButton />
      <FloatingCTA onClick={openQuoteModal} />
    </>
  )
}

export default App
