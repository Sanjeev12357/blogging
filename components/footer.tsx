import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <Link href="/" className="font-heading text-xl sm:text-2xl font-bold text-primary text-shadow-funky">
              Creative Canvas
            </Link>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-bold text-muted-foreground">
              A personal blog sharing insights, stories, and ideas about technology, design, and life.
            </p>
            <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4">
              <span className="rounded-full bg-black p-1.5 sm:p-2 text-white">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Twitter</span>
              </span>
              <span className="rounded-full bg-black p-1.5 sm:p-2 text-white">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Instagram</span>
              </span>
              <span className="rounded-full bg-black p-1.5 sm:p-2 text-white">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">GitHub</span>
              </span>
              <span className="rounded-full bg-black p-1.5 sm:p-2 text-white">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">LinkedIn</span>
              </span>
              <span className="rounded-full bg-black p-1.5 sm:p-2 text-white">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Facebook</span>
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading mb-3 sm:mb-4 text-base sm:text-lg font-bold text-primary">Categories</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <span className="font-bold text-muted-foreground">
                  Technology
                </span>
              </li>
              <li>
                <span className="font-bold text-muted-foreground">
                  Design
                </span>
              </li>
              <li>
                <span className="font-bold text-muted-foreground">
                  Travel
                </span>
              </li>
              <li>
                <span className="font-bold text-muted-foreground">
                  Productivity
                </span>
              </li>
              <li>
                <span className="font-bold text-muted-foreground">
                  Life
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-3 sm:mb-4 text-base sm:text-lg font-bold text-primary">About</h3>
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-bold text-muted-foreground">
              This blog is dedicated to sharing insights on technology, design, and creative pursuits. Stay up to date with the latest trends and ideas.
            </p>
            <p className="text-xs sm:text-sm font-bold text-muted-foreground">
              © {new Date().getFullYear()} Creative Canvas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
