import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { WhatsApp } from '@/components/ui/icons'
import { SITE, whatsappUrl } from '@/lib/site'
import type { SocialLink } from '@/types'

const whatsappHref = whatsappUrl()
export const SOCIAL_LINKS: SocialLink[] = [
  ...(SITE.socials.github ? [{ id: 'github' as const, label: 'GitHub', href: SITE.socials.github, icon: Github, username: 'GitHub' }] : []),
  { id: 'linkedin', label: 'LinkedIn', href: SITE.socials.linkedin, icon: Linkedin, username: 'Manisha Bhardwaj' },
  ...(whatsappHref ? [{ id: 'whatsapp' as const, label: 'WhatsApp', href: whatsappHref, icon: WhatsApp, username: 'Chat on WhatsApp' }] : []),
  { id: 'email', label: 'Email', href: `mailto:${SITE.email}`, icon: Mail, username: SITE.email },
  ...(SITE.resumeUrl ? [{ id: 'resume' as const, label: 'Resume', href: SITE.resumeUrl, icon: FileText }] : []),
]
export function findSocialLink(id: SocialLink['id']): SocialLink | undefined { return SOCIAL_LINKS.find((s) => s.id === id) }
export function getSocialLink(id: SocialLink['id']): SocialLink {
  const link = findSocialLink(id)
  if (!link) throw new Error(`Unknown social link id: ${id}`)
  return link
}
