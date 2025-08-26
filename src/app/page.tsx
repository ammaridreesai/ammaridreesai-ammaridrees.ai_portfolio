'use client'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from '../components/AnimatedBackground'
import ScrollProgress from '../components/ScrollProgress'
import ThemeToggle from '../components/ThemeToggle'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

export default function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="home"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative min-h-screen"
      >
        <AnimatedBackground />
        <ScrollProgress />
        <ThemeToggle />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </motion.div>
    </AnimatePresence>
  )
}