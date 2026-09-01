import { BrainCircuit, Rocket, Workflow, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PROJECTS } from '@/content/projects'
import { EXPERIENCES } from '@/content/experience'
import { SKILLS } from '@/content/skills'
import { CERTIFICATIONS } from '@/content/certifications'

/**
 * Stats are derived from the content files rather than hardcoded, so they stay
 * true to whatever is actually on the site. While the projects and
 * certifications below are placeholders, these numbers describe placeholder
 * content — they become accurate the moment the real entries land.
 */
export interface AboutStat {
  value: number
  suffix?: string
  /** Plural label; `one` is used when the value is exactly 1. */
  label: string
  one?: string
}

export const ABOUT_STATS: AboutStat[] = [
  { value: PROJECTS.length, label: 'Projects Showcased', one: 'Project Showcased' },
  { value: EXPERIENCES.length, label: 'Roles Held', one: 'Role Held' },
  { value: SKILLS.filter((s) => s.tier !== 'working').length, label: 'Production Skills', one: 'Production Skill' },
  { value: CERTIFICATIONS.length, label: 'Certifications', one: 'Certification' },
]

export function statLabel(stat: AboutStat): string {
  return stat.value === 1 && stat.one ? stat.one : stat.label
}

export interface AboutTrait {
  icon: LucideIcon
  title: string
  desc: string
}

/** [DRAFT COPY] Describes the shape of the role — confirm the wording with Vanshaj. */
export const ABOUT_TRAITS: AboutTrait[] = [
  {
    icon: BrainCircuit,
    title: 'Applied AI',
    desc: 'Choosing the model that fits the constraint, not the one that scores best on a benchmark nobody deployed.',
  },
  {
    icon: Workflow,
    title: 'Integration',
    desc: 'Wiring intelligence into systems that already exist — APIs, data streams, and the workflows people actually use.',
  },
  {
    icon: Rocket,
    title: 'Delivery',
    desc: 'Owning the unglamorous half: validation, edge cases, rollout, and the support that makes adoption stick.',
  },
  {
    icon: Truck,
    title: 'Domain Depth',
    desc: 'Fleet and logistics operations, where data is messy, latency matters, and a wrong call costs a real trip.',
  },
]

/** [STARTER SET] Mirrors content/skills.ts — keep the two in sync. */
export const ABOUT_TECH_STACK = [
  'Python', 'Machine Learning', 'Pandas', 'Scikit-learn',
  'SQL', 'PostgreSQL', 'REST APIs', 'Data Pipelines',
  'Workflow Automation', 'Docker', 'Git', 'Telematics Data',
]
