import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Badge from '../ui/Badge'
import { getSeriesBg } from '../../utils/helpers'

export default function ProductCard({ product, index = 0 }) {
  const seriesBadgeStyle = getSeriesBg(product.series)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="h-full flex"
    >
      <Link
        to={`/products/${product.brandSlug}/${product.slug}`}
        className="group flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-product bg-white overflow-hidden">
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />

          {/* Series Badge - positioned on right side vertically to avoid overlapping product images */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={seriesBadgeStyle}
            >
              {product.series}
            </span>
            {product.hrc && (
              <span className="bg-gray-900/80 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                HRC {product.hrc}
              </span>
            )}
            {/* Product Code */}
            {product.productCode && (
              <span className="bg-white/90 text-gray-900 text-xs font-mono font-bold px-2.5 py-1 rounded-md backdrop-blur-sm">
                {product.productCode}
              </span>
            )}
          </div>

          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Flutes indicator */}
          {product.flutes && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                {product.flutes} Flute{product.flutes > 1 ? 's' : ''}
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-400">
                {product.productType}
              </span>
            </div>
          )}

          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-navy-500 transition-colors mb-2 line-clamp-2">
            {product.productName}
          </h3>

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

          {/* Spacer pushes CTA to bottom */}
          <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-500 truncate max-w-[60%]">
              {product.application}
            </span>
            <span className="flex items-center text-sm font-medium text-navy-500 group-hover:text-green-500 transition-colors whitespace-nowrap">
              View Details
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}