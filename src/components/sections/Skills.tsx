import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import type { Skill } from '@/types'

const categories: Record<Skill['category'], string> = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  automation: 'Automation & Tools',
  databases: 'Databases',
  cloud: 'Cloud',
  ml: 'Machine Learning',
  ai: 'AI & Agents',
  dataengineering: 'Data Engineering',
  bigdata: 'Big Data',
  sql: 'SQL Skills',
  databricks: 'Databricks',
  reporting: 'Reporting',
  mlops: 'MLOps',
  devops: 'DevOps',
  practices: 'Software Engineering Practices',
  llms: 'LLMs',
}

const categoryOrder: Skill['category'][] = [
  'dataengineering',
  'bigdata',
  'sql',
  'databricks',
  'cloud',
  'languages',
  'frameworks',
  'databases',
  'reporting',
  'automation',
  'ml',
  'ai',
  'llms',
  'mlops',
  'devops',
  'practices',
]

export function Skills() {
  const skillsByCategory = categoryOrder
    .map((category) => ({
      category,
      label: categories[category],
      skills: skills.filter((s) => s.category === category),
    }))
    .filter((group) => group.skills.length > 0)

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-slate-400 mb-12 max-w-2xl"
        >
          Data engineering and cloud analytics alongside full-stack, ML, and GenAI skills — from Spark and
          Databricks to production software and AI systems.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsByCategory.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-surface-800 border border-surface-700 rounded-xl p-6"
            >
              <h3 className="font-display font-semibold text-primary-400 mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-surface-700/50 text-slate-300 rounded-lg text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
