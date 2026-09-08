import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile, contact } from '@/lib/portfolio-data'

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
                download={`CV-${profile.fullName}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Right — 3D Pop-Out Photo Frame */}
          <Reveal delay={160} className="relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-card to-background border border-border shadow-2xl flex items-center justify-center">
              {/* Layer 1: Tekstur / Pattern Latar Belakang */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.15)_0,transparent_100%)]" />

              {/* Layer 2: Repeating Typography Pattern (Aesthetic Outline & Shadow) */}
              <div className="absolute inset-0 flex flex-col justify-between overflow-hidden opacity-25 select-none pointer-events-none py-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <p
                    key={i}
                    className="font-display text-xl sm:text-6xl font-black uppercase tracking-widest whitespace-nowrap text-transparent"
                    style={{
                      WebkitTextStroke: '1px var(--foreground)', // Outline teks mengikuti tema
                      filter: 'drop-shadow(2px 3px 0px rgba(72, 146, 236, 0.8))', // Efek bayangan warna (bisa ganti hex warna favoritmu)
                      marginLeft: `${(i % 4) * -25}px`, // Efek pergeseran selang-seling (staggered)
                    }}
                  >
                    PORTOFOLIOPORTOFOLIOPORTOFOLIOPORTOFOLIO
                  </p>
                ))}
              </div>

              {/* Layer 3: Foto Diri */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile-raisa.png"
                alt={profile.fullName}
                className="relative z-10 h-full w-full object-contain object-bottom transition-transform duration-500 hover:scale-105"
              />

              {/* Layer 4: Overlay Gradient Halus di Bagian Bawah */}
              <div className="absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-background via-background/40 to-transparent" />

              {/* Layer 5: Floating Badge Tag */}
              <div className="absolute bottom-4 left-4 z-30 rounded-xl border border-border bg-card/80 backdrop-blur-md px-4 py-2.5 shadow-lg">
                <p className="text-xs font-semibold text-foreground">
                  {profile.fullName}
                </p>
                <p className="font-display text-[10px] uppercase tracking-widest text-primary font-bold">
                  {profile.degree}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Role tags */}
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