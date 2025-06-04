"use client"
import { motion, useAnimation, type Variants } from "framer-motion"
import type React from "react"

import { useInView } from "react-intersection-observer"
import { useEffect, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  variants?: Variants
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  variants = defaultVariants,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default AnimatedSection
