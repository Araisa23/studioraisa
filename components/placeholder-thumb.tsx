import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type PlaceholderThumbProps = {
  label?: string
  className?: string
}

/**
 * Neutral placeholder tile for galleries where the user will drop in real
 * assets later. Intentionally simple — no generated artwork.
 */
export function PlaceholderThumb({ label, className }: PlaceholderThumbProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-2 bg-muted text-muted-foreground',
        className,
      )}
    >
      <ImageIcon className="h-6 w-6 opacity-50" aria-hidden="true" />
      {label && (
        <span className="px-4 text-center text-xs font-medium leading-snug text-pretty">
          {label}
        </span>
      )}
    </div>
  )
}
