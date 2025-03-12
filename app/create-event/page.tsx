import Link from "next/link"
import { ArrowLeft, CalendarDays, Clock, Info, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function CreateEventPage() {
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
            <Link href="/for-organizers" className="text-sm font-medium text-primary">
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
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Create a Hackathon</h1>
              <p className="mt-2 text-muted-foreground">Fill out the form below to create your hackathon event</p>
            </div>

            <Tabs defaultValue="basic" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="details">Event Details</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="prizes">Prizes & Judging</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Provide the essential details about your hackathon</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="event-name">Event Name</Label>
                      <Input id="event-name" placeholder="e.g., BuildWithIndia" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event-description">Short Description</Label>
                      <Textarea
                        id="event-description"
                        placeholder="Briefly describe your hackathon (100-150 characters)"
                        className="min-h-[80px]"
                      />
                      <p className="text-xs text-muted-foreground">
                        This will appear in event cards and search results
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event-long-description">Full Description</Label>
                      <Textarea
                        id="event-long-description"
                        placeholder="Provide a detailed description of your hackathon"
                        className="min-h-[160px]"
                      />
                      <p className="text-xs text-muted-foreground">
                        Describe the purpose, goals, and what participants can expect
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Event Type</Label>
                      <RadioGroup defaultValue="virtual" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="virtual" id="virtual" />
                          <Label htmlFor="virtual" className="font-normal">
                            Virtual
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="in-person" id="in-person" />
                          <Label htmlFor="in-person" className="font-normal">
                            In-Person
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hybrid" id="hybrid" />
                          <Label htmlFor="hybrid" className="font-normal">
                            Hybrid
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event-location">Location</Label>
                      <Input id="event-location" placeholder="e.g., Virtual or Delhi, INDIA" />
                    </div>

                    <div className="space-y-2">
                      <Label>Event Banner</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="event-banner"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">
                              SVG, PNG, JPG or GIF (Recommended: 1200×600px)
                            </p>
                          </div>
                          <Input id="event-banner" type="file" className="hidden" />
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="event-category">Primary Category</Label>
                        <Select>
                          <SelectTrigger id="event-category">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai">AI & Machine Learning</SelectItem>
                            <SelectItem value="web3">Web3 & Blockchain</SelectItem>
                            <SelectItem value="climate">Climate Tech</SelectItem>
                            <SelectItem value="health">Health Tech</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="event-tags">Tags (comma separated)</Label>
                        <Input id="event-tags" placeholder="e.g., AI, Machine Learning, Virtual" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button>Save & Continue</Button>
                </div>
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Details</CardTitle>
                    <CardDescription>Configure the specifics of your hackathon</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          Start Date
                        </Label>
                        <Input type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          End Date
                        </Label>
                        <Input type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Start Time
                        </Label>
                        <Input type="time" />
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          End Time
                        </Label>
                        <Input type="time" />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        Registration Deadline
                      </Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input type="date" />
                        <Input type="time" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Team Size</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="min-team-size" className="text-xs">
                            Minimum
                          </Label>
                          <Select defaultValue="1">
                            <SelectTrigger id="min-team-size">
                              <SelectValue placeholder="Min" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="max-team-size" className="text-xs">
                            Maximum
                          </Label>
                          <Select defaultValue="5">
                            <SelectTrigger id="max-team-size">
                              <SelectValue placeholder="Max" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1</SelectItem>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                              <SelectItem value="5">5</SelectItem>
                              <SelectItem value="6">6</SelectItem>
                              <SelectItem value="7">7</SelectItem>
                              <SelectItem value="8">8</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Participant Limit</Label>
                      <div className="flex items-center gap-2">
                        <Input type="number" placeholder="e.g., 500" />
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Info className="h-4 w-4" />
                          <span>Leave blank for unlimited</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Skill Level</Label>
                      <RadioGroup defaultValue="all" className="flex flex-col space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="all" id="all-levels" />
                          <Label htmlFor="all-levels" className="font-normal">
                            All Levels Welcome
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="beginner" id="beginner" />
                          <Label htmlFor="beginner" className="font-normal">
                            Beginner Friendly
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intermediate" id="intermediate" />
                          <Label htmlFor="intermediate" className="font-normal">
                            Intermediate
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="advanced" id="advanced" />
                          <Label htmlFor="advanced" className="font-normal">
                            Advanced
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Back</Button>
                  <Button>Save & Continue</Button>
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Schedule</CardTitle>
                    <CardDescription>Plan your hackathon schedule and activities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Day 1 Schedule</h3>
                        <Button variant="outline" size="sm">
                          Add Activity
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="activity-1-title">Activity Title</Label>
                              <Input id="activity-1-title" defaultValue="Opening Ceremony" />
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="activity-1-description">Description</Label>
                              <Textarea
                                id="activity-1-description"
                                defaultValue="Welcome address and introduction to the hackathon"
                                className="min-h-[80px]"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Time</Label>
                              <div className="flex items-center gap-2">
                                <Input type="time" defaultValue="09:00" />
                                <span>to</span>
                                <Input type="time" defaultValue="10:00" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="activity-2-title">Activity Title</Label>
                              <Input id="activity-2-title" defaultValue="Team Formation" />
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="activity-2-description">Description</Label>
                              <Textarea
                                id="activity-2-description"
                                defaultValue="Networking and team formation session"
                                className="min-h-[80px]"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Time</Label>
                              <div className="flex items-center gap-2">
                                <Input type="time" defaultValue="10:00" />
                                <span>to</span>
                                <Input type="time" defaultValue="11:00" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Day 2 Schedule</h3>
                        <Button variant="outline" size="sm">
                          Add Activity
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="activity-3-title">Activity Title</Label>
                              <Input id="activity-3-title" defaultValue="Daily Check-in" />
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="activity-3-description">Description</Label>
                              <Textarea
                                id="activity-3-description"
                                defaultValue="Progress updates and announcements"
                                className="min-h-[80px]"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Time</Label>
                              <div className="flex items-center gap-2">
                                <Input type="time" defaultValue="09:00" />
                                <span>to</span>
                                <Input type="time" defaultValue="10:00" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Add Another Day
                    </Button>
                  </CardContent>
                </Card>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Back</Button>
                  <Button>Save & Continue</Button>
                </div>
              </TabsContent>

              <TabsContent value="prizes" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Prizes & Judging</CardTitle>
                    <CardDescription>Set up prizes and judging criteria for your hackathon</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Prize Pool</h3>
                        <div className="flex items-center gap-2">
                          <Label htmlFor="total-prize-pool">Total Prize Pool</Label>
                          <div className="flex items-center">
                            <span className="px-3 py-2 bg-muted rounded-l-md">$</span>
                            <Input
                              id="total-prize-pool"
                              type="number"
                              className="rounded-l-none"
                              placeholder="e.g., 50000"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="prize-1-place">Prize Place</Label>
                              <Input id="prize-1-place" defaultValue="1st Place" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="prize-1-amount">Amount</Label>
                              <div className="flex items-center">
                                <span className="px-3 py-2 bg-muted rounded-l-md">$</span>
                                <Input
                                  id="prize-1-amount"
                                  type="number"
                                  className="rounded-l-none"
                                  defaultValue="25000"
                                />
                              </div>
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="col-span-2 space-y-2">
                              <Label htmlFor="prize-1-description">Description</Label>
                              <Textarea
                                id="prize-1-description"
                                defaultValue="Cash prize and mentorship opportunities"
                                className="min-h-[80px]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="prize-2-place">Prize Place</Label>
                              <Input id="prize-2-place" defaultValue="2nd Place" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="prize-2-amount">Amount</Label>
                              <div className="flex items-center">
                                <span className="px-3 py-2 bg-muted rounded-l-md">$</span>
                                <Input
                                  id="prize-2-amount"
                                  type="number"
                                  className="rounded-l-none"
                                  defaultValue="15000"
                                />
                              </div>
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="col-span-2 space-y-2">
                              <Label htmlFor="prize-2-description">Description</Label>
                              <Textarea
                                id="prize-2-description"
                                defaultValue="Cash prize and cloud credits"
                                className="min-h-[80px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Add Another Prize
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Judging Criteria</h3>

                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="criteria-1-name">Criterion</Label>
                              <Input id="criteria-1-name" defaultValue="Innovation" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="criteria-1-weight">Weight (%)</Label>
                              <Input id="criteria-1-weight" type="number" defaultValue="30" />
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="col-span-2 space-y-2">
                              <Label htmlFor="criteria-1-description">Description</Label>
                              <Textarea
                                id="criteria-1-description"
                                defaultValue="Originality and creativity of the solution"
                                className="min-h-[80px]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="criteria-2-name">Criterion</Label>
                              <Input id="criteria-2-name" defaultValue="Technical Complexity" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="criteria-2-weight">Weight (%)</Label>
                              <Input id="criteria-2-weight" type="number" defaultValue="25" />
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="col-span-2 space-y-2">
                              <Label htmlFor="criteria-2-description">Description</Label>
                              <Textarea
                                id="criteria-2-description"
                                defaultValue="Technical difficulty and sophistication of the implementation"
                                className="min-h-[80px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Add Another Criterion
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Judges</h3>
                        <Button variant="outline" size="sm">
                          Add Judge
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="judge-1-name">Judge Name</Label>
                              <Input id="judge-1-name" placeholder="e.g., Harsh Sharma" />
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="judge-1-role">Role/Title</Label>
                              <Input id="judge-1-role" placeholder="e.g., AI Research Director, Tech Giant Inc." />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="judge-1-photo">Photo</Label>
                              <Input id="judge-1-photo" type="file" />
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border p-4">
                          <div className="grid grid-cols-[1fr_auto] gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="judge-2-name">Judge Name</Label>
                              <Input id="judge-2-name" placeholder="e.g., Aviral Bhardwaj" />
                            </div>
                            <div className="flex items-end">
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Remove
                              </Button>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="judge-2-role">Role/Title</Label>
                              <Input id="judge-2-role" placeholder="e.g., CTO, AI Startup" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="judge-2-photo">Photo</Label>
                              <Input id="judge-2-photo" type="file" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end gap-4">
                  <Button variant="outline">Back</Button>
                  <Button>Preview & Publish</Button>
                </div>
              </TabsContent>
            </Tabs>
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

