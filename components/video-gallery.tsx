"use client"

import { motion, useReducedMotion } from "framer-motion"

const waveBars = [
  { height: 14, duration: 0.82 },
  { height: 26, duration: 1.05 },
  { height: 18, duration: 0.9 },
  { height: 34, duration: 1.1 },
  { height: 22, duration: 0.94 },
  { height: 30, duration: 1.02 },
  { height: 16, duration: 0.88 },
]

function AvatarStreamIllustration() {
  return (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="oklch(0.11 0 0)" />
      {/* Avatar silhouette */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <circle cx="200" cy="80" r="38" fill="oklch(0.16 0 0)" stroke="oklch(0.92 0.16 125 / 0.4)" strokeWidth="1.5" />
        <circle cx="200" cy="68" r="18" fill="oklch(0.25 0 0)" />
        <path d="M165 118 Q200 100 235 118 L240 148 Q200 155 160 148 Z" fill="oklch(0.25 0 0)" />
      </motion.g>
      {/* Pulse rings */}
      <motion.circle
        cx="200"
        cy="80"
        r="38"
        fill="none"
        stroke="oklch(0.92 0.16 125)"
        strokeWidth="1.5"
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{ scale: 1.6, opacity: 0 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut" }}
      />
      <motion.circle
        cx="200"
        cy="80"
        r="38"
        fill="none"
        stroke="oklch(0.92 0.16 125)"
        strokeWidth="1"
        initial={{ scale: 1, opacity: 0.4 }}
        animate={{ scale: 2.1, opacity: 0 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeOut", delay: 0.5 }}
      />
      {/* Audio wave bars */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        {waveBars.map((bar, i) => (
          <motion.rect
            key={i}
            x={50 + i * 14}
            y={181 - bar.height}
            width={8}
            height={bar.height}
            rx={4}
            fill="oklch(0.92 0.16 125)"
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{
              duration: bar.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.1,
              repeatType: "mirror",
            }}
          />
        ))}
      </motion.g>
      {/* Status label */}
      <rect x="30" y="18" width="90" height="22" rx="11" fill="oklch(0.92 0.16 125 / 0.15)" />
      <motion.circle
        cx="45"
        cy="29"
        r="4"
        fill="oklch(0.92 0.16 125)"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY }}
      />
      <text x="56" y="33" fill="oklch(0.92 0.16 125)" fontSize="10" fontFamily="monospace">
        LIVE
      </text>
      {/* Latency badge */}
      <rect x="280" y="18" width="90" height="22" rx="11" fill="oklch(0.15 0 0)" stroke="oklch(0.25 0 0)" strokeWidth="1" />
      <text x="295" y="33" fill="oklch(0.6 0 0)" fontSize="9" fontFamily="monospace">
        RTC + WS
      </text>
    </svg>
  )
}

function PersonaPickerIllustration() {
  return (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="oklch(0.11 0 0)" />
      {/* Three persona cards */}
      {[
        { x: 28, label: "Human", color: "oklch(0.92 0.16 125)" },
        { x: 152, label: "Anime", color: "oklch(0.75 0.18 200)" },
        { x: 276, label: "Mascot", color: "oklch(0.82 0.18 50)" },
      ].map((persona, idx) => (
        <motion.g
          key={persona.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 * idx }}
        >
          <rect
            x={persona.x}
            y={30}
            width={96}
            height={125}
            rx={10}
            fill="oklch(0.15 0 0)"
            stroke={idx === 0 ? persona.color : "oklch(0.22 0 0)"}
            strokeWidth={idx === 0 ? 1.5 : 1}
          />
          {/* Avatar face placeholder */}
          <circle cx={persona.x + 48} cy={82} r={28} fill="oklch(0.22 0 0)" />
          <circle cx={persona.x + 48} cy={72} r={12} fill="oklch(0.3 0 0)" />
          <path
            d={`M${persona.x + 28} 100 Q${persona.x + 48} 90 ${persona.x + 68} 100 L${persona.x + 72} 115 Q${persona.x + 48} 120 ${persona.x + 24} 115 Z`}
            fill="oklch(0.3 0 0)"
          />
          {/* Label */}
          <rect x={persona.x + 16} y={138} width={64} height={7} rx={3.5} fill={persona.color} opacity={idx === 0 ? 1 : 0.3} />
          <text x={persona.x + 28} y={160} fill="oklch(0.6 0 0)" fontSize="10" fontFamily="monospace">
            {persona.label}
          </text>
        </motion.g>
      ))}
      {/* Selected indicator */}
      <motion.rect
        x={18}
        y={20}
        width={116}
        height={145}
        rx={12}
        fill="none"
        stroke="oklch(0.92 0.16 125)"
        strokeWidth={2}
        strokeDasharray="8 4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <text x={28} y={186} fill="oklch(0.5 0 0)" fontSize="10" fontFamily="monospace">
        human · anime · mascot personas
      </text>
    </svg>
  )
}

function BiPerceptionIllustration() {
  return (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="225" fill="oklch(0.11 0 0)" />
      {/* User on left */}
      <motion.g initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <circle cx="70" cy="90" r="28" fill="oklch(0.18 0 0)" stroke="oklch(0.28 0 0)" strokeWidth="1" />
        <circle cx="70" cy="82" r="13" fill="oklch(0.3 0 0)" />
        <path d="M50 108 Q70 98 90 108 L94 125 Q70 131 46 125 Z" fill="oklch(0.3 0 0)" />
        <text x="40" y="155" fill="oklch(0.5 0 0)" fontSize="10" fontFamily="monospace">
          user
        </text>
      </motion.g>
      {/* Avatar on right */}
      <motion.g initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <circle cx="330" cy="90" r="28" fill="oklch(0.16 0 0)" stroke="oklch(0.92 0.16 125 / 0.5)" strokeWidth="1.5" />
        <circle cx="330" cy="82" r="13" fill="oklch(0.25 0 0)" />
        <path d="M310 108 Q330 98 350 108 L354 125 Q330 131 306 125 Z" fill="oklch(0.25 0 0)" />
        <text x="290" y="155" fill="oklch(0.92 0.16 125)" fontSize="10" fontFamily="monospace">
          Vidu S1
        </text>
      </motion.g>
      {/* Bidirectional arrows */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        {/* Voice arrow left→right */}
        <motion.path
          d="M105 80 L295 80"
          stroke="oklch(0.92 0.16 125)"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <polygon points="295,76 303,80 295,84" fill="oklch(0.92 0.16 125)" />
        <text x="155" y="72" fill="oklch(0.92 0.16 125)" fontSize="9" fontFamily="monospace">
          voice / text input
        </text>
        {/* Visual perception arrow right→left */}
        <motion.path
          d="M295 102 L105 102"
          stroke="oklch(0.75 0.15 200)"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />
        <polygon points="105,98 97,102 105,106" fill="oklch(0.75 0.15 200)" />
        <text x="148" y="118" fill="oklch(0.75 0.15 200)" fontSize="9" fontFamily="monospace">
          visual perception
        </text>
      </motion.g>
      {/* Latency strip */}
      <rect x="60" y="175" width="280" height="24" rx="6" fill="oklch(0.15 0 0)" />
      <text x="80" y="191" fill="oklch(0.5 0 0)" fontSize="10" fontFamily="monospace">
        end-to-end latency · WebRTC + WebSocket control
      </text>
    </svg>
  )
}

const demos = [
  {
    title: "Real-Time Avatar Streaming",
    description: "Plan Vidu S1 sessions around RTC media delivery, readiness checks, and responsive avatar playback.",
    Illustration: AvatarStreamIllustration,
  },
  {
    title: "Custom Persona Library",
    description: "Choose from human, anime, or pet/mascot character types. Upload your own reference assets.",
    Illustration: PersonaPickerIllustration,
  },
  {
    title: "Bidirectional Perception",
    description:
      "Design interactions where the avatar can respond to voice, text, and visual context while preserving user state.",
    Illustration: BiPerceptionIllustration,
  },
]

export function VideoGallery() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-display mb-4">
            The <span className="text-gradient-lime">Vidu S1</span> interaction model
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            From first frame to bidirectional conversation, all through a streaming video generation API pattern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-border bg-card"
            >
              <div className="aspect-video relative overflow-hidden">
                <demo.Illustration />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{demo.title}</h3>
                <p className="text-sm text-muted-foreground">{demo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
