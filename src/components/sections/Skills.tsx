import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import type { Skill } from '@/types'

const categories: Record<Skill['category'], string> = {
  programming: 'Programming & Web Technologies',
  frontend: 'Frontend Development',
  backend: 'Backend & APIs',
  frameworks: 'Frameworks & Tools',
  databases: 'Databases & Systems',
  cloud: 'Cloud Technologies',
}

const categoryOrder: Skill['category'][] = ['programming', 'frontend', 'backend', 'frameworks', 'databases', 'cloud']

export function Skills() {
  const skillsByCategory = categoryOrder.map((category) => ({
    category,
    label: categories[category],
    skills: skills.filter((s) => s.category === category),
  })).filter((group) => group.skills.length > 0)

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-slate-400 mb-12 max-w-2xl"
        >
          Technologies and tools I work with to build production-grade systems.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsByCategory.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
