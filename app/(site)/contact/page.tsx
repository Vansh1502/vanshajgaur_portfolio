import type { Metadata } from 'next'
import Contact from '@/components/sections/Contact'
import Faq from '@/components/sections/Faq'
import JsonLd from '@/components/JsonLd'
import { contactPageSchema } from '@/lib/seo'
import { SITE } from '@/lib/site'

const description =
  'Get in touch with Vanshaj Gaur — open to AI implementation roles, consulting, and collaboration.'

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title: `Contact — ${SITE.name}`, description, url: '/contact' },
}

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen pt-24 md:pt-28 focus:outline-none">
      <JsonLd schema={contactPageSchema()} />
      <Contact />
      <Faq />
    </main>
  )
}
