'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { whatsappUrl } from '@/lib/site'

// Stack above the WhatsApp FAB when it is enabled, otherwise take its slot.
const OFFSET = whatsappUrl() ? 'bottom-24' : 'bottom-6'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className={`fixed ${OFFSET} right-6 z-50 w-14 h-14 rounded-full
            bg-blue-600 bg-gradient-to-br from-blue-700 to-sky-500
            flex items-center justify-center
            shadow-lg shadow-blue-500/30
            hover:opacity-90 hover:scale-105
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2
            transition-transform`}
        >
          <ArrowUp size={22} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
