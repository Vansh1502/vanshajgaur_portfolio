'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

interface Props {
  value: number
  suffix?: string
  duration?: number
}

/** Counts a stat up from zero the first time it scrolls into view. */
export default function CountUp({ value, suffix = '', duration = 1.2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) {
      setDisplay(value)
      return
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, value, duration, reduceMotion])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
