"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="contact" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="relative max-w-5xl mx-auto bg-background rounded-3xl overflow-hidden py-16 lg:py-24 px-6 sm:px-12"
        style={{
          border: "1px dashed",
          borderColor: "oklch(0.92 0.16 130 / 0.4)",
        }}
      >
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-display mb-6 text-foreground">
              Ready to plan a Vidu S1 pilot?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Map your avatar persona, RTC client, WebSocket controls, and usage model before connecting a real backend.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" rounded="full" className="gap-2 min-w-[200px]" asChild>
                <a href="#pricing">
                  Plan a Pilot
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="xl" rounded="full" className="gap-2 min-w-[200px] bg-transparent" asChild>
                <a href="#pipeline">Review Integration</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
