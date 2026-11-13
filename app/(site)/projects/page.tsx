import type { Metadata } from 'next'
import Projects from '@/components/sections/Projects'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE } from '@/lib/site'

const description =
  'Selected projects by Manisha Bhardwaj across internal product development, employee performance analytics, and communication intelligence.'

export const metadata: Metadata = {
  title: 'Projects',
  description,
  alternates: { canonical: '/projects' },
  openGraph: { title: `Projects — ${SITE.name}`, description, url: '/projects' },
}

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-24 md:pt-28 focus:outline-none">
      <JsonLd schema={breadcrumbSchema('/projects')} />
      <Projects />
    </main>
  )
}
