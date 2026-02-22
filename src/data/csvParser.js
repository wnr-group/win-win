/**
 * CSV Parser Utility for Product Data
 * Parses CSV content into structured JSON for the product system
 */

/**
 * Parse CSV string into array of product objects
 * @param {string} csvContent - Raw CSV content
 * @returns {Array} - Array of product objects
 */
export function parseCSV(csvContent) {
  const lines = csvContent.trim().split('\n')
  const headers = parseCSVLine(lines[0])

  const products = []

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i])
    const product = {}

    headers.forEach((header, index) => {
      const key = headerToKey(header)
      product[key] = values[index] || ''
    })

    // Generate additional fields
    product.id = generateProductId(product, i)
    product.slug = generateSlug(product.productName)
    product.brandSlug = generateSlug(product.brand)
    product.image = getProductImage(product)
    product.features = parseFeatures(product.keyFeatures)

    products.push(product)
  }

  return products
}

/**
 * Parse a single CSV line handling quoted values
 * @param {string} line - CSV line
 * @returns {Array} - Array of values
 */
function parseCSVLine(line) {
  const values = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      values.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  values.push(current.trim())
  return values
}

/**
 * Convert header name to camelCase key
 * @param {string} header - CSV header
 * @returns {string} - camelCase key
 */
function headerToKey(header) {
  return header
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, char) => char.toUpperCase())
    .replace(/^./, char => char.toLowerCase())
}

/**
 * Generate URL-friendly slug from name
 * @param {string} name - Product or brand name
 * @returns {string} - URL slug
 */
function generateSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Generate unique product ID
 * @param {Object} product - Product object
 * @param {number} index - Array index
 * @returns {string} - Unique ID
 */
function generateProductId(product, index) {
  const brandPrefix = product.brand?.substring(0, 3).toUpperCase() || 'PRD'
  return `${brandPrefix}-${String(index).padStart(4, '0')}`
}

/**
 * Get product image path based on product type
 * @param {Object} product - Product object
 * @returns {string} - Image path
 */
function getProductImage(product) {
  // Map products to available images in Assets folder
  const imageMap = {
    'pcd': '/assets/winwinTool1.png',
    'carbide end mill': '/assets/55HRCMillTool.png',
    'carbide drill': '/assets/winwinTool2.png',
    'threading': '/assets/winwinTool3.png',
    'micro end mill': '/assets/neckMillingTool1.png',
    'ball nose': '/assets/stdBallEndTool.png',
    'general purpose': '/assets/economySeriesTool1.png',
    'roughing': '/assets/roughEndMill.png',
    'collet chuck': '/assets/winwinTool4.png',
    'hsk': '/assets/winwinTool5.png',
    'hydraulic chuck': '/assets/winwinTool6.png',
    'presetter': '/assets/winwinTool7.png',
    'indexable': '/assets/winwinTool8.png',
    'sleeve': '/assets/winwinTool9.png',
    'thread milling': '/assets/winwinTool10.png',
    'reamer': '/assets/winwinTool11.png',
  }

  const productNameLower = (product.productName || '').toLowerCase()

  for (const [key, image] of Object.entries(imageMap)) {
    if (productNameLower.includes(key)) {
      return image
    }
  }

  return '/assets/winwinTool1.png'
}

/**
 * Parse features string into array
 * @param {string} featuresString - Comma-separated features
 * @returns {Array} - Array of feature strings
 */
function parseFeatures(featuresString) {
  if (!featuresString) return []
  return featuresString.split(',').map(f => f.trim()).filter(Boolean)
}

/**
 * Get unique categories from products
 * @param {Array} products - Array of products
 * @returns {Array} - Unique categories
 */
export function getCategories(products) {
  const categories = [...new Set(products.map(p => p.category))]
  return categories.sort()
}

/**
 * Get unique brands from products
 * @param {Array} products - Array of products
 * @returns {Array} - Unique brands with info
 */
export function getBrands(products) {
  const brandMap = {}

  products.forEach(product => {
    if (!brandMap[product.brand]) {
      brandMap[product.brand] = {
        name: product.brand,
        slug: product.brandSlug,
        productCount: 0,
      }
    }
    brandMap[product.brand].productCount++
  })

  return Object.values(brandMap).sort((a, b) => a.name.localeCompare(b.name))
}

export default {
  parseCSV,
  getCategories,
  getBrands,
}
