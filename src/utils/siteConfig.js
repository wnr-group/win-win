// Site configuration - uses environment variable for domain
// Set VITE_SITE_URL in your .env file for each environment

export const SITE_URL = import.meta.env.VITE_SITE_URL || 'http://localhost:5173'

export const siteConfig = {
  name: 'Win Win Tooling Solutions',
  shortName: 'Win Win Tooling',
  description: 'Premium industrial tooling solutions provider, offering world-class cutting tools, tool holders, and precision machining equipment.',
  url: SITE_URL,
  ogImage: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/assets/winwin-logo.jpg`,
  contact: {
    phone: '+91-73387-17209',
    email: 'admin@win-wintoolingsolutions.com',
    address: {
      street: "F3, Gokulam's Balaji Manor, Old no: 4, New no: 6, 2nd St, Lenin Nagar, Ambattur",
      city: 'Chennai',
      postalCode: '600053',
      region: 'Tamil Nadu',
      country: 'IN',
    },
    geo: {
      latitude: 13.1143,
      longitude: 80.1548,
    },
  },
  social: {
    // Add social media handles when available
    // twitter: '@winwintooling',
    // facebook: 'winwintoolingsolutions',
    // linkedin: 'win-win-tooling-solutions',
  },
}

// Helper to build full URLs
export const getFullUrl = (path = '') => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${cleanPath}`
}
