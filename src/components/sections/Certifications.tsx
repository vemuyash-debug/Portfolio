import { motion } from 'framer-motion'

const CREDLY_URL =
  'https://www.credly.com/badges/c7250255-993e-42ae-bca7-22ec07ed1978/linked_in_profile'

const BADGE_FOCUS = [
  'Fundamentals of AI and machine learning on AWS',
  'Generative AI concepts and foundational models',
  'Applications of generative AI and prompt engineering fundamentals',
  'Responsible AI, transparency, fairness, and human oversight',
  'Security, privacy, and governance for AI solutions',
  'Using AWS AI/ML services in solution design conversations',
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-surface-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-slate-400 mb-10 max-w-2xl"
        >
          Professional credentials that validate AWS AI foundations, responsible ML practices, and
          cloud-aligned generative AI competencies.
        </motion.p>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-surface-800 border border-surface-700 rounded-xl p-6 md:p-8 max-w-3xl hover:border-primary-500/40 transition-colors"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-xl font-semibold text-white mb-1">
                AWS Certified AI Practitioner
              </h3>
              <p className="text-slate-500 text-sm">
                Validates core AI and generative AI knowledge on AWS, including ethical use,
                tooling, and solution awareness.
              </p>
            </div>
            <a
              href={CREDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              View badge on Credly
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            Credential skills and domains covered align with{' '}
            <span className="text-slate-300">fundamentals of AI/ML</span>,
            <span className="text-slate-300"> generative AI</span>,
            <span className="text-slate-300"> foundational model use cases</span>,
            <span className="text-slate-300"> responsible AI</span>, and
            <span className="text-slate-300"> security and governance</span>
            {' '}for AI workloads on AWS—aligned with official exam guidance for this credential.
          </p>
          <div className="flex flex-wrap gap-2">
            {BADGE_FOCUS.map((label) => (
              <span
                key={label}
                className="px-3 py-1.5 bg-surface-700/60 text-slate-300 rounded-lg text-sm leading-snug"
              >
                {label}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  )
}
