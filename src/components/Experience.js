'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { portfolioContent } from '../../content/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { experience } = portfolioContent

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="space-y-8">
          {experience.map((job) => (
            <motion.div
              key={job.id}
              className="relative pl-8 pb-8"
              variants={itemVariants}
              initial={{ scale: 0.95, rotate: -2, opacity: 0 }}
              animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0.95, rotate: -2, opacity: 0 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
              whileHover={{ x: 10, scale: 1.03, boxShadow: '0 8px 32px rgba(99,102,241,0.15)' }}
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />
              
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-x-1.5"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg glass-effect"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {job.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  {job.company}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium shimmer-tag"
                      whileHover={{ scale: 1.2, backgroundColor: '#a21caf', color: '#fff' }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 0.5 + techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}