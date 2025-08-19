"use client"

import { useState } from "react"
import { useLinkedIn } from "@/contexts/linkedin-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageIcon, Calendar, FileText, Globe, Users, X, Smile, Hash, AtSign } from "lucide-react"

interface PostCreationProps {
  onPostCreated?: (post: any) => void
}

export function PostCreation({ onPostCreated }: PostCreationProps) {
  const { currentUser } = useLinkedIn()
  const [isOpen, setIsOpen] = useState(false)
  const [postContent, setPostContent] = useState("")
  const [privacy, setPrivacy] = useState("anyone")
  const [isPosting, setIsPosting] = useState(false)

  if (!currentUser) return null

  const handlePost = async () => {
    if (!postContent.trim()) return

    setIsPosting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newPost = {
      id: Date.now().toString(),
      author: {
        name: currentUser.name,
        headline: currentUser.headline || "Professional",
        profileImage: currentUser.profileImage,
        timeAgo: "now",
      },
      content: postContent,
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
    }

    onPostCreated?.(newPost)
    setPostContent("")
    setIsOpen(false)
    setIsPosting(false)
  }

  const privacyOptions = [
    { value: "anyone", label: "Anyone", icon: Globe, description: "Anyone on or off LinkedIn" },
    { value: "connections", label: "LinkedIn connections only", icon: Users, description: "Connections only" },
    { value: "group", label: "Group", icon: Users, description: "Group members only" },
  ]

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
            <AvatarFallback>
              {currentUser.name.split(" ")[0][0]}
              {currentUser.name.split(" ")[1]?.[0] || ""}
            </AvatarFallback>
          </Avatar>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex-1 justify-start text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full h-12 px-6"
              >
                Start a post
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl">Create a post</DialogTitle>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="space-y-4">
                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
                    <AvatarFallback>
                      {currentUser.name.split(" ")[0][0]}
                      {currentUser.name.split(" ")[1]?.[0] || ""}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{currentUser.name}</h3>
                    <Select value={privacy} onValueChange={setPrivacy}>
                      <SelectTrigger className="w-auto h-auto p-0 border-0 bg-transparent">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {privacyOptions.map((option) => {
                          const Icon = option.icon
                          return (
                            <SelectItem key={option.value} value={option.value}>
                              <div className="flex items-center space-x-2">
                                <Icon className="h-4 w-4" />
                                <div>
                                  <div className="font-medium">{option.label}</div>
                                  <div className="text-xs text-gray-500">{option.description}</div>
                                </div>
                              </div>
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Post Content */}
                <div className="space-y-3">
                  <Textarea
                    placeholder="What do you want to talk about?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="min-h-32 border-0 resize-none text-lg placeholder:text-gray-500 focus-visible:ring-0"
                  />

                  {/* Character count */}
                  <div className="text-right text-sm text-gray-500">{postContent.length}/3000</div>
                </div>

                {/* Media Options */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
                      <ImageIcon className="h-5 w-5 mr-2" />
                      Media
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
                      <Calendar className="h-5 w-5 mr-2" />
                      Event
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:bg-gray-100">
                      <FileText className="h-5 w-5 mr-2" />
                      Write article
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Smile className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <Hash className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600">
                      <AtSign className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Post Button */}
                <div className="flex justify-end pt-4">
                  <Button
                    onClick={handlePost}
                    disabled={!postContent.trim() || isPosting}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
                  >
                    {isPosting ? "Posting..." : "Post"}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center justify-around mt-4 pt-4 border-t border-gray-200">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1">
                <ImageIcon className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Media</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add media to your post</DialogTitle>
              </DialogHeader>
              <div className="text-center py-8">
                <p className="text-gray-600">Media upload functionality would be implemented here</p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1">
                <Calendar className="h-5 w-5 text-orange-600" />
                <span className="font-medium">Event</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create an event</DialogTitle>
              </DialogHeader>
              <div className="text-center py-8">
                <p className="text-gray-600">Event creation functionality would be implemented here</p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 flex-1">
                <FileText className="h-5 w-5 text-red-600" />
                <span className="font-medium">Write article</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Write an article</DialogTitle>
              </DialogHeader>
              <div className="text-center py-8">
                <p className="text-gray-600">Article writing functionality would be implemented here</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
