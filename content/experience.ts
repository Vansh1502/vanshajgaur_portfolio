import type { Experience } from '@/types'

export const EXPERIENCES: Experience[] = [
  {
    _id: '1',
    company: 'Axestrack Software Solutions Pvt. Ltd.',
    role: 'AI Solutions Engineer',
    description:
      'Built and deployed AI-powered chatbot and voice bot solutions that automated workflows across departments and connected conversational AI with enterprise operations.',
    responsibilities: [
      'Designed and implemented AI-powered chatbot and voice bot solutions.',
      'Built conversational workflows for process automation across departments.',
      'Integrated conversational AI with enterprise workflows and operational platforms.',
      'Optimized bot accuracy and user experience through continuous improvements.',
      'Managed end-to-end AI implementation lifecycle from requirements to deployment.',
    ],
    technologies: ['Python', 'AI Chatbots', 'Voice Bots', 'Automation', 'APIs', 'SQL'],
    startDate: '2026-05',
    current: true,
    order: 1,
  },
  {
    _id: '2',
    company: 'Axestrack Software Solutions Pvt. Ltd.',
    role: 'Product Implementation Executive',
    description:
      'Coordinated enterprise product implementations and client onboarding while supporting reporting, process validation, and issue resolution across teams.',
    responsibilities: [
      'Coordinated enterprise product implementations and client onboarding.',
      'Performed SQL-based reporting, validation, and operational analysis using SQL, Python, and Excel.',
      'Collaborated with Product, Engineering, and Support teams to resolve implementation issues.',
      'Documented workflows and drove implementation improvements.',
    ],
    technologies: ['SQL', 'Python', 'Excel', 'Implementation', 'Client Onboarding', 'Process Improvement'],
    startDate: '2025-03',
    endDate: '2026-04',
    current: false,
    order: 2,
  },
  {
    _id: '3',
    company: 'Next24Tech Technologies',
    role: 'Data Analyst Intern',
    description:
      'Built dashboards and analyzed operational data to monitor business performance and support data-driven decision-making.',
    responsibilities: [
      'Built dashboards using SQL and Excel to monitor key operational metrics.',
      'Analyzed data to extract business insights and support data-driven decision-making.',
    ],
    technologies: ['SQL', 'Excel', 'Dashboards', 'Data Analysis', 'Reporting'],
    startDate: '2024-07',
    endDate: '2024-08',
    current: false,
    order: 3,
  },
  {
    _id: '4',
    company: 'Learn & Build',
    role: 'AI/ML Intern',
    description:
      'Developed ML models and performed predictive analysis to uncover patterns and trends from data-driven problem statements.',
    responsibilities: [
      'Developed ML models using Python to solve analytical problems.',
      'Performed predictive data analysis to identify key patterns and trends.',
    ],
    technologies: ['Python', 'Machine Learning', 'Predictive Analysis', 'Data Modeling', 'Analytics'],
    startDate: '2023-06',
    endDate: '2023-08',
    current: false,
    order: 4,
  },
]
