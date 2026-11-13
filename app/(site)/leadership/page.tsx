import type { Metadata } from 'next'
import Leadership from '@/components/sections/Leadership'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE } from '@/lib/site'

const description = 'Leadership, mentoring and professional contributions of Manisha Bhardwaj.'

export const metadata: Metadata = {
  title: 'Leadership',
  description,
  alternates: { canonical: '/leadership' },
  openGraph: { title: `Leadership — ${SITE.name}`, description, url: '/leadership' },
}

export default function LeadershipPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-24 md:pt-28 focus:outline-none">
      <JsonLd schema={breadcrumbSchema('/leadership')} />
      <Leadership />
    </main>
  )
}
