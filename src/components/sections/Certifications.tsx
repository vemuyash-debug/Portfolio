import { motion } from 'framer-motion'

type Certification = {
  title: string
  description: string
  badgeUrl?: string
  focus: string[]
}

const CERTIFICATIONS: Certification[] = [
  {
    title: 'Databricks Certified Data Engineer Associate',
    description:
      'Validates skills in building and maintaining production data pipelines on Databricks using Spark, Delta Lake, and lakehouse architecture.',
    badgeUrl: 'https://credentials.databricks.com/f61982ac-b861-4dd3-8247-06f7e4cc5212',
    focus: [
      'ETL/ELT pipelines on Databricks',
      'Delta Lake and lakehouse fundamentals',
      'Spark DataFrames and Spark SQL',
      'Incremental processing and data quality',
      'Production workflows and notebooks',
    ],
  },
  {
    title: 'AWS Certified Developer – Associate',
    description:
      'Issued by Amazon Web Services Training and Certification. Validates application life-cycle management and cloud-native development on AWS.',
    badgeUrl:
      'https://www.credly.com/badges/3ca1f8e2-832f-4b60-9098-7a97a8fbb40a/linked_in_profile',
    focus: [
      'AWS service APIs, AWS CLI, and SDKs',
      'Containers and cloud-based application deployment',
      'CI/CD pipelines for develop, deploy, and debug workflows',
      'Application life-cycle management on AWS',
      'AWS best practices for production applications',
    ],
  },
  {
    title: 'AWS Certified AI Practitioner',
    description:
      'Validates core AI and generative AI knowledge on AWS, including ethical use, tooling, and solution awareness.',
    badgeUrl:
      'https://www.credly.com/badges/c7250255-993e-42ae-bca7-22ec07ed1978/linked_in_profile',
    focus: [
      'Fundamentals of AI and machine learning on AWS',
      'Generative AI concepts and foundational models',
      'Applications of generative AI and prompt engineering fundamentals',
      'Responsible AI, transparency, fairness, and human oversight',
      'Security, privacy, and governance for AI solutions',
    ],
  },
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
          Databricks data engineering credentials and AWS cloud & AI certifications — verified where badges are
          available on Credly.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="bg-surface-800 border border-surface-700 rounded-xl p-6 md:p-8 hover:border-primary-500/40 transition-colors flex flex-col"
            >
              <div className="flex flex-col gap-4 mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-1">{cert.title}</h3>
                  <p className="text-slate-500 text-sm">{cert.description}</p>
                </div>
                {cert.badgeUrl ? (
                  <a
                    href={cert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors w-fit"
                  >
                    {cert.badgeUrl.includes('credly.com') ? 'View badge on Credly' : 'View certificate'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.focus.map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1.5 bg-surface-700/60 text-slate-300 rounded-lg text-sm leading-snug"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
