'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API request
    setTimeout(() => {
      toast.success("Successfully subscribed to the newsletter!", {
        description: "Thank you for subscribing! You'll receive our next issue.",
      })
      setEmail("")
      setIsSubmitting(false)
    }, 1500)
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border-4 border-black bg-gradient-to-br from-primary/20 to-secondary/20 p-8 md:p-12"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="max-w-md">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border-3 border-black bg-secondary text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                <rect width="16" height="13" x="4" y="5" rx="2"></rect>
                <path d="m4 8 6.5 5.5a2 2 0 0 0 3 0L20 8"></path>
                <path d="M6 10l.5.5"></path>
                <path d="M18 10l-.5.5"></path>
              </svg>
            </div>
            <h3 className="font-heading text-3xl font-bold md:text-4xl tracking-wider">
              Subscribe to my Newsletter
            </h3>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            Get the latest posts, insights, and exclusive content delivered straight to your inbox. 
            No spam, unsubscribe anytime.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-blue-400 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              </svg>
            </div>
            <span className="text-lg">Weekly curated content</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-purple-400 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span className="text-lg">Exclusive early access</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 md:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-16 border-3 border-black text-lg px-5"
          />
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className={`funky-btn h-16 text-lg px-6 ${isSubmitting ? 'opacity-80' : ''}`}
          >
            {isSubmitting ? (
              <>
                <span className="mr-2">Subscribing</span>
                <div className="h-5 w-5 animate-spin rounded-full border-3 border-b-transparent"></div>
              </>
            ) : (
              <>
                Subscribe
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </>
            )}
          </Button>
        </form>
      </div>
      
      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
        <div className="flex -space-x-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`inline-block h-14 w-14 overflow-hidden rounded-full border-3 border-black ${
              i % 5 === 1 ? "bg-blue-400" :
              i % 5 === 2 ? "bg-purple-400" :
              i % 5 === 3 ? "bg-emerald-400" :
              i % 5 === 4 ? "bg-orange-400" :
              "bg-red-400"
            }`}>
              <div className="flex h-full w-full items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white h-6 w-6">
                  {i % 5 === 1 ? (
                    <>
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </>
                  ) : i % 5 === 2 ? (
                    <>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </>
                  ) : i % 5 === 3 ? (
                    <>
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </>
                  ) : i % 5 === 4 ? (
                    <>
                      <circle cx="12" cy="8" r="6"></circle>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                    </>
                  ) : (
                    <>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </>
                  )}
                </svg>
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg font-medium md:ml-3">
          Join <span className="font-bold text-xl">850+</span> subscribers who get weekly updates!
        </p>
      </div>
    </motion.div>
  )
}
