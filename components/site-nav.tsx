'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, profile } from '@/lib/portfolio-data'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initial = profile.shortName.replace(/[^A-Za-z]/g, '').charAt(0) || 'P'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          'mx-auto max-w-6xl transition-all duration-300',
          scrolled && 'pt-0',
        )}
      >
        <nav
          className={cn(
            'glass-panel flex h-14 items-center justify-between rounded-2xl px-4 sm:px-5',
            scrolled && 'shadow-lg shadow-primary/5',
          )}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-violet-600 font-display text-sm font-extrabold text-primary-foreground transition-transform group-hover:scale-105">
              {initial}
            </span>
            <span className="hidden font-display text-sm font-bold tracking-tight sm:block">
              {profile.shortName}
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-primary to-blue-600 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Hire me
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="glass-panel mt-2 rounded-2xl p-2 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 block rounded-xl bg-gradient-to-r from-primary to-blue-600 px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
