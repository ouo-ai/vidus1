import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { VideoGallery } from "@/components/video-gallery"
import { HowItWorks } from "@/components/how-it-works"
import { QuickStart } from "@/components/quick-start"
import { UseCases } from "@/components/use-cases"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { LogoCloud } from "@/components/logo-cloud"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vidus1.ai"

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "Product"],
    "@id": `${siteUrl}/#product`,
    name: "Vidu S1",
    url: siteUrl,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web, iOS, Android, RTC-enabled clients",
    category: "Real-time interactive video avatar platform",
    description:
      "Vidu S1 is a streaming video generation model and API platform for evaluating real-time interactive digital humans with custom avatars, voice control, RTC media delivery, and WebSocket session control.",
    brand: {
      "@type": "Brand",
      name: "Vidu",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Enterprise product, engineering, ecommerce, education, gaming, and virtual-host teams",
    },
    featureList: [
      "Custom human, anime, and mascot avatar personas",
      "Voice, text, and video interaction patterns",
      "RTC media delivery with WebSocket control signaling",
      "Readiness, heartbeat, hangup, and usage review workflow",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Vidu S1?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vidu S1 is a streaming video generation model for real-time interactive digital humans. It is designed for custom avatars that can respond through voice, text, and video interaction patterns.",
        },
      },
      {
        "@type": "Question",
        name: "Is this Vidu S1 page connected to a live API?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. This landing page is informational and lead-generation only. A production integration should keep API tokens on the server and connect Vidu S1 through the official API, RTC SDK, and WebSocket control flow.",
        },
      },
      {
        "@type": "Question",
        name: "What do teams need to integrate Vidu S1?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical integration prepares a server-side API token, one avatar image or base64 asset, a persona description, RTC media setup, a WebSocket control channel, readiness retry handling, heartbeat handling, hangup logic, and usage review.",
        },
      },
      {
        "@type": "Question",
        name: "Which Vidu S1 avatar styles are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The supplied product notes describe custom personas across human presenters, anime characters, and pet or mascot-style avatars. Teams should validate image requirements and content policy in the current Vidu console before launch.",
        },
      },
      {
        "@type": "Question",
        name: "How is Vidu S1 usage billed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The supplied notes describe duration-based credit usage beginning when the digital human is live. Exact credit rules, account balance checks, voice clone pricing, and session limits should be verified in the current Vidu account before production deployment.",
        },
      },
    ],
  },
]

export default function Home() {
  return (
    <main className="relative z-0 min-h-screen bg-background overflow-x-hidden">
      <div
        className="absolute top-0 right-0 w-[1500px] h-[1500px] -z-10 bg-primary pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse 50% 50% at 100% 0%, rgb(0 0 0 / 0.75), transparent)",
        }}
      >
        <div className="absolute inset-0 bg-cover bg-right-top" style={{ backgroundImage: "url('/grade.png')" }} />
      </div>

      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <VideoGallery />
      <HowItWorks />
      <QuickStart />
      <UseCases />
      <LogoCloud />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
