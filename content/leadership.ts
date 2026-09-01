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
    title: 'Role or initiative',
    organisation: 'Organisation',
    period: 'Period',
    description:
      'Placeholder — what Vanshaj led, and what the group was trying to achieve. One short paragraph is plenty.',
    impact: [
      'What changed because he ran it — attendance, output, people trained.',
      'A second concrete outcome, ideally with a number attached.',
    ],
    icon: 'users',
  },
  {
    _id: '2',
    title: 'Role or initiative',
    organisation: 'Organisation',
    period: 'Period',
    description:
      'Placeholder — mentoring, community organising, or internal enablement work all fit this section well.',
    impact: [
      'The outcome that made this worth listing.',
      'A second point, or delete the line.',
    ],
    icon: 'star',
  },
  {
    _id: '3',
    title: 'Role or initiative',
    organisation: 'Organisation',
    period: 'Period',
    description:
      'Placeholder — three cards fill the row cleanly. Add more and the section grows a "Show more" control automatically.',
    impact: [
      'Keep each bullet to one line so the cards stay the same height.',
    ],
    icon: 'trophy',
  },
]

export const LEADERSHIP_ICON_MAP = {
  users: Users,
  trophy: Trophy,
  star: Star,
}
