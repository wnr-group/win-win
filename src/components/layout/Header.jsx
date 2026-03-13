import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleRequestQuoteClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMobileNavigation = (href) => (event) => {
    event.preventDefault()
    setIsMobileMenuOpen(false)

    if (location.pathname !== href) {
      navigate(href)
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy-500 text-white text-sm py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+917338717209" className="flex items-center hover:text-green-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 73387 17209
            </a>
            <a href="mailto:admin@win-wintoolingsolutions.com" className="flex items-center hover:text-green-400 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              admin@win-wintoolingsolutions.com
            </a>
          </div>
          <div className="text-gray-300">
            Premium Industrial Tooling Solutions
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/assets/winwin-logo.jpg"
                alt="Win Win Tooling Solutions"
                className="h-[5rem] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-green-500'
                      : 'text-gray-700 hover:text-navy-500'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="primary"
                size="md"
                onClick={handleRequestQuoteClick}
              >
                Request Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="container-custom py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleMobileNavigation(item.href)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'bg-green-50 text-green-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={handleRequestQuoteClick}
                  >
                    Request Quote
                  </Button>
                </div>
                <div className="pt-4 space-y-2 text-sm text-gray-600">
                  <a href="tel:+917338717209" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 73387 17209
                  </a>
                  <a href="mailto:admin@win-wintoolingsolutions.com" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    admin@win-wintoolingsolutions.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
