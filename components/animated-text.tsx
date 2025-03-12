"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

// Register GSAP plugins
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(SplitText)
// }

interface AnimatedTextProps {
  text: string
  element?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  className?: string
  animation?: "fade" | "slide" | "typewriter" | "gradient" | "bounce" | "wave"
  delay?: number
  duration?: number
  once?: boolean
  gradient?: string
}

export function AnimatedText({
  text,
  element = "p",
  className = "",
  animation = "fade",
  delay = 0,
  duration = 0.5,
  once = true,
  gradient = "from-primary via-purple-500 to-pink-600",
}: AnimatedTextProps) {
  const textRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    // Remove the SplitText related logic
    // if (animation === "wave" || animation === "typewriter") {
    //   const splitText = new SplitText(textRef.current, { type: "chars,words" })
    //   const chars = splitText.chars

    //   if (animation === "wave") {
    //     gsap.fromTo(
    //       chars,
    //       { y: 20, opacity: 0 },
    //       {
    //         y: 0,
    //         opacity: 1,
    //         stagger: 0.03,
    //         duration: 0.5,
    //         ease: "back.out(1.7)",
    //         delay,
    //       },
    //     )
    //   } else if (animation === "typewriter") {
    //     gsap.fromTo(
    //       chars,
    //       { opacity: 0 },
    //       {
    //         opacity: 1,
    //         stagger: 0.05,
    //         duration: 0.1,
    //         ease: "none",
    //         delay,
    //       },
    //     )
    //   }

    //   // Clean up
    //   return () => {
    //     splitText.revert()
    //   }
    // }
  }, [animation, delay, text])

  // For Framer Motion animations
  const getFramerAnimation = () => {
    switch (animation) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration, delay },
        }
      case "slide":
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration, delay },
        }
      case "bounce":
        return {
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
            delay,
          },
        }
      case "gradient":
        // For gradient, we don't need motion animations
        return {}
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration, delay },
        }
    }
  }

  const MotionComponent = motion[element]

  // For gradient animation, we use a different approach
  if (animation === "gradient") {
    return (
      <MotionComponent
        ref={textRef}
        className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient} ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay }}
      >
        {text}
      </MotionComponent>
    )
  }

  // For wave and typewriter, we use GSAP
  // Remove the GSAP logic for wave and typewriter
  // if (animation === "wave" || animation === "typewriter") {
  //   return (
  //     <MotionComponent ref={textRef} className={className} initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
  //       {text}
  //     </MotionComponent>
  //   )
  // }

  // For other animations, use Framer Motion
  return (
    <MotionComponent className={className} {...getFramerAnimation()} viewport={{ once }}>
      {text}
    </MotionComponent>
  )
}

