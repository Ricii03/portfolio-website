import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink, Newspaper } from 'lucide-react'

interface WorkExperience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | 'Present'
  description: string[]
  technologies?: string[]
  companyUrl?: string
  programDescription?: string
  cohort?: string
  imageUrl?: string
  newsUrl?: string
}

const WorkExperience = () => {
  // Data work experience - bisa ditambahkan sesuai kebutuhan
  const experiences: WorkExperience[] = [
    {
      id: '1',
      title: 'React & Back-End with AI Cohort',
      company: 'Asah led by Dicoding',
      location: 'Remote',
      startDate: 'Aug 2025',
      endDate: 'Jan 2026',
      cohort: 'React & Back-End with AI Cohort',
      programDescription: 'Asah led by Dicoding is an intensive technology training program designed for Indonesian university students to prepare them for careers in the tech industry.',
      description: [
        'Completed a comprehensive learning path of 12 courses covering Logic, Version Control (Git), Fullstack Web Development, and Artificial Intelligence basics.',
        'Acquired in-depth competency in building robust web applications using React.js for frontend and Node.js for backend, complemented by foundations in AWS Cloud and Generative AI.',
        'Capstone Project: AI Learning Insight - Designed and implemented the core architecture of an educational platform. Spearheaded the fullstack integration by connecting the React.js frontend with the Node.js backend API. Successfully managed the deployment pipeline to host the application live, ensuring performance and scalability.',
      ],
      technologies: ['React.js', 'Node.js', 'AWS Cloud', 'Generative AI', 'Git'],
    },
    {
      id: '2',
      title: 'Project Manager Intern',
      company: 'Dinas Kearsipan dan Perpustakaan Provinsi Jawa Tengah',
      location: 'Semarang, Indonesia',
      startDate: 'Mar 2025',
      endDate: 'Aug 2025',
      description: [
        'Led a development team to deliver two key projects: the E-Magang System using React.js and Laravel, and an Archive Service Chatbot using Python.',
        'Managed project lifecycles by defining scopes, monitoring progress, and coordinating between frontend and backend teams to ensure on-time delivery.',
        'Facilitated communication with stakeholders to gather requirements and produced comprehensive technical documentation for system handover and user guides.',
      ],
      technologies: ['React.js', 'Laravel', 'Python', 'Project Management'],
      imageUrl: '/workExperience/dinasArpus.png',
      newsUrl: 'https://unnes.ac.id/mahasiswa-unnes-luncurkan-e-magangan-dan-chatbot-arsip-di-dinas-kearsipan-jateng/',
    },
    {
      id: '3',
      title: 'Mobile Developer Cohort',
      company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
      location: 'Remote',
      startDate: 'Sep 2024',
      endDate: 'Jan 2025',
      cohort: 'Mobile Developer Cohort',
      programDescription: 'Bangkit Academy is an intensive career readiness program for Indonesian students, designed by Google in partnership with GoTo and Traveloka.',
      description: [
        'Assisted in leading the development lifecycle of FitJourney, a capstone mobile application dedicated to calorie tracking and fitness goal achievement.',
        'Designed high-fidelity UI/UX prototypes using Figma, specifically crafting an intuitive and visually appealing interface for the authentication module.',
        'Successfully engineered the login functionality using Kotlin, ensuring seamless user authentication and delivering a frictionless onboarding experience.',
      ],
      technologies: ['Kotlin', 'Figma', 'UI/UX Design', 'Mobile Development'],
      imageUrl: '/workExperience/bangkit.png',
    },
  ]

  return (
    <section
      id="experience"
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
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional journey and career milestones
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
                )}

                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Briefcase className="text-white" size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                            {experience.company}
                          </p>
                          {experience.companyUrl && (
                            <motion.a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                              <ExternalLink size={16} />
                            </motion.a>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>
                              {experience.startDate} - {experience.endDate}
                            </span>
                          </div>
                        </div>
                        {experience.programDescription && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3">
                            {experience.programDescription}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-primary-600 dark:text-primary-400 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Documentation Image */}
                    {experience.imageUrl && (
                      <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 min-h-[12rem] flex items-center justify-center">
                        <img
                          src={experience.imageUrl}
                          alt={`${experience.company} Documentation`}
                          className="w-full h-auto max-h-96 object-contain"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent) {
                              parent.innerHTML = '<div class="w-full h-48 flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">Documentation image</div>'
                            }
                          }}
                          onLoad={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.opacity = '1'
                          }}
                          style={{ opacity: 0, transition: 'opacity 0.3s' }}
                        />
                      </div>
                    )}

                    {/* Technologies */}
                    {experience.technologies && experience.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/50 dark:border-gray-700/50 mb-4">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* News Article Link */}
                    {experience.newsUrl && (
                      <motion.a
                        href={experience.newsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg transition-colors border border-blue-200 dark:border-blue-800"
                      >
                        <Newspaper size={16} />
                        <span className="text-sm font-medium">Read News Article</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {experiences.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <Briefcase size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                No work experience available yet.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience

