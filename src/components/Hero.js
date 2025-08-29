'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Eye } from 'lucide-react'
import Image from 'next/image'
import { portfolioContent } from '../../content/content'
import avatarImage from '../assets/ammar.jpeg'
import { useState, useEffect } from 'react'

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
  const [typedName, setTypedName] = useState('');
  
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setTypedName(personal.name.slice(0, current + 1));
      current++;
      if (current === personal.name.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [personal.name]);

  // Function to handle CV viewing with error handling
  const handleViewCV = () => {
    try {
      // Try opening in new tab first
      window.open('/Ammar_Resume.pdf', '_blank');
    } catch (error) {
      console.error('Error opening CV:', error);
      // Fallback: try direct navigation
      window.location.href = '/Ammar_Resume.pdf';
    }
  };

  // Function to handle CV download with error handling
  const handleDownloadCV = () => {
    try {
      // Create a download link
      const link = document.createElement('a');
      link.href = '/Ammar_Resume.pdf';
      link.download = 'Ammar_Resume.pdf';
      link.target = '_blank';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab
      window.open('/Ammar_Resume.pdf', '_blank');
    }
  };

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
          whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
          animate={{ y: [0, -10, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
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
            {typedName}
            <span className="blinking-cursor">|</span>
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

          <motion.button
            onClick={handleViewCV}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={20} />
            View CV
          </motion.button>

          <motion.button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="animate-bounce cursor-pointer"
            animate={{ y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown size={32} className="text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating WhatsApp and Phone icons */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <a
          href="https://wa.me/923048736908"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-colors duration-300"
          title="Chat on WhatsApp"
        >
          <span className="w-8 h-8 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
              <g>
                <circle cx="16" cy="16" r="16" fill="#25D366"/>
                <path fill="#FFF" d="M24.5 20.6c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 4 .6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z"/>
              </g>
            </svg>
          </span>
        </a>
        <a
          href="tel:+923048736908"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg transition-colors duration-300"
          title="Call now"
        >
          <Phone size={28} className="text-white" />
        </a>
      </motion.div>
      
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </section>
  );
}