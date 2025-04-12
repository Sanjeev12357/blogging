"use client"

import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-white/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-heading text-3xl font-bold text-primary text-shadow-funky tracking-wider">
            FunkyBlog
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link href="/" className="nav-link text-lg font-bold hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="nav-link text-lg font-bold hover:text-primary">
                  Categories
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[250px] border-4 border-black focus-visible:border-primary py-6 text-lg"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="h-10 w-10">
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="h-12 w-12">
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="border-r-4 border-black">
              <div className="mt-6 mb-8">
                <Link href="/" className="font-heading text-3xl font-bold text-primary text-shadow-funky tracking-wider">
                  FunkyBlog
                </Link>
              </div>
              <nav>
                <ul className="space-y-6">
                  <li>
                    <Link href="/" className="text-xl font-bold hover:text-primary flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories" className="text-xl font-bold hover:text-primary flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="/posts" className="text-xl font-bold hover:text-primary flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <line x1="10" y1="9" x2="8" y2="9"></line>
                      </svg>
                      All Posts
                    </Link>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
