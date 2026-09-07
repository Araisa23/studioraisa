'use client'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { useLightbox } from '@/components/lightbox'
import { caseStudies } from '@/lib/portfolio-data'

export function CaseStudy() {
  const { open } = useLightbox()

  return (
    <section id="case-study" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          index="04"
          eyebrow="UI/UX Case Study"
          title="From problem to prototype"
          description="Proses desain dijelaskan sesuai yang benar-benar dikerjakan, tanpa mengarang data riset pengguna."
        />

        <div className="mt-12 space-y-16">
          {caseStudies.map((cs) => {
            const mockupImages = cs.mockups.map((src) => ({ src }))
            return (
              <div key={cs.title}>
                <Reveal>
                  <h3 className="font-display text-2xl font-semibold text-balance">{cs.title}</h3>
                  <p className="mt-1 text-muted-foreground">{cs.tagline}</p>
                </Reveal>

                <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                  {/* Steps */}
                  <ol className="relative space-y-0 border-l border-border">
                    {cs.steps.map((step, i) => (
                      <Reveal as="li" key={step.title} delay={i * 50} className="relative pb-8 pl-8 last:pb-0">
                        <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background" />
                        <p className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                          {String(i + 1).padStart(2, '0')} — {step.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
                          {step.body}
                        </p>
                      </Reveal>
                    ))}
                  </ol>

                  {/* Mockups */}
                  <Reveal delay={100} className="space-y-3 lg:sticky lg:top-24 lg:self-start">
                    {cs.mockups.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => open(mockupImages, i)}
                        className="group block w-full overflow-hidden rounded-lg border border-border bg-card"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src || '/placeholder.svg'}
                          alt={`${cs.title} — mockup ${i + 1}`}
                          className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </button>
                    ))}
                  </Reveal>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
