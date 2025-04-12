import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FeaturedPost } from "@/components/featured-post"
import CategoryList from "@/components/category-list"
import NewsletterSignup from "@/components/newsletter-signup"
import CommentSection from "@/components/comment-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-800 to-rose-800">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary opacity-20 animate-slow-rotate"></div>
        <div className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-secondary opacity-20 animate-slow-rotate"></div>
        
        {/* SVG Decorative Elements */}
        <div className="absolute top-1/4 left-1/6 opacity-20 hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-float">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>
        
        <div className="absolute bottom-1/4 right-1/6 opacity-20 hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-pulse">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
          </svg>
        </div>
        
        <div className="absolute top-1/3 right-1/4 opacity-20 hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-bounce-slow">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </div>
        
        <div className="absolute left-1/3 bottom-1/3 opacity-20 hidden sm:block">
          <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white animate-spin-slow">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
          </svg>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="animate-float backdrop-blur-sm bg-black/20 p-5 sm:p-10 rounded-3xl border-2 border-white/10">
            <h1 className="font-heading mb-6 md:mb-10 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight md:leading-relaxed tracking-wide text-white text-shadow-funky">
              Thoughts, 
              <br />
              Stories 
              <br />
              & Ideas
            </h1>
            <p className="font-body mb-8 md:mb-14 max-w-2xl text-lg sm:text-xl md:text-2xl text-white">
              Welcome to my personal corner of the internet where I share insights on technology, design, and life's
              adventures.
            </p>
            <Button size="lg" className="funky-btn text-lg md:text-xl px-6 py-5 md:px-8 md:py-7">
              Start Reading
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* Featured Post */}
        <section className="mb-24">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-heading text-4xl font-bold text-primary text-shadow-funky md:text-5xl tracking-tight">
              Featured Post
            </h2>
            <span className="text-secondary text-xl font-bold hover:underline transition-colors cursor-pointer">
              View all posts
            </span>
          </div>
          <FeaturedPost />
        </section>

        {/* Categories */}
        <section className="mb-24">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-heading text-4xl font-bold text-primary text-shadow-funky md:text-5xl tracking-tight">Categories</h2>
            <span className="text-secondary text-xl font-bold hover:underline transition-colors cursor-pointer">
              View all categories
            </span>
          </div>
          <CategoryList />
        </section>

        {/* Recent Posts */}
        <section className="mb-24">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-shadow-funky tracking-tight">Recent Posts</h2>
            <span className="text-secondary text-base md:text-xl font-bold hover:underline transition-colors cursor-pointer">
              View all posts
            </span>
          </div>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <Card key={post} className={`funky-card group overflow-hidden rounded-xl bg-white ${
                post % 6 === 0 ? "bg-blue-50" :
                post % 6 === 1 ? "bg-purple-50" :
                post % 6 === 2 ? "bg-emerald-50" :
                post % 6 === 3 ? "bg-orange-50" :
                post % 6 === 4 ? "bg-red-50" :
                "bg-teal-50"
              }`}>
                <div className="relative h-40 sm:h-52 w-full overflow-hidden">
                  <div className={`flex h-full w-full items-center justify-center ${
                    post % 6 === 0 ? "bg-blue-100" :
                    post % 6 === 1 ? "bg-purple-100" :
                    post % 6 === 2 ? "bg-emerald-100" :
                    post % 6 === 3 ? "bg-orange-100" :
                    post % 6 === 4 ? "bg-red-100" :
                    "bg-teal-100"
                  }`}>
                    {post % 6 === 0 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 sm:w-[120px] sm:h-[120px]">
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
                    ) : post % 6 === 1 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500 sm:w-[120px] sm:h-[120px]">
                        <circle cx="13.5" cy="6.5" r="4.5"></circle>
                        <circle cx="7.5" cy="12.5" r="4.5"></circle>
                        <circle cx="16.5" cy="17.5" r="4.5"></circle>
                      </svg>
                    ) : post % 6 === 2 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 sm:w-[120px] sm:h-[120px]">
                        <path d="M3 17h1m16 0h1M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                        <path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5"></path>
                      </svg>
                    ) : post % 6 === 3 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 sm:w-[120px] sm:h-[120px]">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                    ) : post % 6 === 4 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 sm:w-[120px] sm:h-[120px]">
                        <path d="M12 20.94c1.5 0 2.75 -1.65 2.75 -3.69c0 -2.04 -1.25 -3.69 -2.75 -3.69s-2.75 1.65 -2.75 3.69c0 2.04 1.25 3.69 2.75 3.69z"></path>
                        <path d="M12 13.56v-5.56"></path>
                        <path d="M12 7v-4"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500 sm:w-[120px] sm:h-[120px]">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="10" r="3"></circle>
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                      </svg>
                    )}
                  </div>
                  <Badge className={`absolute right-3 top-3 border-3 border-black text-black text-sm sm:text-lg px-2 sm:px-4 py-0.5 sm:py-1 ${
                    post % 6 === 0 ? "bg-blue-400" :
                    post % 6 === 1 ? "bg-purple-400" :
                    post % 6 === 2 ? "bg-emerald-400" :
                    post % 6 === 3 ? "bg-orange-400" :
                    post % 6 === 4 ? "bg-red-400" :
                    "bg-teal-400"
                  }`}>
                    {["Technology", "Design", "Travel", "Productivity", "Life", "Career"][post % 6]}
                  </Badge>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-bold text-primary">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{`${Math.floor(Math.random() * 30) + 1} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun"][post % 6]}, 2023`}</span>
                    <span>•</span>
                    <span>{`${Math.floor(Math.random() * 10) + 2} min read`}</span>
                  </div>
                  <h3 className="font-heading mb-3 sm:mb-5 text-xl sm:text-2xl font-bold leading-relaxed tracking-tight">
                    <Link href={`/posts/${post}`} className="hover:text-primary transition-colors">
                      {
                        [
                          "The Future of Web Development",
                          "Designing for Accessibility",
                          "My Journey Through Southeast Asia",
                          "Productivity Hacks for Busy Professionals",
                          "Finding Balance in a Digital World",
                          "Career Advice for New Developers",
                        ][post % 6]
                      }
                    </Link>
                  </h3>
                  <p className="font-body mb-4 text-muted-foreground text-base sm:text-lg leading-relaxed line-clamp-3">
                    {
                      [
                        "Exploring the latest trends and technologies shaping the future of web development.",
                        "Why accessible design matters and how to implement it in your projects.",
                        "Stories and photos from my three-month backpacking adventure.",
                        "Simple techniques to maximize your productivity without burning out.",
                        "Strategies for maintaining a healthy relationship with technology.",
                        "Lessons learned from a decade in the tech industry.",
                      ][post % 6]
                    }
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t-4 border-black p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center rounded-full border-3 border-black overflow-hidden ${
                      post % 6 === 0 ? "bg-blue-400" :
                      post % 6 === 1 ? "bg-purple-400" :
                      post % 6 === 2 ? "bg-emerald-400" :
                      post % 6 === 3 ? "bg-orange-400" :
                      post % 6 === 4 ? "bg-red-400" :
                      "bg-teal-400"
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white sm:h-6 sm:w-6">
                        {post % 6 === 0 ? (
                          <> {/* Sarah Chen - Tech */}
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                          </>
                        ) : post % 6 === 1 ? (
                          <> {/* Michael Davis - Design */}
                            <circle cx="13.5" cy="6.5" r="4.5"></circle>
                            <circle cx="7.5" cy="12.5" r="4.5"></circle>
                            <circle cx="16.5" cy="17.5" r="4.5"></circle>
                          </>
                        ) : post % 6 === 2 ? (
                          <> {/* Emma Wilson - Travel */}
                            <path d="M3 17h1m16 0h1M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                            <path d="M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5"></path>
                          </>
                        ) : post % 6 === 3 ? (
                          <> {/* David Rodriguez - Productivity */}
                            <path d="M12 20.94c1.5 0 2.75 -1.65 2.75 -3.69c0 -2.04 -1.25 -3.69 -2.75 -3.69s-2.75 1.65 -2.75 3.69c0 2.04 1.25 3.69 2.75 3.69z"></path>
                            <path d="M12 13.56v-5.56"></path>
                            <path d="M12 7v-4"></path>
                          </>
                        ) : post % 6 === 4 ? (
                          <> {/* Olivia Thompson - Life */}
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                          </>
                        ) : (
                          <> {/* James Walker - Career */}
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="10" r="3"></circle>
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                          </>
                        )}
                      </svg>
                    </div>
                    <span className="text-base sm:text-lg font-bold">
                      {[
                        "Sarah Chen", 
                        "Michael Davis", 
                        "Emma Wilson", 
                        "David Rodriguez", 
                        "Olivia Thompson", 
                        "James Walker"
                      ][post % 6]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary font-bold text-base sm:text-lg">
                    <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{Math.floor(Math.random() * 20)}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link href="/posts">
              <Button variant="outline" size="lg" className="funky-btn group text-base sm:text-xl px-6 py-5 sm:px-8 sm:py-7">
                Load More
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Comments Section */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="font-heading text-4xl font-bold text-primary text-shadow-funky md:text-5xl tracking-tight">
              Join the Conversation
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
              Share your thoughts and connect with other readers in our community discussion.
            </p>
          </div>
          <CommentSection />
        </section>

        {/* Newsletter */}
        <section className="mb-12">
          <NewsletterSignup />
        </section>
      </main>
    </div>
  )
}
