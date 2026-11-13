import type { LucideIcon } from 'lucide-react'

export interface Project {
  _id: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
  featured: boolean
  order: number
}

export interface Experience {
  _id: string
  company: string
  role: string
  description: string
  responsibilities: string[]
  technologies: string[]
  /** Omit when the exact month is not confirmed — the UI falls back to `periodNote`. */
  startDate?: string
  endDate?: string
  /** Shown instead of the formatted date range when `startDate` is absent. */
  periodNote?: string
  current: boolean
  order: number
}

export type SkillTier = 'core' | 'production' | 'working'

export type SkillCategoryId =
  | 'ai'
  | 'bi'
  | 'data'
  | 'engineering'
  | 'automation'
  | 'product'
  | 'tools'

export interface Skill {
  _id: string
  name: string
  tier: SkillTier
  category: SkillCategoryId
}

export interface LeadershipRole {
  _id: string
  title: string
  organisation: string
  period: string
  description: string
  impact: string[]
  icon: 'users' | 'trophy' | 'star'
}

export interface Certification {
  _id: string
  name: string
  issuer: string
  date: string
  description: string
  credential?: string
  color: 'blue' | 'orange' | 'green' | 'purple'
}

export interface FaqEntry {
  _id: string
  question: string
  answer: string
}

export interface SocialLink {
  id: 'github' | 'linkedin' | 'email' | 'resume' | 'whatsapp'
  label: string
  href: string
  icon: LucideIcon
  username?: string
}
