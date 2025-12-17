import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-24"
    >

      {/* Glass Effect Container */}
      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/90 dark:bg-gray-800/20 rounded-3xl border border-gray-200/50 dark:border-gray-700/30 shadow-xl dark:shadow-2xl p-8 md:p-12 lg:p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Section - Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-md">
                <div className="aspect-square w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-200 dark:bg-gray-700">
                  <img
                    src="/images/profile.jpg"
                    alt="Richy Julianto"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600"><span>Image not found</span></div>'
                      }
                    }}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.opacity = '1'
                    }}
                    style={{ opacity: 0, transition: 'opacity 0.3s' }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Section - Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  About <span className="text-gradient">Me</span>
                </h2>
                <div className="h-px w-20 bg-gray-300 dark:bg-gray-700"></div>
              </div>

              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Informatics Engineering student at Universitas Negeri Semarang specializing in Fullstack Web Development. 
                  Proficient in building responsive and scalable user interfaces using React.js and robust backend systems with Node.js.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Passionate about creating seamless web applications and eager to leverage technical skills in a challenging development role.
                </p>
              </div>

              {/* Name */}
              <div className="pt-4">
                <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Richy Julianto
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About