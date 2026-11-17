import type { Experience } from '@/types'

export const EXPERIENCES: Experience[] = [
  {
    _id: '1',
    company: 'Axestrack Software Solutions Pvt. Ltd.',
    location: 'Jaipur, Rajasthan',
    role: 'AI Solutions & Implementation Engineer',
    description:
      'Designed and implemented conversational AI solutions while supporting enterprise integration, client onboarding, testing, deployment, and operational analysis.',
    responsibilities: [
      'Designed AI-powered chatbots, voice bots, and conversational workflows to automate business processes across departments.',
      'Integrated conversational AI with enterprise workflows and operational platforms; supported implementation from requirements gathering and client onboarding through testing and deployment.',
      'Performed SQL-based reporting, data validation, and operational analysis using SQL, Python, and Excel to support process improvements.',
      'Collaborated with Product, Engineering, and Support teams to resolve implementation issues and improve bot accuracy and usability.',
    ],
    technologies: ['AI Chatbots', 'Voice Bots', 'Conversational AI', 'SQL', 'Python', 'Excel'],
    startDate: '2025-03',
    current: true,
    order: 1,
  },
  {
    _id: '2',
    company: 'Next24Tech Technologies',
    role: 'Data Analyst Intern',
    description:
      'Built SQL- and Excel-based dashboards and analyzed datasets to support operational monitoring and data-driven decisions.',
    responsibilities: [
      'Built SQL- and Excel-based dashboards to monitor operational metrics and analyze business performance.',
      'Analyzed datasets to extract insights for data-driven decisions.',
    ],
    technologies: ['SQL', 'Excel', 'Dashboards', 'Data Analysis'],
    startDate: '2024-07',
    endDate: '2024-08',
    current: false,
    order: 2,
  },
  {
    _id: '3',
    company: 'Learn & Build',
    role: 'AI/ML Intern',
    description:
      'Developed machine learning models in Python and performed predictive data analysis to identify patterns.',
    responsibilities: [
      'Developed machine learning models in Python for analytical problems and performed predictive data analysis to identify patterns.',
    ],
    technologies: ['Python', 'Machine Learning', 'Predictive Data Analysis'],
    startDate: '2023-06',
    endDate: '2023-08',
    current: false,
    order: 3,
  },
]
