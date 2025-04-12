import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categorySlug = params.slug

  // Mock categories data - this would come from a database or CMS in a real app
  const categories = [
    {
      id: "technology",
      name: "Technology",
      description: "Latest trends in tech, programming, and web development",
      postCount: 24,
      image: "/placeholder.svg?height=400&width=600&text=Technology",
    },
    {
      id: "design",
      name: "Design",
      description: "UI/UX design principles, tools, and inspiration",
      postCount: 18,
      image: "/placeholder.svg?height=400&width=600&text=Design",
    },
    {
      id: "travel",
      name: "Travel",
      description: "Adventures, destinations, and travel tips from around the world",
      postCount: 15,
      image: "/placeholder.svg?height=400&width=600&text=Travel",
    },
    {
      id: "productivity",
      name: "Productivity",
      description: "Tools and techniques to boost your efficiency and focus",
      postCount: 12,
      image: "/placeholder.svg?height=400&width=600&text=Productivity",
    },
    {
      id: "life",
      name: "Life",
      description: "Reflections on personal growth, mindfulness, and well-being",
      postCount: 20,
      image: "/placeholder.svg?height=400&width=600&text=Life",
    },
    {
      id: "career",
      name: "Career",
      description: "Professional development, job hunting, and workplace insights",
      postCount: 16,
      image: "/placeholder.svg?height=400&width=600&text=Career",
    },
  ]

  // Find the current category
  const category = categories.find((cat) => cat.id === categorySlug)

  // Mock posts data - this would come from a database or CMS in a real app
  const posts = [
    {
      id: "1",
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
      publishedAt: "15 Mar, 2023",
      readTime: "8 min read",
      category: "technology",
      image: "/placeholder.svg?height=400&width=600&text=Web+Development",
      author: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=80&width=80&text=A",
      },
    },
    {
      id: "2",
      title: "Designing for Accessibility: A Comprehensive Guide",
      excerpt: "Learn how to make your websites accessible to everyone with these practical tips and best practices.",
      publishedAt: "28 Feb, 2023",
      readTime: "10 min read",
      category: "design",
      image: "/placeholder.svg?height=400&width=600&text=Accessibility",
      author: {
        name: "Emma Rodriguez",
        avatar: "/placeholder.svg?height=80&width=80&text=E",
      },
    },
    {
      id: "3",
      title: "My Journey Through Southeast Asia",
      excerpt: "Stories and photos from my three-month backpacking adventure across multiple countries.",
      publishedAt: "10 Feb, 2023",
      readTime: "12 min read",
      category: "travel",
      image: "/placeholder.svg?height=400&width=600&text=Southeast+Asia",
      author: {
        name: "Michael Chang",
        avatar: "/placeholder.svg?height=80&width=80&text=M",
      },
    },
    {
      id: "4",
      title: "Productivity Hacks for Busy Professionals",
      excerpt: "Simple techniques to maximize your productivity without burning out.",
      publishedAt: "05 Feb, 2023",
      readTime: "7 min read",
      category: "productivity",
      image: "/placeholder.svg?height=400&width=600&text=Productivity",
      author: {
        name: "Sarah Williams",
        avatar: "/placeholder.svg?height=80&width=80&text=S",
      },
    },
    {
      id: "5",
      title: "Finding Balance in a Digital World",
      excerpt: "Strategies for maintaining a healthy relationship with technology in our always-connected lives.",
      publishedAt: "20 Jan, 2023",
      readTime: "9 min read",
      category: "life",
      image: "/placeholder.svg?height=400&width=600&text=Digital+Balance",
      author: {
        name: "David Miller",
        avatar: "/placeholder.svg?height=80&width=80&text=D",
      },
    },
    {
      id: "6",
      title: "Career Advice for New Developers",
      excerpt: "Lessons learned from a decade in the tech industry that I wish I knew when starting out.",
      publishedAt: "12 Jan, 2023",
      readTime: "11 min read",
      category: "career",
      image: "/placeholder.svg?height=400&width=600&text=Career+Advice",
      author: {
        name: "Jennifer Park",
        avatar: "/placeholder.svg?height=80&width=80&text=J",
      },
    },
  ]

  // Filter posts by category
  const categoryPosts = posts.filter((post) => post.category === categorySlug)

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading mb-6 text-4xl font-bold md:text-5xl">Category Not Found</h1>
        <p className="mb-8 text-lg text-muted-foreground">The category you're looking for doesn't exist.</p>
        <Link href="/categories">
          <Button>Browse All Categories</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section 
        className="relative h-[30vh] sm:h-[40vh] overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: categorySlug === 'technology' ? '#dbeafe' :
                                 categorySlug === 'design' ? '#f3e8ff' :
                                 categorySlug === 'travel' ? '#dcfce7' :
                                 categorySlug === 'productivity' ? '#ffedd5' :
                                 categorySlug === 'life' ? '#fee2e2' :
                                 '#ccfbf1' // career
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center z-10">
          <Link
            href="/categories"
            className="inline-flex items-center text-sm font-bold text-secondary hover:text-primary mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Link>
          <h1 className="font-heading mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            {category.name}
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            {category.description}
          </p>
          <Badge className="border-2 border-black bg-secondary text-black font-bold">
            {category.postCount} posts
          </Badge>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-4 py-16 -mt-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryPosts.map((post) => (
            <Card
              key={post.id}
              className="funky-card group overflow-hidden border-2 border-border/50 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-1 flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full border-2 border-white"
                    />
                    <span className="text-xs font-bold text-white">
                      {post.author.name}
                    </span>
                  </div>
                  <div className="text-xs text-white/80">
                    {post.publishedAt} · {post.readTime}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading mb-3 text-xl font-bold leading-tight">
                  <Link href={`/posts/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="font-body mb-4 text-base text-muted-foreground">
                  {post.excerpt}
                </p>
                <Link href={`/posts/${post.id}`}>
                  <Button variant="outline" className="group w-full">
                    Read Post
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {categoryPosts.length === 0 && (
          <div className="text-center py-16">
            <h2 className="font-heading mb-4 text-2xl font-bold">No posts found</h2>
            <p className="text-muted-foreground mb-8">There are no posts in this category yet.</p>
          </div>
        )}
      </section>
    </div>
  )
} 