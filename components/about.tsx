import { GraduationCap, Award, CalendarCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { about, profile } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        index="01"
        eyebrow="About Me"
        title="A designer-developer who likes things that actually work."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-pretty leading-relaxed text-foreground/80">
              {p}
            </p>
          ))}
        </Reveal>

        {/* Education / status card */}
        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Education & Status
            </p>

            <ul className="mt-5 space-y-5">
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">
                    {profile.degree} · {profile.major}
                  </p>
                  <p className="text-sm text-muted-foreground">{profile.university}</p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">IPK {profile.gpa}</p>
                  <p className="text-sm text-muted-foreground">{profile.status}</p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <CalendarCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Telah lulus (SKL)</p>
                  <p className="text-sm text-muted-foreground">
                    Yudisium {profile.yudisiumDate} · Wisuda {profile.graduationDate}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
