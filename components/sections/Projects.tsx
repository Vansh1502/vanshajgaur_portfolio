'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import Image from 'next/image'
import SectionHeader from '@/components/ui/SectionHeader'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { PROJECTS } from '@/content/projects'
import { fadeInScale } from '@/lib/motion'
import { shimmerBlurDataURL } from '@/lib/image-placeholder'
import type { Project } from '@/types'

/**
 * Designed stand-in for projects without a screenshot — a monogram over the
 * accent gradient, so a card with no image still reads as intentional rather
 * than broken.
 */
function ProjectGlyph({ title }: { title: string }) {
  const monogram = title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center
        bg-gradient-to-br from-blue-600/15 via-sky-500/10 to-transparent
        dark:from-blue-500/20 dark:via-sky-500/10"
    >
      <span className="font-mono text-5xl font-bold text-gradient opacity-70 group-hover:scale-110 transition-transform duration-500">
        {monogram}
      </span>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.18),transparent_60%)]" />
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card
      padding="none"
      className="relative overflow-hidden flex flex-col h-full dark:hover:border-blue-400/30"
      layout
      exit={{ opacity: 0, scale: 0.9 }}
      {...fadeInScale({ delay: index * 0.07, duration: 0.6, y: 40 })}
    >
      <div className="relative h-48 overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            priority={index === 0}
            placeholder="blur"
            blurDataURL={shimmerBlurDataURL()}
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <ProjectGlyph title={project.title} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-40" />
        {project.featured && (
          <Badge tone="yellow" icon={Star} className="absolute top-3 right-3">Featured</Badge>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="card-title text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="card-body text-slate-600 dark:text-slate-400 mb-4 text-left">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((t) => (
            <Badge key={t} tone="accent" className="font-mono">{t}</Badge>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded text-xs font-mono text-slate-600 dark:text-slate-400">+{project.technologies.length - 4}</span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 rounded">
              <Github size={15} /> Code
            </a>
          ) : <span />}
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 rounded">
              Live Demo <ExternalLink size={13} />
            </a>
          ) : <span />}
        </div>
      </div>
    </Card>
  )
}

const FILTERS = ['all', 'featured'] as const
type Filter = (typeof FILTERS)[number]

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const filtered = filter === 'featured' ? PROJECTS.filter((p) => p.featured) : PROJECTS

  const countFor = (f: Filter) => (f === 'featured' ? PROJECTS.filter((p) => p.featured).length : PROJECTS.length)

  return (
    <section id="projects" className="section-padding container-wide">
      <SectionHeader
        sectionId="projects"
        title="Selected Work"
        subtitle="Projects worth talking through — what the problem was, what got built, and what changed because of it."
      />

      <div className="flex justify-center gap-3 mb-12">
        {FILTERS.map((f) => (
          <Button key={f} variant="pill" active={filter === f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
            <span className="ml-1 text-xs opacity-60 font-mono">{countFor(f)}</span>
          </Button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project._id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <p className="text-center text-slate-600 dark:text-slate-400 text-sm py-16">
          Nothing to show here yet — check back soon.
        </p>
      )}
    </section>
  )
}
