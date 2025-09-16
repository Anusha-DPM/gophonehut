import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Phone Model Not Found</h2>
        <p className="text-gray-600 mb-8">
          The phone model you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/product-category/phone/apple"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Apple Phones
        </Link>
      </div>
    </div>
  )
}
