import { motion } from 'framer-motion'

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
          <p className="text-slate-400 leading-relaxed mb-4">
            I'm Yashaswi Vemu, a Computer Science graduate student at the University of Texas at Arlington
            (expected May 2026) with professional experience as an Software Engineer at ServiceNow.
            I worked on enterprise platform features including the Upgrade Console, UI development using React
            and ServiceNow UI Builder, REST API integrations, and automated testing within Agile teams.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I'm interested in building scalable full-stack applications and applying AI and machine learning
            to practical use cases. My academic and project experience spans artificial intelligence, machine
            learning, cloud computing, and data-driven systems, with a focus on developing reliable end-to-end
            solutions that combine strong frontend design with robust backend architecture.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
