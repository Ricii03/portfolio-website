import { motion } from 'framer-motion'
import { User, Briefcase, GraduationCap, Award, Globe, Code } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '3+' },
    { icon: Award, label: 'Projects Completed', value: '25+' },
    { icon: Globe, label: 'Countries Worked', value: '5+' },
    { icon: Code, label: 'Lines of Code', value: '100K+' },
  ]

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Web Developer',
      company: 'Tech Company',
      description: 'Leading development of modern web applications using React, Node.js, and cloud technologies.'
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Built scalable web applications and implemented data analysis solutions for business insights.'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Developed responsive websites and learned modern web development practices.'
    }
  ]

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'University Name',
      year: '2020',
      description: 'Specialized in Software Engineering and Data Science'
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'University Name',
      year: '2018',
      description: 'Focused on Web Development and Database Management'
    }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate web developer and data analyst with expertise in creating innovative digital solutions 
            and transforming complex data into meaningful insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-white" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors duration-200"
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated professional with a passion for technology and innovation. My journey in web development 
                and data analysis has equipped me with the skills to create impactful digital solutions that drive business growth.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building modern, scalable web applications using cutting-edge technologies. 
                Additionally, I excel at analyzing complex datasets to extract valuable insights that inform strategic decisions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. 
                Every project I work on is an opportunity to learn, grow, and deliver exceptional results.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Work <span className="text-gradient">Experience</span>
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 p-6 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors duration-200"
              >
                <div className="md:w-1/4">
                  <div className="text-primary-500 font-semibold">{exp.year}</div>
                  <div className="text-white font-bold text-lg">{exp.title}</div>
                  <div className="text-gray-400">{exp.company}</div>
                </div>
                <div className="md:w-3/4">
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            <span className="text-gradient">Education</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-dark-700 rounded-lg hover:bg-dark-600 transition-colors duration-200"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-500 mr-3" />
                  <div>
                    <div className="text-white font-bold text-lg">{edu.degree}</div>
                    <div className="text-gray-400">{edu.school}</div>
                  </div>
                </div>
                <div className="text-primary-500 font-semibold mb-2">{edu.year}</div>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
