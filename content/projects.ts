import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    _id: '1',
    title: 'HR Analytics Dashboard',
    description:
      'Performed employee attrition and retention analysis to provide actionable organizational insights and support workforce decision-making.',
    technologies: ['SQL', 'Excel', 'Power BI'],
    githubUrl: 'https://github.com/Vansh1502/HR-Analysis-Dashboard',
    featured: true,
    order: 1,
  },
  {
    _id: '2',
    title: 'Super Sales Dashboard',
    description:
      'Built a revenue and regional sales performance dashboard to track key commercial metrics and monitor business performance across regions.',
    technologies: ['SQL', 'Excel', 'Power BI'],
    githubUrl: 'https://github.com/Vansh1502/Sales-Dashboard',
    featured: true,
    order: 2,
  },
]
