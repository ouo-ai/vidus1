"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Gauge, ShieldCheck, Workflow } from "lucide-react"

const evaluationSignals = [
  {
    title: "Latency and readiness",
    description:
      "Measure avatar preparation time, NOT_READY retries, media subscription timing, and perceived responsiveness in your target device mix.",
    icon: Gauge,
  },
  {
    title: "Persona safety",
    description:
      "Review the avatar image, persona prompt, voice choice, content boundaries, and escalation behavior before opening a public pilot.",
    icon: ShieldCheck,
  },
  {
    title: "Operational workflow",
    description:
      "Connect session creation, RTC entry, WebSocket control, heartbeat, hangup, billing checks, and logs into one observable flow.",
    icon: Workflow,
  },
]

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-display mb-4">
            What teams should <span className="text-gradient-lime">validate first</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Treat a Vidu S1 rollout as a real-time media product, not a static chatbot launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {evaluationSignals.map((item, index) => (
            <motion.div
              key={item.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 sm:p-6 rounded-xl border border-border bg-card/50"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
