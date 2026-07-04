"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Vidu S1?",
    answer:
      "Vidu S1 is a streaming video generation model for real-time interactive digital humans. It is designed for custom avatars that can respond through voice, text, and video interaction patterns.",
  },
  {
    question: "Is this Vidu S1 page connected to a live API?",
    answer:
      "No. This landing page is informational and lead-generation only. A production integration should keep API tokens on the server and connect Vidu S1 through the official API, RTC SDK, and WebSocket control flow.",
  },
  {
    question: "What do teams need to integrate Vidu S1?",
    answer:
      "A typical integration prepares a server-side API token, one avatar image or base64 asset, a persona description, RTC media setup, a WebSocket control channel, readiness retry handling, heartbeat handling, hangup logic, and usage review.",
  },
  {
    question: "Which avatar styles are supported?",
    answer:
      "The supplied product notes describe custom personas across human presenters, anime characters, and pet or mascot-style avatars. Teams should validate image requirements and content policy in the current Vidu console before launch.",
  },
  {
    question: "How does readiness and reconnect logic work?",
    answer:
      "Video mode can return a temporary NOT_READY state while the avatar prepares. The client should close the control socket, wait briefly, retry with backoff, and handle forced hangup reasons during the call.",
  },
  {
    question: "How is Vidu S1 usage billed?",
    answer:
      "The supplied notes describe duration-based credit usage beginning when the digital human is live. Exact credit rules, account balance checks, voice clone pricing, and session limits should be verified in the current Vidu account before production deployment.",
  },
]

export function FAQ() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-display mb-4">
            Frequently asked <span className="text-gradient-lime">questions</span>
          </h2>
          <p className="text-muted-foreground">Practical notes for evaluating Vidu S1 before production integration</p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
