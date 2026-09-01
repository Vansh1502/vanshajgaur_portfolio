import { SITE } from '@/lib/site'
import type { FaqEntry } from '@/types'

/**
 * [DRAFT COPY] Structure follows the reference portfolio; the answers are
 * written from verified facts only. Confirm the availability and response-time
 * claims with Vanshaj before launch.
 */
export const FAQS: FaqEntry[] = [
  {
    _id: 'role',
    question: 'What do you actually do day to day?',
    answer: `I am an ${SITE.primaryRole} in ${SITE.company}'s ${SITE.team} team. In practice that means taking AI and automation capability and making it work inside a live logistics platform — scoping the use case, handling the integration and validation, and staying with it through rollout and adoption.`,
  },
  {
    _id: 'location',
    question: 'Where are you based, and do you work remotely?',
    answer: `I am based in ${SITE.location}, and I work comfortably with remote and distributed teams.`,
  },
  {
    _id: 'domain',
    question: 'Why logistics?',
    answer:
      'Because it is one of the few places where an AI decision has an immediate physical consequence — a truck reroutes, a yard clears, an exception gets caught before it becomes a delay. The feedback loop is short and honest, which is a good environment to build in.',
  },
  {
    _id: 'roles',
    question: 'What kind of opportunities are you open to?',
    answer: `${SITE.openToRoles.join(', ')} — plus consulting conversations where the problem involves getting a model into production rather than just building one.`,
  },
  {
    _id: 'response',
    question: 'How quickly do you reply?',
    answer: 'Usually within a day or two. The contact form on this page reaches me directly, and LinkedIn works just as well.',
  },
]
