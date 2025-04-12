import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CategoriesPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background px-4 py-16 text-center md:py-24">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-heading mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Explore Categories</h1>
          <p className="font-body mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Discover content organized by topics that interest you. Each category contains a collection of articles,
            insights, and stories.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group overflow-hidden border-2 border-border/50 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={`${category.name} category`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="font-heading text-2xl font-bold text-white">{category.name}</h2>
                  <div className="text-sm text-white/80">{category.postCount} posts</div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="font-body mb-4 text-muted-foreground">{category.description}</p>
                <Link href={`/categories/${category.id}`}>
                  <Button variant="outline" className="group w-full">
                    View Posts
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
