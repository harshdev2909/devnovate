import Link from "next/link"
import {
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  Edit,
  Globe,
  LayoutDashboard,
  LogOut,
  Plus,
  Settings,
  Trophy,
  User,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for user dashboard
const user = {
  name: "Alex Johnson",
  email: "alex@example.com",
  avatar: "/placeholder.svg?height=40&width=40",
  role: "Participant",
}

const upcomingEvents = [
  {
    id: "1",
    title: "Global AI Hackathon",
    startDate: "2025-04-15",
    endDate: "2025-04-17",
    location: "Virtual",
    status: "Registered",
    teamName: "AI Innovators",
    teamMembers: 4,
    progress: 75,
  },
  {
    id: "2",
    title: "Climate Tech Challenge",
    startDate: "2025-05-10",
    endDate: "2025-05-12",
    location: "San Francisco, CA",
    status: "Team Formation",
    teamName: null,
    teamMembers: 0,
    progress: 25,
  },
]

const pastEvents = [
  {
    id: "3",
    title: "Web3 Innovation Summit",
    startDate: "2024-12-05",
    endDate: "2024-12-07",
    location: "Berlin, Germany",
    status: "Completed",
    teamName: "Blockchain Builders",
    teamMembers: 3,
    result: "2nd Place",
  },
  {
    id: "4",
    title: "Health Tech Hackathon",
    startDate: "2024-11-20",
    endDate: "2024-11-22",
    location: "Boston, MA",
    status: "Completed",
    teamName: "MedTech Solutions",
    teamMembers: 5,
    result: "Honorable Mention",
  },
]

const notifications = [
  {
    id: "1",
    title: "Team Invitation",
    message: "You've been invited to join 'AI Innovators' for Global AI Hackathon",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    title: "Event Reminder",
    message: "Global AI Hackathon starts in 3 days. Complete your team registration!",
    time: "1 day ago",
    read: true,
  },
  {
    id: "3",
    title: "New Message",
    message: "You have a new message from the Climate Tech Challenge organizers",
    time: "2 days ago",
    read: true,
  },
]

export default function DashboardPage() {
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
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Devnovate</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/events" className="text-sm font-medium hover:text-primary">
              Explore Events
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/teams" className="text-sm font-medium hover:text-primary">
              My Teams
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {notifications.filter((n) => !n.read).length}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="flex flex-col items-start p-4">
                    <div className="flex w-full justify-between">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
                    {!notification.read && (
                      <Badge variant="secondary" className="mt-2">
                        New
                      </Badge>
                    )}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center">
                  <Link href="/notifications" className="text-sm text-primary">
                    View all notifications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-block">{user.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-muted/40">
        <div className="container py-8">
          <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, {user.name}. Here's what's happening with your hackathons.
              </p>
            </div>
            <Link href="/create-event">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Event
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-[3fr_1fr]">
            <div className="space-y-6">
              <Tabs defaultValue="upcoming">
                <TabsList>
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming" className="space-y-4 mt-4">
                  {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((event) => (
                      <Card key={event.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{event.title}</CardTitle>
                              <CardDescription className="flex items-center gap-2 mt-1">
                                <Calendar className="h-4 w-4" />
                                {formatDateRange(event.startDate, event.endDate)}
                                <span className="inline-flex items-center gap-1">
                                  <Globe className="h-4 w-4" />
                                  {event.location}
                                </span>
                              </CardDescription>
                            </div>
                            <Badge>{event.status}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium">Event Progress</span>
                                <span className="text-sm text-muted-foreground">{event.progress}%</span>
                              </div>
                              <Progress value={event.progress} className="h-2" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-sm text-muted-foreground">Team</span>
                                <p className="font-medium">{event.teamName || "Not formed yet"}</p>
                              </div>
                              <div>
                                <span className="text-sm text-muted-foreground">Members</span>
                                <p className="font-medium">{event.teamMembers} / 5</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="flex gap-2 w-full">
                            <Link href={`/events/${event.id}`} className="flex-1">
                              <Button variant="outline" className="w-full">
                                View Event
                              </Button>
                            </Link>
                            <Link href={`/dashboard/events/${event.id}`} className="flex-1">
                              <Button className="w-full">Manage Participation</Button>
                            </Link>
                          </div>
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <Card>
                      <CardHeader>
                        <CardTitle>No Upcoming Events</CardTitle>
                        <CardDescription>You haven't registered for any upcoming hackathons yet.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Explore our events page to find and register for hackathons that match your interests.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link href="/events">
                          <Button>Explore Events</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  )}
                </TabsContent>
                <TabsContent value="past" className="space-y-4 mt-4">
                  {pastEvents.length > 0 ? (
                    pastEvents.map((event) => (
                      <Card key={event.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{event.title}</CardTitle>
                              <CardDescription className="flex items-center gap-2 mt-1">
                                <Calendar className="h-4 w-4" />
                                {formatDateRange(event.startDate, event.endDate)}
                                <span className="inline-flex items-center gap-1">
                                  <Globe className="h-4 w-4" />
                                  {event.location}
                                </span>
                              </CardDescription>
                            </div>
                            <Badge variant="outline">{event.status}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <span className="text-sm text-muted-foreground">Team</span>
                              <p className="font-medium">{event.teamName}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Members</span>
                              <p className="font-medium">{event.teamMembers}</p>
                            </div>
                            <div>
                              <span className="text-sm text-muted-foreground">Result</span>
                              <p className="font-medium flex items-center gap-1">
                                <Trophy className="h-4 w-4 text-yellow-500" />
                                {event.result}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <div className="flex gap-2 w-full">
                            <Link href={`/events/${event.id}`} className="flex-1">
                              <Button variant="outline" className="w-full">
                                View Event
                              </Button>
                            </Link>
                            <Link href={`/dashboard/events/${event.id}/project`} className="flex-1">
                              <Button variant="outline" className="w-full">
                                View Project
                              </Button>
                            </Link>
                          </div>
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <Card>
                      <CardHeader>
                        <CardTitle>No Past Events</CardTitle>
                        <CardDescription>You haven't participated in any hackathons yet.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Once you participate in hackathons, your history will appear here.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    My Profile
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Edit className="h-4 w-4" />
                    Edit Skills
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Settings className="h-4 w-4" />
                    Account Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Global AI Hackathon</span>
                      <Badge variant="outline">3 days</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Project Submission</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Climate Tech Challenge</span>
                      <Badge variant="outline">1 week</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Team Registration</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {notifications.slice(0, 3).map((notification) => (
                    <div key={notification.id} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{notification.title}</span>
                        {!notification.read && <Badge variant="secondary">New</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                      {notification.id !== notifications[2].id && <Separator className="mt-2" />}
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Link href="/notifications" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All Notifications
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-muted">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">Devnovate</span>
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

