export default function GiftMerchandiseLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header placeholder */}
      <div className="h-16 bg-white border-b animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="hidden md:flex space-x-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero section placeholder */}
      <div className="bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#ff8c00] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-white/20 rounded mx-auto mb-6"></div>
            <div className="h-12 w-80 bg-white/20 rounded mx-auto mb-4"></div>
            <div className="h-12 w-64 bg-white/20 rounded mx-auto mb-8"></div>
            <div className="h-6 w-96 bg-white/20 rounded mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Gift cards grid placeholder */}
      <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-pulse">
            <div className="h-8 w-48 bg-gray-200 rounded mx-auto mb-4"></div>
            <div className="h-6 w-80 bg-gray-200 rounded mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 w-32 bg-gray-200 rounded mb-3"></div>
                  <div className="space-y-2 mb-6">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="h-4 w-full bg-gray-200 rounded"></div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-20 bg-gray-200 rounded"></div>
                    <div className="h-10 w-24 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}