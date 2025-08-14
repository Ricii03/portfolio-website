import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Instagram, Github, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [scrambledText, setScrambledText] = useState('')
  const [isScrambling, setIsScrambling] = useState(true)
  
  const finalText = 'Richy Julianto'
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
  
  useEffect(() => {
    if (!isScrambling) return
    
    let iterations = 0
    const maxIterations = 50
    
    const interval = setInterval(() => {
      setScrambledText(
        finalText
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return finalText[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )
      
      if (iterations >= finalText.length) {
        clearInterval(interval)
        setIsScrambling(false)
        setScrambledText(finalText)
      }
      
      iterations += 1/3
    }, 50)
    
    return () => clearInterval(interval)
  }, [isScrambling])
  
  useEffect(() => {
    // Start scrambling after component mounts
    const timer = setTimeout(() => {
      setIsScrambling(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Glass Effect Container */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/20 dark:bg-dark-800/20 rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl p-8 md:p-12 lg:p-16"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient">Hi, I'm</span>
                <br />
                <span className="font-mono text-6xl md:text-8xl bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {scrambledText}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
                Web Developer & Data Analyst
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Passionate about creating innovative web solutions and transforming data into actionable insights. 
                Let's build something amazing together!
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-6 mb-12"
            >
              <motion.a
                href="https://www.linkedin.com/in/richy/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Linkedin size={24} />
              </motion.a>
              
              <motion.a
                href="https://www.instagram.com/_rchyy/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Instagram size={24} />
              </motion.a>
              
              <motion.a
                href="https://github.com/Ricii03"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="mailto:richy@example.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm rounded-full border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 dark:text-gray-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
  