"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-12 w-12">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary/20"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>
        <motion.p
          className="text-lg font-medium text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading amazing hackathons...
        </motion.p>
      </motion.div>
    </div>
  )
}

