import Link from "next/link"
import { Video } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "Pipeline", href: "#pipeline" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Usage Notes", href: "#pricing" },
    { label: "Integration Notes", href: "#docs" },
  ],
  Evaluate: [
    { label: "FAQ", href: "#faq" },
    { label: "Pilot Planning", href: "#contact" },
    { label: "Avatar Personas", href: "#use-cases" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Video className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground" style={{ letterSpacing: "-0.05em" }}>
                Vidu S1
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Real-time interactive digital human planning for enterprise teams.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 sm:mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Vidu S1 landing page. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-muted-foreground">
            Informational pilot-planning page. Connect a real backend before offering live avatar sessions.
          </p>
        </div>
      </div>
    </footer>
  )
}
