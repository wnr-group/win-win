import { useState, useEffect } from "react"
import QuoteModal from "../common/QuoteModal"

export default function ExternalBrandInfo({ brand }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isBrandImageLoaded, setIsBrandImageLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState({})

  const images = brand?.carouselImages || []
  const imageCount = images.length

  // Reset state when brand changes
  useEffect(() => {
    setCurrentIndex(0)
    setIsLoading(true)
    setIsBrandImageLoaded(false)
    setImagesLoaded({})
  }, [brand?.slug])

  // Preload current image
  useEffect(() => {
    if (imageCount === 0) {
      setIsLoading(false)
      return
    }

    const currentImage = images[currentIndex]
    if (imagesLoaded[currentImage]) {
      setIsLoading(false)
      return
    }

    const img = new Image()
    img.onload = () => {
      setImagesLoaded(prev => ({ ...prev, [currentImage]: true }))
      setIsLoading(false)
    }
    img.onerror = () => {
      setIsLoading(false)
    }
    img.src = currentImage
  }, [currentIndex, images, imageCount, imagesLoaded])

  // Automatic image change
  useEffect(() => {
    if (imageCount === 0 || isLoading) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageCount)
    }, 3000)

    return () => clearInterval(interval)
  }, [imageCount, isLoading])

  // Next image
  const nextSlide = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev + 1) % imageCount)
  }

  // Previous image
  const prevSlide = () => {
    setIsLoading(true)
    setCurrentIndex((prev) => (prev === 0 ? imageCount - 1 : prev - 1))
  }

  if (!brand) return null

  return (
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Brand Image */}
        <div className="flex justify-center min-h-[200px] items-center">
          {!isBrandImageLoaded && (
            <div className="flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-4 border-gray-200 border-t-navy-500 rounded-full animate-spin" />
            </div>
          )}
          <img
            key={brand.slug}
            src={brand.image}
            alt={brand.name}
            className={`rounded-xl shadow-md max-h-64 object-contain transition-opacity duration-300 ${
              isBrandImageLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
            onLoad={() => setIsBrandImageLoaded(true)}
          />
        </div>

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {brand.name}
          </h2>

          <p className="text-gray-600 mb-6">
            {brand.description}
          </p>

          {brand.ctaType === "quote" ? (
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-block px-6 py-3 bg-navy-500 text-white rounded-lg hover:bg-navy-600 transition"
            >
              Request Quote →
            </button>
          ) : (
            <a
              href={brand.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-navy-500 text-white rounded-lg hover:bg-navy-600 transition"
            >
              Explore More Products →
            </a>
          )}
        </div>
      </div>

      {/* IMAGE CAROUSEL */}
      {images.length > 0 && (
        <div className="mt-10">
          {/* Main Image */}
          <div className="relative bg-gray-50 rounded-xl p-6 flex items-center justify-center min-h-[500px] border border-gray-100 shadow-sm">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-navy-500 rounded-full animate-spin" />
                <p className="text-gray-400 text-sm mt-3">Loading...</p>
              </div>
            ) : (
              <img
                key={`${brand.slug}-${currentIndex}`}
                src={images[currentIndex]}
                alt="product"
                className="max-h-[460px] w-full object-contain transition-all duration-500 hover:scale-105"
              />
            )}

            {/* Prev */}
            <button
              onClick={prevSlide}
              disabled={isLoading}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white shadow-md px-3 py-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              ◀
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white shadow-md px-3 py-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              ▶
            </button>
          </div>

          {/* Image indicator dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={`${brand.slug}-dot-${index}`}
                onClick={() => {
                  setIsLoading(true)
                  setCurrentIndex(index)
                }}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  currentIndex === index
                    ? "bg-navy-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        product={{ productName: brand.name }}
      />
    </div>
  )
}
