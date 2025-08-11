import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence with real-time data visualization, charts, and reporting capabilities. Built with Python, Pandas, and React.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Pandas', 'React', 'D3.js', 'FastAPI'],
      category: 'Data Analysis',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration, and project tracking features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning Model',
      description: 'Predictive analytics model for customer behavior analysis using machine learning algorithms and data preprocessing techniques.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
      category: 'Machine Learning',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and interactive elements.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'API Gateway Service',
      description: 'Microservices API gateway with authentication, rate limiting, and load balancing capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker', 'Nginx'],
      category: 'Backend Development',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === featuredProjects.length - 1 ? 0 : prevIndex + 1
      } else {
        return prevIndex === 0 ? featuredProjects.length - 1 : prevIndex - 1
      }
    })
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work, demonstrating my skills in web development, data analysis, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="relative mb-16">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full">
                  {/* Project Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900">
                    <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl font-bold opacity-20">Project {currentIndex + 1}</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full mb-3">
                          {featuredProjects[currentIndex].category}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {featuredProjects[currentIndex].title}
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                          {featuredProjects[currentIndex].description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProjects[currentIndex].technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <motion.a
                          href={featuredProjects[currentIndex].liveUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-primary flex items-center space-x-2"
                        >
                          <Eye className="w-5 h-5" />
                          <span>Live Demo</span>
                        </motion.a>
                        <motion.a
                          href={featuredProjects[currentIndex].githubUrl}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-secondary flex items-center space-x-2"
                        >
                          <Github className="w-5 h-5" />
                          <span>View Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 hover:bg-dark-700 rounded-full flex items-center justify-center text-white transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 hover:bg-dark-700 rounded-full flex items-center justify-center text-white transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            All <span className="text-gradient">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-dark-700 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-200"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold opacity-60">{project.title}</div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-400 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-600 text-gray-300 text-xs rounded border border-dark-500"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-dark-600 text-gray-400 text-xs rounded border border-dark-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 inline mr-1" />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-dark-600 hover:bg-dark-500 text-gray-300 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 inline mr-1" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
