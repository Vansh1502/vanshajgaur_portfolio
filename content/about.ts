import { BrainCircuit, Rocket, Workflow, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PROJECTS } from '@/content/projects'
import { EXPERIENCES } from '@/content/experience'
export interface AboutStat { value: number; suffix?: string; label: string; one?: string }
export const ABOUT_STATS: AboutStat[] = [
  { value: PROJECTS.length, label: 'Projects Showcased', one: 'Project Showcased' },
  { value: EXPERIENCES.length, label: 'Professional Roles', one: 'Professional Role' },
  { value: 5, label: 'Team Members Led' },
  { value: 96, suffix: '%', label: 'MIS Reporting Automated' },
]
export function statLabel(stat: AboutStat): string { return stat.value === 1 && stat.one ? stat.one : stat.label }
export interface AboutTrait { icon: LucideIcon; title: string; desc: string }
export const ABOUT_TRAITS: AboutTrait[] = [
  { icon: BrainCircuit, title: 'Analytics Leadership', desc: 'Building a Data Science & Analytics function and translating leadership questions into measurable KPIs and decision systems.' },
  { icon: Workflow, title: 'Automation & Data', desc: 'Connecting 40–50 sources and building reliable pipelines, scheduled workflows and automated reporting.' },
  { icon: Rocket, title: 'Product Ownership', desc: 'Taking internal products from discovery and requirements through PRDs, UAT, rollout and adoption.' },
  { icon: BarChart3, title: 'Business Impact', desc: 'Creating operational visibility and measurable efficiency gains across Finance, Operations, Sales, Customer Success, Product and IT.' },
]
export const ABOUT_TECH_STACK = ['SQL', 'Python', 'PostgreSQL', 'MongoDB', 'Power BI', 'Apache Superset', 'Looker Studio', 'Excel', 'ETL', 'REST APIs', 'Google Apps Script', 'Playwright']
