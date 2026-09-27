import { GraduationCap, Palette, Users, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { about, profile } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading title="About Me" />

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Reveal className="glass-panel group relative overflow-hidden rounded-3xl p-6 md:col-span-2">
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
          <div className="flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-800">
              IPK {profile.gpa}
            </span>
          </div>
          <div className="relative mt-4 space-y-2">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                {p}
              </p>
            ))}
            <p className="pt-2 text-sm font-semibold text-foreground">{profile.university}</p>
            <p className="text-xs text-muted-foreground">
              {profile.degree} · {profile.major} · Yudisium {profile.yudisiumDate}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="glass-panel rounded-3xl p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-600">
            <Palette className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-base font-bold">MedInfo & design</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Aktif di divisi media & informasi organisasi — desain feed, banner acara, dan konten visual
            promosi.
          </p>
        </Reveal>

        <Reveal delay={120} className="glass-panel rounded-3xl p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-600">
            <Users className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-base font-bold">Leadership</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Pengalaman koordinator, sekretaris acara, dan peran pelaksana di berbagai kepanitiaan kampus.
          </p>
        </Reveal>

        <Reveal delay={160} className="glass-panel flex flex-col items-start justify-between gap-4 rounded-3xl bg-gradient-to-r from-primary/5 via-transparent to-violet-500/5 p-6 sm:flex-row sm:items-center md:col-span-3 lg:col-span-4">
          <div>
            <h4 className="font-semibold text-foreground">Lihat pengalaman organisasi</h4>
            <p className="mt-1 text-xs text-muted-foreground">Timeline kegiatan & dokumentasi di section Experience.</p>
          </div>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-5 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/15"
          >
            Experience
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
