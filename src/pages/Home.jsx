import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import BrandSlider from '../components/home/BrandSlider'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Industries from '../components/home/Industries'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'

export default function Home({ openQuoteModal }) {
  return (
    <>
      <Helmet>
        <title>Win Win Tooling - Premium Industrial Tooling Solutions</title>
        <meta
          name="description"
          content="Win Win Tooling Solutions - Your trusted partner for world-class cutting tools, precision equipment, and custom machining solutions. PCD tools, carbide end mills, tool holders, and more."
        />
        <link rel="canonical" href="https://winwintoolingsolutions.in/" />

        {/* Organization Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Win Win Tooling Solutions",
            "url": "https://winwintoolingsolutions.in",
            "logo": "https://winwintoolingsolutions.in/assets/winwin-logo.jpg",
            "description": "Premium industrial tooling solutions provider, offering world-class cutting tools, tool holders, and precision machining equipment.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Lenin Nagar, Ambattur",
              "addressLocality": "Chennai",
              "postalCode": "600053",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-73387-17209",
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
            "name": "Win Win Tooling Solutions",
            "image": "https://winwintoolingsolutions.in/assets/winwin-logo.jpg",
            "url": "https://winwintoolingsolutions.in",
            "telephone": "+91-73387-17209",
            "email": "winwintoolingsolutions@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Lenin Nagar, Ambattur",
              "addressLocality": "Chennai",
              "postalCode": "600053",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 13.1143,
              "longitude": 80.1548
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
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <CTA openQuoteModal={openQuoteModal} />
    </>
  )
}
