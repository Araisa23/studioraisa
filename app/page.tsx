import { LightboxProvider } from '@/components/lightbox'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { FeaturedProject } from '@/components/featured-project'
import { CaseStudy } from '@/components/case-study'
import { WebProjects } from '@/components/web-projects'
import { Testing } from '@/components/testing'
import { GraphicDesign } from '@/components/graphic-design'
import { BeyondCode } from '@/components/beyond-code'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <LightboxProvider>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <CaseStudy />
        <WebProjects />
        <Testing />
        <GraphicDesign />
        <BeyondCode />
        <Contact />
      </main>
      <SiteFooter />
    </LightboxProvider>
  )
}
