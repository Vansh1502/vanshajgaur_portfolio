'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Copy } from 'lucide-react'
import toast from 'react-hot-toast'
import { SITE } from '@/lib/site'

/** One-click copy for the email address, with a short confirmation swap. */
export default function CopyEmail() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(SITE.email)
      setCopied(true)
      toast.success('Email copied to clipboard')
      setTimeout(() => setCopied(false), 1800)
    } catch {
      toast.error('Could not copy — select the address instead.')
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${SITE.email}`}
      title="Copy email address"
      className="relative w-7 h-7 rounded-lg shrink-0 flex items-center justify-center
        text-slate-500 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400
        hover:bg-blue-500/10 transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? 'check' : 'copy'}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
