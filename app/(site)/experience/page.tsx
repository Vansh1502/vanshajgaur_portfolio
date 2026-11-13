import type { Metadata } from 'next'
import Experience from '@/components/sections/Experience'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE } from '@/lib/site'

const description =
  'Professional experience of Manisha Bhardwaj across analytics leadership, product ownership, data engineering and financial data quality.'

export const metadata: Metadata = {
  title: 'Experience',
  description,
  alternates: { canonical: '/experience' },
  openGraph: { title: `Experience — ${SITE.name}`, description, url: '/experience' },
}

export default function ExperiencePage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-24 md:pt-28 focus:outline-none">
      <JsonLd schema={breadcrumbSchema('/experience')} />
      <Experience />
    </main>
  )
}
