import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Search, Filter, Grid3X3, LayoutGrid, Package } from 'lucide-react'
import ProductCard from '../components/products/ProductCard'
import ProductFilter from '../components/products/ProductFilter'
import Input from '../components/ui/Input'
import productsData from '../data/products.json'

import ExternalBrandInfo from '../components/products/ExternalBrandInfo'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [gridCols, setGridCols] = useState(3)

  const selectedCategory = searchParams.get('category') || ''
  const selectedBrand = searchParams.get('brand') || ''
  const { products, categories, brands } = productsData
  
useEffect(() => {
  if (!selectedBrand) return

  // scrollIntoView({ block: 'start' }) places the element flush with the top
  // of the viewport, but the sticky header (top bar + navbar ~130px) overlaps
  // it. Instead, we calculate the element's absolute Y position and scroll to
  // a point ABOVE it so the full page top (including header) is visible.
  const raf = requestAnimationFrame(() => {
    const heroSection = document.getElementById('products-top')
    if (!heroSection) return

    const elementTop = heroSection.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: elementTop, behavior: 'smooth' })
  })

  return () => cancelAnimationFrame(raf)
}, [selectedBrand])



const selectedBrandObj = brands.find(b => b.slug === selectedBrand)
const isExternalBrand = selectedBrandObj?.type === 'external'

  

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false
      }

      // Brand filter
     if (
       selectedBrand &&
       selectedBrandObj?.type !== "external" &&
       product.brandSlug !== selectedBrand
     ) {
       return false;
     }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        return (
          product.productName.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.productType.toLowerCase().includes(query) ||
          product.materialCompatibility.toLowerCase().includes(query)
        )
      }

      return true
    })
  }, [products, selectedCategory, selectedBrand, searchQuery])

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams)
    if (category) {
      newParams.set('category', category)
    } else {
      newParams.delete('category')
    }
    setSearchParams(newParams)
  }

  const handleBrandChange = (brand) => {
    const newParams = new URLSearchParams(searchParams)
    if (brand) {
      newParams.set('brand', brand)
    } else {
      newParams.delete('brand')
    }
    setSearchParams(newParams)
  }

  const handleClearFilters = () => {
    setSearchParams({})
    setSearchQuery('')
  }

  // Get page title based on filters
  const getPageTitle = () => {
    if (selectedBrand) {
      const brand = brands.find((b) => b.slug === selectedBrand)
      return brand ? `${brand.name} Products` : 'Products'
    }
    if (selectedCategory) {
      return `${selectedCategory} Products`
    }
    return 'All Products'
  }

  return (
    <>
      <Helmet>
        <title>{getPageTitle()} - Win Win Tooling Solutions</title>
        <meta
          name="description"
          content={`Browse our range of ${getPageTitle().toLowerCase()}. Premium industrial tooling solutions from world-leading brands.`}
        />
      </Helmet>

      {/* Hero Section */}
      <section id="products-top" className="bg-gradient-to-br from-navy-500 to-navy-600 py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {getPageTitle()}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of premium industrial tooling
              solutions from world-leading manufacturers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block w-72 flex-shrink-0">
              <ProductFilter
                categories={categories}
                brands={brands}
                selectedCategory={selectedCategory}
                selectedBrand={selectedBrand}
                onCategoryChange={handleCategoryChange}
                onBrandChange={handleBrandChange}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Mobile Filter */}
            <ProductFilter
              categories={categories}
              brands={brands}
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              onCategoryChange={handleCategoryChange}
              onBrandChange={handleBrandChange}
              onClearFilters={handleClearFilters}
              isMobile
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />

            {/* Main Content */}
            <div className="flex-1">
              {/* Search & Controls */}
             {!isExternalBrand && (
              <div className="bg-white rounded-2xl p-4 shadow-card mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="flex-1">
                    <Input
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      icon={<Search className="w-5 h-5" />}
                    />
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    {/* Mobile filter button */}
                    <button
                      onClick={() => setIsFilterOpen(true)}
                      className="lg:hidden flex items-center px-4 py-3 bg-navy-500 text-white rounded-lg"
                    >
                      <Filter className="w-5 h-5 mr-2" />
                      Filters
                    </button>

                    {/* Grid toggle */}
                    <div className="hidden md:flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => setGridCols(2)}
                        className={`p-2.5 ${
                          gridCols === 2
                            ? "bg-navy-500 text-white"
                            : "text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        <Grid3X3 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setGridCols(3)}
                        className={`p-2.5 ${
                          gridCols === 3
                            ? "bg-navy-500 text-white"
                            : "text-gray-500 hover:bg-gray-50"
                        }`}
                      >
                        <LayoutGrid className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                 </div>

                {/* Results count */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Showing{" "}
                   <span className="font-semibold">
                      {filteredProducts.length}
                    </span>{" "}
                    {filteredProducts.length === 1 ? "product" : "products"}
                  </p>
                </div>
              </div>
             )}

              {/* Products Grid */}
                {isExternalBrand ? (
                  <ExternalBrandInfo brand={selectedBrandObj} />
                ) : filteredProducts.length > 0 ? (
                <div
                  className={`grid gap-6 ${
                    gridCols === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-2xl p-12 text-center shadow-card"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search query.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="text-green-500 font-medium hover:text-green-600"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
