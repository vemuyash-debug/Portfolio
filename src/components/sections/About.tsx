import { motion } from 'framer-motion'

const EXCELLENCE = [
  'Built ETL and analytics pipelines with Azure Databricks, PySpark, and Delta Lake for large-scale data processing.',
  'Developed full-stack community platforms with Spring Boot, React, and MySQL, including REST APIs and role-based access.',
  'Designed near real-time streaming pipelines with Kafka and Spark Structured Streaming for engagement analytics.',
]

const ADEPTREE_BULLETS = [
  'Built a community management platform (RUHOME) supporting security, service requests, and marketplace activities using Java, Spring Boot, and React.',
  'Developed RESTful APIs and backend services with Spring Boot and JPA, implementing CRUD operations and role-based access control.',
  'Created reusable UI components for web and mobile with ReactJS, Redux, and Material UI.',
  'Processed and analyzed resident and visitor activity data for operational reporting using Azure Databricks, PySpark, and Delta Lake.',
  'Handled deployment, API testing, and performance optimization with Nginx, Postman, and Git in an Agile environment.',
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl"
        >
          <p className="text-slate-400 leading-relaxed mb-8">
            Computer Science graduate student at The University of Texas at Arlington with a strong interest in
            Data Engineering and Cloud Technologies. Experienced in Python, SQL, PySpark, Azure Databricks, and
            Delta Lake, with hands-on work building ETL pipelines, processing large datasets, and performing data
            analysis for reporting and analytics.
          </p>

          <h3 className="font-display text-lg font-semibold text-white mb-4">Professional Experience</h3>

          <div className="mb-8 pb-8 border-b border-surface-700">
            <p className="text-slate-300 font-medium mb-1">Software Engineer, Adeptree Technologies Pvt. Ltd.</p>
            <p className="text-slate-500 text-sm mb-2">Hyderabad, India | Feb 2023 – Jul 2024</p>
            <p className="text-slate-400 text-sm mb-2">
              Project: RUHOME – Community Management & Data Analytics Platform
            </p>
            <p className="text-slate-500 text-sm mb-3">
              Java, Spring Boot, ReactJS, React Native, MySQL, REST APIs, Azure Databricks, PySpark, Delta Lake
            </p>
            <ul className="space-y-2">
              {ADEPTREE_BULLETS.map((item) => (
                <li key={item} className="text-slate-400 leading-relaxed text-sm flex gap-2">
                  <span className="text-primary-400 mt-1.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="font-display text-lg font-semibold text-white mb-4">Evidence of Excellence</h3>
          <ul className="space-y-3">
            {EXCELLENCE.map((item) => (
              <li key={item} className="text-slate-400 leading-relaxed text-sm flex gap-2">
                <span className="text-primary-400 mt-1.5 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
