'use client'

import { motion } from "framer-motion"
import Link from "next/link"

// List of blog categories with icons
const categories = [
  {
    id: "technology",
    name: "Technology",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
        <rect x="9" y="9" width="6" height="6"></rect>
        <line x1="9" y1="2" x2="9" y2="4"></line>
        <line x1="15" y1="2" x2="15" y2="4"></line>
        <line x1="9" y1="20" x2="9" y2="22"></line>
        <line x1="15" y1="20" x2="15" y2="22"></line>
        <line x1="20" y1="9" x2="22" y2="9"></line>
        <line x1="20" y1="15" x2="22" y2="15"></line>
        <line x1="2" y1="9" x2="4" y2="9"></line>
        <line x1="2" y1="15" x2="4" y2="15"></line>
      </svg>
    ),
    color: "bg-blue-400",
    count: 24,
  },
  {
    id: "design",
    name: "Design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <circle cx="13.5" cy="6.5" r="4.5"></circle>
        <circle cx="7.5" cy="12.5" r="4.5"></circle>
        <circle cx="16.5" cy="17.5" r="4.5"></circle>
      </svg>
    ),
    color: "bg-purple-400",
    count: 18,
  },
  {
    id: "travel",
    name: "Travel",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M3 17h1m16 0h1M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
        <path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5"></path>
        <path d="M12 18v-11h3"></path>
        <path d="M3 17v-5h9"></path>
        <path d="M3 12V6h13"></path>
        <path d="M6 6l0 -1"></path>
      </svg>
    ),
    color: "bg-emerald-400",
    count: 12,
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 20.94c1.5 0 2.75 -1.65 2.75 -3.69c0 -2.04 -1.25 -3.69 -2.75 -3.69s-2.75 1.65 -2.75 3.69c0 2.04 1.25 3.69 2.75 3.69z"></path>
        <path d="M12 13.56v-5.56"></path>
        <path d="M12 7v-4"></path>
        <path d="M4.24 10.5l.76 -1.32"></path>
        <path d="M7 3.5l.5 .87"></path>
        <path d="M17 3.5l-.5 .87"></path>
        <path d="M19.76 10.5l-.76 -1.32"></path>
        <path d="M4.85 15.74l-2.35 .78"></path>
        <path d="M19.51 15.74l2.35 .78"></path>
      </svg>
    ),
    color: "bg-orange-400",
    count: 15,
  },
  {
    id: "life",
    name: "Life",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
      </svg>
    ),
    color: "bg-red-400",
    count: 9,
  },
  {
    id: "career",
    name: "Career",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M3 7v11m0 -4h18m0 -7v11"></path>
        <path d="M3 10h17a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-17a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z"></path>
      </svg>
    ),
    color: "bg-teal-400",
    count: 11,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

export default function CategoryList() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {categories.map((category) => (
        <motion.div
          key={category.id}
          variants={item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="h-full"
        >
          <Link href={`/categories/${category.id}`} className="block h-full">
            <div className="funky-card group flex h-full flex-col bg-white p-6 transition-all cursor-pointer hover:shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-16 w-16 items-center justify-center rounded-xl border-3 border-black ${category.color} text-black`}>
                  {category.icon}
                </div>
                <div className="rounded-full bg-black/10 px-3 py-1 text-sm font-bold">
                  {category.count} posts
                </div>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 tracking-wider">
                {category.name}
              </h3>
              <p className="text-lg text-muted-foreground mb-6 flex-grow">
                Browse all posts in the {category.name.toLowerCase()} category.
              </p>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-lg font-bold text-muted-foreground">
                  Category
                </span>
                <div className="h-8 w-8 rounded-full border-3 border-black bg-secondary flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M12 5v14"></path>
                    <path d="M5 12h14"></path>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
