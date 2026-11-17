import type { Project } from '@/types'

export const PROJECTS: Project[] = [
  {
    _id: '3',
    title: 'AI-Powered Business KPI & Reporting System',
    description:
      'Built an end-to-end business analytics system with automated data ingestion, KPI reporting, revenue anomaly detection, and AI-powered insights.',
    technologies: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'FastAPI', 'Streamlit', 'Plotly', 'Docker', 'Ollama'],
    githubUrl: 'https://github.com/Vansh1502/Business_KPI_AI-/tree/main?utm_source=chatgpt.com',
    status: 'Completed',
    featured: true,
    order: 1,
  },
  {
    _id: '4',
    title: 'Customer Churn & Retention Analytics',
    description:
      'Analyze customer behavior, identify churn patterns, segment customers, and predict customer churn using machine learning.',
    technologies: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly', 'Streamlit'],
    status: 'In Progress — Planned',
    githubComingSoon: true,
    featured: true,
    order: 2,
  },
  {
    _id: '5',
    title: 'E-Commerce Sales & Customer Analytics',
    description:
      'Analyze e-commerce sales trends, product performance, customer purchasing behavior, and customer segmentation to generate business insights.',
    technologies: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Plotly', 'Power BI / Streamlit'],
    status: 'Planned',
    githubComingSoon: true,
    featured: true,
    order: 3,
  },
  {
    _id: '1',
    title: 'HR Analytics Dashboard',
    description:
      'Performed employee attrition and retention analysis to provide actionable organizational insights and support workforce decision-making.',
    technologies: ['SQL', 'Excel', 'Power BI'],
    githubUrl: 'https://github.com/Vansh1502/HR-Analysis-Dashboard',
    featured: true,
    order: 4,
  },
  {
    _id: '2',
    title: 'Super Sales Dashboard',
    description:
      'Built a revenue and regional sales performance dashboard to track key commercial metrics and monitor business performance across regions.',
    technologies: ['SQL', 'Excel', 'Power BI'],
    githubUrl: 'https://github.com/Vansh1502/Sales-Dashboard',
    featured: true,
    order: 5,
  },
]
