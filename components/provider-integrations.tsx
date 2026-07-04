"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Bot, Cpu, KeyRound, Radio, ShieldCheck, Video } from "lucide-react"

const providers = [
  {
    name: "Vidu S1 realtime core",
    label: "Primary",
    icon: Radio,
    description:
      "Keep the RTC room, WebSocket control channel, avatar readiness, heartbeat, hangup, and usage review in one observable flow.",
  },
  {
    name: "HeyGen API lane",
    label: "Avatar video",
    icon: Video,
    description:
      "Route approved presenter, video-agent, or avatar-video workflows through a server-side HeyGen API adapter when a pilot needs that provider.",
  },
  {
    name: "Replicate model lane",
    label: "Model jobs",
    icon: Cpu,
    description:
      "Send async prediction jobs to Replicate for model experiments, creative preprocessing, or companion media tasks that do not need live RTC.",
  },
]

const controls = [
  {
    title: "Server-held credentials",
    description: "Keep Vidu S1, HeyGen API, and Replicate tokens off the browser and rotate them per environment.",
    icon: KeyRound,
  },
  {
    title: "Provider-safe routing",
    description: "Normalize session ids, prediction ids, webhook states, retry reasons, and user-facing errors.",
    icon: Bot,
  },
  {
    title: "Policy and usage review",
    description: "Track consent, avatar approval, provider spend, generated media retention, and final session status.",
    icon: ShieldCheck,
  },
]

export function ProviderIntegrations() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="provider-integrations" className="relative border-t border-border py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Provider integrations</p>
          <h2 className="mb-4 text-3xl font-bold tracking-display text-foreground sm:text-4xl">
            Connect <span className="text-gradient-lime">Vidu S1</span> with HeyGen API and Replicate
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Build the pilot around one server-side orchestration layer, then choose the right provider for realtime
            avatar sessions, avatar-video generation, or asynchronous model predictions.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {providers.map((provider, index) => (
            <motion.article
              key={provider.name}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/45 hover:bg-card"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <provider.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {provider.label}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{provider.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{provider.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {controls.map((control, index) => (
            <motion.div
              key={control.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
              className="flex gap-3 rounded-lg border border-border/70 bg-background/50 p-4"
            >
              <control.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">{control.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{control.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
