import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
  Download,
  Send,
  CheckCircle,
  Package,
  Shield,
  Truck,
} from "lucide-react";
import { useState } from "react";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import productsData from "../data/products.json";

export default function ProductDetail({ openQuoteModal }) {
  const { brand, slug } = useParams();
  const navigate = useNavigate();

  const product = productsData.products.find(
    (p) => p.brandSlug === brand && p.slug === slug,
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link to="/products" className="text-green-500 hover:underline">
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const [thumbStartIndex, setThumbStartIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  // Combine main image + extra images safely
  const productImages = [product.image, ...(product.images || [])];

  // Get related products
  const relatedProducts = productsData.products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.brandSlug === product.brandSlug),
    )
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>
          {product.productName} - {product.brand} | Win Win Tooling Solutions
        </title>
        <meta name="description" content={product.description} />
        <link
          rel="canonical"
          href={`https://winwintoolingsolutions.in/products/${brand}/${slug}`}
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: product.productName,
            description: product.description,
            brand: {
              "@type": "Brand",
              name: product.brand,
            },
            category: product.category,
            image: `https://winwintoolingsolutions.in${product.image}`,
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <nav className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-navy-500">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-navy-500">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link
              to={`/products?brand=${brand}`}
              className="hover:text-navy-500"
            >
              {product.brand}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">
              {product.productName}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container-custom">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-navy-500 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-card sticky top-28">
                <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
                  <img
  src={productImages[selectedImage]}
  alt={product.productName}
  onClick={() => setIsPreviewOpen(true)}
  className="max-w-full max-h-full object-contain p-8 cursor-pointer"
/>
                </div>

                {/* Thumbnail Section */}
                {productImages.length > 1 && (
                  <div className="flex items-center justify-center gap-4 mt-6">
                    {/* Left Arrow - Scroll Thumbnails */}
                    <button
                      onClick={() =>
                        setThumbStartIndex((prev) => (prev > 0 ? prev - 1 : 0))
                      }
                      className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                    >
                      ‹
                    </button>

                    {/* Visible Thumbnails (4 at a time) */}
                    <div className="flex gap-4">
                      {productImages
                        .slice(thumbStartIndex, thumbStartIndex + 4)
                        .map((img, index) => {
                          const actualIndex = thumbStartIndex + index;

                          return (
                            <img
                              key={actualIndex}
                              src={img}
                              alt="thumb"
                              onMouseEnter={() => setSelectedImage(actualIndex)}
                              onClick={() => {
   
  setIsPreviewOpen(true)
}}
                              className={`w-20 h-20 object-contain bg-gray-50 rounded-lg cursor-pointer border-2 transition ${
                                selectedImage === actualIndex
                                  ? "border-green-500"
                                  : "border-gray-200"
                              }`}
                            />
                          );
                        })}
                    </div>

                    {/* Right Arrow - Scroll Thumbnails */}
                    <button
                      onClick={() =>
                        setThumbStartIndex((prev) =>
                          prev + 4 < productImages.length ? prev + 1 : prev,
                        )
                      }
                      className="bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Brand & Category */}
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="accent">{product.brand}</Badge>
                <Badge variant="navy">{product.category}</Badge>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.productName}
              </h1>

              {/* Product Type */}
              <p className="text-lg text-gray-600 mb-6">
                {product.productType}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Technical Specifications
                  </h3>
                  <div className="bg-gray-50 rounded-xl overflow-hidden">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specifications).map(
                          ([key, value], index) => (
                            <tr
                              key={key}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              <td className="px-4 py-3 text-sm font-medium text-gray-700 w-1/3">
                                {key}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-600">
                                {value}
                              </td>
                            </tr>
                          ),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Material Compatibility */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Material Compatibility
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.materialCompatibility.split("/").map((material) => (
                    <Badge key={material} variant="gray" size="lg">
                      {material.trim()}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={openQuoteModal}
                  icon={<Send className="w-5 h-5" />}
                >
                  Request Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Download className="w-5 h-5" />}
                >
                  Download Spec Sheet
                </Button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600">Quality Guaranteed</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Truck className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600">Secure Packaging</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.brandSlug}/${relatedProduct.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="aspect-product bg-gray-50 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.productName}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-green-500 font-medium mb-1">
                      {relatedProduct.brand}
                    </p>
                    <h3 className="font-semibold text-gray-900 group-hover:text-navy-500 transition-colors line-clamp-2">
                      {relatedProduct.productName}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      {isPreviewOpen && (
  <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
    <div className="bg-white w-[95%] h-[90vh] rounded-xl flex relative overflow-hidden">

      {/* Close Button */}
      <button
        onClick={() => setIsPreviewOpen(false)}
        className="absolute top-4 right-4 bg-gray-200 px-3 py-1 rounded-full"
      >
        ✕ Close
      </button>

      {/* LEFT - Vertical Thumbnails */}
      <div className="w-24 bg-gray-100 flex flex-col items-center gap-4 p-4 overflow-y-auto min-h-0">
        {productImages.map((img, index) => (
          <img
            key={index}
            src={img}
            onMouseEnter={() => setSelectedImage(index)}
            className={`w-16 h-16 object-contain cursor-pointer border-2 rounded ${
              selectedImage === index
                ? "border-green-500"
                : "border-gray-300"
            }`}
          />
        ))}
      </div>

      {/* CENTER - Main Image */}
      <div className="flex-1 flex items-center justify-center bg-gray-200">
        <img
          src={productImages[selectedImage]}
          className="max-h-[80%] object-contain"
        />
      </div>

      {/* RIGHT - Product Content (SAME DATA) */}
      <div className="w-[35%] p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          {product.productName}
        </h2>

        <p className="text-lg font-semibold mb-4">
          Brand: {product.brand}
        </p>

        <p className="mb-4 text-gray-600">
          {product.description}
        </p>

        {product.specifications && (
          <div>
            <h3 className="font-semibold mb-3">Specifications</h3>
            <ul className="space-y-2">
              {Object.entries(product.specifications).map(
                ([key, value]) => (
                  <li key={key} className="text-sm">
                    <strong>{key}:</strong> {value}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

    </div>
  </div>
)}
    </>
  );
}
