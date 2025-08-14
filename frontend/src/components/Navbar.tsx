import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Check which section is in view
      if (window.scrollY < 100) {
        setActiveSection('home')
      } else {
        const sections = ['hero', 'about']
        const scrollPosition = window.scrollY + 100
        
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section === 'hero' ? 'home' : section)
              break
            }
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex justify-center px-6 py-6">
        <div className={`flex items-center transition-all duration-300 rounded-full px-8 py-2 ${
          scrolled 
            ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-lg border border-gray-200/30 dark:border-gray-700/30'
            : ''
        }`}>
          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            {['Home', 'About'].map((item, index) => {
              const href = item === 'Home' ? '#' : `#${item.toLowerCase()}`
              return (
              <motion.a
                key={item}
                href={href}
                whileHover={{ opacity: 0.7 }}
                className={`transition-all duration-300 font-normal text-lg ${
                  activeSection === item.toLowerCase() 
                    ? 'text-gray-900 dark:text-white font-medium' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                {item}
              </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar