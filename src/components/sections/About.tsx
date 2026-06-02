import { motion } from 'framer-motion'

const EXCELLENCE = [
  'Built AI-powered enterprise solutions combining LLMs, semantic search, and workflow automation.',
  'Developed intelligent multi-agent systems for information retrieval and complex decision-making.',
  'Delivered scalable RAG and conversational AI platforms using Python, LangChain, OpenAI APIs, and FastAPI.',
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
            AI Developer with experience building generative AI and LLM-powered automation solutions for
            requirement analysis, workflow automation, and test case generation. Proficient in Python, API
            integration, and AI-driven system integration, with experience developing prototypes and deploying
            scalable automation tools in enterprise environments.
          </p>

          <h3 className="font-display text-lg font-semibold text-white mb-4">Professional Experience</h3>

          <div className="mb-6 pb-6 border-b border-surface-700">
            <p className="text-slate-300 font-medium mb-1">AI/ML Engineer, Paves Technologies</p>
            <p className="text-slate-500 text-sm mb-2">Dallas, TX | April 2025 – Present</p>
            <p className="text-slate-500 text-sm mb-3">
              Python, PyTorch, LangChain, FAISS, OpenAI API, FastAPI, Docker
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Design and deploy ML-based transaction ranking and fraud scoring models; build feature pipelines
              and evaluation workflows (cross-validation, precision/recall, ROC-AUC); expose real-time prediction
              services through Java/Python REST APIs; support NLP document classification and scalable backend
              services on GCP for high-volume transaction processing.
            </p>
          </div>

          <div className="mb-8 pb-8 border-b border-surface-700">
            <p className="text-slate-300 font-medium mb-1">Full Stack Developer, Adeptree Technologies</p>
            <p className="text-slate-500 text-sm mb-2">Hyderabad, India | Feb 2023 – Jul 2024</p>
            <p className="text-slate-500 text-sm mb-3">
              Java, Spring Boot, Spring Data JPA, ReactJS, React Native, Redux, Material UI, REST APIs, WebSocket,
              MySQL, Nginx, Axios, HTML5, CSS3, JavaScript (ES6), Git, Postman, VS Code
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Built full-stack web and mobile applications; developed REST and WebSocket APIs with Spring Boot;
              shipped responsive UIs with React and React Native; deployed services behind Nginx with MySQL-backed
              data layers in Agile teams.
            </p>
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
