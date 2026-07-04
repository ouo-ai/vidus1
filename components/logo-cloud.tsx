"use client"

import { motion, useReducedMotion } from "framer-motion"

const verticals = [
  { name: "Social Commerce" },
  { name: "EdTech Platforms" },
  { name: "Gaming Studios" },
  { name: "Virtual Events" },
  { name: "Customer Experience" },
  { name: "Healthcare" },
  { name: "Financial Services" },
]

export function LogoCloud() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-12 lg:py-16 border-t border-border" aria-label="Industry verticals">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Vidu S1 is being evaluated by teams across
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {verticals.map((v, index) => (
            <motion.div
              key={v.name}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              <span className="text-sm font-semibold tracking-tight">{v.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
