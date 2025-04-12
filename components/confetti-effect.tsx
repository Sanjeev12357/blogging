'use client'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function ConfettiEffect() {
  const { theme } = useTheme()
  const [prevTheme, setPrevTheme] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [confettiColors, setConfettiColors] = useState<string[]>([])
  
  // Generate confetti pieces
  const confettiPieces = Array.from({ length: 50 }, (_, i) => i)
  
  useEffect(() => {
    // Skip the initial render
    if (prevTheme === null) {
      setPrevTheme(theme || null)
      return
    }
    
    // Only show confetti when theme changes
    if (theme !== prevTheme) {
      const colors = theme === 'dark' 
        ? ['#94A3B8', '#CBD5E1', '#E2E8F0', '#F1F5F9', '#F8FAFC']  // Dark mode colors
        : ['#FDE68A', '#FBBF24', '#F59E0B', '#D97706', '#92400E']  // Light mode colors
      
      setConfettiColors(colors)
      setShowConfetti(true)
      setPrevTheme(theme || null)
      
      // Hide confetti after animation
      setTimeout(() => {
        setShowConfetti(false)
      }, 3000)
    }
  }, [theme, prevTheme])
  
  if (!showConfetti) return null
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {confettiPieces.map((i) => {
        // Random properties for each confetti piece
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)]
        const x = Math.random() * 100 // random horizontal position (percentage)
        const y = -20 // start above viewport
        const size = Math.random() * 10 + 5 // random size between 5-15px
        const rotation = Math.random() * 360 // random rotation
        const duration = Math.random() * 2 + 2 // random duration between 2-4s
        const delay = Math.random() * 0.5 // random delay between 0-0.5s
        
        return (
          <motion.div
            key={i}
            initial={{ 
              x: `${x}vw`, 
              y: `${y}vh`, 
              rotate: 0,
              opacity: 1 
            }}
            animate={{ 
              y: '120vh', 
              rotate: rotation,
              opacity: [1, 1, 0]
            }}
            transition={{ 
              duration,
              delay,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              zIndex: 100
            }}
          />
        )
      })}
    </div>
  )
} 