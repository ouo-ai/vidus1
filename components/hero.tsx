"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mic, MessageSquare, Video, Eye } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"

const capabilities = [
  { icon: Video, label: "Real-time streaming video" },
  { icon: Mic, label: "Voice-driven interaction" },
  { icon: Eye, label: "Bidirectional perception" },
  { icon: MessageSquare, label: "Text & multimodal control" },
]

const trustedBy = [
  { name: "Social Platforms" },
  { name: "Ecommerce" },
  { name: "EdTech" },
  { name: "Gaming" },
  { name: "Enterprise" },
]

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex items-center justify-center pt-28 lg:pt-32 pb-40 sm:pb-32">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow badge */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6 tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            Vidu S1 API Open Platform
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-display text-balance mb-6 leading-[1.08]"
          >
            <span className="text-gradient-lime">Vidu S1</span>
            <br />
            <span className="text-foreground">Real-Time Interactive</span>
            <br />
            <span className="text-foreground">Digital Human Platform</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed px-2"
          >
            The Vidu S1 streaming video generation model helps teams evaluate real-time AI avatars with voice control,
            bidirectional perception, and custom personas across human, anime, and mascot styles. Use it to plan
            enterprise pilots for interactive digital humans across RTC media and WebSocket control flows.
          </motion.p>

          {/* Capability pills */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
          >
            {capabilities.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs sm:text-sm text-muted-foreground"
              >
                <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={shouldReduceMotion ? {} : fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="xl" rounded="full" className="gap-2 w-full sm:w-auto" asChild>
              <a href="#contact">
                Plan a Vidu S1 Pilot
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outline" size="xl" rounded="full" className="gap-2 bg-transparent w-full sm:w-auto" asChild>
              <a href="#pipeline">
                Review Integration Flow
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Trusted-by strip */}
      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 py-6 sm:py-8 border-t border-border/30 bg-background/80 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm text-muted-foreground/60 mb-4 sm:mb-5 text-center">
            Evaluated by teams building across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-12 gap-y-3">
            {trustedBy.map((item) => (
              <span
                key={item.name}
                className="text-sm sm:text-base font-semibold text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
