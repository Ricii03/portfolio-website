import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'

interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  credentialUrl?: string
  imageUrl?: string
  description?: string
}

const Certificates = () => {
  // Data sertifikat - bisa ditambahkan sesuai kebutuhan
  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Belajar Pengembangan Aplikasi Android Intermediate',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      description: 'Sertifikat kompetensi dalam pengembangan aplikasi Android tingkat intermediate',
      credentialUrl: 'https://www.dicoding.com/certificates/JLX15YLM5Z72',
      imageUrl: '/sertifikat/android.png',
    },
    {
      id: '2',
      title: 'Belajar Fundamental Back-End dengan JavaScript',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      description: 'Sertifikat kompetensi dalam pengembangan back-end menggunakan JavaScript dengan teknologi AWS',
      credentialUrl: 'https://www.dicoding.com/certificates/JLX15YLM5Z72',
      imageUrl: '/sertifikat/image.png',
    },
    {
      id: '3',
      title: 'React Developer',
      issuer: 'Dicoding Indonesia',
      date: '2024',
      description: 'Sertifikat pengembangan aplikasi menggunakan React.js',
      credentialUrl: '#',
      imageUrl: '/sertifikat/react.png',
    },
  ]

  return (
    <section
      id="certificates"
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
              <span className="text-gradient">Certificates</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and achievements
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/60 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Certificate Image */}
                  {certificate.imageUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 min-h-[8rem] flex items-center justify-center">
                      <img
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        className="w-full h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = '<div class="w-full h-32 flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">Certificate image</div>'
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

                  {/* Icon (if no image) */}
                  {!certificate.imageUrl && (
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                        <Award className="text-white" size={24} />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {certificate.issuer}
                    </p>
                    {certificate.description && (
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 line-clamp-2">
                        {certificate.description}
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <Calendar size={14} />
                      <span>{certificate.date}</span>
                    </div>
                    {certificate.credentialUrl && (
                      <motion.a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        title="View Certificate"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State (if no certificates) */}
          {certificates.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <Award size={48} className="mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                No certificates available yet.
              </p>
            </motion.div>
          )}

          {/* View All Certificates Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://drive.google.com/drive/folders/1eI-mOoTUUa3N_q6E2k5jRLv90iRfSYNj?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <Award size={20} />
              View All Certificates
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates

