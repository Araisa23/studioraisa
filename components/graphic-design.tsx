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
  const [active, setActive] = useState<string[]>([]) // kosong = "Semua"
  const { open } = useLightbox()

  function toggleCategory(cat: string) {
    if (cat === designCategories[0]) {
      setActive([])
      return
    }
    setActive((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    )
  }

  const filtered = useMemo(
    () =>
      active.length === 0
        ? designWorks
        : designWorks.filter((w) => w.categories.some((c) => active.includes(c))),
    [active],
  )

  // ⬅️ PERUBAHAN 1: hanya item bergambar (bukan video) yang masuk ke lightbox
  const withImages = filtered.filter((w) => w.src && !w.videoUrl)

  return (
    <section id="design" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        index="06"
        eyebrow="Graphic Design"
        title="Visual work"
        description="Kumpulan karya desain grafis."
      />

      {/* Filters */}
      <Reveal className="mt-8 flex flex-wrap gap-2">
        {designCategories.map((cat) => {
          const isActive = cat === designCategories[0] ? active.length === 0 : active.includes(cat)
          return (
            <button
              key={cat}
              type="button"
              onClick={() => toggleCategory(cat)}
              aria-pressed={isActive}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                isActive
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground',
              )}
            >
              {cat}
            </button>
          )
        })}
      </Reveal>

      {active.length > 0 && (
        <p className="mt-3 text-xs text-muted-foreground">
          Menampilkan: {active.join(', ')}
        </p>
      )}

      {/* Masonry via CSS columns */}
      <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((work, i) => {
          // ⬅️ PERUBAHAN 2: item video tidak dianggap "clickable" untuk lightbox
          const clickable = Boolean(work.src) && !work.videoUrl
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
                  {/* ⬅️ PERUBAHAN 3: render iframe YouTube kalau ada videoUrl */}
                  {work.videoUrl ? (
                    <iframe
                      src={work.videoUrl}
                      title={work.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  ) : work.src ? (
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
                <div className="flex items-start justify-between gap-2 border-t border-border px-4 py-3">
                  <span className="truncate text-sm font-medium">{work.title}</span>
                  <span className="flex shrink-0 flex-wrap justify-end gap-1">
                    {work.categories.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground"
                      >
                        {c}
                      </span>
                    ))}
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