/**
 * Single source of truth for Manisha Bhardwaj's professional profile.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://manishabhardwaj.example').replace(/\/$/, '')
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '').replace(/[^\d]/g, '')
export const WHATSAPP_GREETING = 'Hi Manisha, I found your portfolio and would like to connect.'
export function whatsappUrl(message = WHATSAPP_GREETING): string | null {
  if (!WHATSAPP_NUMBER) return null
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
export const SITE = {
  name: 'Manisha Bhardwaj',
  firstName: 'Manisha',
  initials: 'MB',
  alternateNames: ['Manisha Bhardwaj Portfolio', 'Manisha Bharthi Bhardwaj'],
  primaryRole: 'Senior Data Analyst',
  team: 'Data Science & Analytics',
  company: 'Axestrack',
  companyLegalName: 'Axestrack Software Solutions Pvt. Ltd.',
  location: 'Jaipur, Rajasthan, India',
  title: 'Manisha Bhardwaj — Senior Data Analyst | Data Science & Analytics Lead',
  description: 'Senior Data Analyst and Data Science & Analytics Lead at Axestrack. Building data pipelines, BI dashboards, product workflows and automation across business functions.',
  url: SITE_URL,
  email: 'mb02bhardwaj@gmail.com',
  availability: 'Senior Data Analyst @ Axestrack',
  openToRoles: ['Senior Data Analyst', 'Analytics Lead', 'Product Management', 'Business Analytics', 'Product Analytics'],
  socials: { linkedin: 'https://www.linkedin.com/in/manisha-bhardwaj-810a8922b/', github: '' },
  resumeUrl: '',
} as const
export const ALMA_MATER: string | null = 'Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat'
