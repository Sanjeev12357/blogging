'use client'

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AnimatedThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative h-12 w-12 rounded-full overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative h-8 w-8">
        {/* Sun Icon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ scale: theme === "dark" ? 0 : 1, opacity: theme === "dark" ? 0 : 1 }}
          animate={{ 
            scale: theme === "dark" ? 0 : 1, 
            opacity: theme === "dark" ? 0 : 1,
            rotate: theme === "dark" ? -90 : 0 
          }}
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="absolute inset-0 text-amber-500"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </motion.svg>
        
        {/* Moon Icon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ scale: theme === "light" ? 0 : 1, opacity: theme === "light" ? 0 : 1 }}
          animate={{ 
            scale: theme === "light" ? 0 : 1, 
            opacity: theme === "light" ? 0 : 1,
            rotate: theme === "light" ? 90 : 0 
          }}
          transition={{ duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
          className="absolute inset-0 text-indigo-300"
        >
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
          <path d="M17 4a2 2 0 0 0 0 4"></path>
          <path d="M19 12a2 2 0 0 0 0 4"></path>
        </motion.svg>
      </div>
    </Button>
  )
} 