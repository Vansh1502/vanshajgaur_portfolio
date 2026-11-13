import type { Experience } from '@/types'
export const EXPERIENCES: Experience[] = [
  {
    _id: '1',
    company: 'Axestrack Software Solutions Pvt. Ltd.',
    role: 'Senior Data Analyst',
    description: 'Lead the five-member Data Science & Analytics function that I helped establish, partnering directly with the Founder, CBO and CSO to turn business problems into KPI frameworks, data products and decision systems.',
    responsibilities: [
      'Co-product owner of the internal ERP, covering discovery, business logic, PRDs, UAT and rollout using AI-assisted development.',
      'Own the data layer end to end, including data pipelines, models and API integrations.',
      'Mentor analysts, conduct technical interviews (70+ to date) and lead AI enablement workshops.',
      'Shipped internal products including CertiQ (5 releases, RBAC for 4 user types, validation, priority scoring and OCR), Playwright automation with a 5-tier geofence engine, and billing/payroll systems supporting 700+ employees.',
      'Recipient of the company-wide Brainiac Award; serve on the Delivery Excellence Committee.',
    ],
    technologies: ['SQL', 'Python', 'PostgreSQL', 'MongoDB', 'Apache Superset', 'Power BI', 'REST APIs', 'ETL', 'AI-Assisted Development'],
    startDate: '2026-04', current: true, order: 1,
  },
  {
    _id: '2',
    company: 'Axestrack Software Solutions Pvt. Ltd.',
    role: 'Data Analyst — Founder’s Office',
    description: 'Worked with the Founder, CBO and CSO and helped establish the company’s Data Science & Analytics function, translating business needs into data products and automation.',
    responsibilities: [
      'Automated 96% of recurring MIS reporting, saving 400+ man-hours every month.',
      'Reduced the monthly billing cycle from 30 days to 3 through end-to-end workflow automation.',
      'Integrated 40–50 data sources and 200K+ row datasets into near real-time pipelines with sub-minute freshness.',
      'Improved delivery efficiency by 12% and reduced manual data handling by 50%.',
    ],
    technologies: ['SQL', 'Python', 'PostgreSQL', 'MongoDB', 'Power BI', 'Apache Superset', 'Google Apps Script', 'VBA', 'ETL'],
    startDate: '2025-01', endDate: '2026-03', current: false, order: 2,
  },
  {
    _id: '3',
    company: 'S&P Global (via Quess Corp Limited)',
    role: 'Data Analyst — Russell 3000 10-Year Point-in-Time Project',
    description: 'Deployed onsite with S&P Global’s Hierarchy Management team in Ahmedabad, supporting financial data quality and analytics.',
    responsibilities: [
      'Validated 100,000+ financial data points using SQL, Python and Excel for 10-year point-in-time analysis on Capital IQ, improving data accuracy by 30%.',
      'Supported Razor, an AI-driven analytics model, through statistical validation, anomaly detection and error analysis across financial datasets.',
    ],
    technologies: ['SQL', 'Python', 'Excel', 'Capital IQ', 'Statistical Validation', 'Anomaly Detection'],
    startDate: '2024-09', endDate: '2024-12', current: false, order: 3,
  },
  {
    _id: '4',
    company: 'Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat',
    role: 'Research Intern — Suspicious Communication Detection',
    description: 'Analyzed packet capture files and messaging-app network traffic to identify app usage patterns and suspicious communication signals.',
    responsibilities: [
      'Analyzed PCAP files using PCAPdroid and Wireshark; categorized network traffic by IP addresses and port numbers.',
      'Collected and analyzed data from 35 messaging apps using Python libraries and visualized patterns through heatmaps.',
    ],
    technologies: ['Python', 'PCAPdroid', 'Wireshark', 'Network Traffic Analysis', 'Data Visualization'],
    startDate: '2024-01', endDate: '2024-04', current: false, order: 4,
  },
]
