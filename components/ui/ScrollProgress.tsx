'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Hairline reading-progress bar pinned above the floating nav. Uses the same
 * blue→sky gradient as the rest of the accent system, and rides on
 * `scaleX` so it never triggers layout.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-0.5 origin-left
        bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400"
    />
  )
}
