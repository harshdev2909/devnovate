"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X } from "lucide-react"
import gsap from "gsap"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi there! I'm Nova, your hackathon assistant. How can I help you today?", isBot: true },
  ])
  const [input, setInput] = useState("")
  const circleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!circleRef.current) return

    const tl = gsap.timeline({ repeat: -1 })

    // Animate the particles
    tl.to(circleRef.current, {
      duration: 2,
      background: "linear-gradient(225deg, #7928CA 0%, #FF0080 100%)",
      ease: "power2.inOut",
    }).to(circleRef.current, {
      duration: 2,
      background: "linear-gradient(225deg, #FF0080 0%, #7928CA 100%)",
      ease: "power2.inOut",
    })

    // Create floating particles
    if (containerRef.current) {
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement("div")
        particle.className = "absolute rounded-full opacity-70"
        particle.style.width = `${Math.random() * 10 + 5}px`
        particle.style.height = particle.style.width
        particle.style.background = `hsl(${Math.random() * 60 + 240}, 100%, 70%)`
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        containerRef.current.appendChild(particle)

        gsap.to(particle, {
          x: `${Math.random() * 40 - 20}px`,
          y: `${Math.random() * 40 - 20}px`,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        })
      }
    }

    return () => {
      tl.kill()
    }
  }, [])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { text: input, isBot: false }])
    const userQuestion = input
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (userQuestion.toLowerCase().includes("hackathon")) {
        response =
          "Hackathons are collaborative events where programmers, designers, and others come together to build projects. Devnovate helps you find and join hackathons that match your interests!"
      } else if (userQuestion.toLowerCase().includes("team")) {
        response =
          "You can form teams on Devnovate by inviting other participants or joining existing teams. The platform makes it easy to find teammates with complementary skills."
      } else if (userQuestion.toLowerCase().includes("prize") || userQuestion.toLowerCase().includes("winning")) {
        response =
          "Prizes vary by hackathon, but many offer cash prizes, mentorship opportunities, and resources to help you continue developing your project after the event."
      } else if (userQuestion.toLowerCase().includes("register") || userQuestion.toLowerCase().includes("sign up")) {
        response =
          "To register for a hackathon, navigate to the event page and click the 'Register Now' button. You'll need to create an account if you don't already have one."
      } else {
        response =
          "I'm here to help with any questions about hackathons or the Devnovate platform. Feel free to ask about registration, team formation, submission guidelines, or anything else!"
      }

      setMessages((prev) => [...prev, { text: response, isBot: true }])
    }, 1000)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96"
          >
            <Card className="border-primary/20 bg-background/95 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Nova</CardTitle>
                      <CardDescription>AI Hackathon Assistant</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] overflow-y-auto space-y-4 pr-2">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.isBot ? "bg-muted text-foreground" : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full gap-2">
                  <Input
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button onClick={handleSendMessage}>Send</Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg hover:bg-primary/90"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div ref={containerRef} className="relative h-full w-full overflow-hidden rounded-full">
          <div
            ref={circleRef}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
          />
          <Bot className="relative z-10 h-6 w-6 text-white" />
        </div>
      </motion.button>
    </>
  )
}

