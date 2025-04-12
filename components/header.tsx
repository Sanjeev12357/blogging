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
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4">
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/" className="font-heading text-2xl sm:text-3xl font-bold text-primary text-shadow-funky tracking-wider">
            Creative Canvas
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-8">
              <li>
                <Link href="/" className="nav-link text-base lg:text-lg font-bold hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="nav-link text-base lg:text-lg font-bold hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/posts" className="nav-link text-base lg:text-lg font-bold hover:text-primary">
                  Posts
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {isSearchOpen ? (
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[160px] sm:w-[250px] border-3 sm:border-4 border-black focus-visible:border-primary py-4 sm:py-6 text-base sm:text-lg"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="h-8 w-8 sm:h-10 sm:w-10">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="h-10 w-10 sm:h-12 sm:w-12">
              <Search className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 sm:h-12 sm:w-12 md:hidden">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="border-r-4 border-black w-[280px] sm:w-[350px]">
              <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
                <Link href="/" className="font-heading text-2xl sm:text-3xl font-bold text-primary text-shadow-funky tracking-wider">
                  Creative Canvas
                </Link>
              </div>
              <nav>
                <ul className="space-y-4 sm:space-y-6">
                  <li>
                    <Link href="/" className="text-lg sm:text-xl font-bold hover:text-primary flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary sm:w-6 sm:h-6">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories" className="text-lg sm:text-xl font-bold hover:text-primary flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary sm:w-6 sm:h-6">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="/posts" className="text-lg sm:text-xl font-bold hover:text-primary flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent sm:w-6 sm:h-6">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <line x1="10" y1="9" x2="8" y2="9"></line>
                      </svg>
                      All Posts
                    </Link>
                  </li>
                  <li className="pt-2 sm:pt-4">
                    <div className="h-1 w-full bg-muted"></div>
                  </li>
                  <li>
                    <Link href="/newsletter" className="text-lg sm:text-xl font-bold hover:text-primary flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500 sm:w-6 sm:h-6">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                      Subscribe
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
