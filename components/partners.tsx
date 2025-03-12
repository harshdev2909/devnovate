"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { AnimatedText } from "@/components/animated-text"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Partner {
  name: string
  logo: string
  tier: "platinum" | "gold" | "silver" | "bronze"
}

const partners: Partner[] = [
  { name: "Microsoft", logo: "https://www.cdnlogo.com/logos/m/14/microsoft.svg", tier: "platinum" },
  { name: "CloudServices", logo: "https://logos-world.net/wp-content/uploads/2020/11/Logitech-Logo.png", tier: "platinum" },
  { name: "pw", logo: "https://i.pinimg.com/474x/21/20/e9/2120e90de87c898a11c1be79bc372277.jpg", tier: "platinum" },
  { name: "InnovateAI", logo: "https://github.com/ETHIndia/brand-assets/blob/master/On%20Dark/ETHIndia@4x.png?raw=true", tier: "gold" },
  { name: "Aptos", logo: "https://cdn.brandfetch.io/id6JfossY4/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", tier: "gold" },
  { name: "BlockchainCorp", logo: "https://cdn.brandfetch.io/idgS27aNck/theme/dark/id3I3zPTEl.svg?c=1dxbfHSJFAPEGdCLU4o5B", tier: "gold" },
  { name: "DevTools", logo: "https://cdn.brandfetch.io/ide0NUuTHO/idAjbJK2-Q.svg?c=1dxbfHSJFAPEGdCLU4o5B", tier: "gold" },
  { name: "Deddw", logo: "https://cryptologos.cc/logos/versions/hive-blockchain-hive-logo-full.svg?v=040", tier: "gold" },
  { name: "StartupAccelerator", logo: "https://cdn.brandfetch.io/idmwZsEey6/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", tier: "silver" },
  { name: "VentureCapital", logo: "https://cdn.brandfetch.io/idaJvrBLPH/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", tier: "silver" },
  { name: "TechCommunity", logo: "https://cdn.brandfetch.io/idGDIX1CZd/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", tier: "silver" },
  { name: "UniversityPartners", logo: "https://cdn.brandfetch.io/idrVtxty7B/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B", tier: "bronze" },
  { name: "ResearchLab", logo: "https://cdn.brandfetch.io/idZAyF9rlg/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B", tier: "bronze" },
]

export function Partners() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!containerRef.current || !logosRef.current) return

    const logos = logosRef.current.querySelectorAll(".partner-logo")

    // Animate logos with GSAP
    gsap.fromTo(
      logos,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      },
    )

    // Create a subtle floating animation for logos
    logos.forEach((logo) => {
      gsap.to(logo, {
        y: "random(-8, 8)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2,
      })
    })
  }, [])

  return (
    <div ref={containerRef} className="py-16 relative overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <AnimatedText
            text="Our Partners"
            element="h2"
            animation="gradient"
            className="text-3xl font-bold tracking-tight md:text-4xl"
          />
          <AnimatedText
            text="Collaborating with industry leaders to bring you the best hackathon experiences"
            element="p"
            animation="fade"
            delay={0.2}
            className="mt-2 text-muted-foreground max-w-2xl mx-auto"
          />
        </div>

        <div ref={logosRef} className="space-y-12">
          {/* Platinum Partners */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center text-lg font-medium"
            >
              Platinum Partners
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {partners
                .filter((partner) => partner.tier === "platinum")
                .map((partner) => (
                  <div
                    key={partner.name}
                    className="partner-logo w-full max-w-[200px] h-[80px] flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Gold Partners */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-lg font-medium"
            >
              Gold Partners
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
              {partners
                .filter((partner) => partner.tier === "gold")
                .map((partner) => (
                  <div
                    key={partner.name}
                    className="partner-logo w-full max-w-[180px] h-[70px] flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Silver & Bronze Partners */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center text-lg font-medium"
            >
              Supporting Partners
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center">
              {partners
                .filter((partner) => partner.tier === "silver" || partner.tier === "bronze")
                .map((partner) => (
                  <div
                    key={partner.name}
                    className="partner-logo w-full max-w-[160px] h-[60px] flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-lg p-3 border border-primary/10"
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

