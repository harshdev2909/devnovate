"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Calendar, Code2, Globe, Users } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { AIAssistant } from "@/components/ai-assistant"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"
import { AnimatedText } from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedEvents } from "@/components/featured-events"
import { HeroSection } from "@/components/hero-section"
import { Partners } from "@/components/partners"
import { PastEvents } from "@/components/past-events"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  useEffect(() => {
    // Animate cards on scroll
    const featureCards = document.querySelectorAll(".feature-card")

    featureCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          delay: index * 0.1,
        },
      )
    })

    // Animate organizer benefits
    const benefits = document.querySelectorAll(".organizer-benefit")

    gsap.fromTo(
      benefits,
      { x: 20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".organizer-benefits",
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedGradientBackground />
      <AIAssistant />

      <motion.header
        style={{ opacity: headerOpacity }}
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Devnovate
            </span>
          </motion.div>
          <motion.nav
            className="hidden md:flex items-center gap-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/events" className="text-sm font-medium hover:text-primary transition-colors">
              Explore Events
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="/for-organizers" className="text-sm font-medium hover:text-primary transition-colors">
              For Organizers
            </Link>
          </motion.nav>
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hover:text-primary">
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
          </motion.div>
        </div>
      </motion.header>

      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <AnimatedText
              text="Why Choose Devnovate?"
              element="h2"
              animation="gradient"
              className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl"
            />
            <AnimatedText
              text="The all-in-one platform for hackathon organizers and participants"
              element="p"
              animation="fade"
              delay={0.2}
              className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8 mt-12">
            <Card className="feature-card border-primary/10 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <CardHeader className="space-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Global Reach</CardTitle>
                <CardDescription>Connect with developers and innovators from around the world</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our platform hosts hackathons from every corner of the globe, giving you access to diverse
                  perspectives and collaboration opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card border-primary/10 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <CardHeader className="space-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Team Formation</CardTitle>
                <CardDescription>Find the perfect teammates for your next hackathon project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our intelligent matching system helps you connect with complementary skill sets to build the perfect
                  team for your innovative ideas.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card border-primary/10 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <CardHeader className="space-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Seamless Organization</CardTitle>
                <CardDescription>Powerful tools for hackathon organizers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From registration to judging, our platform streamlines every aspect of hackathon management with
                  intuitive tools and automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm -z-10" />
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <AnimatedText
                text="Upcoming Hackathons"
                element="h2"
                animation="gradient"
                className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl"
              />
              <AnimatedText
                text="Discover exciting hackathon opportunities and start your innovation journey"
                element="p"
                animation="fade"
                delay={0.2}
                className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
              />
            </div>

            <FeaturedEvents />

            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <AnimatedButton
                href="/events"
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-none"
                glowOnHover
              >
                Explore All Events
                <ArrowRight className="h-4 w-4" />
              </AnimatedButton>
            </motion.div>
          </div>
        </section>

        <PastEvents />

        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatedText
                text="Ready to host your own hackathon?"
                element="h2"
                animation="gradient"
                className="text-3xl font-bold leading-tight md:text-4xl"
              />
              <AnimatedText
                text="Devnovate provides all the tools you need to create, manage, and run successful hackathons. From registration to judging, we've got you covered."
                element="p"
                animation="fade"
                delay={0.2}
                className="mt-4 text-lg text-muted-foreground"
              />
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <AnimatedButton
                  href="/create-event"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-none"
                  glowOnHover
                >
                  Create an Event
                </AnimatedButton>
                <AnimatedButton
                  href="/for-organizers"
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5"
                  floatEffect
                >
                  Learn More
                </AnimatedButton>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg border border-primary/10 bg-card p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold">Organizer Benefits</h3>
              <ul className="mt-4 space-y-3 organizer-benefits">
                <li className="flex items-center gap-2 organizer-benefit">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                  <span>Customizable registration forms</span>
                </li>
                <li className="flex items-center gap-2 organizer-benefit">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                  <span>Team formation and management</span>
                </li>
                <li className="flex items-center gap-2 organizer-benefit">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                  <span>Project submission system</span>
                </li>
                <li className="flex items-center gap-2 organizer-benefit">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                  <span>Judging and evaluation tools</span>
                </li>
                <li className="flex items-center gap-2 organizer-benefit">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                  <span>Analytics and reporting</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <Partners />
      </main>

      <footer className="border-t border-border/40 bg-muted/30 backdrop-blur-sm">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Platform</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/events"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Explore Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/for-organizers"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    For Organizers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Devnovate
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

