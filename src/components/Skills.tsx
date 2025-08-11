import { motion } from 'framer-motion'
import { Code, Database, BarChart3, Palette, Server, Cloud } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 88, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', level: 80, color: 'from-gray-700 to-black' },
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 82, color: 'from-gray-600 to-gray-700' },
        { name: 'Python', level: 78, color: 'from-blue-500 to-yellow-500' },
        { name: 'PHP', level: 75, color: 'from-purple-500 to-blue-600' },
        { name: 'Laravel', level: 70, color: 'from-red-500 to-red-600' },
      ]
    },
    {
      icon: Database,
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 85, color: 'from-green-500 to-green-600' },
        { name: 'MySQL', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'Redis', level: 70, color: 'from-red-500 to-red-600' },
        { name: 'Docker', level: 72, color: 'from-blue-500 to-blue-600' },
      ]
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      skills: [
        { name: 'Python Pandas', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'NumPy', level: 80, color: 'from-blue-600 to-blue-700' },
        { name: 'Matplotlib', level: 75, color: 'from-orange-500 to-red-500' },
        { name: 'Seaborn', level: 70, color: 'from-red-500 to-pink-500' },
        { name: 'Jupyter', level: 85, color: 'from-orange-500 to-orange-600' },
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 75, color: 'from-orange-500 to-orange-600' },
        { name: 'Vercel', level: 85, color: 'from-black to-gray-700' },
        { name: 'Netlify', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'Git', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'CI/CD', level: 70, color: 'from-blue-500 to-blue-600' },
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 75, color: 'from-purple-500 to-pink-500' },
        { name: 'Adobe XD', level: 70, color: 'from-pink-500 to-purple-500' },
        { name: 'Photoshop', level: 65, color: 'from-blue-500 to-blue-600' },
        { name: 'Illustrator', level: 60, color: 'from-orange-500 to-orange-600' },
        { name: 'InDesign', level: 55, color: 'from-red-500 to-pink-500' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-dark-700 rounded-lg p-6 hover:bg-dark-600 transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Other <span className="text-gradient">Technologies</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'GraphQL', 'REST API', 'Webpack', 'Vite', 'Redux', 'Zustand',
              'Jest', 'Testing Library', 'Storybook', 'ESLint', 'Prettier', 'Husky',
              'Nginx', 'Apache', 'Linux', 'MacOS', 'Windows', 'VS Code',
              'Postman', 'Insomnia', 'MongoDB Compass', 'Tableau', 'Power BI', 'Excel'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-700 hover:bg-dark-600 rounded-lg p-4 text-center transition-all duration-200 cursor-pointer"
              >
                <span className="text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
