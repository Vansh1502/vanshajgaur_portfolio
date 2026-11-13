'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send } from 'lucide-react'
import toast from 'react-hot-toast'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import CopyEmail from '@/components/ui/CopyEmail'
import { SOCIAL_LINKS } from '@/content/social'
import { WhatsApp } from '@/components/ui/icons'
import { SITE, whatsappUrl } from '@/lib/site'
import { slideIn } from '@/lib/motion'

const PROFILE_LINKS = SOCIAL_LINKS.filter((s) => s.id === 'github' || s.id === 'linkedin')

const WHATSAPP_HREF = whatsappUrl()

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fd.get('name'),
          email: fd.get('email'),
          subject: fd.get('subject'),
          message: fd.get('message'),
        }),
      })
      if (res.ok) { toast.success("Message sent! I'll get back to you soon."); formRef.current?.reset() }
      else toast.error('Something went wrong. Please try again.')
    } catch { toast.error('Network error. Please try again.') }
    finally { setSending(false) }
  }

  const inputCls = 'w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 focus-visible:ring-2 focus-visible:ring-blue-400 transition-all text-sm'
  const labelCls = 'block text-xs font-mono text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wider'

  const contactRows = [
    { key: 'email', icon: Mail, color: 'text-blue-600', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}`, copyable: true },
    ...(WHATSAPP_HREF
      ? [{ key: 'whatsapp', icon: WhatsApp, color: 'text-green-600 dark:text-green-500', label: 'WhatsApp', value: 'Start a chat', href: WHATSAPP_HREF, copyable: false }]
      : []),
    { key: 'location', icon: MapPin, color: 'text-sky-500', label: 'Location', value: SITE.location, href: null, copyable: false },
  ]

  return (
    <section id="contact" className="section-padding container-wide">
      <SectionHeader
        sectionId="contact"
        title="Get In Touch"
        subtitle="Have a role, a data challenge, or a product idea? Let’s connect."
      />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <motion.div
          {...slideIn('left')}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-4">Let&apos;s turn data into decisions</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I&apos;m open to conversations about{' '}
              <span className="text-slate-900 dark:text-white font-medium">{SITE.openToRoles.join(', ')}</span>{' '}
              roles, and to conversations around business intelligence, data engineering, product ownership and workflow
              automation.
            </p>
          </div>

          <div className="space-y-4">
            {contactRows.map(({ key, icon: Icon, color, label, value, href, copyable }) => (
              <div key={key} className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                <div className="w-10 h-10 rounded-full surface flex items-center justify-center shrink-0">
                  <Icon size={18} className={color} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">{label}</p>
                  <div className="flex items-center gap-1.5">
                    {href ? (
                      <a href={href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm break-all">{value}</a>
                    ) : (
                      <p className="text-sm">{value}</p>
                    )}
                    {copyable && <CopyEmail />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {PROFILE_LINKS.length > 0 && (
            <div>
              <p className="text-slate-600 dark:text-slate-400 text-xs font-mono uppercase tracking-widest mb-4">Find me on</p>
              <div className="space-y-3">
                {PROFILE_LINKS.map(({ icon: Icon, label, href, username }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 rounded">
                    <Icon size={16} className="group-hover:text-blue-500 transition-colors" />
                    <span className="text-sm">{username}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          {...slideIn('right', { delay: 0.1 })}
          className="lg:col-span-3"
        >
          <form ref={formRef} onSubmit={handleSubmit}
            className="surface rounded-3xl p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className={labelCls}>Name</label>
                <input id="contact-name" name="name" type="text" required placeholder="Your name" className={inputCls} />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelCls}>Email</label>
                <input id="contact-email" name="email" type="email" required placeholder="your@email.com" className={inputCls} />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className={labelCls}>Subject</label>
              <input id="contact-subject" name="subject" type="text" required placeholder="What's this about?" className={inputCls} />
            </div>
            <div>
              <label htmlFor="contact-message" className={labelCls}>Message</label>
              <textarea id="contact-message" name="message" rows={5} required placeholder="Tell me about the role or the problem..." className={inputCls + ' resize-none'} />
            </div>
            <Button type="submit" disabled={sending} variant="primary" className="w-full">
              {sending
                ? <><span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />Sending...</>
                : <>Send Message <Send size={16} /></>}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
