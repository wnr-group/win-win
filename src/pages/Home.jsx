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
        <title>Win Win Tooling Solutions - Premium Industrial Tooling & Machining Solutions</title>
        <meta
          name="description"
          content="Win Win Tooling Solutions - Your trusted partner for world-class cutting tools, precision equipment, and custom machining solutions. PCD tools, carbide end mills, tool holders, and more."
        />
        <link rel="canonical" href="https://winwintoolingsolutions.in/" />

        {/* Structured Data */}
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
            }
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
