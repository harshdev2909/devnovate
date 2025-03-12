import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock, Globe, MapPin, Share2, Trophy, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for a single event
const event = {
  id: "1",
  title: "BuildWithIndia",
  description: "Build innovative AI solutions to real-world problems",
  longDescription:
    "Join the Global AI Hackathon and collaborate with developers, designers, and AI enthusiasts from around the world to build innovative solutions to real-world problems. This virtual event brings together participants from diverse backgrounds to create cutting-edge AI applications that can make a positive impact on society.",
  startDate: "2025-02-15T09:00:00",
  endDate: "2025-03-15T18:00:00",
  registrationDeadline: "2025-03-07T23:59:59",
  location: "Google Office Gurgaon",
  prizePool: "$25,000",
  participants: 25000,
  organizer: {
    name: "HackWithIndia",
    logo: "/logo/HWI Black.svg?height=50&width=50",
    description: "A non-profit organization dedicated to advancing AI research and applications.",
  },
  tags: ["AI", "Machine Learning", "Virtual","Web3"],
  image: "/Home/12.png?height=400&width=800",
  schedule: [
    
    
    {
      date: "March 15, 2025",
      events: [
        { time: "09:00 - 10:00", title: "Final Check-in", description: "Last-minute announcements and tips" },
        { time: "10:00 - 12:00", title: "Final Hacking Hours", description: "Last stretch to complete your projects" },
        { time: "12:00 - 14:00", title: "Project Submissions", description: "Submit your projects for judging" },
        { time: "14:00 - 15:30", title: "Project Presentations", description: "Top teams present their projects" },
        { time: "15:30 - 17:00", title: "Awards Ceremony", description: "Announcement of winners and prizes" },
      ],
    },
  ],
  prizes: [
    { place: "1st Place", amount: "$2,000", description: "Cash prize and mentorship opportunities" },
    { place: "2nd Place", amount: "$1,000", description: "Cash prize and cloud credits" },
    { place: "3rd Place", amount: "$500", description: "Cash prize and software licenses" },
    { place: "Best UI/UX", amount: "$200", description: "Special category prize" },
    { place: "Most Innovative", amount: "$300", description: "Special category prize" },
  ],
  judges: [
    {
      name: "Mr.Tushar Gupta",
      role: "Senior Cloud Architech, Google Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    { name: "Avrial Bhardwaj", role: "CEO, HackWithIndia", image: "/placeholder.svg?height=100&width=100" },
    // {
    //   name: "Prof. James Wilson",
    //   role: "Professor of Computer Science, University",
    //   image: "/placeholder.svg?height=100&width=100",
    // },
    // { name: "Lisa Johnson", role: "VP of Innovation, Enterprise Corp", image: "/placeholder.svg?height=100&width=100" },
  ],
  sponsors: [
    { name: "Tech Giant Inc.", logo: "/placeholder.svg?height=80&width=160", tier: "Platinum" },
    { name: "Cloud Services Co.", logo: "/placeholder.svg?height=80&width=160", tier: "Gold" },
    { name: "Dev Tools Ltd.", logo: "/placeholder.svg?height=80&width=160", tier: "Gold" },
    { name: "Startup Accelerator", logo: "/placeholder.svg?height=80&width=160", tier: "Silver" },
    { name: "Tech Community", logo: "/placeholder.svg?height=80&width=160", tier: "Silver" },
    { name: "University Partners", logo: "/placeholder.svg?height=80&width=160", tier: "Bronze" },
  ],
  faqs: [
    {
      question: "Who can participate?",
      answer:
        "Anyone with an interest in AI and technology can participate. We welcome developers, designers, data scientists, and enthusiasts of all skill levels.",
    },
    {
      question: "Do I need to have a team?",
      answer:
        "No, you can't join as an individual and form a team during the event, or you can register with a pre-formed team of up to 5 members.",
    },
    {
      question: "What kind of projects are expected?",
      answer:
        "Projects should leverage AI technologies to solve real-world problems. They can be in any domain such as healthcare, education, environment, etc.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free. We believe in making innovation accessible to everyone.",
    },
    {
      question: "What are the judging criteria?",
      answer:
        "Projects will be judged based on innovation, technical complexity, practical application, presentation, and adherence to ethical AI principles.",
    },
  ],
}

export default function EventDetailPage() {
  // Format date and time
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Calculate time remaining until registration deadline
  const calculateTimeRemaining = () => {
    const now = new Date()
    const deadline = new Date(event.registrationDeadline)
    const difference = deadline.getTime() - now.getTime()

    if (difference <= 0) {
      return "Registration closed"
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    return `${days} days, ${hours} hours remaining`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 flex items-center gap-2">
              <img src="https://devnovate.co/_next/static/media/Devnovate%20Black%20Logo.b3c85ca8.svg" alt="Devnovate Logo" className="h-100 w-60" />
            </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/events" className="text-sm font-medium hover:text-primary">
              Explore Events
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="/create-event" className="text-sm font-medium hover:text-primary">
              For Organizers
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Events
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="object-cover w-full h-full" />
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl font-bold md:text-4xl">{event.title}</h1>
                <p className="mt-2 text-muted-foreground">{event.description}</p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardDescription>
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      </CardDescription>
                      <CardTitle className="text-sm">Date</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm">
                        {formatDate(event.startDate)} - {formatDate(event.endDate)}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardDescription>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                      </CardDescription>
                      <CardTitle className="text-sm">Time</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm">
                        {formatTime(event.startDate)} - {formatTime(event.endDate)}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardDescription>
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      </CardDescription>
                      <CardTitle className="text-sm">Location</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm">{event.location}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4 pb-2">
                      <CardDescription>
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                      </CardDescription>
                      <CardTitle className="text-sm">Prize Pool</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm">{event.prizePool}</p>
                    </CardContent>
                  </Card>
                </div>

                <Tabs defaultValue="about" className="mt-8">
                  <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="prizes">Prizes</TabsTrigger>
                    <TabsTrigger value="judges">Judges</TabsTrigger>
                    <TabsTrigger value="faq">FAQ</TabsTrigger>
                  </TabsList>
                  <TabsContent value="about" className="mt-4">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold">About the Event</h3>
                        <p className="mt-2">{event.longDescription}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">Organizer</h3>
                        <div className="mt-4 flex items-center gap-4">
                          <img
                            src={event.organizer.logo || "/placeholder.svg"}
                            alt={event.organizer.name}
                            className="h-12 w-12 rounded-full"
                          />
                          <div>
                            <h4 className="font-medium">{event.organizer.name}</h4>
                            <p className="text-sm text-muted-foreground">{event.organizer.description}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">Sponsors</h3>
                        <div className="mt-4 space-y-6">
                          {["Platinum", "Gold", "Silver", "Bronze"].map((tier) => {
                            const tierSponsors = event.sponsors.filter((sponsor) => sponsor.tier === tier)

                            if (tierSponsors.length === 0) return null

                            return (
                              <div key={tier}>
                                <h4 className="font-medium">{tier} Sponsors</h4>
                                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                                  {tierSponsors.map((sponsor) => (
                                    <div
                                      key={sponsor.name}
                                      className="flex h-20 items-center justify-center rounded-lg border bg-background p-4"
                                    >
                                      <img
                                        src={sponsor.logo || "/placeholder.svg"}
                                        alt={sponsor.name}
                                        className="max-h-full max-w-full object-contain"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="schedule" className="mt-4">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Event Schedule</h3>
                      <div className="space-y-8">
                        {event.schedule.map((day) => (
                          <div key={day.date}>
                            <h4 className="font-medium">{day.date}</h4>
                            <div className="mt-4 space-y-4">
                              {day.events.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                  <div className="w-32 flex-shrink-0 text-sm font-medium">{item.time}</div>
                                  <div>
                                    <h5 className="font-medium">{item.title}</h5>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="prizes" className="mt-4">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Prizes</h3>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {event.prizes.map((prize) => (
                          <Card key={prize.place}>
                            <CardHeader>
                              <CardTitle>{prize.place}</CardTitle>
                              <CardDescription>{prize.amount}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm">{prize.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="judges" className="mt-4">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Judges</h3>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                        {event.judges.map((judge) => (
                          <div key={judge.name} className="flex flex-col items-center text-center">
                            <div className="h-24 w-24 overflow-hidden rounded-full">
                              <img
                                src={judge.image || "/placeholder.svg"}
                                alt={judge.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <h4 className="mt-2 font-medium">{judge.name}</h4>
                            <p className="text-sm text-muted-foreground">{judge.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="faq" className="mt-4">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        {event.faqs.map((faq, index) => (
                          <div key={index}>
                            <h4 className="font-medium">{faq.question}</h4>
                            <p className="mt-1 text-sm text-muted-foreground">{faq.answer}</p>
                            {index < event.faqs.length - 1 && <Separator className="mt-4" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Registration</CardTitle>
                    <CardDescription>Join this exciting hackathon and showcase your skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{event.participants.toLocaleString()} participants registered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Registration deadline: {formatDate(event.registrationDeadline)}</span>
                      </div>
                      <div className="rounded-md bg-muted p-2 text-center text-sm">{calculateTimeRemaining()}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-4">
                    <Button className="w-full">Register Now</Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Share2 className="h-4 w-4" />
                      Share Event
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Event Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <span className="text-sm font-medium">Event Type</span>
                          <p className="text-sm text-muted-foreground">Hybrid</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <span className="text-sm font-medium">Team Size</span>
                          <p className="text-sm text-muted-foreground">2-5 members</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <span className="text-sm font-medium">Skill Level</span>
                          <p className="text-sm text-muted-foreground">All levels welcome</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Have questions about this event? Contact the organizers or check the FAQ section.
                    </p>
                    <Button variant="outline" className="mt-4 w-full">
                      Contact Organizer
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 flex items-center gap-2">
              <img src="https://devnovate.co/_next/static/media/Devnovate%20Black%20Logo.b3c85ca8.svg" alt="Devnovate Logo" className="h-100 w-60" />
            </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Devnovate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

