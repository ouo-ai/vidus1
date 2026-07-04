"use client"

import { motion, useReducedMotion } from "framer-motion"
import { HeartPulse, PhoneOff, Radio, ReceiptText, Upload, Wifi } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Create a live session",
    description: "A server-side call creates the Vidu S1 digital human session and returns the live id plus RTC entry details.",
  },
  {
    icon: Radio,
    title: "Join the RTC room",
    description: "Your client joins the assigned audio or video channel, publishes user media, and subscribes to avatar output.",
  },
  {
    icon: Wifi,
    title: "Open control signaling",
    description: "A WebSocket control channel sends the ready signal and handles NOT_READY retries with backoff.",
  },
  {
    icon: HeartPulse,
    title: "Maintain the call",
    description: "Keep heartbeat behavior, session status, and forced hangup reasons visible to the client experience.",
  },
  {
    icon: PhoneOff,
    title: "End deliberately",
    description: "Send the hangup signal, leave the RTC channel, and close the control connection when the interaction ends.",
  },
  {
    icon: ReceiptText,
    title: "Review usage",
    description: "Fetch session status and billed usage after completion so product teams can model pilot economics.",
  },
]

export function HowItWorks() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="pipeline" className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-display mb-4">
            Vidu S1 <span className="text-gradient-lime">integration flow</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The production pattern combines a secure server token, RTC media transport, and WebSocket session control.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-primary text-background flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
