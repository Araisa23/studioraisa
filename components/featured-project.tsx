'use client'

import { Users, ExternalLink, ArrowRight, ShieldCheck, Lightbulb } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { useLightbox } from '@/components/lightbox'
import { featuredProject as p } from '@/lib/portfolio-data'
import { useState } from 'react'

export function FeaturedProject() {
  const { open } = useLightbox()
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="featured" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        index="03"
        eyebrow="Featured Project"
        title={p.title}
        description={p.subtitle}
      />

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          <Users className="h-3.5 w-3.5" />
          {p.teamNote}
        </span>
      </div>

      {/* Overview + gallery */}
      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal className="space-y-6">
          <p className="text-pretty leading-relaxed text-foreground/80">{p.description}</p>

          <div className="rounded-lg border border-border bg-card p-5">
            <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
              Latar Belakang
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.background}</p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
              Fitur Utama
            </p>
            <ul className="mt-3 space-y-2">
              {p.keyFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.techStack.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

        </Reveal>

        {/* Gallery */}
        <Reveal delay={120}>
          <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Documentation & Gallery
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Berikut beberapa dokumentasi dan tangkapan layar dari proyek ini.
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {p.gallery.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => open(p.gallery, i)}
                className={`group relative overflow-hidden rounded-lg border border-border bg-card ${
                  i === 0 ? 'col-span-2' : ''
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src || '/placeholder.svg'}
                  alt={img.caption}
                  className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-3 text-left text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {img.caption}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Klik gambar untuk memperbesar.</p>
        </Reveal>
      </div>

      {/* Method waterfall */}
      <Reveal className="mt-16">
        <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
          Metode Pengembangan · {p.method.name}
        </p>
        <ol className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {p.method.steps.map((step, i) => {
            const isActive = activeStep === i
            return (
              <li key={step.title}>
                <button
                  type="button"
                  onClick={() => setActiveStep(isActive ? null : i)}
                  aria-expanded={isActive}
                  className={`w-full rounded-lg border p-4 text-left transition-colors ${
                    isActive
                      ? 'border-primary bg-accent/60'
                      : 'border-border bg-card hover:border-primary/40'
                  }`}
                >
                  <span className="font-display text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-1 text-sm font-medium text-pretty">{step.title}</p>

                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isActive ? '1fr' : '0fr' }}
                  >
                    <div className="min-h-0">
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            )
          })}
        </ol>
      </Reveal>

      {/* Challenges & Solutions */}
      <div className="mt-16">
        <Reveal>
          <h3 className="font-display text-xl font-semibold">Challenges &amp; Solutions</h3>
        </Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {p.challenges.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="h-full rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  Challenge
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.challenge}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Solution
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.solution}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* My Contribution */}
      <Reveal className="mt-10">
        <div className="rounded-xl border border-primary/30 bg-accent/50 p-6">
          <h3 className="font-display text-xl font-semibold">My Contribution</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Proyek ini dikerjakan oleh 2 orang. Berikut bagian yang menjadi tanggung jawab saya.
          </p>
          <ul className="mt-4 space-y-2">
            {p.myContribution.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

function ProjectLink({
  href,
  label,
  icon: Icon,
  primary,
}: {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  primary?: boolean
}) {
  const disabled = !href || href === '#'
  const base =
    'inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition'
  if (disabled) {
    return (
      <span
        aria-disabled="true"
        title="Link belum tersedia"
        className={`${base} cursor-not-allowed border border-dashed border-border bg-card text-muted-foreground`}
      >
        <Icon className="h-4 w-4" />
        {label}
        <span className="text-xs">(soon)</span>
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? `${base} bg-primary text-primary-foreground hover:-translate-y-0.5`
          : `${base} border border-border bg-card hover:bg-secondary`
      }
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  )
}
