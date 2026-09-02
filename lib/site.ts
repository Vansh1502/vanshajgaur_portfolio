/**
 * Single source of truth for Vanshaj Gaur's profile.
 *
 * Every field is tagged:
 *   [VERIFIED]    — corroborated from a public source (see CONTENT-TODO.md).
 *   [PLACEHOLDER] — needs Vanshaj to confirm or supply before launch.
 *
 * Placeholder contact details are deliberately inert (example.com, empty
 * strings) so nothing fake ever ships as a working link — the UI hides any
 * social/CTA whose value is unset.
 */

export const SITE_URL = (
  // [PLACEHOLDER] swap for the real domain once it is registered.
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.vanshajgaur.com'
).replace(/\/$/, '')

// [PLACEHOLDER] full international number, digits only (e.g. 919876543210).
// Left empty on purpose: the WhatsApp FAB and contact row stay hidden until set.
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '').replace(/[^\d]/g, '')

export const WHATSAPP_GREETING = 'Hi Vanshaj, I found your portfolio and would like to connect.'

export function whatsappUrl(message = WHATSAPP_GREETING): string | null {
  if (!WHATSAPP_NUMBER) return null
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const SITE = {
  // [VERIFIED]
  name: 'Vanshaj Gaur',
  firstName: 'Vanshaj',
  initials: 'VG',

  alternateNames: ['Vanshaj Gaur Portfolio', 'Vanshaj'],

  // [VERIFIED] LinkedIn headline.
  primaryRole: 'AI Implementation Engineer',
  // [VERIFIED] The Org listing for Axestrack HQ.
  team: 'AI Labs',
  company: 'Axestrack',
  companyLegalName: 'Axestrack Software Solutions Pvt. Ltd.',
  // [VERIFIED] Axestrack is headquartered in Jaipur.
  location: 'Jaipur, Rajasthan, India',

  title: 'Vanshaj Gaur — AI Implementation Engineer',
  description:
    'AI Implementation Engineer at Axestrack AI Labs — putting machine learning and intelligent automation to work inside live logistics and fleet operations, from first integration to production rollout.',
  url: SITE_URL,

  email: process.env.EMAIL_USER ?? 'vanshajgaur946269@gmail.com',

  // [VERIFIED] status line — he is currently in this role.
  availability: 'AI Implementation Engineer @ Axestrack',
  // [PLACEHOLDER] confirm what Vanshaj wants to signal to recruiters.
  openToRoles: ['AI Implementation Engineer', 'AI Solutions Engineer', 'Machine Learning Engineer'],

  socials: {
    // [VERIFIED]
    linkedin: 'https://www.linkedin.com/in/vanshaj-gaur-57169b202/',
    // [PLACEHOLDER] empty values are filtered out of the UI entirely.
    github: '',
  },
  // [PLACEHOLDER] a public resume link (Drive, Dropbox, etc.).
  resumeUrl: '',
} as const

/** Alma mater used in JSON-LD. [PLACEHOLDER] — omitted until confirmed. */
export const ALMA_MATER: string | null = null
