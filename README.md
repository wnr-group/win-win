# Win Win Tooling Solutions - Website

A modern, premium, high-conversion React website for Win Win Tooling Solutions - an industrial tooling company.

## Tech Stack

- **React 18** with Vite for fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React Helmet Async** for SEO

## Features

### Pages
- **Home** - Hero, featured brands, why choose us, industries served, testimonials
- **Products** - Filterable product catalog with search
- **Product Detail** - Individual product pages with specs and inquiry form
- **About** - Company story, mission, vision, capabilities
- **Contact** - Contact form, map, RFQ submission

### Conversion Features
- Sticky header CTA
- Floating "Request Quote" button
- Quote request modal
- WhatsApp contact button
- Lead capture forms

### SEO
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Clean URL structure
- Sitemap ready

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd winwin-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
winwin-website/
├── public/
│   └── assets/              # Product images and assets
├── src/
│   ├── components/
│   │   ├── common/          # Shared components (Modal, WhatsApp, etc.)
│   │   ├── home/            # Home page components
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── products/        # Product-related components
│   │   └── ui/              # Base UI components (Button, Card, etc.)
│   ├── data/
│   │   ├── products.json    # Product data
│   │   └── csvParser.js     # CSV parsing utility
│   ├── hooks/
│   │   └── useProducts.js   # Product data hooks
│   ├── pages/               # Page components
│   ├── styles/
│   │   └── index.css        # Global styles & Tailwind
│   ├── utils/
│   │   └── helpers.js       # Utility functions
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Color Palette

- **Deep Navy**: #002d62
- **Industrial Orange**: #f05a28
- **Dark Gray**: #2c2c2c
- **Light Gray**: #f5f5f5

## Typography

- **Headings**: Poppins, Inter
- **Body**: Inter, Roboto

## Adding Products

Products are stored in `src/data/products.json`. To add a new product:

```json
{
  "id": "BRAND-0001",
  "category": "Category Name",
  "brand": "Brand Name",
  "brandSlug": "brand-name",
  "productName": "Product Name",
  "slug": "product-name",
  "productType": "Type",
  "materialCompatibility": "Materials",
  "application": "Application",
  "keyFeatures": "Feature 1, Feature 2",
  "features": ["Feature 1", "Feature 2"],
  "image": "/assets/image.png",
  "description": "Product description...",
  "specifications": {
    "Key": "Value"
  }
}
```

## CSV Import

Use the CSV parser utility to convert CSV data to JSON:

```javascript
import { parseCSV } from './data/csvParser'

const csvContent = `Category,Brand,...`
const products = parseCSV(csvContent)
```

## Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```

Compatible with:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting
- Any static host

## License

Proprietary - Win Win Tooling Solutions
