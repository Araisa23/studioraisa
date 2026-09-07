import { ArrowUp } from 'lucide-react'
import { profile, navLinks } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-lg font-semibold">{profile.fullName}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.major} · {profile.university}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="text-sm text-muted-foreground">
            <p>{profile.fullName} © 2026</p>
            <p className="mt-0.5">Designed &amp; Built with curiosity.</p>
          </div>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
