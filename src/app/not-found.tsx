import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            404
          </span>
        </h1>
        <div className="bg-gray-800 bg-opacity-30 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <div className="mt-8">
          <div className="text-2xl font-medium mb-4">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </div>
          <div className="text-gray-400 text-lg mb-8">
            It seems you&apos;ve ventured into uncharted territory. Let&apos;s get you back on track!
          </div>
        </div>
        <Link
          href="/"
          className="relative inline-block text-sm font-medium text-purple-400 group focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-400 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="relative block px-8 py-3 bg-gray-800 border border-current">
            <div className="flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Home
            </div>
          </span>
        </Link>
      </div>
      <div className="mt-16 animate-bounce">
        <svg
          className="w-16 h-16 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
    </div>
  )
}