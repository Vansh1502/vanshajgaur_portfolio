import type { Experience } from '@/types'
export const EXPERIENCES: Experience[] = [
  {
    _id: '1', company: 'Axestrack Software Solutions Pvt. Ltd.', role: 'Senior Data Analyst',
    description: 'Founding member of the Data Science & Analytics function, now leading a five-member team and partnering with senior leadership across six business functions.',
    responsibilities: [
      'Lead the Data Science & Analytics team, translating leadership problems into KPI frameworks, data products and decision systems.',
      'Co-product owner of the internal ERP: discovery, business logic, PRDs, UAT and rollout using AI-assisted development.',
      'Own the data layer end to end, including MongoDB-to-PostgreSQL pipelines, data models and REST/API integrations.',
      'Automated 96% of recurring MIS reporting, saving 400+ man-hours every month.',
      'Reduced the monthly billing cycle from 30 days to 3 through end-to-end workflow automation.',
      'Integrated 40–50 data sources and 200K+ row datasets into near real-time pipelines with sub-minute freshness.',
      'Improved delivery efficiency by 12% and reduced manual data handling by 50%; conducted 70+ technical interviews.',
    ],
    technologies: ['SQL', 'Python', 'PostgreSQL', 'MongoDB', 'Apache Superset', 'Power BI', 'REST APIs', 'ETL', 'AI-Assisted Development'],
    startDate: '2025-01', current: true, order: 1,
  },
  {
    _id: '2', company: 'S&P Global (via Quess Corp Limited)', role: 'Data Analyst — Russell 3000 10-Year Point-in-Time Project',
    description: 'Deployed onsite with S&P Global’s Hierarchy Management team in Ahmedabad, supporting financial data quality and analytics.',
    responsibilities: [
      'Validated 100,000+ financial data points using SQL, Python and Excel for 10-year point-in-time analysis on Capital IQ, improving data accuracy by 30%.',
      'Supported Razor, an AI-driven analytics model, through statistical validation, anomaly detection and error analysis across financial datasets.',
    ],
    technologies: ['SQL', 'Python', 'Excel', 'Capital IQ', 'Statistical Validation', 'Anomaly Detection'],
    startDate: '2024-09', endDate: '2024-12', current: false, order: 2,
  },
  {
    _id: '3', company: 'Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat', role: 'Research Intern — Suspicious Communication Detection',
    description: 'Analyzed packet capture files and messaging-app network traffic to identify app usage patterns and suspicious communication signals.',
    responsibilities: [
      'Analyzed PCAP files using PCAPdroid and Wireshark; categorized network traffic by IP addresses and port numbers.',
      'Collected and analyzed data from 35 messaging apps using Python libraries and visualized patterns through heatmaps.',
    ],
    technologies: ['Python', 'PCAPdroid', 'Wireshark', 'Network Traffic Analysis', 'Data Visualization'],
    startDate: '2024-01', endDate: '2024-04', current: false, order: 3,
  },
]
