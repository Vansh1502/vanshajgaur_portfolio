import type { Metadata } from 'next'
import Certifications from '@/components/sections/Certifications'
import JsonLd from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/seo'
import { SITE } from '@/lib/site'

const description = 'No formal certifications are listed in the supplied profile materials.'

export const metadata: Metadata = {
  title: 'Certifications',
  description,
  alternates: { canonical: '/certifications' },
  openGraph: { title: `Certifications — ${SITE.name}`, description, url: '/certifications' },
}

export default function CertificationsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-24 md:pt-28 focus:outline-none">
      <JsonLd schema={breadcrumbSchema('/certifications')} />
      <Certifications />
    </main>
  )
}
