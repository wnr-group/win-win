export default function ExternalBrandInfo({ brand }) {
  if (!brand) return null;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-card">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Brand Image */}
        <div className="flex justify-center">
          <img
            src={brand.image}
            alt={brand.name}
            className="rounded-xl shadow-md max-h-64 object-contain"
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

          <a
            href={brand.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-navy-500 text-white rounded-lg hover:bg-navy-600 transition"
          >
            Explore More Products →
          </a>
        </div>
      </div>
    </div>
  );
}