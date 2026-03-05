import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import BrandSlider from '../components/home/BrandSlider'
import ProductHighlights from '../components/home/ProductHighlights'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Industries from '../components/home/Industries'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'
import { siteConfig, getFullUrl } from '../utils/siteConfig'

export default function Home({ openQuoteModal }) {
  const { name, shortName, description, contact } = siteConfig

  return (
    <>
      <Helmet>
        <title>{shortName} - Premium Industrial Tooling Solutions</title>
        <meta
          name="description"
          content={`${name} - Your trusted partner for world-class cutting tools, precision equipment, and custom machining solutions. PCD tools, carbide end mills, tool holders, and more.`}
        />
        <link rel="canonical" href={getFullUrl('/')} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={getFullUrl('/')} />
        <meta property="og:title" content={`${shortName} - Premium Industrial Tooling Solutions`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={getFullUrl('/og-image.jpg')} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={name} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={getFullUrl('/')} />
        <meta name="twitter:title" content={`${shortName} - Premium Industrial Tooling Solutions`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={getFullUrl('/og-image.jpg')} />

        {/* Organization Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": name,
            "url": getFullUrl('/'),
            "logo": getFullUrl('/assets/winwin-logo.jpg'),
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": contact.address.street,
              "addressLocality": contact.address.city,
              "postalCode": contact.address.postalCode,
              "addressRegion": contact.address.region,
              "addressCountry": contact.address.country
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": contact.phone,
              "contactType": "sales"
            },
            "sameAs": []
          })}
        </script>

        {/* LocalBusiness Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": name,
            "image": getFullUrl('/assets/winwin-logo.jpg'),
            "url": getFullUrl('/'),
            "telephone": contact.phone,
            "email": contact.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": contact.address.street,
              "addressLocality": contact.address.city,
              "postalCode": contact.address.postalCode,
              "addressRegion": contact.address.region,
              "addressCountry": contact.address.country
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": contact.geo.latitude,
              "longitude": contact.geo.longitude
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <Hero openQuoteModal={openQuoteModal} />
      <BrandSlider />
      <ProductHighlights />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTA openQuoteModal={openQuoteModal} />
    </>
  )
}
