import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Package } from 'lucide-react'
import Badge from '../ui/Badge'

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        to={`/products/${product.brandSlug}/${product.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
      >
        
        <div className="relative aspect-product bg-gray-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="navy" size="sm">
              {product.category}
            </Badge>
          </div>

           
          <div className="absolute inset-0 bg-navy-500/0 group-hover:bg-navy-500/10 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Brand */}
          <p className="text-sm text-green-500 font-medium mb-1">
            {product.brand}
          </p>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-navy-500 transition-colors mb-2 line-clamp-2">
            {product.productName}
          </h3>

          {/* Product Type */}
          <p className="text-sm text-gray-500 mb-3">
            {product.productType}
          </p>

           
          {product.features && product.features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.features.slice(0, 2).map((feature) => (
                <span
                  key={feature}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              {product.materialCompatibility}
            </span>
            <span className="flex items-center text-sm font-medium text-navy-500 group-hover:text-green-500 transition-colors">
              View Details
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
