import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Leadership from '@/components/sections/Leadership'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Faq from '@/components/sections/Faq'
import JsonLd from '@/components/JsonLd'
import { isSectionEnabled } from '@/content/sections'
import { homeGraph } from '@/lib/seo'

/** Sections respect the `enabled` flags in content/sections.ts. */
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
      <JsonLd schema={homeGraph()} />
      <Hero />
      {isSectionEnabled('about') && <About />}
      {isSectionEnabled('projects') && <Projects />}
      {isSectionEnabled('experience') && <Experience />}
      {isSectionEnabled('skills') && <Skills />}
      {isSectionEnabled('leadership') && <Leadership />}
      {isSectionEnabled('certifications') && <Certifications />}
      {isSectionEnabled('contact') && <Contact />}
      <Faq />
    </main>
  )
}
