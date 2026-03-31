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
            Software Engineer with 2+ years building scalable distributed systems using Java, Spring Boot,
            and AWS. I built AI-powered automation at ServiceNow across 500+ enterprise deployments and
            event-driven fintech platforms at Paves, focused on customer impact, operational excellence,
            and systems that scale.
          </p>
          <p className="text-slate-400 leading-relaxed mb-4">
            <strong className="text-slate-300">Software Engineer, Paves Technologies</strong> (Dallas, TX | Sep 2025 – Present) — I design and maintain REST APIs and distributed backend services using Java, Python, and GCP for payment processing and transaction workflows. I apply ML models for transaction monitoring and fraud prediction, build ranking workflows for flagged transactions, and integrate Generative AI and NLP (Vertex AI) to extract key fields from compliance documents. I also build internal React UI components for fraud review and develop GCP service integrations for payment workflows and compliance.
          </p>
          <p className="text-slate-400 leading-relaxed">
            <strong className="text-slate-300">Software Engineer, ServiceNow</strong> (Hyderabad, India | Jul 2022 – Jul 2024) — I contributed to the Merge Agent, an AI agent that automates metadata conflict resolution during platform upgrades. I built a custom Fluent SDK plugin, scan-check skills, and 3-way merge skills for the Merge Agent, integrated it with an MCP server and build tools, and worked on Advanced Search for Application Manager using React and JavaScript (improving component discovery by ~25%). I also designed Upgrade Console components and backend integrations with JavaScript and REST APIs, developed UI components with ServiceNow UI Builder and React, and authored skills in ServiceNow AI Agent Studio.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
