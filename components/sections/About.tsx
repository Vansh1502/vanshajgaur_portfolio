'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import CountUp from '@/components/ui/CountUp'
import { ABOUT_STATS, ABOUT_TRAITS, ABOUT_TECH_STACK, statLabel } from '@/content/about'
import { findSocialLink } from '@/content/social'
import { SITE } from '@/lib/site'
import { EASE_OUT, slideIn } from '@/lib/motion'

const RESUME = findSocialLink('resume')

export default function About() {
  return (
    <section id="about" className="section-padding container-wide">
      <SectionHeader
        sectionId="about"
        title="About Me"
        subtitle="I turn business questions into data products, dependable workflows and decisions teams can act on."
      />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          {...slideIn('left', { duration: 0.7, margin: '-80px' })}
          className="space-y-6"
        >
          <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-left">
            I&apos;m <span className="text-blue-700 dark:text-blue-400 font-semibold">{SITE.firstName}</span>, a{' '}
            {SITE.primaryRole} at{' '}
            <span className="text-sky-600 dark:text-sky-400 font-semibold">{SITE.company}</span>, where I helped establish
            the {SITE.team} function and now lead a team of five.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-left">
            I partner with senior leadership to translate business requirements into reliable data pipelines,
            dashboards and automated workflows across Finance, Operations, Sales, Customer Success, Product and IT.
            My work connects data engineering, business intelligence and product ownership — from KPI design and
            API integrations to requirements, PRDs, UAT and rollout.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-left">
            I care about measurable outcomes: automating 96% of recurring MIS reporting, saving 400+ man-hours
            each month, reducing the monthly billing cycle from 30 days to 3, and bringing 40–50 data sources into
            near real-time pipelines.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-left">
            I hold a B.Tech in Electronics and Communication Engineering from SVNIT Surat (CGPA 8.66/10).
            Recognition includes the Brainiac Award, HackerRank SQL 4-Star Silver Badge, WomenHack Diva
            Semi-Finalist and Microsoft Learn Student Ambassador.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {ABOUT_TECH_STACK.map((tech) => (
              <Badge key={tech} tone="accent" className="font-mono">{tech}</Badge>
            ))}
          </div>

          {RESUME && (
            <div className="pt-4">
              <Button
                as="a"
                href={RESUME.href}
                target="_blank"
                rel="noopener noreferrer"
                download
                variant="secondary"
                className="text-sm"
              >
                Download Resume
              </Button>
            </div>
          )}
        </motion.div>

        <div className="space-y-8">
          <motion.div
            {...slideIn('right', { duration: 0.7, margin: '-80px' })}
            className="grid grid-cols-2 gap-4"
          >
            {ABOUT_STATS.map((stat, i) => (
              <Card
                key={stat.label}
                padding="md"
                hover="none"
                borderGradient
                group={false}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-gradient mb-1">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-xs whitespace-nowrap">{statLabel(stat)}</p>
              </Card>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_TRAITS.map((trait, i) => (
              <Card
                key={trait.title}
                padding="sm"
                hover="subtle"
                initial={{ opacity: 0, scale: 0.82, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: EASE_OUT }}
              >
                <trait.icon size={22} className="text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="card-title text-slate-900 dark:text-white mb-1">{trait.title}</h3>
                <p className="card-body text-slate-600 dark:text-slate-400">{trait.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
