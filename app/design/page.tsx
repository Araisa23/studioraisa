import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AmbientBackground } from '@/components/ambient-background'
import { GraphicDesign } from '@/components/graphic-design'
import { LightboxProvider } from '@/components/lightbox'

export default function DesignPage() {
  return (
    <LightboxProvider>
      <AmbientBackground />
      <main className="relative z-10 min-h-screen space-y-10 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke portfolio
          </Link>
        </div>
        <GraphicDesign />
      </main>
    </LightboxProvider>
  )
}