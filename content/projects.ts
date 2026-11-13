import type { Project } from '@/types'
export const PROJECTS: Project[] = [
  {
    _id: '1', title: 'AI-Enabled Internal ERP',
    description: 'Co-owned the company ERP with the Product & Engineering Head, driving discovery through rollout. Defined a delivery model across 7 phases, 25 steps and 6 swimlanes spanning 5 departments, including billing logic for 3 billing cycles, Capex/Opex allocation and 8 cost lines.',
    technologies: ['Java', 'Angular', 'Product Ownership', 'PRDs', 'UAT', 'AI-Assisted Development'], featured: true, order: 1,
  },
  {
    _id: '2', title: 'ATCultureBoard — Employee Performance Benchmarking',
    description: 'Conceived and built a benchmarking platform used by leadership to evaluate performance across 6 functions. Designed 5 scheduled synchronization pipelines feeding a pre-computed analytics layer with percentile scoring and four-band RAG classification, replacing a manual review cycle.',
    technologies: ['PostgreSQL', 'Looker Studio', 'SQL', 'JSONB', 'Data Pipelines', 'Analytics'], featured: true, order: 2,
  },
  {
    _id: '3', title: 'Communication Intelligence & Sentiment Analytics',
    description: 'Built a governed analytics pipeline converting unstructured chat and email into structured datasets with 15+ attributes, upsert-based deduplication and thread reconstruction. Combined domain rules with XLM-RoBERTa for Hindi/Hinglish, sender context and complaint signals.',
    technologies: ['Python', 'MongoDB', 'XLM-RoBERTa', 'REST API', 'SMTP', 'NLP'], featured: true, order: 3,
  },
]
