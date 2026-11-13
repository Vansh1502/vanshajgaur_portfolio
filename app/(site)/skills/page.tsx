import type { Metadata } from 'next'
import Skills from '@/components/sections/Skills'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE } from '@/lib/site'

const description =
  'Technical skills of Manisha Bhardwaj across SQL, Python, business intelligence, data engineering, automation and product ownership.'

export const metadata: Metadata = {
  title: 'Skills',
  description,
  alternates: { canonical: '/skills' },
  openGraph: { title: `Skills — ${SITE.name}`, description, url: '/skills' },
}

export default function SkillsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-24 md:pt-28 focus:outline-none">
      <JsonLd schema={breadcrumbSchema('/skills')} />
      <Skills />
    </main>
  )
}
