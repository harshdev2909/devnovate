"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CalendarDays, MapPin, Trophy, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface EventCardProps {
  event: {
    id: string
    title: string
    description: string
    startDate: string
    endDate: string
    location: string
    prizePool: string
    participants: number
    tags: string[]
    image: string
  }
  index: number
}

export function EventCard({ event, index }: EventCardProps) {
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden flex flex-col h-full border-primary/10 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
        <div className="relative h-48 w-full overflow-hidden">
          <motion.img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
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
          <h3 className="text-xl font-bold">{event.title}</h3>
          <p className="text-sm text-muted-foreground">{event.description}</p>
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
    </motion.div>
  )
}

