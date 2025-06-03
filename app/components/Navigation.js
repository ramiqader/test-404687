'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              test
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/about" className="hover:underline px-3 py-2">
          about
        </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}