export interface SectionMeta { id: string; path: string; navLabel: string; enabled: boolean; inNav: boolean }
export const SECTIONS: SectionMeta[] = [
  { id: 'about', path: '/about', navLabel: 'About', enabled: true, inNav: true },
  { id: 'projects', path: '/projects', navLabel: 'Projects', enabled: true, inNav: true },
  { id: 'experience', path: '/experience', navLabel: 'Experience', enabled: true, inNav: true },
  { id: 'skills', path: '/skills', navLabel: 'Skills', enabled: true, inNav: true },
  { id: 'leadership', path: '/leadership', navLabel: 'Leadership', enabled: true, inNav: false },
  { id: 'certifications', path: '/certifications', navLabel: 'Certifications', enabled: false, inNav: false },
  { id: 'contact', path: '/contact', navLabel: 'Contact', enabled: true, inNav: true },
]
export const ALL_PAGES = SECTIONS.filter((s) => s.enabled)
export const NAV_LINKS = ALL_PAGES.filter((s) => s.inNav)
export const SCROLL_SECTION_IDS = new Set(ALL_PAGES.map((s) => s.id))
export function isSectionEnabled(id: string): boolean { return SCROLL_SECTION_IDS.has(id) }
function sectionNumber(id: string): string {
  const index = ALL_PAGES.findIndex((s) => s.id === id)
  return String(index + 1).padStart(2, '0')
}
export function sectionEyebrow(id: string, isHome: boolean): string {
  const name = ALL_PAGES.find((s) => s.id === id)?.navLabel ?? id
  if (!isHome || !SCROLL_SECTION_IDS.has(id)) return name.toUpperCase()
  return `${sectionNumber(id)} / ${name}`
}
