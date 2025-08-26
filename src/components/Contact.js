'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react'
import { portfolioContent } from '../../content/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 }
  }
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { personal } = portfolioContent

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          variants={itemVariants}
        >
          Let's <span className="gradient-text">Connect</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I'm always open to discussing new opportunities, creative ideas, or just having a chat about technology and design.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href={`mailto:${personal.email}`}
            className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg group"
            variants={iconVariants}
            whileHover="hover"
          >
            <motion.div
              className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white"
              whileHover={{ boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            >
              <Mail size={24} />
            </motion.div>
            <span className="font-medium text-gray-900 dark:text-white">Email</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{personal.email}</span>
          </motion.a>

          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg group"
            variants={iconVariants}
            whileHover="hover"
          >
            <motion.div
              className="p-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full text-white"
              whileHover={{ boxShadow: "0 0 30px rgba(55, 65, 81, 0.5)" }}
            >
              <Github size={24} />
            </motion.div>
            <span className="font-medium text-gray-900 dark:text-white">GitHub</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">@ammaridrees.ai</span>
          </motion.a>

          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg group"
            variants={iconVariants}
            whileHover="hover"
          >
            <motion.div
              className="p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full text-white"
              whileHover={{ boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)" }}
            >
              <Linkedin size={24} />
            </motion.div>
            <span className="font-medium text-gray-900 dark:text-white">LinkedIn</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Connect</span>
          </motion.a>

          <motion.div
            className="flex flex-col items-center gap-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            variants={iconVariants}
            whileHover="hover"
          >
            <motion.div
              className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-white"
              whileHover={{ boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)" }}
            >
              <MapPin size={24} />
            </motion.div>
            <span className="font-medium text-gray-900 dark:text-white">Location</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{personal.location}</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
        >
          <motion.a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium text-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Send me a message
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}