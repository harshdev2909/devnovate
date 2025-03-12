"use client"

import { type ReactNode, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

import { Button, type ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  href?: string
  children: ReactNode
  glowOnHover?: boolean
  pulseEffect?: boolean
  floatEffect?: boolean
}

export function AnimatedButton({
  href,
  children,
  glowOnHover = false,
  pulseEffect = false,
  floatEffect = false,
  className = "",
  ...props
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const buttonContent = (
    <motion.div
      className={`relative ${className}`}
      whileHover={floatEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
      animate={
        pulseEffect
          ? {
              scale: [1, 1.05, 1],
              transition: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              },
            }
          : undefined
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {glowOnHover && isHovered && (
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-md blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      <Button {...props}>{children}</Button>
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{buttonContent}</Link>
  }

  return buttonContent
}

