import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, MessageSquare, Share2, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CommentSection from "@/components/comment-section"
import RelatedPosts from "@/components/related-posts"

export default function PostPage({ params }: { params: { id: string } }) {
  const postId = params.id

  // This would normally come from a database or CMS
  const post = {
    id: postId,
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    content: `
      <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look to the future, several key trends are poised to reshape how we build and interact with web applications.</p>
      
      <h2>AI-Driven Development</h2>
      <p>Artificial intelligence is increasingly being integrated into the development process itself. From code completion tools to automated testing and even AI-generated components, developers are finding new ways to leverage machine learning to increase productivity and reduce repetitive tasks.</p>
      
      <p>This shift doesn't mean developers will be replaced—rather, their roles will evolve to focus more on architecture, design decisions, and solving complex problems while AI handles more routine aspects of coding.</p>
      
      <h2>WebAssembly and the Evolution of Browser Capabilities</h2>
      <p>WebAssembly (Wasm) continues to gain traction, allowing developers to run high-performance code in the browser. This technology enables more complex applications to run efficiently on the web, from advanced graphics processing to scientific simulations.</p>
      
      <p>As WebAssembly matures, we're seeing the line between web and native applications blur further, with web apps capable of performance previously only possible in native environments.</p>
      
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is transforming how web applications are deployed and served. By running code closer to the end user, edge functions reduce latency and improve performance. Frameworks like Next.js have embraced this approach, allowing developers to easily deploy code to a global network of edge servers.</p>
      
      <p>This paradigm shift means rethinking traditional backend architectures, with more logic moving to the edge and less reliance on centralized server infrastructure.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying informed about emerging trends and continuously adapting our skills, we can build better, faster, and more accessible web experiences for users around the world.</p>
    `,
    publishedAt: "15 Mar, 2023",
    readTime: "8 min read",
    category: "Technology",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=80&width=80&text=A",
      bio: "Senior Web Developer with a passion for emerging technologies and best practices.",
    },
    tags: ["Web Development", "JavaScript", "Future Tech", "AI", "WebAssembly"],
    comments: 12,
    likes: 48,
  }

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] w-full overflow-hidden bg-blue-100 flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="120" 
          height="120" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-blue-500 sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px]"
        >
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
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Post Header */}
        <div className="relative -mt-16 sm:-mt-20 rounded-t-3xl bg-white px-4 sm:px-6 pt-6 sm:pt-10 md:px-10 lg:px-16 border-4 border-black">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-secondary hover:text-primary mb-4 sm:mb-6"
            >
              <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Back to Home
            </Link>

            <Badge className="mb-3 sm:mb-4 border-2 border-black bg-secondary text-black font-bold text-xs sm:text-sm">{post.category}</Badge>

            <h1 className="font-heading mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight  tracking-wider">
              {post.title}
            </h1>

            <div className="mb-6 sm:mb-8 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-primary">
              <div className="flex items-center gap-1 sm:gap-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{post.comments} comments</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{post.likes} likes</span>
              </div>
            </div>

            <div className="mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={36}
                height={36}
                className="rounded-full border-3 border-black sm:w-[48px] sm:h-[48px]"
              />
              <div>
                <div className="font-bold text-sm sm:text-base">{post.author.name}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{post.author.bio}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="bg-white px-4 sm:px-6 py-6 sm:py-8 md:px-10 lg:px-16 border-x-4 border-black">
          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert mx-auto max-w-3xl">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mx-auto mt-8 sm:mt-10 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs sm:text-sm border-2 border-black font-bold">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share and Like */}
          <div className="mx-auto mt-6 sm:mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 rounded-lg border-4 border-black p-4 sm:p-6 animate-pulse-border">
              <div className="flex items-center gap-2 sm:gap-4">
                <Button variant="outline" size="sm" className="funky-btn gap-1 sm:gap-2 text-xs sm:text-sm h-8 sm:h-10">
                  <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  Like ({post.likes})
                </Button>
                <Button variant="outline" size="sm" className="funky-btn gap-1 sm:gap-2 text-xs sm:text-sm h-8 sm:h-10">
                  <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  Share
                </Button>
              </div>
              <div className="text-xs sm:text-sm font-bold text-secondary">Thank you for reading!</div>
            </div>
          </div>

          <Separator className="mx-auto my-10 sm:my-16 max-w-3xl border-t-4 border-black" />

          {/* Author Bio */}
          <div className="mx-auto mb-10 sm:mb-16 max-w-3xl">
            <div className="flex flex-col items-center gap-4 sm:gap-6 rounded-xl bg-muted/30 p-4 sm:p-8 text-center sm:flex-row sm:text-left border-4 border-black">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={60}
                height={60}
                className="rounded-full border-4 border-black sm:w-[80px] sm:h-[80px]"
              />
              <div>
                <h3 className="font-heading mb-1 sm:mb-2 text-lg sm:text-xl font-bold text-primary tracking-tight">About {post.author.name}</h3>
                <p className="text-muted-foreground font-bold text-xs sm:text-sm">{post.author.bio}</p>
                <div className="mt-3 sm:mt-4">
                  <Button variant="outline" size="sm" className="funky-btn text-xs sm:text-sm h-8 sm:h-9">
                    Follow
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-primary text-shadow-funky tracking-tight">
              Comments ({post.comments})
            </h2>
            <CommentSection postId={postId} />
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-muted/20 px-4 sm:px-6 py-10 sm:py-16 md:px-10 lg:px-16 border-x-4 border-b-4 border-black rounded-b-3xl">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading mb-8 sm:mb-10 text-center text-2xl sm:text-3xl font-bold text-primary text-shadow-funky tracking-tight">
              You might also like
            </h2>
            <RelatedPosts currentPostId={postId} />
          </div>
        </div>
      </main>
    </div>
  )
}
