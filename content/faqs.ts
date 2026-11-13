import { SITE } from '@/lib/site'
import type { FaqEntry } from '@/types'
export const FAQS: FaqEntry[] = [
  { _id: 'role', question: 'What do you focus on in your current role?', answer: `I lead the Data Science & Analytics function at ${SITE.company}, working with leadership to build KPI frameworks, data products, pipelines and automated workflows across business functions.` },
  { _id: 'impact', question: 'What impact has your work delivered?', answer: 'Examples include automating 96% of recurring MIS reporting (400+ monthly man-hours saved), reducing the monthly billing cycle from 30 days to 3, and bringing 40–50 data sources into near real-time pipelines.' },
  { _id: 'product', question: 'Do you work on product development as well as analytics?', answer: 'Yes. I co-own the company’s internal ERP, contributing to discovery, business logic, PRDs, UAT and rollout using AI-assisted development.' },
  { _id: 'location', question: 'Where are you based?', answer: `I am based in ${SITE.location}.` },
  { _id: 'contact', question: 'How can I get in touch?', answer: `For professional enquiries, write to ${SITE.email} or connect on LinkedIn.` },
]
