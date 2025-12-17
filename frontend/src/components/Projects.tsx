import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Star, GitFork, Code } from 'lucide-react'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
}

interface FeaturedProject {
  id: string
  name: string
  description: string
  liveUrl: string
  githubUrl?: string
  technologies: string[]
  featured?: boolean
}

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // GitHub username - bisa diganti sesuai kebutuhan
  const githubUsername = 'Ricii03'

  // Featured Projects - Project khusus dengan link live demo
  const featuredProjects: FeaturedProject[] = [
    {
      id: '1',
      name: 'ASAH Frontend',
      description: 'Frontend application dengan fitur modern dan responsive design',
      liveUrl: 'https://asah-frontend.vercel.app/',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      featured: true,
    },
    {
      id: '2',
      name: 'Analisis SAW & WP',
      description: 'Aplikasi analisis komparasi metode SAW (Simple Additive Weighting) dan WP (Weighted Product) untuk pemilihan layanan video streaming',
      liveUrl: 'https://analisis-saw-wp.vercel.app/',
      technologies: ['React', 'JavaScript', 'CSS'],
      featured: true,
    },
  ]

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12`
        )
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        
        const data: GitHubRepo[] = await response.json()
        // Filter out forks dan repository yang tidak relevan jika perlu
        const filteredData = data.filter(repo => !repo.name.includes('test') && !repo.name.includes('demo'))
        setRepos(filteredData)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        console.error('Error fetching GitHub repos:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [githubUsername])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  }

  const getLanguageColor = (language: string | null) => {
    if (!language) return 'bg-gray-500'
    
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-orange-500',
      'C++': 'bg-blue-600',
      CSS: 'bg-purple-500',
      HTML: 'bg-orange-500',
      PHP: 'bg-indigo-500',
      Ruby: 'bg-red-500',
      Go: 'bg-cyan-500',
      Rust: 'bg-gray-800',
      Swift: 'bg-orange-400',
      Kotlin: 'bg-purple-600',
    }
    
    return colors[language] || 'bg-gray-500'
  }

  return (
    <section
      id="projects"
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
          <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Featured projects and contributions on GitHub
            </p>
          </motion.div>

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              >
                Featured Projects
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative h-full"
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1 bg-primary-600 text-white text-xs font-bold rounded-full shadow-lg">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-end gap-3">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            title="View on GitHub"
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                          title="Live Demo"
                        >
                          <ExternalLink size={16} />
                          View Live
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* GitHub Projects Section */}
          <div className="mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            >
              GitHub Repositories
            </motion.h3>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>
              <p className="text-gray-600 dark:text-gray-400">
                Please check your GitHub username or try again later.
              </p>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full"
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                        </h3>
                        {repo.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {repo.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Topics/Tags */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-500">
                        Updated {formatDate(repo.updated_at)}
                      </span>
                      <div className="flex gap-2">
                        <motion.a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          title="View on GitHub"
                        >
                          <Github size={18} />
                        </motion.a>
                        {repo.homepage && (
                          <motion.a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            title="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && repos.length === 0 && (
            <div className="text-center py-20">
              <Code size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                No repositories found. Check your GitHub username.
              </p>
            </div>
          )}

          {/* View More Link */}
          {!loading && !error && repos.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <motion.a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
                View All on GitHub
              </motion.a>
            </motion.div>
          )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

