import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PlaceholderThumb } from '@/components/placeholder-thumb'
import { webProjects } from '@/lib/portfolio-data'

export function WebProjects() {
  return (
    <section id="web" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        index="04"
        eyebrow="Web Projects"
        title="Things I've built for the browser"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {webProjects.map((proj, i) => (
          <Reveal key={proj.title} delay={i * 80}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
              {/* Browser preview */}
              <div className="border-b border-border">
                <div className="flex items-center gap-1.5 bg-secondary/60 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="aspect-video w-full overflow-hidden">
                  {proj.preview ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={proj.preview || '/placeholder.svg'}
                      alt={proj.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <PlaceholderThumb label="Preview akan ditambahkan" />
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold">{proj.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {proj.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-foreground/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function SmallLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  const disabled = !href || href === '#'
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        title="Link belum tersedia"
        className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-md border border-dashed border-border px-3 py-2 text-xs font-medium text-muted-foreground"
      >
        <Icon className="h-3.5 w-3.5" />
        {label}
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium transition-colors hover:bg-secondary"
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </a>
  )
}
