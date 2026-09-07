'use client'

import { useMemo, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { PlaceholderThumb } from '@/components/placeholder-thumb'
import { useLightbox } from '@/components/lightbox'
import { designCategories, designWorks } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const heightBySize: Record<string, string> = {
  tall: 'h-80',
  wide: 'h-48',
  normal: 'h-64',
}

export function GraphicDesign() {
  const [active, setActive] = useState(designCategories[0])
  const { open } = useLightbox()

  const filtered = useMemo(
    () =>
      active === designCategories[0]
        ? designWorks
        : designWorks.filter((w) => w.category === active),
    [active],
  )

  const withImages = filtered.filter((w) => w.src)

  return (
    <section id="design" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        index="07"
        eyebrow="Graphic Design"
        title="Visual work"
        description="Kumpulan karya desain grafis. Placeholder di bawah dapat diganti dengan karya asli Anda melalui file config."
      />

      {/* Filters */}
      <Reveal className="mt-8 flex flex-wrap gap-2">
        {designCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              active === cat
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card text-muted-foreground hover:text-foreground',
            )}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Masonry via CSS columns */}
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((work, i) => {
          const clickable = Boolean(work.src)
          return (
            <Reveal key={`${work.title}-${i}`} delay={(i % 3) * 60} className="break-inside-avoid">
              <button
                type="button"
                disabled={!clickable}
                onClick={() => {
                  if (!clickable) return
                  const idx = withImages.findIndex((w) => w === work)
                  open(
                    withImages.map((w) => ({ src: w.src as string, caption: w.title })),
                    Math.max(0, idx),
                  )
                }}
                className={cn(
                  'group relative block w-full overflow-hidden rounded-xl border border-border bg-card text-left',
                  clickable ? 'cursor-zoom-in' : 'cursor-default',
                )}
              >
                <div className={cn('w-full', heightBySize[work.size ?? 'normal'])}>
                  {work.src ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={work.src || '/placeholder.svg'}
                      alt={work.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <PlaceholderThumb label={work.title} />
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3">
                  <span className="truncate text-sm font-medium">{work.title}</span>
                  <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                    {work.category}
                  </span>
                </div>
              </button>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
