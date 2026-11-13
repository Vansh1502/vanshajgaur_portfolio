import { ALMA_MATER, SITE, SITE_URL } from '@/lib/site'
import { SECTIONS, ALL_PAGES } from '@/content/sections'
import { PROJECTS } from '@/content/projects'
import { EXPERIENCES } from '@/content/experience'
import { CERTIFICATIONS } from '@/content/certifications'
import { SKILLS } from '@/content/skills'
import { FAQS } from '@/content/faqs'

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`
const ORGANIZATION_ID = `${SITE_URL}/#organization`

const currentRole = EXPERIENCES.find((e) => e.current) ?? EXPERIENCES[0]

const SAME_AS = [SITE.socials.linkedin, SITE.socials.github].filter(Boolean)

function organisation(name: string) {
  return { '@type': 'Organization', name }
}

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.name,
    alternateName: SITE.alternateNames,
    givenName: 'Manisha',
    familyName: 'Bhardwaj',
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    jobTitle: [...SITE.openToRoles],
    description: SITE.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    worksFor: currentRole ? organisation(currentRole.company) : undefined,
    ...(ALMA_MATER ? { alumniOf: { '@type': 'CollegeOrUniversity', name: ALMA_MATER } } : {}),
    hasOccupation: SITE.openToRoles.map((role) => ({
      '@type': 'Occupation',
      name: role,
      occupationalCategory: '15-2051.00',
      skills: SKILLS.map((s) => s.name).join(', '),
    })),
    knowsAbout: [
      'Data Analytics',
      'Business Intelligence',
      'Data Engineering',
      'Product Ownership',
      'Workflow Automation',
      'Natural Language Processing',
      'Sentiment Analytics',
      'Financial Data Quality',
    ],
    sameAs: SAME_AS,
    hasCredential: CERTIFICATIONS.map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name,
      credentialCategory: 'certificate',
      recognizedBy: organisation(cert.issuer),
      ...(cert.credential ? { url: cert.credential } : {}),
    })),
  }
}

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    alternateName: `${SITE.name} — ${SITE.primaryRole}`,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE_URL}/#logo`,
      url: `${SITE_URL}/apple-icon`,
      contentUrl: `${SITE_URL}/apple-icon`,
      width: 180,
      height: 180,
      caption: SITE.name,
    },
    image: { '@id': `${SITE_URL}/#logo` },
    founder: { '@id': PERSON_ID },
    sameAs: SAME_AS,
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    description: SITE.description,
    inLanguage: 'en',
    publisher: { '@id': PERSON_ID },
    about: { '@id': PERSON_ID },
  }
}

export function profilePageSchema() {
  return {
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: SITE.title,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': PERSON_ID },
  }
}

export function projectsSchema() {
  return {
    '@type': 'ItemList',
    '@id': `${SITE_URL}/projects#list`,
    name: `Projects by ${SITE.name}`,
    numberOfItems: PROJECTS.length,
    itemListElement: PROJECTS.map((project, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        url: project.liveUrl ?? project.githubUrl ?? SITE_URL,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        author: { '@id': PERSON_ID },
        keywords: project.technologies.join(', '),
        ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
      },
    })),
  }
}

export function experienceSchema() {
  return EXPERIENCES.filter((exp) => exp.startDate).map((exp) => ({
    '@type': 'OrganizationRole',
    roleName: exp.role,
    startDate: exp.startDate,
    ...(exp.endDate ? { endDate: exp.endDate } : {}),
    memberOf: organisation(exp.company),
  }))
}

export function faqPageSchema(pageUrl: string = `${SITE_URL}/contact`) {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function aboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${SITE_URL}/about#page`,
        url: `${SITE_URL}/about`,
        name: `About ${SITE.name}`,
        description: SITE.description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        mainEntity: { '@id': PERSON_ID },
        inLanguage: 'en',
      },
      breadcrumbGraph([
        { name: 'Home', item: SITE_URL },
        { name: 'About', item: `${SITE_URL}/about` },
      ]),
    ],
  }
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${SITE_URL}/contact#page`,
        url: `${SITE_URL}/contact`,
        name: `Contact ${SITE.name}`,
        description: `Get in touch with ${SITE.name} about ${SITE.openToRoles.join(', ')} roles, consulting, or collaboration.`,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        inLanguage: 'en',
        mainEntity: {
          '@type': 'ContactPoint',
          contactType: 'Professional enquiries',
          areaServed: 'Worldwide',
          availableLanguage: ['English', 'Hindi'],
        },
      },
      faqPageSchema(),
      breadcrumbGraph([
        { name: 'Home', item: SITE_URL },
        { name: 'Contact', item: `${SITE_URL}/contact` },
      ]),
    ],
  }
}

function breadcrumbGraph(entries: { name: string; item: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: entries.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  }
}

export function breadcrumbSchema(path: string) {
  const section = ALL_PAGES.find((s) => s.path === path)
  const items = [{ name: 'Home', item: SITE_URL }]
  if (section) items.push({ name: section.navLabel, item: `${SITE_URL}${section.path}` })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  }
}

export function homeGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [faqPageSchema(SITE_URL)],
  }
}

export function rootGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema(),
      organizationSchema(),
      websiteSchema(),
      profilePageSchema(),
      projectsSchema(),
    ],
  }
}

export const SECTION_COUNT = SECTIONS.length
