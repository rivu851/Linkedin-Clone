"use client"

import { useState } from "react"
import { useLinkedIn } from "../../contexts/linkedin-context"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { ImageIcon, Video, Calendar, FileText } from "lucide-react"

export function PostCreation() {
  const { currentUser, addPost } = useLinkedIn()
  const [isExpanded, setIsExpanded] = useState(false)
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    if (content.trim()) {
      addPost({
        content: content.trim(),
        author: {
          name: currentUser.name,
          headline: currentUser.headline,
          profileImage: currentUser.profileImage,
          timeAgo: "now",
        },
      })
      setContent("")
      setIsExpanded(false)
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
            <AvatarFallback>
              {currentUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            {!isExpanded ? (
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full text-left p-3 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Start a post...
              </button>
            ) : (
              <div className="space-y-3">
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="What do you want to talk about?"
                  className="min-h-[100px] border-0 p-0 resize-none focus:ring-0 text-lg"
                  autoFocus
                />

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                      <ImageIcon className="h-5 w-5 mr-2" />
                      Photo
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                      <Video className="h-5 w-5 mr-2" />
                      Video
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                      <Calendar className="h-5 w-5 mr-2" />
                      Event
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                      <FileText className="h-5 w-5 mr-2" />
                      Write article
                    </Button>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setIsExpanded(false)
                        setContent("")
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSubmit}
                      disabled={!content.trim()}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {!isExpanded && (
          <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
            <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              <ImageIcon className="h-5 w-5 mr-2" />
              Photo
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              <Video className="h-5 w-5 mr-2" />
              Video
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              <Calendar className="h-5 w-5 mr-2" />
              Event
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
              <FileText className="h-5 w-5 mr-2" />
              Write article
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
