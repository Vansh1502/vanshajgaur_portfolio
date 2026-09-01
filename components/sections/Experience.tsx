'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { EXPERIENCES } from '@/content/experience'
import { formatMonthYear } from '@/lib/format'
import { slideIn } from '@/lib/motion'
import type { Experience as ExperienceEntry } from '@/types'

/** Falls back to `periodNote` while an exact start month is unconfirmed. */
function periodLabel(exp: ExperienceEntry): string {
  if (!exp.startDate) return exp.periodNote ?? ''
  const end = exp.current ? 'Present' : exp.endDate ? formatMonthYear(exp.endDate) : ''
  return `${formatMonthYear(exp.startDate)}${end ? ` — ${end}` : ''}`
}

export default function Experience() {
  const single = EXPERIENCES.length === 1

  return (
    <section id="experience" className="section-padding container-wide">
      <SectionHeader
        sectionId="experience"
        title="Work Experience"
        subtitle="Where the work has happened, and what it involved."
      />

      {/*
        The rail centres itself and the cards alternate around it once there are
        two or more roles. With a single role a centred rail leaves the card
        stranded, so it stays left-anchored — the same shape the layout uses on
        mobile — and the column is capped so the card doesn't stretch.
      */}
      <div className={single ? 'relative max-w-3xl mx-auto' : 'relative'}>
        <div className={`absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-sky-500/30 to-transparent -translate-x-1/2 ${single ? '' : 'md:left-1/2'}`} />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0
            const period = periodLabel(exp)
            return (
              <motion.div
                key={exp._id}
                {...slideIn(isLeft ? 'left' : 'right', { delay: i * 0.08 })}
                className={
                  single
                    ? 'relative flex flex-col gap-8 pl-12'
                    : `relative flex flex-col md:flex-row gap-8 md:gap-0 pl-12 md:pl-0 ${
                        isLeft ? 'md:justify-start' : 'md:justify-end'
                      }`
                }
              >
                <div className={`absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 border-2 border-[var(--bg-primary)] shadow-lg shadow-blue-500/30 z-10 mt-6 ${single ? '' : 'md:left-1/2'}`} />

                <div className={single ? 'w-full' : `md:w-[46%] ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <Card padding="md" hover="lift" borderGradient>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="card-title text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-blue-700 dark:text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      {exp.current && <Badge tone="green" className="shrink-0">Current</Badge>}
                    </div>

                    {period && (
                      <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-xs font-mono mb-4">
                        <Calendar size={12} className="shrink-0" />
                        <span>{period}</span>
                      </div>
                    )}

                    <p className="card-body text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>

                    <ul className="space-y-1.5 mb-5">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex gap-2 text-slate-600 dark:text-slate-400 text-sm">
                          <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <Badge key={t} tone="sky" className="font-mono">{t}</Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
