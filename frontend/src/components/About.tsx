import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate web developer and data analyst with expertise in creating innovative digital solutions 
              and transforming complex data into meaningful insights.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 scale-105"></div>
                
                {/* Picture Container */}
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary-600 via-blue-600 to-purple-700 rounded-3xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl flex items-center justify-center overflow-hidden">
                    <img 
                      src="/images/profile.jpg" 
                      alt="Richy Julianto" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Who I Am</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I'm a dedicated professional with a passion for technology and innovation. My journey in web development 
                  and data analysis has equipped me with the skills to create impactful digital solutions that drive business growth.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I specialize in building modern, scalable web applications using cutting-edge technologies. 
                  Additionally, I excel at analyzing complex datasets to extract valuable insights that inform strategic decisions.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Approach</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. 
                  Every project I work on is an opportunity to learn, grow, and deliver exceptional results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About