import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'Prime Series', href: '/products?category=Prime+Series' },
    { name: 'Economy Series', href: '/products?category=Economy+Series' },
    { name: 'Premium Series', href: '/products?category=Premium+Series' },
    { name: 'ALU Series', href: '/products?category=ALU+Series' },
    { name: 'All Products', href: '/products' },
  ],
  brands: [
    { name: 'Win Win End Mills', href: '/products?brand=win-win-end-mill-solutions' },
    { name: 'Palbit', href: '/products?brand=palbit' },
    { name: 'Bilz', href: '/products?brand=bilz' },
    { name: 'Tungaloy', href: '/products?brand=tungaloy' },
    { name: 'ETP', href: '/products?brand=etp' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Brands', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Request Quote', href: '/contact' },
  ],
}

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleRequestQuoteClick = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToProductsTop = () => {
    const productsTop = document.getElementById('products-top')

    if (productsTop) {
      const top = productsTop.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top, behavior: 'smooth' })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleProductNavigation = (href) => (event) => {
    event.preventDefault()

    if (`${location.pathname}${location.search}` !== href) {
      navigate(href)
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToProductsTop)
    })
  }

  return (
    <footer className="bg-navy-500 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/assets/winwin-logo.jpg"
                alt="Win Win Tooling Solutions"
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Total Tooling Solutions Providers, offering world-class cutting tools,
              tool holders, and precision machining equipment.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={
                      link.name === 'Prime Series' ||
                      link.name === 'Economy Series' ||
                      link.name === 'Premium Series' ||
                      link.name === 'ALU Series' ||
                      link.name === 'All Products'
                        ? handleProductNavigation(link.href)
                        : undefined
                    }
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Brands</h4>
            <ul className="space-y-3">
              {footerLinks.brands.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={handleProductNavigation(link.href)}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.name === 'Request Quote' ? (
                    <button
                      type="button"
                      onClick={handleRequestQuoteClick}
                      className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={link.name === 'Our Brands' ? handleProductNavigation(link.href) : undefined}
                      className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">
                  F2, Gokulam's Balaji Manor,<br />
                  Old no: 4, New no: 6, 2nd Cross Street,<br />
                  Lenin Nagar, Ambattur,<br />
                  Chennai, Tamil Nadu 600053
                </span>
              </li>
              <li>
                <a
                  href="tel:+917338717209"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-green-400" />
                  +91 73387 17209
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@win-wintoolingsolutions.com"
                  className="flex items-start text-gray-300 hover:text-green-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                  <span className="break-all">admin@win-wintoolingsolutions.com</span>
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Mon - Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Win Win Tooling Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
