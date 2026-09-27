import { ArrowUpRight, Download, MapPin, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { HeroTyping } from '@/components/hero-typing'
import { profile, contact } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-backdrop absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal className="mb-5 inline-flex items-center gap-2 rounded-full glass-panel px-3.5 py-1.5 font-mono text-xs text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to internship & entry-level roles
            </Reveal>

            <Reveal delay={60}>
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Creative tech
                <br />
                <HeroTyping />
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.heroDescription}
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-5 flex flex-wrap gap-2">
              <span className="glass-panel flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                IPK {profile.gpa}
              </span>
              <span className="glass-panel rounded-lg px-3 py-1 text-xs font-medium text-violet-700">
                {profile.status}
              </span>
              <span className="glass-panel rounded-lg px-3 py-1 text-xs font-medium text-primary">
                {profile.university}
              </span>
            </Reveal>

            <Reveal delay={200} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary via-blue-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                <Sparkles className="h-4 w-4" />
                View my work
              </a>
              <a
                href={contact.cvUrl}
                download={`CV-${profile.fullName}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary/80"
              >
                <Download className="h-4 w-4 text-primary" />
                Download CV
              </a>
            </Reveal>

            <Reveal delay={240} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </span>
            </Reveal>
          </div>

          <Reveal delay={160} className="lg:col-span-5">
            <div className="glass-panel animate-float relative overflow-hidden rounded-3xl p-5 shadow-xl sm:p-6">
              <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/15 via-card to-background">
                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden py-2 opacity-20 select-none pointer-events-none">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <p
                      key={i}
                      className="font-display text-lg font-black uppercase tracking-widest whitespace-nowrap text-transparent sm:text-3xl"
                      style={{
                        WebkitTextStroke: '1px var(--foreground)',
                        marginLeft: `${(i % 3) * -20}px`,
                      }}
                    >
                      PORTFOLIO PORTFOLIO
                    </p>
                  ))}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.photo}
                  alt={profile.fullName}
                  className="relative z-10 h-full w-full object-contain object-bottom transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background/80 p-3.5">
                  <span className="text-2xl font-black text-amber-600">{profile.gpa}</span>
                  <p className="text-[11px] font-medium text-muted-foreground">IPK</p>
                </div>
                <div className="rounded-2xl border border-border bg-background/80 p-3.5">
                  <span className="text-2xl font-black text-primary">2+</span>
                  <p className="text-[11px] font-medium text-muted-foreground">Yrs org experience</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Target roles</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {profile.roles.slice(0, 4).map((role) => (
                    <span
                      key={role}
                      className="rounded-lg border border-primary/15 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={280} className="mt-14 flex flex-wrap items-center gap-2 border-t border-border/80 pt-6">
          {profile.roles.map((role) => (
            <span
              key={role}
              className="glass-panel rounded-full px-3 py-1 text-sm text-foreground/85"
            >
              {role}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
