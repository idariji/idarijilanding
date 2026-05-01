
import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>
        
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Please try refreshing the page or go back to the homepage.
        </p>
        
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try again
          </button>
          
          <a
            href="/"
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  )
}