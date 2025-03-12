"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

gsap.registerPlugin(ScrollTrigger)

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Devnovate transformed how we run our company hackathons. The platform streamlined everything from registration to judging, saving us countless hours of work.",
    author: "Sarah Chen",
    role: "Innovation Director, TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "I found my co-founder at a Devnovate hackathon! The team formation feature helped me connect with people who had complementary skills to mine.",
    author: "Michael Rodriguez",
    role: "Founder, StartupX",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "As a first-time hackathon participant, Devnovate made the experience so much less intimidating. The platform guided me through every step of the process.",
    author: "Aisha Johnson",
    role: "Software Engineer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Our university uses Devnovate for all our hackathons now. The analytics and reporting features give us valuable insights into participant engagement.",
    author: "Professor James Wilson",
    role: "Computer Science Department",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(".testimonial-card")

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
    <div ref={containerRef} className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Community Says</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of innovators who've found success on our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card border-primary/10 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-sm italic text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

