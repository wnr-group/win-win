# AGENTS.md - AI Agent Guidelines for Win Win Tooling Solutions Website

## Project Overview
This is a React + Vite website for Win Win Tooling Solutions, an industrial tooling company based in Chennai, India.

## Tech Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Color Theme
Based on the company logo (navy blue + green):

| Color | Tailwind Class | Hex | Usage |
|-------|---------------|-----|-------|
| Navy (Primary) | `navy-500` | `#1a3a5c` | Headers, navigation, primary buttons |
| Green (Accent) | `green-500` | `#4a9b4a` | CTAs, highlights, accents, hover states |
| Green Light | `green-400` | `#77c477` | Text accents, icons |
| Gray | `gray-*` | Standard | Text, backgrounds |

### Color Usage Rules
- **Primary buttons**: Use `green-500` with `hover:green-600`
- **Secondary buttons**: Use `navy-500` with `hover:navy-600`
- **Accent text**: Use `text-green-500` or `text-green-400`
- **Links hover**: Use `hover:text-green-400`
- **Badges**: Use `bg-green-100 text-green-700` for accent, `bg-navy-100 text-navy-700` for primary
- **Icons**: Use `text-green-400` for accent icons

## File Structure
```
src/
├── components/
│   ├── common/          # Shared components (FloatingCTA, QuoteModal, WhatsApp)
│   ├── home/            # Homepage sections (Hero, BrandSlider, CTA, etc.)
│   ├── layout/          # Header, Footer, Layout wrapper
│   ├── products/        # Product-related components
│   └── ui/              # Reusable UI components (Button, Badge, Input, etc.)
├── data/
│   └── products.json    # Product data
├── pages/               # Route pages (Home, Products, About, Contact)
├── styles/
│   └── index.css        # Global styles and Tailwind utilities
└── hooks/               # Custom React hooks
```

## Key CSS Classes

### Container
```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
```

### Section Padding
```css
.section-padding {
  @apply py-16 md:py-24 lg:py-32;
}
```

### Cards
```css
.card {
  @apply bg-white rounded-2xl shadow-card transition-all duration-300;
}
.shadow-card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
.shadow-card-hover: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
```

### Gradients
```css
.gradient-navy: linear-gradient(135deg, #002d62 0%, #001f42 100%)
.gradient-green: linear-gradient(135deg, #4a9b4a 0%, #3f8540 100%)
```

## Component Patterns

### Buttons
Use the `Button` component from `src/components/ui/Button.jsx`:
- `variant="primary"` - Green button (main CTA)
- `variant="secondary"` - Navy button
- `variant="outline"` - Navy outline
- `variant="outline-white"` - White outline (on dark backgrounds)

### Badges
Use the `Badge` component:
- `variant="accent"` - Green badge
- `variant="navy"` - Navy badge

### Motion Animations
Standard animation pattern:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
>
```

For scroll-triggered:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```

## Brand Slider
Located in `src/components/home/BrandSlider.jsx`. Uses CSS animation for infinite scroll:
- Animation defined in `src/styles/index.css` as `.animate-scroll`
- Duplicates brand list for seamless loop
- Pauses on hover

## Important Conventions

1. **Never use orange colors** - The theme was changed from orange to green
2. **Use `container-custom`** for consistent page width and padding
3. **Use Framer Motion** for all animations
4. **Use Lucide React** for icons
5. **Images** are stored in `public/assets/`
6. **Brand logos** are in `public/assets/brands/`

## Contact Information (for forms/footer)
- Phone: +91 73387 17209
- Email: winwintoolingsolutions@gmail.com
- Address: Lenin Nagar, Ambattur, Chennai - 600053
- Google Maps embed URL is in Contact.jsx

## Fonts
- Headings: Poppins (font-heading)
- Body: Inter (font-body)

## Build Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```
