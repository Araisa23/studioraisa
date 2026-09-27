'use client'

import { useState } from 'react'
import { Palette, Code2, TestTube2, PenTool } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skillCategories } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const icons: LucideIcon[] = [Palette, Code2, TestTube2, PenTool]

const accentByIndex = [
  'text-violet-600 border-violet-500/25 bg-violet-500/10',
  'text-primary border-primary/25 bg-primary/10',
  'text-lime-700 border-lime-500/25 bg-lime-500/10',
  'text-pink-600 border-pink-500/25 bg-pink-500/10',
]

const barByIndex = ['bg-violet-500', 'bg-primary', 'bg-lime-500', 'bg-pink-500']

const levelByIndex = ['Advanced', 'Proficient', 'Proficient', 'Expert']

const widthByIndex = ['w-[88%]', 'w-[85%]', 'w-[86%]', 'w-[90%]']

export function Skills() {
  const [filter, setFilter] = useState<'all' | number>('all')

  return (
    <section id="skills">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading title="Skills" align="center" className="mb-8" />

        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={cn(
              'glass-panel rounded-xl px-4 py-2 text-xs font-semibold transition-all',
              filter === 'all'
                ? 'border-primary/40 bg-primary/10 text-primary'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            All
          </button>
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setFilter(i)}
              className={cn(
                'glass-panel rounded-xl px-4 py-2 text-xs font-semibold transition-all',
                filter === i
                  ? 'border-primary/40 bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {cat.title}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            if (filter !== 'all' && filter !== i) return null
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={cat.title} delay={i * 60}>
                <article className="glass-panel h-full space-y-3 rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'flex h-10 w-10 items-center justify-center rounded-xl border',
                        accentByIndex[i],
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{levelByIndex[i]}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{cat.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{cat.description}</p>
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-border bg-background/90 px-2 py-0.5 text-xs text-foreground/85"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="h-1.5 w-full rounded-full bg-secondary">
                    <div className={cn('h-1.5 rounded-full', barByIndex[i], widthByIndex[i])} />
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
