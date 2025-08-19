"use client"

import { useState } from "react"
import { useLinkedIn } from "../../contexts/linkedin-context"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { ThumbsUp, MessageCircle, Repeat2, Send, MoreHorizontal } from "lucide-react"

interface PostCardProps {
  post: {
    id: string
    author: {
      name: string
      headline: string
      profileImage: string
      timeAgo: string
    }
    content: string
    image?: string
    likes: number
    comments: number
    shares: number
    isLiked: boolean
  }
}

export function PostCard({ post }: PostCardProps) {
  const { toggleLike } = useLinkedIn()
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1))
    toggleLike(post.id)
  }

  return (
    <Card>
      <CardContent className="p-4">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.profileImage || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">{post.author.name}</h3>
              <p className="text-sm text-gray-600">{post.author.headline}</p>
              <p className="text-xs text-gray-500">{post.author.timeAgo}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-gray-900 whitespace-pre-line">{post.content}</p>
          {post.image && (
            <img
              src={post.image || "/placeholder.svg"}
              alt="Post content"
              className="mt-3 w-full rounded-lg object-cover max-h-96"
            />
          )}
        </div>

        {/* Engagement Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3 pb-3 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span>{likesCount} likes</span>
            <span>{post.comments} comments</span>
            <span>{post.shares} reposts</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Button
            variant="ghost"
            size="sm"
            className={`flex-1 ${isLiked ? "text-blue-600 bg-blue-50" : "text-gray-600"} hover:bg-blue-50 hover:text-blue-600`}
            onClick={handleLike}
          >
            <ThumbsUp className={`h-5 w-5 mr-2 ${isLiked ? "fill-current" : ""}`} />
            Like
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
            <MessageCircle className="h-5 w-5 mr-2" />
            Comment
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
            <Repeat2 className="h-5 w-5 mr-2" />
            Repost
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
            <Send className="h-5 w-5 mr-2" />
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
