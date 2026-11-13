import { Users, Trophy, Star } from 'lucide-react'
import type { LeadershipRole } from '@/types'
export const LEADERSHIP_ROLES: LeadershipRole[] = [
  {
    _id: '1', title: 'Chairperson', organisation: 'IETE Students’ Forum, SVNIT', period: 'Aug 2022 – Aug 2023',
    description: 'Led the student forum at SVNIT, supporting technical engagement and student-led activities.',
    impact: ['Previously served as Executive, Finding & Development (Aug 2021 – Aug 2022).'], icon: 'users',
  },
  {
    _id: '2', title: 'Vice President', organisation: 'Rotaract Club', period: 'During undergraduate studies',
    description: 'Contributed to student leadership and community initiatives.',
    impact: ['Leadership role listed in the supplied resume.'], icon: 'star',
  },
  {
    _id: '3', title: 'Head Girl', organisation: 'Mount Litera Zee School', period: 'School leadership',
    description: 'Served in a student leadership role with responsibility for peer coordination.',
    impact: ['Leadership role listed in the supplied resume.'], icon: 'trophy',
  },
  {
    _id: '4', title: 'Data Science & Analytics Lead', organisation: 'Axestrack', period: 'Current',
    description: 'Lead the five-member team in the function she helped establish.',
    impact: ['Conducted 70+ technical interviews, mentors analysts and leads AI enablement workshops.'], icon: 'users',
  },
]
export const LEADERSHIP_ICON_MAP = { users: Users, trophy: Trophy, star: Star }
