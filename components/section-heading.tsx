import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <div className="flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.25em] text-primary">
        <span className="tabular-nums">{index}</span>
        <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
        <span className="text-muted-foreground">{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed text-muted-foreground',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
