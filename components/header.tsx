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
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
