import type { Certification } from '@/types'
/** No formal certifications were listed in the supplied profile or resume. */
export const CERTIFICATIONS: Certification[] = []
export const CERT_COLOR_MAP = {
  blue: { dot: 'bg-blue-500', hover: 'hover:border-blue-500/30 hover:shadow-blue-500/10' },
  orange: { dot: 'bg-orange-400', hover: 'hover:border-orange-400/30 hover:shadow-orange-400/10' },
  green: { dot: 'bg-green-500', hover: 'hover:border-green-500/30 hover:shadow-green-500/10' },
  purple: { dot: 'bg-violet-500', hover: 'hover:border-violet-500/30 hover:shadow-violet-500/10' },
}
