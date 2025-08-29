'use client'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { portfolioContent } from '../../content/content'

export default function Footer() {
  const { personal } = portfolioContent

  return (
    <footer className="py-8 px-4 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          className="flex items-center justify-center gap-2 text-gray-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Built with 
          <motion.span
            animate={{ scale: [1, 1.3, 1], y: [0, -8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <Heart size={16} className="text-red-500" fill="currentColor" />
          </motion.span>
          using Next.js, Tailwind CSS & Framer Motion
        </motion.p>
        
        <motion.p
          className="text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          © 2024 {personal.name}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}