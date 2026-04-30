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
            AI Developer with experience building generative AI and LLM-powered automation solutions for
            requirement analysis, workflow automation, and test case generation. I focus on Python, API
            integration, and AI-driven system integration, with hands-on experience prototyping and
            deploying scalable automation tools in enterprise environments.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            <strong className="text-slate-300">AI/ML Engineer, Paves Technologies</strong> (Dallas, TX | Sep 2025 – Present) — I design and deploy ML-based transaction ranking and fraud scoring models using Python, build feature pipelines and evaluation workflows (cross-validation, precision/recall, ROC-AUC), and expose real-time prediction services through Java/Python REST APIs. I also support NLP-based document classification workflows and scalable backend services on GCP for high-volume transaction processing.
          </p>
          <p className="text-slate-400 leading-relaxed">
            <strong className="text-slate-300">AI/ML Engineer, ServiceNow</strong> (Hyderabad, India | Jul 2022 – Jul 2024) — I designed and maintained scalable backend services for enterprise workflow automation using Java and Python, built distributed service components supporting 500+ global upgrade deployments, developed REST APIs and modular backend libraries, and contributed to automated validation workflows integrated in CI/CD pipelines for regression and reliability standards.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
