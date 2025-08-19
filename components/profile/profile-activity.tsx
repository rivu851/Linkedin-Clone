"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageCircle, Repeat2 } from "lucide-react"

const activities = [
  {
    id: "1",
    type: "post",
    content:
      "Excited to share that I just completed a new project using Next.js and TypeScript! The developer experience has been amazing.",
    timeAgo: "2 days ago",
    likes: 23,
    comments: 5,
    shares: 2,
  },
  {
    id: "2",
    type: "comment",
    content:
      "Great insights on React performance optimization! I've been implementing similar patterns in my projects.",
    originalPost: "React Performance Best Practices",
    timeAgo: "1 week ago",
    likes: 8,
    comments: 2,
    shares: 0,
  },
  {
    id: "3",
    type: "share",
    content: "This article perfectly explains the benefits of TypeScript in large codebases. Highly recommended!",
    originalPost: "Why TypeScript is Essential for Enterprise Applications",
    timeAgo: "2 weeks ago",
    likes: 15,
    comments: 3,
    shares: 4,
  },
]

export function ProfileActivity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl">Activity</CardTitle>
          <p className="text-sm text-gray-600 mt-1">1,247 followers</p>
        </div>
        <Button variant="outline" className="rounded-full bg-transparent">
          Create a post
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={`${index !== activities.length - 1 ? "pb-6 border-b border-gray-200" : ""}`}
          >
            <div className="flex items-start space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/professional-headshot.png" alt="Profile" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="text-sm text-gray-600 mb-2">
                  {activity.type === "post" && "John posted this"}
                  {activity.type === "comment" && "John commented on this"}
                  {activity.type === "share" && "John shared this"}
                  <span className="mx-1">•</span>
                  {activity.timeAgo}
                </div>

                {activity.originalPost && (
                  <div className="text-sm text-gray-700 mb-2 font-medium">{activity.originalPost}</div>
                )}

                <p className="text-gray-900 leading-relaxed mb-3">{activity.content}</p>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{activity.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{activity.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Repeat2 className="h-4 w-4" />
                    <span>{activity.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Button variant="ghost" className="w-full text-gray-600">
          Show all activity →
        </Button>
      </CardContent>
    </Card>
  )
}
