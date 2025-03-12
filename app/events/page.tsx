"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Filter, Search } from "lucide-react"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { AnimatedStats } from "@/components/animated-stats"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { EventCard } from "@/components/event-card"
import { EventsHero } from "@/components/events-hero"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Testimonials } from "@/components/testimonials"

// Enhanced mock data for events with more variety
const events = [
  {
    id: "1",
    title: "Global AI Hackathon",
    description: "Build innovative AI solutions to real-world problems",
    startDate: "2025-04-15",
    endDate: "2025-04-17",
    location: "Virtual",
    prizePool: "$50,000",
    participants: 1200,
    tags: ["AI", "Machine Learning", "Virtual"],
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    id: "2",
    title: "Climate Tech Challenge",
    description: "Develop solutions to combat climate change",
    startDate: "2025-05-10",
    endDate: "2025-05-12",
    location: "San Francisco, CA",
    prizePool: "$30,000",
    participants: 800,
    tags: ["Climate", "Sustainability", "Hybrid"],
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    id: "3",
    title: "Web3 Innovation Summit",
    description: "Create the next generation of decentralized applications",
    startDate: "2025-06-05",
    endDate: "2025-06-07",
    location: "Berlin, Germany",
    prizePool: "$45,000",
    participants: 950,
    tags: ["Blockchain", "Web3", "In-person"],
    image: "/placeholder.svg?height=200&width=400",
    featured: true,
  },
  {
    id: "4",
    title: "Health Tech Hackathon",
    description: "Innovate in healthcare with cutting-edge technology",
    startDate: "2025-07-20",
    endDate: "2025-07-22",
    location: "Boston, MA",
    prizePool: "$35,000",
    participants: 750,
    tags: ["Healthcare", "MedTech", "In-person"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: "5",
    title: "EdTech Innovation Challenge",
    description: "Revolutionize education with technology",
    startDate: "2025-08-15",
    endDate: "2025-08-17",
    location: "Virtual",
    prizePool: "$25,000",
    participants: 600,
    tags: ["Education", "EdTech", "Virtual"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: "6",
    title: "FinTech Disrupt",
    description: "Disrupt the financial industry with innovative solutions",
    startDate: "2025-09-10",
    endDate: "2025-09-12",
    location: "London, UK",
    prizePool: "$40,000",
    participants: 850,
    tags: ["Finance", "FinTech", "In-person"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: "7",
    title: "Quantum Computing Challenge",
    description: "Explore the frontiers of quantum computing applications",
    startDate: "2025-10-05",
    endDate: "2025-10-07",
    location: "Tokyo, Japan",
    prizePool: "$60,000",
    participants: 500,
    tags: ["Quantum", "Computing", "In-person"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: "8",
    title: "Smart Cities Hackathon",
    description: "Build solutions for the cities of tomorrow",
    startDate: "2025-11-12",
    endDate: "2025-11-14",
    location: "Singapore",
    prizePool: "$38,000",
    participants: 720,
    tags: ["IoT", "Smart Cities", "Hybrid"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: "9",
    title: "AR/VR Innovation Challenge",
    description: "Create immersive experiences that push boundaries",
    startDate: "2025-12-01",
    endDate: "2025-12-03",
    location: "Los Angeles, CA",
    prizePool: "$42,000",
    participants: 680,
    tags: ["AR", "VR", "Metaverse", "In-person"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: "10",
    title: "Cybersecurity Hackathon",
    description: "Develop solutions to protect digital infrastructure",
    startDate: "2026-01-15",
    endDate: "2026-01-17",
    location: "Virtual",
    prizePool: "$32,000",
    participants: 780,
    tags: ["Security", "Cybersecurity", "Virtual"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: "11",
    title: "Space Tech Challenge",
    description: "Innovate for space exploration and satellite technology",
    startDate: "2026-02-10",
    endDate: "2026-02-12",
    location: "Houston, TX",
    prizePool: "$55,000",
    participants: 550,
    tags: ["Space", "Aerospace", "In-person"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
  {
    id: "12",
    title: "Robotics Innovation Summit",
    description: "Build the next generation of robotics solutions",
    startDate: "2026-03-05",
    endDate: "2026-03-07",
    location: "Seoul, South Korea",
    prizePool: "$48,000",
    participants: 620,
    tags: ["Robotics", "Automation", "In-person"],
    image: "/placeholder.svg?height=200&width=400",
    featured: false,
  },
]

// Popular categories with counts
const categories = [
  { name: "AI & ML", count: 24 },
  { name: "Web3", count: 18 },
  { name: "Climate Tech", count: 15 },
  { name: "Healthcare", count: 12 },
  { name: "Education", count: 10 },
  { name: "Finance", count: 9 },
  { name: "AR/VR", count: 8 },
  { name: "Robotics", count: 7 },
  { name: "Cybersecurity", count: 6 },
  { name: "Space Tech", count: 5 },
]

// Locations with counts
const locations = [
  { name: "Virtual", count: 45 },
  { name: "United States", count: 32 },
  { name: "Europe", count: 28 },
  { name: "Asia", count: 22 },
  { name: "Canada", count: 12 },
  { name: "Australia", count: 8 },
  { name: "South America", count: 6 },
  { name: "Africa", count: 4 },
]

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  
  // Filter events based on search and filters
  const filteredEvents = events.filter(event => {
    // Search query filter
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !event.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== "all" && !event.tags.some(tag => 
        tag.toLowerCase() === selectedCategory.toLowerCase())) {
      return false;
    }
    
    // Location filter
    if (selectedLocation !== "all") {
      if (selectedLocation === "virtual" && event.location.toLowerCase() !== "virtual") {
        return false;
      } else if (selectedLocation === "in-person" && event.location.toLowerCase() === "virtual") {
        return false;
      }
    }
    
    // Event type filter
    if (selectedType !== "all") {
      const eventType = event.tags.find(tag => 
        ["virtual", "in-person", "hybrid"].includes(tag.toLowerCase())
      );
      if (!eventType || eventType.toLowerCase() !== selectedType.toLowerCase()) {
        return false;
      }
    }
    
    // Date filter (simplified for demo)
    if (selectedDate !== "all") {
      const currentDate = new Date();
      const eventDate = new Date(event.startDate);
      
      if (selectedDate === "this-month") {
        if (eventDate.getMonth() !== currentDate.getMonth() || 
            eventDate.getFullYear() !== currentDate.getFullYear()) {
          return false;
        }
      } else if (selectedDate === "next-month") {
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        if (eventDate.getMonth() !== nextMonth.getMonth() || 
            eventDate.getFullYear() !== nextMonth.getFullYear()) {
          return false;
        }
      }
    }
    
    return true;
  });
  
  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    } else if (sortBy === "oldest") {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    } else if (sortBy === "prize-high") {
      return Number.parseInt(b.prizePool.replace(/\D/g, "")) - Number.parseInt(a.prizePool.replace(/\D/g, ""));
    } else if (sortBy === "participants") {
      return b.participants - a.participants;
    }
    return 0;
  });
  
  // Featured events
  const featuredEvents = events.filter(event => event.featured);
  
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedGradientBackground />
      
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">Devnovate</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/events" className="text-sm font-medium text-primary">
              Explore Events
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="/for-organizers" className="text-sm font-medium hover:text-primary">
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
              <Button 
                size="sm"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-none"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <EventsHero />
        
        <section className="container py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Event Type</label>
                    <Select 
                      value={selectedType} 
                      onValueChange={setSelectedType}
                    >
                      <SelectTrigger className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="virtual">Virtual</SelectItem>
                        <SelectItem value="in-person">In-Person</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Date Range</label>
                    <Select 
                      value={selectedDate} 
                      onValueChange={setSelectedDate}
                    >
                      <SelectTrigger className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Dates</SelectItem>
                        <SelectItem value="upcoming">Upcoming</SelectItem>
                        <SelectItem value="this-month">This Month</SelectItem>
                        <SelectItem value="next-month">Next Month</SelectItem>
                        <SelectItem value="this-year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Select 
                      value={selectedCategory} 
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="ai">AI & Machine Learning</SelectItem>
                        <SelectItem value="web3">Web3 & Blockchain</SelectItem>
                        <SelectItem value="climate">Climate Tech</SelectItem>
                        <SelectItem value="health">Health Tech</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="ar">AR/VR</SelectItem>
                        <SelectItem value="robotics">Robotics</SelectItem>
                        <SelectItem value="security">Cybersecurity</SelectItem>
                        <SelectItem value="space">Space Tech</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <Select 
                      value={selectedLocation} 
                      onValueChange={setSelectedLocation}
                    >
                      <SelectTrigger className="bg-background/50 backdrop-blur-sm border-primary/20">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="virtual">Virtual</SelectItem>
                        <SelectItem value="in-person">In-Person</SelectItem>
                        <SelectItem value="north-america">North America</SelectItem>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                        <SelectItem value="other">Other Regions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    className="w-full gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-none"
                  >
                    <Filter className="h-4 w-4" />
                    Apply Filters
                  </Button>
                </div>
              </div>

              <Separator className="bg-primary/10" />

              <div>
                <h3 className="mb-4 text-lg font-semibold">Popular Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between group cursor-pointer"
                      onClick={() => setSelectedCategory(category.name.toLowerCase().split(' ')[0])}
                    >
                      <span className="text-sm group-hover:text-primary transition-colors">{category.name}</span>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20 text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-primary/10" />

              <div>
                <h3 className="mb-4 text-lg font-semibold">Popular Locations</h3>
                <div className="space-y-2">
                  {locations.map((location, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between group cursor-pointer"
                      onClick={() => setSelectedLocation(location.name.toLowerCase())}
                    >
                      <span className="text-sm group-hover:text-primary transition-colors">{location.name}</span>
                      <Badge variant="outline" className="bg-primary/5 border-primary/20 text-xs">
                        {location.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">Featured Hackathons</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {featuredEvents.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} />
                  ))}
                </div>
              </motion.div>
              
              <Separator className="my-12 bg-primary/10" />
              
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold">All Hackathons</h2>
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">
                    {sortedEvents.length} events
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search events..."
                      className="pl-10 w-[200px] bg-background/50 backdrop-blur-sm border-primary/20"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Select 
                    value={sortBy} 
                    onValueChange={setSortBy}
                  >
                    <SelectTrigger className="w-[180px] bg-background/50 backdrop-blur-sm border-primary/20">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="prize-high">Highest Prize</SelectItem>
                      <SelectItem value="participants">Most Participants</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sortedEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
              
              {sortedEvents.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-primary/10 p-4 mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No events found</h3>
                  <p className="text-muted-foreground max-w-md">
                    We couldn't find any hackathons matching your search criteria. Try adjusting your filters or search query.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <AnimatedStats />
        
        <Testimonials />
      </main>

      <footer className="border-t border-border/40 bg-muted/30 backdrop-blur-sm">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
                Devnovate
              </h3>
              <p className="text-sm text-muted-foreground max-w-md">
                The premier platform for hackathon discovery, organization, and participation. 
                Connect with innovators, showcase your skills, and build amazing projects together.
              </p>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-background/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-background/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-background/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-primary/20 bg-background/50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-primary" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.426 0 .75-.347 1.087-1.218 1.087-.835 0-1.207-.567-1.206-1.19z"/>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}