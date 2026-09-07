'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export type LightboxImage = { src: string; caption?: string }

type LightboxContextValue = {
  open: (images: LightboxImage[], index?: number) => void
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([])
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback((imgs: LightboxImage[], i = 0) => {
    if (!imgs.length) return
    setImages(imgs)
    setIndex(i)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  )
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, close, next, prev])

  const current = images[index]
  const multiple = images.length > 1

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {isOpen && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption ?? 'Image preview'}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background transition hover:bg-background/20"
          >
            <X className="h-5 w-5" />
          </button>

          {multiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background transition hover:bg-background/20 md:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          <figure
            className="flex max-h-[88vh] max-w-5xl flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src || '/placeholder.svg'}
              alt={current.caption ?? 'Preview'}
              className="max-h-[78vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            {current.caption && (
              <figcaption className="text-center text-sm text-background/80">
                {current.caption}
                {multiple && (
                  <span className="ml-2 text-background/50">
                    {index + 1} / {images.length}
                  </span>
                )}
              </figcaption>
            )}
          </figure>

          {multiple && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background transition hover:bg-background/20 md:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  )
}
