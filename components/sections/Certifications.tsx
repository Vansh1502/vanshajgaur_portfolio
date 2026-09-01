'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { CERTIFICATIONS, CERT_COLOR_MAP } from '@/content/certifications'
import { fadeInScale } from '@/lib/motion'
import type { Certification } from '@/types'

const PREVIEW_COUNT = 4

/** Cards link out only when a credential URL exists; otherwise they stay static. */
function CertCard({ cert, index }: { cert: Certification; index: number }) {
  const c = CERT_COLOR_MAP[cert.color]
  const linkProps = cert.credential
    ? ({ as: 'a', href: cert.credential, target: '_blank', rel: 'noopener noreferrer' } as const)
    : ({} as const)

  return (
    <Card
      {...linkProps}
      padding="sm"
      className={`flex flex-col ${c.hover}`}
      {...fadeInScale({ delay: (index % PREVIEW_COUNT) * 0.07, y: 30 })}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`w-2.5 h-2.5 rounded-full ${c.dot} shadow-md`} />
        <span className="text-slate-600 dark:text-slate-400 text-xs font-mono">{cert.date}</span>
      </div>

      <h3 className="card-title text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {cert.name}
      </h3>

      <Badge tone={cert.color} className="mb-3 self-start">{cert.issuer}</Badge>

      <p className="card-body text-slate-600 dark:text-slate-400 mb-4 flex-1 text-left">
        {cert.description}
      </p>

      {cert.credential && (
        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors">
          <ExternalLink size={12} />
          <span>View Credential</span>
        </div>
      )}
    </Card>
  )
}

export default function Certifications() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, PREVIEW_COUNT)

  return (
    <section id="certifications" className="section-padding container-wide">
      <SectionHeader
        sectionId="certifications"
        title="Certifications"
        subtitle="Formal training that shaped how I build — foundations through production."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {visible.map((cert, i) => (
          <CertCard key={cert._id} cert={cert} index={i} />
        ))}
      </div>

      {CERTIFICATIONS.length > PREVIEW_COUNT && (
        <div className="flex justify-center mt-10">
          <Button variant="ghost" onClick={() => setShowAll((v) => !v)}>
            {showAll ? 'Show Less' : `Show All (${CERTIFICATIONS.length - PREVIEW_COUNT} more)`}
          </Button>
        </div>
      )}
    </section>
  )
}
