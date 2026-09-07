import { Palette, Code2, TestTube2, PenTool } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillCategories } from '@/lib/portfolio-data'

const icons: LucideIcon[] = [Palette, Code2, TestTube2, PenTool]

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="What I work with"
          description="Kemampuan dikelompokkan berdasarkan bidang. Tanpa persentase, karena tidak ada dasar objektif untuk mengukurnya."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((cat, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={cat.title} delay={i * 80}>
                <article className="group h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-foreground/80"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
