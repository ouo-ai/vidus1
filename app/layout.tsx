import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, PT_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vidus1.ai"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vidu S1 Real-Time Interactive AI Avatar Platform",
  description:
    "Vidu S1 helps teams evaluate real-time interactive digital humans with custom avatars, voice control, RTC/WebSocket flow notes, and enterprise use cases.",
  generator: "v0.app",
  keywords: [
    "Vidu S1",
    "Vidu S1 API",
    "Vidu S1 streaming video model",
    "interactive digital human",
    "real-time AI avatar",
    "voice controlled avatar",
    "AI video avatar API",
    "enterprise digital human platform",
    "streaming video generation model",
  ],
  authors: [{ name: "Vidu S1" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Vidu S1",
    title: "Vidu S1 Real-Time Interactive AI Avatar Platform",
    description:
      "Evaluate Vidu S1 for real-time AI avatars and interactive digital humans with custom personas, voice control, RTC delivery, and WebSocket session control.",
    images: [
      {
        url: `${siteUrl}/ai-generated-product-demo-video-thumbnail.jpg`,
        width: 1024,
        height: 1024,
        alt: "Vidu S1 real-time interactive AI avatar platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidu S1 Real-Time Interactive AI Avatar Platform",
    description:
      "Evaluate Vidu S1 for real-time AI avatars and interactive digital humans with custom personas, voice control, RTC delivery, and WebSocket session control.",
    images: [`${siteUrl}/ai-generated-product-demo-video-thumbnail.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${geist.variable} ${geistMono.variable} ${ptMono.variable}`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
