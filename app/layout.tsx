import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  title: {
    template: '%s | Paws & Play Premium Pet Care',
    default: 'Paws & Play | Dog Walking & Boarding',
  },
  description:
    'Paws & Play offers premium dog walking and home boarding services in the downtown area. Trustworthy, professional, and loving care for your best friend. Serving local pet owners with dedication and passion.',
  openGraph: {
    title: 'Paws & Play | Premium Dog Walking & Boarding',
    description:
      'Paws & Play offers premium dog walking and home boarding services in the downtown area. Trustworthy, professional, and loving care for your best friend.',
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Paws & Play Premium Pet Care',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80', // Placeholder image URL
        width: 1200,
        height: 630,
        alt: 'Paws & Play Logo or Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paws & Play | Premium Dog Walking & Boarding',
    description:
      'Paws & Play offers premium dog walking and home boarding services in the downtown area. Trustworthy, professional, and loving care for your best friend.',
    images: [
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    ], // Placeholder image URL
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-gray-800`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
