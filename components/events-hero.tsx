"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import gsap from "gsap"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EventsHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !formRef.current) return

    const tl = gsap.timeline()

    tl.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6",
      )
      .fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")

    // Create floating particles
    const particles = []
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full bg-primary/20"
      particle.style.width = `${Math.random() * 15 + 5}px`
      particle.style.height = particle.style.width
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      heroRef.current.appendChild(particle)
      particles.push(particle)

      gsap.to(particle, {
        x: `random(-100, 100)`,
        y: `random(-100, 100)`,
        opacity: `random(0.1, 0.5)`,
        duration: `random(5, 10)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 5,
      })
    }

    return () => {
      particles.forEach((particle) => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      })
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-b from-background to-background/50 py-20 md:py-32"
    >
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            ref={titleRef}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600"
          >
            Discover Your Next Hackathon Challenge
          </motion.h1>
          <motion.p ref={subtitleRef} className="mt-6 text-lg text-muted-foreground md:text-xl">
            Find the perfect hackathon to showcase your skills, connect with like-minded innovators, and build something
            amazing together.
          </motion.p>

          <motion.form ref={formRef} className="mt-10 flex w-full max-w-md mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search hackathons..."
                className="pl-10 border-r-0 rounded-r-none h-12 bg-background/50 backdrop-blur-sm"
              />
            </div>
            <Button
              type="submit"
              className="rounded-l-none h-12 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
            >
              Search
            </Button>
          </motion.form>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
    </div>
  )
}

