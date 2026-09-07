import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile, contact, featuredProject } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-backdrop absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left — copy */}
          <div>
            <Reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to internship & entry-level roles
            </Reveal>

            <Reveal delay={60}>
              <p className="font-display text-lg text-muted-foreground">
                Hi, I&apos;m {profile.shortName}
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Fresh Graduate in{' '}
                <span className="text-primary">Informatics Engineering</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-foreground/80">
                {profile.heroHeadline}
              </p>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {profile.heroDescription}
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View my work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={contact.cvUrl}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Reveal>

            <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
              <span>IPK {profile.gpa} · {profile.university}</span>
            </Reveal>
          </div>

          {/* Right — browser mockup */}
          <Reveal delay={160} className="relative">
            <div className="relative mx-auto max-w-lg">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_60px_-24px_rgba(20,30,60,0.25)]">
                {/* browser chrome */}
                <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                  <span className="ml-3 flex-1 truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                    presensi.polibanjarmasin.ac.id
                  </span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredProject.heroMockup || '/placeholder.svg'}
                  alt="Cuplikan sistem presensi berbasis web"
                  className="aspect-[16/11] w-full object-cover object-top"
                />
              </div>

              {/* floating tag */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-border bg-card px-4 py-3 shadow-lg sm:block">
                <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                  Featured
                </p>
                <p className="text-sm font-semibold">Attendance System</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* role marquee-ish tags */}
        <Reveal delay={200} className="mt-16 flex flex-wrap items-center gap-2 border-t border-border pt-6">
          <span className="mr-2 font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Focus
          </span>
          {profile.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-border bg-card px-3 py-1 text-sm text-foreground/80"
            >
              {role}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
