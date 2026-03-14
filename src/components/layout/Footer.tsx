import { motion } from 'framer-motion'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-surface-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year} Yashaswi Vemu. Built with React, TypeScript & Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <a href="#home" className="text-slate-500 hover:text-primary-400 text-sm transition-colors">
            Back to top
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
