import { useState, useEffect, useMemo } from 'react'
import productsData from '../data/products.json'

/**
 * Custom hook for managing product data with filtering and search
 */
export function useProducts(initialFilters = {}) {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    search: '',
    ...initialFilters,
  })

  const { products, categories, brands } = productsData

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false
      }

      // Brand filter
      if (filters.brand && product.brandSlug !== filters.brand) {
        return false
      }

      // Search filter
      if (filters.search) {
        const query = filters.search.toLowerCase()
        const searchableText = [
          product.productName,
          product.brand,
          product.category,
          product.productType,
          product.materialCompatibility,
          product.application,
          ...(product.features || []),
        ]
          .join(' ')
          .toLowerCase()

        return searchableText.includes(query)
      }

      return true
    })
  }, [products, filters])

  // Update individual filter
  const setFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: '',
      brand: '',
      search: '',
    })
  }

  // Get product by slug
  const getProductBySlug = (brandSlug, productSlug) => {
    return products.find(
      (p) => p.brandSlug === brandSlug && p.slug === productSlug
    )
  }

  // Get products by brand
  const getProductsByBrand = (brandSlug) => {
    return products.filter((p) => p.brandSlug === brandSlug)
  }

  // Get products by category
  const getProductsByCategory = (category) => {
    return products.filter((p) => p.category === category)
  }

  // Get related products
  const getRelatedProducts = (product, limit = 4) => {
    return products
      .filter(
        (p) =>
          p.id !== product.id &&
          (p.category === product.category || p.brandSlug === product.brandSlug)
      )
      .slice(0, limit)
  }

  return {
    products: filteredProducts,
    allProducts: products,
    categories,
    brands,
    filters,
    setFilter,
    setFilters,
    clearFilters,
    getProductBySlug,
    getProductsByBrand,
    getProductsByCategory,
    getRelatedProducts,
    totalCount: products.length,
    filteredCount: filteredProducts.length,
  }
}

/**
 * Hook for single product data
 */
export function useProduct(brandSlug, productSlug) {
  const { getProductBySlug, getRelatedProducts } = useProducts()

  const product = useMemo(
    () => getProductBySlug(brandSlug, productSlug),
    [brandSlug, productSlug, getProductBySlug]
  )

  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product) : []),
    [product, getRelatedProducts]
  )

  return {
    product,
    relatedProducts,
    isFound: !!product,
  }
}

export default useProducts
