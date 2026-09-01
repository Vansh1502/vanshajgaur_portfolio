import type { Skill, SkillCategoryId, SkillTier } from '@/types'

/**
 * [STARTER SET — NEEDS CONFIRMATION] Derived from Vanshaj's role title and his
 * employer's domain, not from his LinkedIn skills list (which could not be
 * fetched). Treat this as a first pass: cut anything he doesn't actually use
 * and promote the tools he lives in. The tier is the honest part — it tells a
 * recruiter how deep the experience goes, so it is worth getting right.
 */
export const SKILLS: Skill[] = [
  { _id: 's1', name: 'Python', category: 'ai', tier: 'core' },
  { _id: 's2', name: 'Machine Learning', category: 'ai', tier: 'core' },
  { _id: 's3', name: 'Model Deployment', category: 'ai', tier: 'production' },
  { _id: 's4', name: 'LLMs', category: 'ai', tier: 'working' },
  { _id: 's5', name: 'Prompt Engineering', category: 'ai', tier: 'working' },

  { _id: 's6', name: 'Pandas', category: 'ml', tier: 'core' },
  { _id: 's7', name: 'NumPy', category: 'ml', tier: 'core' },
  { _id: 's8', name: 'Scikit-learn', category: 'ml', tier: 'production' },
  { _id: 's9', name: 'Anomaly Detection', category: 'ml', tier: 'production' },
  { _id: 's10', name: 'Time-Series Analysis', category: 'ml', tier: 'working' },

  { _id: 's11', name: 'SQL', category: 'data', tier: 'core' },
  { _id: 's12', name: 'PostgreSQL', category: 'data', tier: 'production' },
  { _id: 's13', name: 'Data Pipelines', category: 'data', tier: 'production' },
  { _id: 's14', name: 'Power BI', category: 'data', tier: 'working' },

  { _id: 's15', name: 'REST APIs', category: 'integration', tier: 'core' },
  { _id: 's16', name: 'System Integration', category: 'integration', tier: 'core' },
  { _id: 's17', name: 'Workflow Automation', category: 'integration', tier: 'production' },
  { _id: 's18', name: 'Webhooks', category: 'integration', tier: 'working' },

  { _id: 's19', name: 'Git', category: 'platform', tier: 'core' },
  { _id: 's20', name: 'Docker', category: 'platform', tier: 'production' },
  { _id: 's21', name: 'Linux', category: 'platform', tier: 'production' },
  { _id: 's22', name: 'Cloud Deployment', category: 'platform', tier: 'working' },

  { _id: 's23', name: 'Fleet Telematics', category: 'domain', tier: 'core' },
  { _id: 's24', name: 'Logistics Operations', category: 'domain', tier: 'production' },
  { _id: 's25', name: 'Enterprise Onboarding', category: 'domain', tier: 'production' },
  { _id: 's26', name: 'Solution Design', category: 'domain', tier: 'working' },
]

export const SKILL_TIER_LABELS: Record<SkillTier, string> = {
  core: 'Daily driver',
  production: 'Shipped in production',
  working: 'Working knowledge',
}

export const SKILL_TIER_ORDER: SkillTier[] = ['core', 'production', 'working']

export const SKILL_TIER_STYLES: Record<SkillTier, string> = {
  core: 'bg-blue-600 border-blue-600 text-white',
  production: 'bg-blue-500/10 border-blue-500/35 text-blue-700 dark:text-blue-300',
  working: 'bg-transparent border-[var(--surface-border)] text-[var(--text-muted)]',
}

export const SKILL_CATEGORY_LABELS: Record<SkillCategoryId, string> = {
  ai: 'AI & Machine Learning',
  ml: 'Modelling & Analysis',
  data: 'Data & Databases',
  integration: 'Integration & Automation',
  platform: 'Platform & Tooling',
  domain: 'Logistics Domain',
}

export const SKILL_CATEGORY_COLORS: Record<SkillCategoryId, { dot: string }> = {
  ai: { dot: 'bg-blue-500' },
  ml: { dot: 'bg-orange-500' },
  data: { dot: 'bg-amber-500' },
  integration: { dot: 'bg-cyan-500' },
  platform: { dot: 'bg-emerald-500' },
  domain: { dot: 'bg-pink-500' },
}

export const SKILL_CATEGORIES = ['all', 'ai', 'ml', 'data', 'integration', 'platform', 'domain'] as const
export type SkillCategory = (typeof SKILL_CATEGORIES)[number]
