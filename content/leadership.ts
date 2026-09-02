import { Users, Trophy, Star } from 'lucide-react'
import type { LeadershipRole } from '@/types'

/**
 * [PLACEHOLDER] Nothing here is sourced — replace with real community,
 * mentoring or event-leadership roles, or set `enabled: false` for the
 * `leadership` section in content/sections.ts to remove it entirely.
 */
export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    _id: '1',
    title: 'Vice Chair',
    organisation: 'IEEE CIS PIET',
    period: 'Jan 2024 - Jul 2025 · 1 yr 7 mos',
    description:
      'Led a 15-member student team and helped drive AI/ML initiatives for the student community at PIET.',
    impact: [
      'Organized 5+ AI/ML workshops with 200+ attendees across the campus community.',
      'Mentored students in AI/ML, encouraging research and learning in NLP and computer vision.',
    ],
    icon: 'users',
  },
  {
    _id: '2',
    title: 'Student Mentor',
    organisation: 'AI/ML Community Initiatives',
    period: '2024 - 2025',
    description:
      'Supported peer learning and skill-building by guiding students through project-based AI and machine learning work.',
    impact: [
      'Helped more students explore practical AI applications beyond classroom theory.',
      'Promoted collaboration and research-minded problem solving within the community.',
    ],
    icon: 'star',
  },
  {
    _id: '3',
    title: 'Community Builder',
    organisation: 'IEEE CIS PIET',
    period: '2024 - 2025',
    description:
      'Contributed to building an active technical learning culture through workshops, engagement, and student support.',
    impact: [
      'Strengthened participation in technical events and hands-on learning experiences.',
      'Created pathways for students to explore emerging AI and ML domains together.',
    ],
    icon: 'trophy',
  },
]

export const LEADERSHIP_ICON_MAP = {
  users: Users,
  trophy: Trophy,
  star: Star,
}
