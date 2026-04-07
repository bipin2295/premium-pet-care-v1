'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Premium Care for Your Best Friend.
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Professional dog walking and home boarding services you can trust.
            </p>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors inline-block"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1552053831-71594a27632d"
              alt="Happy dog"
              width={500}
              height={500}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
