/**
 * Utility helper functions
 */

/**
 * Generate URL-friendly slug from text
 * @param {string} text - Text to convert
 * @returns {string} - URL slug
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Capitalize first letter of each word
 * @param {string} text - Text to capitalize
 * @returns {string} - Capitalized text
 */
export function capitalizeWords(text) {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} - Truncated text
 */
export function truncate(text, length = 100) {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string} - Formatted phone
 */
export function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')
  }
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return '+91 ' + cleaned.slice(2).replace(/(\d{5})(\d{5})/, '$1 $2')
  }
  return phone
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {Function} - Throttled function
 */
export function throttle(func, limit = 300) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} - Is in viewport
 */
export function isInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Get scroll percentage
 * @returns {number} - Scroll percentage (0-100)
 */
export function getScrollPercentage() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  return Math.round((scrollTop / docHeight) * 100)
}

// Series-specific color definitions (product-scoped, do not affect global styles)
const SERIES_COLOR_MAP = {
  PRIME:   { hex: '#EAB308', textHex: '#FFFFFF' }, // yellow-500
  ECONOMY: { hex: '#CD7F32', textHex: '#FFFFFF' }, // bronze
  PREMIUM: { hex: '#ef4444', textHex: '#FFFFFF' }, // red-500
  ALU:     { hex: '#3b82f6', textHex: '#FFFFFF' }, // blue-500
}

const SERIES_DEFAULT = { hex: '#1e3a5f', textHex: '#FFFFFF' }

/**
 * Returns the accent hex color for a given product series.
 * @param {string} series - e.g. "PRIME", "ECONOMY"
 * @returns {string} - hex color string
 */
export function getSeriesColor(series) {
  return (SERIES_COLOR_MAP[series?.toUpperCase()] || SERIES_DEFAULT).hex
}

/**
 * Returns an inline-style object { backgroundColor, color } for a series badge/highlight.
 * @param {string} series - e.g. "PRIME", "ECONOMY"
 * @returns {{ backgroundColor: string, color: string }}
 */
export function getSeriesBg(series) {
  const entry = SERIES_COLOR_MAP[series?.toUpperCase()] || SERIES_DEFAULT
  return { backgroundColor: entry.hex, color: entry.textHex }
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

/**
 * Generate random ID
 * @param {number} length - ID length
 * @returns {string} - Random ID
 */
export function generateId(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('')
}

/**
 * Parse URL search params
 * @param {string} search - Search string
 * @returns {Object} - Params object
 */
export function parseSearchParams(search) {
  const params = new URLSearchParams(search)
  const result = {}
  for (const [key, value] of params) {
    result[key] = value
  }
  return result
}

/**
 * Build URL with search params
 * @param {string} base - Base URL
 * @param {Object} params - Params object
 * @returns {string} - Full URL
 */
export function buildUrl(base, params = {}) {
  const url = new URL(base, window.location.origin)
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value)
    }
  })
  return url.toString()
}

export default {
  slugify,
  capitalizeWords,
  truncate,
  formatPhone,
  debounce,
  throttle,
  isInViewport,
  getScrollPercentage,
  copyToClipboard,
  generateId,
  parseSearchParams,
  buildUrl,
}
