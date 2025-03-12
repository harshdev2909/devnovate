"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient points
    const points = [
      { x: 0, y: 0, radius: 300, color: "rgba(111, 76, 255, 0.3)" },
      { x: canvas.width, y: 0, radius: 250, color: "rgba(47, 112, 255, 0.3)" },
      { x: 0, y: canvas.height, radius: 200, color: "rgba(255, 0, 128, 0.2)" },
      { x: canvas.width, y: canvas.height, radius: 350, color: "rgba(76, 0, 255, 0.2)" },
      { x: canvas.width / 2, y: canvas.height / 2, radius: 400, color: "rgba(120, 40, 202, 0.2)" },
    ]

    // Animate points
    points.forEach((point, index) => {
      gsap.to(point, {
        x: `random(${Math.max(0, point.x - 300)}, ${Math.min(canvas.width, point.x + 300)})`,
        y: `random(${Math.max(0, point.y - 300)}, ${Math.min(canvas.height, point.y + 300)})`,
        radius: `random(${point.radius * 0.8}, ${point.radius * 1.2})`,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.5,
      })
    })

    // Render function
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient blobs
      points.forEach((point) => {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)

        gradient.addColorStop(0, point.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full opacity-50" />
}

