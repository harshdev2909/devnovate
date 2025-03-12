"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, Award, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

import { AnimatedText } from "@/components/animated-text"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface PastEvent {
  id: string
  title: string
  description: string
  date: string
  location: string
  participants: number
  image: string
  winningProject: string
  tags: string[]
}

const pastEvents: PastEvent[] = [
  {
    id: "past-1",
    title: "HackWithWeb 3.0",
    description: "Developing Web3 solutions to address global challenges",
    date: "Feb 2025",
    location: "SRM University, Delhi",
    participants: 1250,
    image: "/Home/10.JPG?height=300&width=500",
    winningProject: "EcoSense: Web3-powered environmental monitoring",
    tags: ["Blockchain", "Web3", "in-person"],
  },
  {
    id: "past-2",
    title: "CodeForCause 2.0",
    description: "Building the future of decentralized applications",
    date: "september 2024",
    location: "NSUT, Delhi",
    participants: 980,
    image: "/Home/2.JPG?height=300&width=500",
    winningProject: "TrustChain: Transparent supply chain tracking",
    tags: ["AI", "Web3", "in-person"],
  },
  {
    id: "past-3",
    title: "Community Meetup-2024",
    description: "HackWithIndia's annual community gathering",
    date: "December 2024",
    location: "microsoft office, Noida",
    participants: 350,
    image: "/Home/1.JPG?height=300&width=500",
    winningProject: "AI-powered community engagement platform",
    tags: ["Community", "AI", "In-person"],
  },
]

export function PastEvents() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll(".past-event-card")

    // Create a horizontal scroll effect
    gsap.fromTo(
      cards,
      { x: 100, opacity: 0 },
      {
        x: 0,
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

    // Add parallax effect to images
    cards.forEach((card) => {
      const image = card.querySelector(".event-image")
      if (!image) return

      gsap.to(image, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })
  }, [])

  return (
    <div ref={containerRef} className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <AnimatedText
              text="Success Stories"
              element="h2"
              animation="gradient"
              className="text-3xl font-bold tracking-tight md:text-4xl"
            />
            <AnimatedText
              text="Explore our past hackathons and the amazing projects they produced"
              element="p"
              animation="fade"
              delay={0.2}
              className="mt-2 text-muted-foreground"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/events?filter=past">
              <Button variant="outline" className="gap-2 border-primary/20 hover:bg-primary/5">
                View All Past Events
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <Card
              key={event.id}
              className="past-event-card overflow-hidden border-primary/10 bg-background/50 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="event-image object-cover w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{event.participants.toLocaleString()} Participants</span>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Winning Project</span>
                  </div>
                  <p className="text-sm">{event.winningProject}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

