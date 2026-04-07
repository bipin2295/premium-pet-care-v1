import Link from 'next/link'
import { PawPrint } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center text-center px-4">
      <PawPrint size={64} className="text-primary mb-4" />
      <h1 className="text-4xl font-bold text-primary mb-2">
        Ruh-roh! You've wandered off the trail.
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        The page you're looking for seems to have gone for a walk.
      </p>
      <Link
        href="/"
        className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFoundPage
