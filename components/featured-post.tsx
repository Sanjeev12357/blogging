'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function FeaturedPost() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-xl bg-white p-4 lg:p-8 shadow-sm border-3 border-black relative group"
    >
      <div className="absolute top-4 right-4 z-10">
        <div className="rounded-full bg-amber-400 border-3 border-black px-4 py-1.5 text-sm font-bold text-black">
          Featured
        </div>
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="order-2 md:order-1 flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span>June 12, 2023</span>
              <span>•</span>
              <Clock className="h-4 w-4 text-primary" />
              <span>5 min read</span>
            </div>
            <Link href="/posts/featured" className="block">
              <span className="font-heading text-4xl font-bold leading-tight tracking-tight text-black hover:text-primary duration-200">
                How I Built a Lightning-Fast Blog with Next.js and Tailwind
              </span>
            </Link>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In this post, I'll walk you through how I built this blazing fast blog using Next.js 13, 
              Tailwind CSS, and a headless CMS. Learn about the architecture decisions, performance 
              optimizations, and design choices that make this blog stand out.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-400 border-3 border-black text-black">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-black">Sarah Chen</span>
              <span className="text-sm text-muted-foreground">Front-end Developer</span>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/posts/featured">
              <span className="inline-flex items-center font-bold text-primary text-lg">
                Read Full Article
              </span>
              <div className="ml-3 h-8 w-8 rounded-full border-3 border-black bg-secondary flex items-center justify-center text-black group-hover:bg-primary transition-colors duration-300">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border-3 border-black">
            <div className="h-full w-full bg-rose-100 flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="160" 
                height="160" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-rose-500"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
