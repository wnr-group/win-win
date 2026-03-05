import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react'

const footerLinks = {
  products: [
    { name: 'PCD Solutions', href: '/products?category=pcd-solutions' },
    { name: 'Carbide Tools', href: '/products?category=carbide-tools' },
    { name: 'End Mills', href: '/products?category=end-mills' },
    { name: 'Tool Holders', href: '/products?category=tool-holders' },
    { name: 'All Products', href: '/products' },
  ],
  brands: [
    { name: 'Palbit', href: '/products?brand=palbit' },
    { name: 'HANS', href: '/products?brand=hans' },
    { name: 'MIICUT', href: '/products?brand=miicut' },
    { name: 'KTA', href: '/products?brand=kta' },
    { name: 'Schussler', href: '/products?brand=schussler' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Brands', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Request Quote', href: '/contact' },
  ],
  resources: [
    { name: 'IMTMA', href: 'https://www.imtma.in/', external: true },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:winwintoolingsolutions@gmail.com' },
]

export default function Footer() {
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
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium industrial tooling solutions provider, offering world-class cutting tools,
              tool holders, and precision machining equipment.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
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
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-4">Industry Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
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
                  Lenin Nagar, Ambattur<br />
                  Chennai - 600053
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
                  href="mailto:winwintoolingsolutions@gmail.com"
                  className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-green-400" />
                  winwintoolingsolutions@gmail.com
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
