import { motion } from 'framer-motion'

const brands = [
  {
    name: 'Win Win End Mills',
    logo: '/assets/brands/winwin-endmills.jpg',
    url: '/products',
  },
  {
    name: 'Palbit',
    logo: '/assets/brands/palbit.svg',
    url: 'https://www.palbit.pt/en/home',
  },
  {
    name: 'Bilz',
    logo: '/assets/brands/bilz.png',
    url: 'https://www.bilz.com/in/',
  },
  {
    name: 'Tungaloy',
    logo: '/assets/brands/tungaloy.png',
    url: 'https://catalog.tungaloy.com/Index.aspx?lang=EN&GFSTYP=M',
  },
  {
    name: 'ETP',
    logo: '/assets/brands/etp.png',
    url: 'https://www.etp.se/en',
  },
  {
    name: 'Toolflo',
    logo: '/assets/brands/toolflo.png',
    url: 'https://webshop.toolflo.com',
  },
  {
    name: 'Emkay Tools',
    logo: '/assets/brands/emkay.jpg',
    url: 'https://emkaytoolsltd.com',
  },
  {
    name: 'Blum Novotest',
    logo: '/assets/brands/blum.svg',
    url: 'https://www.blum-novotest.com/in/',
  },
  {
    name: 'Speroni',
    logo: '/assets/brands/speroni.png',
    url: 'https://speroni.info/en/',
  },
  {
    name: 'Boehlerit',
    logo: '/assets/brands/boehlerit.png',
    url: 'https://www.boehlerit.com/en/',
  },
]

export default function BrandSlider() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container-custom mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-navy-100 text-navy-600 rounded-full text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted <span className="text-green-500">Brands</span> We Represent
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partnering with world-class manufacturers to deliver premium tooling solutions
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Slider */}
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          <div className="flex gap-8 pr-8">
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.url}
                target={brand.url.startsWith('/') ? '_self' : '_blank'}
                rel={brand.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-28 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center justify-center p-6 group-hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
          <div className="flex gap-8 pr-8">
            {brands.map((brand) => (
              <a
                key={`${brand.name}-duplicate`}
                href={brand.url}
                target={brand.url.startsWith('/') ? '_self' : '_blank'}
                rel={brand.url.startsWith('/') ? undefined : 'noopener noreferrer'}
                className="flex-shrink-0 group"
              >
                <div className="w-48 h-28 bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 flex items-center justify-center p-6 group-hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
