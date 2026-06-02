import { motion } from 'framer-motion'

const EDUCATION = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'University of Texas at Arlington',
    location: 'Arlington, TX',
    period: 'Aug 2024 – May 2026',
  },
  {
    degree: 'Bachelor of Technology, Computer Science & Engineering',
    school: 'G Narayanamma Institute of Technology',
    location: 'Hyderabad, India',
    period: 'Dec 2020 – May 2024',
  },
]

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Distributed Systems',
  'Machine Learning',
  'Artificial Intelligence',
  'Natural Language Processing',
  'Database Systems',
  'Software Engineering',
  'Cloud Computing',
]

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-surface-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {EDUCATION.map((item, index) => (
            <motion.article
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface-800 border border-surface-700 rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-white mb-1">{item.degree}</h3>
              <p className="text-primary-400 text-sm mb-1">{item.school}</p>
              <p className="text-slate-500 text-sm">
                {item.location} | {item.period}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-display font-semibold text-white mb-4">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {COURSEWORK.map((course) => (
              <span
                key={course}
                className="px-3 py-1.5 bg-surface-800 border border-surface-700 text-slate-300 rounded-lg text-sm"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
