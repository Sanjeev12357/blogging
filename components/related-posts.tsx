import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RelatedPosts({ currentPostId }: { currentPostId: string }) {
  // This would normally filter out the current post and show related posts
  // based on categories, tags, etc.
  const relatedPosts = [
    {
      id: "2",
      title: "Designing for Accessibility: A Comprehensive Guide",
      excerpt: "Learn how to make your websites accessible to everyone with these practical tips and best practices.",
      image: "/placeholder.svg?height=300&width=500&text=Accessibility",
      category: "Design",
    },
    {
      id: "3",
      title: "The Rise of Edge Computing in Modern Web Development",
      excerpt: "Explore how edge computing is changing the way we build and deploy web applications.",
      image: "/placeholder.svg?height=300&width=500&text=Edge+Computing",
      category: "Technology",
    },
    {
      id: "4",
      title: "Mastering CSS Grid: Advanced Layout Techniques",
      excerpt: "Take your CSS Grid skills to the next level with these advanced techniques and patterns.",
      image: "/placeholder.svg?height=300&width=500&text=CSS+Grid",
      category: "Design",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {relatedPosts.map((post, index) => (
        <Card
          key={post.id}
          className="funky-card group overflow-hidden rounded-xl bg-white"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-secondary border-2 border-black px-3 py-1 text-xs font-bold text-black">
                {post.category}
              </span>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="font-heading mb-2 text-lg font-bold leading-tight">
              <Link href={`/posts/${post.id}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="font-body mb-4 text-sm text-muted-foreground font-bold">{post.excerpt}</p>
            <Link href={`/posts/${post.id}`}>
              <Button
                variant="ghost"
                size="sm"
                className="group -ml-2 gap-1 text-primary hover:bg-primary/10 font-bold"
              >
                Read more
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
