import { motion, AnimatePresence } from 'framer-motion'
import { X, Filter, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ProductFilter({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  onCategoryChange,
  onBrandChange,
  onClearFilters,
  isMobile = false,
  isOpen = false,
  onClose,
}) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const hasActiveFilters = selectedCategory || selectedBrand

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">Active Filters</span>
            <button
              onClick={onClearFilters}
              className="text-sm text-green-500 hover:text-green-600 font-medium"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <span className="inline-flex items-center px-3 py-1.5 bg-navy-100 text-navy-700 rounded-full text-sm">
                {selectedCategory}
                <button
                  onClick={() => onCategoryChange('')}
                  className="ml-2 hover:text-navy-900"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
            {selectedBrand && (
              <span className="inline-flex items-center px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm">
                {brands.find((b) => b.slug === selectedBrand)?.name || selectedBrand}
                <button
                  onClick={() => onBrandChange('')}
                  className="ml-2 hover:text-green-900"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Categories */}
      <div>
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="font-semibold text-gray-900">Categories</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform ${
              expandedSections.categories ? 'rotate-180' : ''
            }`}
          />
        </button>
        <AnimatePresence>
          {expandedSections.categories && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 overflow-hidden"
            >
              <button
                onClick={() => onCategoryChange('')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  !selectedCategory
                    ? 'bg-navy-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === category
                      ? 'bg-navy-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Brands */}
      <div>
        <button
          onClick={() => toggleSection('brands')}
          className="flex items-center justify-between w-full text-left mb-3"
        >
          <span className="font-semibold text-gray-900">Brands</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-500 transition-transform ${
              expandedSections.brands ? 'rotate-180' : ''
            }`}
          />
        </button>
        <AnimatePresence>
          {expandedSections.brands && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-1 overflow-hidden"
            >
              <button
                onClick={() => onBrandChange('')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  !selectedBrand
                    ? 'bg-green-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All Brands
              </button>
              {brands.map((brand) => (
                <button
                  key={brand.slug}
                  onClick={() => onBrandChange(brand.slug)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                    selectedBrand === brand.slug
                      ? 'bg-green-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{brand.name}</span>
                  {brand.productCount > 0 && (
                    <span
                      className={`text-xs ${
                        selectedBrand === brand.slug ? 'text-white/80' : 'text-gray-400'
                      }`}
                    >
                      ({brand.productCount})
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )

  // Mobile drawer
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }

  // Desktop sidebar
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card sticky top-28">
      <div className="flex items-center mb-6">
        <Filter className="w-5 h-5 text-navy-500 mr-2" />
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
      </div>
      <FilterContent />
    </div>
  )
}
