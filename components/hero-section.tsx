"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

import { AnimatedButton } from "@/components/animated-button"
import { AnimatedText } from "@/components/animated-text"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !visualRef.current) return

    // Create floating elements in the visual
    const cards = visualRef.current.querySelectorAll(".floating-card")

    cards.forEach((card, index) => {
      gsap.to(card, {
        y: `random(-20, 20)`,
        x: `random(-10, 10)`,
        rotation: `random(-5, 5)`,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      })
    })

    // Create particles
    const particles: HTMLElement[] = []
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full bg-primary/20"
      particle.style.width = `${Math.random() * 10 + 3}px`
      particle.style.height = particle.style.width
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      visualRef.current.appendChild(particle)
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
    <section
      ref={heroRef}
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <AnimatedText
                text="Where Innovation Meets Collaboration"
                element="h1"
                animation="gradient"
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
              />
              <AnimatedText
                text="Discover, join, organize hackathons and tech events on the most comprehensive platform for developers and innovators."
                element="p"
                animation="fade"
                delay={0.3}
                className="max-w-[600px] text-muted-foreground md:text-xl"
              />
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <AnimatedButton
                href="/events"
                glowOnHover
                className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-none"
              >
                Find Hackathons
                <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
              <AnimatedButton
                href="/create-event"
                variant="outline"
                floatEffect
                className="border-primary/20 hover:bg-primary/5"
              >
                Host an Event
              </AnimatedButton>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              ref={visualRef}
              className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden"
              style={{ backgroundImage: 'url(/Home/12.png)', backgroundSize: '200%', backgroundPosition: 'center',
                backgroundBlendMode: 'overlay', }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 rounded-lg backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-md">
                    <motion.div
                      className="floating-card col-span-2 h-24 rounded-lg bg-background/80 shadow-lg backdrop-blur-sm p-4 flex flex-col justify-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h3 className="font-semibold">BuildWithIndia</h3>
                      <p className="text-sm text-muted-foreground">Build the future of AI applications and Web3</p>
                    </motion.div>
                    <motion.div
                      className="floating-card h-24 rounded-lg bg-background/80 shadow-lg backdrop-blur-sm p-4 flex flex-col justify-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className="font-semibold">Teams</h3>
                      <p className="text-sm text-muted-foreground">1,200+</p>
                    </motion.div>
                    <motion.div
                      className="floating-card h-24 rounded-lg bg-background/80 shadow-lg backdrop-blur-sm p-4 flex flex-col justify-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h3 className="font-semibold">Prize Pool</h3>
                      <p className="text-sm text-muted-foreground">$50,000</p>
                    </motion.div>
                    <motion.div
                      className="floating-card col-span-2 h-24 rounded-lg bg-background/80 shadow-lg backdrop-blur-sm p-4 flex flex-col justify-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <h3 className="font-semibold">MetaMove AI Challenge</h3>
                      <p className="text-sm text-muted-foreground">Solve MoveAI challenges with technology</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

