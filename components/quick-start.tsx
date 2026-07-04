"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const codeExamples = {
  Session: `# Server-side setup only
1. Keep the Vidu S1 token on your backend
2. Create a live session with avatar image + persona
3. Store live.id for RTC and WebSocket control
4. Return only short-lived room details to the client`,
  Providers: `# API provider router
1. Keep Vidu S1, HeyGen API, and Replicate keys server-side
2. Route live avatar sessions to Vidu S1 or HeyGen API
3. Route async model jobs to Replicate predictions
4. Normalize session, prediction, webhook, and retry states
5. Store provider usage, policy review, and failure reasons`,
  RTC: `# Client media setup
1. Join the returned RTC channel
2. Publish user microphone audio
3. Publish camera video only for video mode
4. Subscribe to the avatar media stream
5. Render remote video and monitor subscription state`,
  Control: `# WebSocket control channel
1. Connect with the live id
2. Send conn_init when RTC is ready
3. Retry NOT_READY with backoff
4. Keep heartbeat behavior healthy
5. Handle forced hangup reasons in the UI`,
  Usage: `# End and review
1. Send user_end hangup
2. Leave the RTC channel
3. Close the control socket
4. Query final session status
5. Review billed seconds and credit cost`,
}

const tabs = Object.keys(codeExamples) as (keyof typeof codeExamples)[]

export function QuickStart() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>("Session")
  const [copied, setCopied] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const renderCodeLine = (line: string, index: number) => {
    const trimmedLine = line.trimStart()
    const indent = line.length - trimmedLine.length
    const indentSpaces = " ".repeat(indent)

    if (trimmedLine.startsWith("#")) {
      return (
        <div key={index} className="whitespace-pre">
          <span className="text-foreground">{trimmedLine}</span>
        </div>
      )
    }

    return (
      <div key={index} className="whitespace-pre">
        <span className="text-primary">
          {indentSpaces}
          {trimmedLine}
        </span>
      </div>
    )
  }

  return (
    <section id="docs" className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl overflow-hidden border border-primary/30 bg-black shadow-[0_0_30px_rgba(217,249,157,0.1)]"
        >
          <div className="flex items-center gap-2 px-3 sm:px-4 py-3 bg-primary/15 border-b border-primary/20">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary" />
            </div>
            <span className="ml-2 sm:ml-3 text-xs sm:text-sm font-medium text-foreground tracking-wider uppercase">
              Quick Start
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 sm:px-6 py-3 overflow-x-auto">
            {tabs.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                size="sm"
                variant={activeTab === tab ? "default" : "secondary"}
                rounded="lg"
                className="uppercase tracking-wide text-[10px] sm:text-xs flex-shrink-0"
              >
                {tab}
              </Button>
            ))}

            <Button
              variant="ghost"
              size="icon-sm"
              onClick={handleCopy}
              className="ml-auto flex-shrink-0"
              aria-label="Copy code"
            >
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>

          <div className="p-3 sm:p-6 overflow-x-auto">
            <pre className="text-xs sm:text-sm font-mono leading-loose">
              <code>{codeExamples[activeTab].split("\n").map((line, i) => renderCodeLine(line, i))}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
