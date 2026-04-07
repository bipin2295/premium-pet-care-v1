import React from 'react'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Paws & Play. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/portfolio" className="hover:underline">Portfolio</Link>
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <a href="tel:+1234567890" className="flex items-center hover:underline">
              <Phone size={18} className="mr-2" />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:hello@pawsandplay.com" className="flex items-center hover:underline">
              <Mail size={18} className="mr-2" />
              <span>hello@pawsandplay.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
