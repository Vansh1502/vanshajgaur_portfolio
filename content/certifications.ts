import type { Certification } from '@/types'

/**
 * [PLACEHOLDER] None of Vanshaj's certifications could be verified publicly.
 * Replace each entry with a real credential, or set `enabled: false` for the
 * `certifications` section in content/sections.ts to hide the whole block
 * until there is something to show.
 *
 * `credential` is optional — omit it and the card drops the "View credential"
 * link instead of pointing nowhere.
 */
export const CERTIFICATIONS: Certification[] = [
  {
    _id: '1',
    name: 'Certification name',
    issuer: 'Issuing body',
    date: 'Year',
    description:
      'Placeholder — one sentence on what the certification covered and why it matters for the work Vanshaj does.',
    color: 'purple',
  },
  {
    _id: '2',
    name: 'Certification name',
    issuer: 'Issuing body',
    date: 'Year',
    description:
      'Placeholder — swap in a real credential. Courses only earn a slot here if they changed how Vanshaj works.',
    color: 'orange',
  },
  {
    _id: '3',
    name: 'Certification name',
    issuer: 'Issuing body',
    date: 'Year',
    description:
      'Placeholder — cloud, data or ML credentials read strongest for an implementation-focused role.',
    color: 'blue',
  },
  {
    _id: '4',
    name: 'Certification name',
    issuer: 'Issuing body',
    date: 'Year',
    description:
      'Placeholder — delete any entries that stay empty rather than shipping filler. Four cards fill the row exactly.',
    color: 'green',
  },
]

export const CERT_COLOR_MAP = {
  blue: { dot: 'bg-blue-500', hover: 'hover:border-blue-500/30 hover:shadow-blue-500/10' },
  orange: { dot: 'bg-orange-400', hover: 'hover:border-orange-400/30 hover:shadow-orange-400/10' },
  green: { dot: 'bg-green-500', hover: 'hover:border-green-500/30 hover:shadow-green-500/10' },
  purple: { dot: 'bg-violet-500', hover: 'hover:border-violet-500/30 hover:shadow-violet-500/10' },
}
