"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Globe, Trophy, Users } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

interface Stat {
  icon: React.ElementType
  value: string
  label: string
  color: string
}

const stats: Stat[] = [
  {
    icon: Globe,
    value: "500+",
    label: "Hackathons Hosted",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Active Participants",
    color: "from-violet-600 to-indigo-600",
  },
  {
    icon: Code,
    value: "10,000+",
    label: "Projects Created",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Trophy,
    value: "$2M+",
    label: "Prize Money Awarded",
    color: "from-amber-500 to-orange-600",
  },
]

export function AnimatedStats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(".stat-card")

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <div ref={containerRef} className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold tracking-tight md:text-4xl mb-12"
      >
        Powering Innovation Worldwide
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="stat-card border-none bg-gradient-to-br from-background to-muted/50 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${stat.color}`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

