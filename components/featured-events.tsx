"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { CalendarDays, MapPin, Trophy, Users } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Mock data for featured events
const featuredEvents = [
  {
    id: "1",
    title: "BuildWithIndia",
    description: "Build innovative AI and Web3 solutions to real-world problems",
    startDate: "2025-03-15",
    endDate: "2025-04-15",
    location: "Google Office Gurgaon",
    prizePool: "$25,000",
    participants: 1200,
    tags: ["AI", "Machine Learning", "Virtual" ,"web3" ,"IOT","Fintech"],
    image: "/Home/12.png?height=200&width=400",
  },
  // {
  //   id: "2",
  //   title: "Climate Tech Challenge",
  //   description: "Develop solutions to combat climate change",
  //   startDate: "2025-05-10",
  //   endDate: "2025-05-12",
  //   location: "San Francisco, CA",
  //   prizePool: "$30,000",
  //   participants: 800,
  //   tags: ["Climate", "Sustainability", "Hybrid"],
  //   image: "/placeholder.svg?height=200&width=400",
  // },
  // {
  //   id: "3",
  //   title: "Web3 Innovation Summit",
  //   description: "Create the next generation of decentralized applications",
  //   startDate: "2025-06-05",
  //   endDate: "2025-06-07",
  //   location: "Berlin, Germany",
  //   prizePool: "$45,000",
  //   participants: 950,
  //   tags: ["Blockchain", "Web3", "In-person"],
  //   image: "/placeholder.svg?height=200&width=400",
  // },
]

export function FeaturedEvents() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(".event-card")

    // Create a staggered animation for cards
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

    // Add hover effect to images
    cards.forEach((card) => {
      const image = card.querySelector(".event-image")
      if (!image) return

      card.addEventListener("mouseenter", () => {
        gsap.to(image, { scale: 1.05, duration: 0.3 })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(image, { scale: 1, duration: 0.3 })
      })
    })
  }, [])

  // Format date range
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)

    const startMonth = start.toLocaleString("default", { month: "short" })
    const endMonth = end.toLocaleString("default", { month: "short" })

    if (startMonth === endMonth) {
      return `${startMonth} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`
    }

    return `${startMonth} ${start.getDate()} - ${endMonth} ${end.getDate()}, ${start.getFullYear()}`
  }

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {featuredEvents.map((event, index) => (
        <Card
          key={event.id}
          className="event-card overflow-hidden flex flex-col border-primary/10 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              className="event-image object-cover w-full h-full transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <CardHeader className="p-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {event.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
            <motion.h3
              className="text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              {event.title}
            </motion.h3>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              {event.description}
            </motion.p>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>{formatDateRange(event.startDate, event.endDate)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Trophy className="h-4 w-4 text-primary" />
                <span>Prize Pool: {event.prizePool}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span>{event.participants.toLocaleString()} Participants</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Link href={`/events/${event.id}`} className="w-full">
              <Button
                variant="default"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
              >
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

