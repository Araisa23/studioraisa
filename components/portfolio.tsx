'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, PanelsTopLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { featuredProject, designWorks } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

// 1. Definisi Filter
const filters = ['All Projects', 'Graphic Design', 'UI/UX Cases', 'Web Apps'] as const
type PortfolioFilter = (typeof filters)[number]

// 2. Interface dengan Dukungan Multi-Category & Multi-Label
interface ProjectItem {
  id: string
  title: string
  categories: Array<Exclude<PortfolioFilter, 'All Projects'>> // BISA BANYAK KATEGORI
  labels: string[]                                          // BISA BANYAK LABEL
  description: string
  image?: string
  href: string
}

// 3. Data Proyek (Setiap proyek bisa punya >1 kategori & label)
const projects: ProjectItem[] = [
  {
    id: 'web-presensi',
    title: 'Web Presensi Tenaga Kependidikan',
    categories: ['Web Apps'], // Multi-category!
    labels: ['Web App', 'Capstone TA', 'Laravel'],
    description:
      'Sistem presensi dengan validasi lokasi, dokumentasi swafoto, face liveness, dan device binding.',
    image: featuredProject.heroMockup,
    href: '#featured',
  },
  {
    id: 'medinfo-visual-kit',
    title: 'Media & Information Visual Kit',
    categories: ['Graphic Design'], // Multi-category!
    labels: ['Graphic Design', 'Branding', 'Social Media'],
    description:
      'Kumpulan poster, publikasi media sosial, desain sertifikat, dan identitas visual organisasi.',
    image: designWorks.find((work) => work.src)?.src,
    href: '/design',
  },
  {
    id: 'campus-portal-redesign',
    title: 'Personal Task Management App',
    categories: ['UI/UX Cases'],
    labels: ['UI/UX Design', 'Figma Prototype'],
    description:
      'Perancangan antarmuka aplikasi EXPLOREKALSEl untuk tugas mandiri.',
    href: '/design',
  },
  {
    id: 'event-branding-kit',
    title: 'Event Branding & Social Media Feed',
    categories: ['Graphic Design'],
    labels: ['Graphic Design', 'Event Design'],
    description:
      'Desain feed Instagram, banner, dan ID Card panitia untuk proker organisasi.',
    href: '#skills',
  },
]

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('All Projects')

  // LOGIKA FILTER: Cek apakah filter aktif ada di dalam array `categories` proyek
  const visibleProjects = projects.filter((project) => {
    if (activeFilter === 'All Projects') return true
    return project.categories.includes(activeFilter)
  })

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xs uppercase tracking-widest text-primary">
            Galeri Karya
          </p>
          <SectionHeading title="Portfolio & Selected Works" className="mt-2" />
        </div>
        
        {/* Tombol Filter */}
        <div className="flex flex-wrap gap-2" aria-label="Filter portfolio">
          {filters.map((filter) => (
            <button
              key={filter} // KEY UNIK UNTUK FILTER
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={cn(
                'rounded-xl border px-3.5 py-2 text-xs font-semibold transition-colors',
                activeFilter === filter
                  ? 'border-primary/40 bg-accent text-primary'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground',
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Proyek */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          // FIX ERROR: Menggunakan project.id unik sebagai key, bukan project.category
          <Reveal key={project.id} delay={index * 70}>
            <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
              <Link href={project.href} className="flex h-full flex-col">
                
                {/* Gambar / Placeholder */}
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-secondary">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-cyan-950 to-slate-900 text-cyan-200">
                      <PanelsTopLeft className="h-10 w-10" />
                      <span className="font-display text-xs font-semibold uppercase tracking-widest">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col p-5">
                  
                  {/* MULTI-LABEL BADGES: Render lebih dari 1 label */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.labels.map((lbl, idx) => (
                      <span
                        key={`${project.id}-label-${idx}`}
                        className="w-fit rounded-md bg-accent px-2.5 py-1 text-[10px] font-semibold text-accent-foreground"
                      >
                        {lbl}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-3 font-display text-base font-bold">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                    {project.categories.includes('Graphic Design')
                      ? 'Lihat hasil karya'
                      : 'Lihat detail proyek'}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>

                </div>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}