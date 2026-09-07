'use client'

import { Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PlaceholderThumb } from '@/components/placeholder-thumb'
import { useLightbox } from '@/components/lightbox'
import { beyondCode } from '@/lib/portfolio-data'

export function BeyondCode() {
  const { open } = useLightbox()
  const galleryWithImages = beyondCode.gallery.filter((g) => g.src)

  return (
    <section id="experience" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          index="08"
          eyebrow="Beyond Code"
          title="Organizational experience"
          description={beyondCode.intro}
        />

        {/* Timeline cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {beyondCode.events.map((ev, i) => (
            <Reveal key={ev.code} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {ev.code}
                  </span>
                  {ev.period && (
                    <span className="text-xs text-muted-foreground">{ev.period}</span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-balance">{ev.event}</h3>
                <p className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                  <Users className="h-3 w-3" />
                  {ev.position}
                </p>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    Responsibilities
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {ev.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Documentation gallery */}
        <Reveal className="mt-12">
          <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Dokumentasi Kegiatan
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {beyondCode.gallery.map((g, i) => {
              const clickable = Boolean(g.src)
              return (
                <button
                  key={i}
                  type="button"
                  disabled={!clickable}
                  onClick={() => {
                    if (!clickable) return
                    const idx = galleryWithImages.findIndex((x) => x === g)
                    open(
                      galleryWithImages.map((x) => ({ src: x.src as string, caption: x.caption })),
                      Math.max(0, idx),
                    )
                  }}
                  className={`aspect-square overflow-hidden rounded-lg border border-border bg-card ${
                    clickable ? 'cursor-zoom-in' : 'cursor-default'
                  }`}
                >
                  {g.src ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={g.src || '/placeholder.svg'}
                      alt={g.caption}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <PlaceholderThumb label={g.caption} className="text-[11px]" />
                  )}
                </button>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
