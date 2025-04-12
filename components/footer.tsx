import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="font-heading text-2xl font-bold text-primary text-shadow-funky">
              FunkyBlog
            </Link>
            <p className="mt-4 text-sm font-bold text-muted-foreground">
              A personal blog sharing insights, stories, and ideas about technology, design, and life.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="rounded-full bg-black p-2 text-white hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="rounded-full bg-black p-2 text-white hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="rounded-full bg-black p-2 text-white hover:bg-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="rounded-full bg-black p-2 text-white hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="rounded-full bg-black p-2 text-white hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-lg font-bold text-primary">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/technology" className="font-bold text-muted-foreground hover:text-primary">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/categories/design" className="font-bold text-muted-foreground hover:text-primary">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/categories/travel" className="font-bold text-muted-foreground hover:text-primary">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/categories/productivity" className="font-bold text-muted-foreground hover:text-primary">
                  Productivity
                </Link>
              </li>
              <li>
                <Link href="/categories/life" className="font-bold text-muted-foreground hover:text-primary">
                  Life
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-lg font-bold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="font-bold text-muted-foreground hover:text-primary">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-bold text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="font-bold text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="font-bold text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading mb-4 text-lg font-bold text-primary">Subscribe</h3>
            <p className="mb-4 text-sm font-bold text-muted-foreground">
              Get notified when I publish new articles. No spam, just quality content.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border-4 border-black px-3 py-2 text-sm focus:border-primary focus:outline-none"
                required
              />
              <button type="submit" className="funky-btn w-full rounded-md px-3 py-2 text-sm font-bold">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t-4 border-black pt-6 text-center text-sm font-bold text-muted-foreground">
          <p>© {new Date().getFullYear()} FunkyBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
