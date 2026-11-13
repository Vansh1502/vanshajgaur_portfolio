import type { Skill, SkillCategoryId, SkillTier } from '@/types'
export const SKILLS: Skill[] = [
  { _id: 's1', name: 'SQL', category: 'data', tier: 'core' },
  { _id: 's2', name: 'Python', category: 'ai', tier: 'core' },
  { _id: 's3', name: 'PostgreSQL', category: 'data', tier: 'core' },
  { _id: 's4', name: 'MongoDB', category: 'data', tier: 'production' },
  { _id: 's5', name: 'Pandas', category: 'ai', tier: 'core' },
  { _id: 's6', name: 'NumPy', category: 'ai', tier: 'production' },
  { _id: 's7', name: 'XLM-RoBERTa', category: 'ai', tier: 'production' },
  { _id: 's8', name: 'NLP & Sentiment Analysis', category: 'ai', tier: 'production' },
  { _id: 's9', name: 'Apache Superset', category: 'bi', tier: 'production' },
  { _id: 's10', name: 'Power BI', category: 'bi', tier: 'production' },
  { _id: 's11', name: 'Looker Studio', category: 'bi', tier: 'production' },
  { _id: 's12', name: 'Streamlit', category: 'bi', tier: 'working' },
  { _id: 's13', name: 'Excel', category: 'bi', tier: 'core' },
  { _id: 's14', name: 'ETL & Data Pipelines', category: 'engineering', tier: 'core' },
  { _id: 's15', name: 'Data Modeling', category: 'engineering', tier: 'production' },
  { _id: 's16', name: 'Data Quality', category: 'engineering', tier: 'production' },
  { _id: 's17', name: 'REST APIs & Integrations', category: 'engineering', tier: 'production' },
  { _id: 's29', name: 'JWT & Google APIs', category: 'engineering', tier: 'production' },
  { _id: 's30', name: 'Pre-computed Analytics', category: 'engineering', tier: 'production' },
  { _id: 's18', name: 'Google Apps Script', category: 'automation', tier: 'production' },
  { _id: 's19', name: 'VBA', category: 'automation', tier: 'production' },
  { _id: 's20', name: 'Playwright', category: 'automation', tier: 'production' },
  { _id: 's21', name: 'Schedulers & Automated Mailers', category: 'automation', tier: 'production' },
  { _id: 's22', name: 'Product Ownership', category: 'product', tier: 'production' },
  { _id: 's23', name: 'PRDs & Requirements Discovery', category: 'product', tier: 'production' },
  { _id: 's24', name: 'UAT & Stakeholder Management', category: 'product', tier: 'production' },
  { _id: 's25', name: 'KPI Frameworks', category: 'product', tier: 'production' },
  { _id: 's26', name: 'Jira & Confluence', category: 'tools', tier: 'production' },
  { _id: 's27', name: 'Git & GitLab', category: 'tools', tier: 'production' },
  { _id: 's28', name: 'Miro, draw.io & VS Code', category: 'tools', tier: 'production' },
]
export const SKILL_TIER_LABELS: Record<SkillTier, string> = {
  core: 'Core expertise', production: 'Used in production', working: 'Working knowledge',
}
export const SKILL_TIER_ORDER: SkillTier[] = ['core', 'production', 'working']
export const SKILL_TIER_STYLES: Record<SkillTier, string> = {
  core: 'bg-blue-600 border-blue-600 text-white',
  production: 'bg-blue-500/10 border-blue-500/35 text-blue-700 dark:text-blue-300',
  working: 'bg-transparent border-[var(--surface-border)] text-[var(--text-muted)]',
}
export const SKILL_CATEGORY_LABELS: Record<SkillCategoryId, string> = {
  ai: 'AI & NLP', bi: 'Business Intelligence', data: 'Analytics & Databases',
  engineering: 'Data Engineering', automation: 'Automation', product: 'Product & Business', tools: 'Tools & Collaboration',
}
export const SKILL_CATEGORY_COLORS: Record<SkillCategoryId, { dot: string }> = {
  ai: { dot: 'bg-blue-500' }, bi: { dot: 'bg-orange-500' }, data: { dot: 'bg-amber-500' },
  engineering: { dot: 'bg-cyan-500' }, automation: { dot: 'bg-emerald-500' },
  product: { dot: 'bg-pink-500' }, tools: { dot: 'bg-violet-500' },
}
export const SKILL_CATEGORIES = ['all', 'ai', 'bi', 'data', 'engineering', 'automation', 'product', 'tools'] as const
export type SkillCategory = (typeof SKILL_CATEGORIES)[number]
