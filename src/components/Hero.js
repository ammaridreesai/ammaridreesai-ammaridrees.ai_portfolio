'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { portfolioContent } from '../../content/content'
import avatarImage from '../assets/ammar.jpeg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export default function Hero() {
  const { personal } = portfolioContent

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={avatarImage}
            alt={`${personal.name} avatar`}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-glow ring-2 ring-[var(--ring)]"
            width={256}
            height={256}
            priority
          />
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="gradient-text">
            {personal.name}
          </span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 dark:text-gray-400 mb-8 font-light"
          variants={itemVariants}
        >
          {personal.title}
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {personal.bio}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-6 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
          
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            GitHub
          </motion.a>
          
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={20} />
            LinkedIn
          </motion.a>

          <motion.a
            href="/api/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View CV
          </motion.a>

          <motion.a
            href="/api/resume?download=1"
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="animate-bounce cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={32} className="text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}