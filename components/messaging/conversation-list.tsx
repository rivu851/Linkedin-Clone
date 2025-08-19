"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Edit, MoreHorizontal, Archive, Star } from "lucide-react"

interface Conversation {
  id: string
  participant: {
    name: string
    profileImage?: string
    isOnline: boolean
  }
  lastMessage: {
    content: string
    timestamp: string
    isRead: boolean
    senderId: string
  }
  unreadCount: number
  isStarred: boolean
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    participant: {
      name: "Sarah Chen",
      profileImage: "/professional-woman-headshot.png",
      isOnline: true,
    },
    lastMessage: {
      content: "Thanks for the introduction! I'd love to discuss the product manager role.",
      timestamp: "2m",
      isRead: false,
      senderId: "sarah",
    },
    unreadCount: 2,
    isStarred: true,
  },
  {
    id: "2",
    participant: {
      name: "David Rodriguez",
      profileImage: "/professional-headshot.png",
      isOnline: false,
    },
    lastMessage: {
      content: "The React component library looks great! When can we schedule a code review?",
      timestamp: "1h",
      isRead: true,
      senderId: "david",
    },
    unreadCount: 0,
    isStarred: false,
  },
  {
    id: "3",
    participant: {
      name: "Emily Johnson",
      profileImage: "/professional-woman-headshot.png",
      isOnline: true,
    },
    lastMessage: {
      content: "Perfect! I'll send over the design files by end of day.",
      timestamp: "3h",
      isRead: true,
      senderId: "me",
    },
    unreadCount: 0,
    isStarred: false,
  },
  {
    id: "4",
    participant: {
      name: "Mike Johnson",
      profileImage: "/professional-headshot.png",
      isOnline: false,
    },
    lastMessage: {
      content: "Great meeting today! Looking forward to collaborating on the new project.",
      timestamp: "1d",
      isRead: true,
      senderId: "mike",
    },
    unreadCount: 0,
    isStarred: true,
  },
]

interface ConversationListProps {
  selectedConversationId?: string
  onConversationSelect: (conversationId: string) => void
}

export function ConversationList({ selectedConversationId, onConversationSelect }: ConversationListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [conversations] = useState(mockConversations)

  const filteredConversations = conversations.filter((conv) =>
    conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="h-full flex flex-col bg-white border-r border-gray-200">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Messaging</h2>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search messages"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-50 border-0 focus:bg-white focus:ring-1 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex border-b border-gray-200">
        <button className="flex-1 px-4 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
          Focused
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900">Other</button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onConversationSelect(conversation.id)}
            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
              selectedConversationId === conversation.id ? "bg-blue-50 border-l-4 border-l-blue-600" : ""
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={conversation.participant.profileImage || "/placeholder.svg"}
                    alt={conversation.participant.name}
                  />
                  <AvatarFallback>
                    {conversation.participant.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {conversation.participant.isOnline && (
                  <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <h3
                      className={`font-medium truncate ${conversation.lastMessage.isRead ? "text-gray-900" : "text-gray-900 font-semibold"}`}
                    >
                      {conversation.participant.name}
                    </h3>
                    {conversation.isStarred && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{conversation.lastMessage.timestamp}</span>
                    {conversation.unreadCount > 0 && (
                      <Badge className="bg-blue-600 hover:bg-blue-600 text-white h-5 w-5 p-0 text-xs rounded-full flex items-center justify-center">
                        {conversation.unreadCount}
                      </Badge>
                    )}
                  </div>
                </div>
                <p
                  className={`text-sm truncate ${conversation.lastMessage.isRead ? "text-gray-600" : "text-gray-900 font-medium"}`}
                >
                  {conversation.lastMessage.senderId === "me" ? "You: " : ""}
                  {conversation.lastMessage.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Archive className="h-4 w-4 mr-2" />
            Archived
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Star className="h-4 w-4 mr-2" />
            Starred
          </Button>
        </div>
      </div>
    </div>
  )
}
