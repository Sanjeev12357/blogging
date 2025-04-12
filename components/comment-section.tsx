"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageSquare, Reply, MoreHorizontal, ThumbsUp, Send, User, Calendar, Star, Smile, Award } from "lucide-react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

// Sample comments data
const initialComments = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=AJ",
      icon: <User className="h-6 w-6 text-white" />,
      bgColor: "bg-blue-400"
    },
    content: "This article is incredibly insightful! I've been following these trends and completely agree with your analysis on AI-driven tools.",
    date: "2 days ago",
    likes: 24,
    isLiked: false,
    replies: [
      {
        id: 11,
        user: {
          name: "Jamie Smith",
          avatar: "/placeholder.svg?height=40&width=40&text=JS",
          icon: <Star className="h-6 w-6 text-white" />,
          bgColor: "bg-purple-400"
        },
        content: "I agree! I've started using some of these AI tools in my workflow and the productivity boost is remarkable.",
        date: "1 day ago",
        likes: 8,
        isLiked: false,
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Taylor Reed",
      avatar: "/placeholder.svg?height=40&width=40&text=TR",
      icon: <Calendar className="h-6 w-6 text-white" />,
      bgColor: "bg-emerald-400"
    },
    content: "WebAssembly has been a game-changer for our team. We've seen significant performance improvements after integrating it into our stack.",
    date: "3 days ago",
    likes: 15,
    isLiked: false,
    replies: [],
  },
  {
    id: 3,
    user: {
      name: "Morgan Lee",
      avatar: "/placeholder.svg?height=40&width=40&text=ML",
      icon: <Smile className="h-6 w-6 text-white" />,
      bgColor: "bg-orange-400"
    },
    content: "Great write-up! Would love to see a follow-up article exploring edge computing in more detail. That's an area I'm particularly interested in.",
    date: "1 week ago",
    likes: 32,
    isLiked: false,
    replies: [],
  },
]

export default function CommentSection() {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleLike = (commentId: number, isReply = false, parentId?: number) => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (!isReply && comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          }
        }
        
        if (isReply && parentId && comment.id === parentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply => 
              reply.id === commentId
                ? {
                    ...reply,
                    likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                    isLiked: !reply.isLiked,
                  }
                : reply
            ),
          }
        }
        
        return comment
      })
    )
  }

  const handleSubmitComment = () => {
    if (newComment.trim() === "") return
    
    const newCommentObj = {
      id: Date.now(),
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40&text=You",
        icon: <Award className="h-6 w-6 text-white" />,
        bgColor: "bg-red-400"
      },
      content: newComment,
      date: "Just now",
      likes: 0,
      isLiked: false,
      replies: [],
    }
    
    setComments(prevComments => [newCommentObj, ...prevComments])
    setNewComment("")
  }

  const handleSubmitReply = (commentId: number) => {
    if (replyContent.trim() === "") return
    
    const newReply = {
      id: Date.now(),
      user: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40&text=You",
        icon: <Award className="h-6 w-6 text-white" />,
        bgColor: "bg-red-400"
      },
      content: replyContent,
      date: "Just now",
      likes: 0,
      isLiked: false,
    }
    
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      )
    )
    
    setReplyingTo(null)
    setReplyContent("")
  }

  return (
    <div className="rounded-2xl border-4 border-black p-6 md:p-8 bg-white">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="font-heading text-2xl font-bold md:text-3xl flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-primary" />
          Comments ({comments.length})
        </h3>
      </div>
      
      {/* Write new comment */}
      <div className="mb-10">
        <div className="flex gap-4 items-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black overflow-hidden bg-red-400">
            <Award className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <Textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              className="min-h-24 border-3 border-black text-lg mb-3 p-4"
            />
            <div className="flex justify-end">
              <Button 
                onClick={handleSubmitComment}
                className="gap-2 funky-btn"
              >
                Post Comment <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Comments list */}
      <div className="space-y-10">
        <AnimatePresence>
          {comments.map(comment => (
            <motion.div 
              key={comment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="flex gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-black overflow-hidden ${comment.user.bgColor}`}>
                  {comment.user.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold">{comment.user.name}</h4>
                      <span className="text-sm text-muted-foreground">{comment.date}</span>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-5 w-5" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Report</DropdownMenuItem>
                        <DropdownMenuItem>Copy Link</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="mt-2 text-lg leading-relaxed">
                    {comment.content}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center gap-1 font-medium ${
                        comment.isLiked ? "text-primary" : ""
                      }`}
                    >
                      <ThumbsUp className={`h-5 w-5 ${comment.isLiked ? "fill-primary" : ""}`} />
                      {comment.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setReplyingTo(comment.id)}
                      className="flex items-center gap-1 font-medium"
                    >
                      <Reply className="h-5 w-5" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Reply form */}
              <AnimatePresence>
                {replyingTo === comment.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 ml-16 overflow-hidden"
                  >
                    <div className="border-l-4 border-black pl-4 py-1">
                      <Textarea
                        placeholder={`Reply to ${comment.user.name}...`}
                        value={replyContent}
                        onChange={e => setReplyContent(e.target.value)}
                        className="min-h-24 border-3 border-black text-lg mb-2 p-4"
                        autoFocus
                      />
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          onClick={() => setReplyingTo(null)}
                          className="border-3 border-black"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => handleSubmitReply(comment.id)}
                          className="funky-btn"
                        >
                          Reply
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Replies */}
              {comment.replies.length > 0 && (
                <div className="mt-4 ml-16 space-y-6">
                  {comment.replies.map(reply => (
                    <div key={reply.id} className="border-l-4 border-black pl-4 py-1">
                      <div className="flex gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-black overflow-hidden ${reply.user.bgColor || 'bg-purple-400'}`}>
                          {reply.user.icon || <Star className="h-5 w-5 text-white" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <h4 className="text-base font-bold">{reply.user.name}</h4>
                              <span className="text-sm text-muted-foreground">{reply.date}</span>
                            </div>
                          </div>
                          <div className="mt-1 text-lg leading-relaxed">
                            {reply.content}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLike(reply.id, true, comment.id)}
                            className={`mt-2 flex items-center gap-1 font-medium ${
                              reply.isLiked ? "text-primary" : ""
                            }`}
                          >
                            <ThumbsUp className={`h-4 w-4 ${reply.isLiked ? "fill-primary" : ""}`} />
                            {reply.likes}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
