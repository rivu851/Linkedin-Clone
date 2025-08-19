"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageCircle, Repeat2, Send, MoreHorizontal, Globe, Heart, Lightbulb } from "lucide-react"

interface Post {
  id: string
  author: {
    name: string
    headline: string
    profileImage?: string
    timeAgo: string
  }
  content: string
  image?: string
  likes: number
  comments: number
  shares: number
  isLiked?: boolean
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked || false)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  return (
    <Card className="mb-4">
      <CardContent className="p-0">
        {/* Post Header */}
        <div className="p-4 pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={post.author.profileImage || "/placeholder.svg"} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Link href="#" className="hover:underline">
                  <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                </Link>
                <p className="text-sm text-gray-600">{post.author.headline}</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{post.author.timeAgo}</span>
                  <span className="mx-1">•</span>
                  <Globe className="h-3 w-3 mr-1" />
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Post Content */}
        <div className="px-4 pb-3">
          <p className="text-gray-900 leading-relaxed">{post.content}</p>
        </div>

        {/* Post Image */}
        {post.image && (
          <div className="px-4 pb-3">
            <img
              src={post.image || "/placeholder.svg"}
              alt="Post content"
              className="w-full rounded-lg object-cover max-h-96"
            />
          </div>
        )}

        {/* Engagement Stats */}
        <div className="px-4 py-2 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <div className="flex -space-x-1">
                <div className="h-5 w-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <ThumbsUp className="h-3 w-3 text-white" />
                </div>
                <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                  <Heart className="h-3 w-3 text-white" />
                </div>
                <div className="h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-3 w-3 text-white" />
                </div>
              </div>
              <span>{likesCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{post.comments} comments</span>
              <span>{post.shares} reposts</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 py-2 border-t border-gray-100">
          <div className="flex items-center justify-around">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center space-x-2 hover:bg-gray-100 ${isLiked ? "text-blue-600" : "text-gray-600"}`}
              onClick={handleLike}
            >
              <ThumbsUp className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              <span className="font-medium">Like</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
              <MessageCircle className="h-4 w-4" />
              <span className="font-medium">Comment</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
              <Repeat2 className="h-4 w-4" />
              <span className="font-medium">Repost</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
              <Send className="h-4 w-4" />
              <span className="font-medium">Send</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
