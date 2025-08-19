"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Minus } from "lucide-react"

interface MessagingWidgetProps {
  className?: string
}

export function MessagingWidget({ className }: MessagingWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const recentConversations = [
    {
      id: "1",
      name: "Sarah Chen",
      profileImage: "/professional-woman-headshot.png",
      lastMessage: "Thanks for the introduction!",
      unreadCount: 2,
      isOnline: true,
    },
    {
      id: "2",
      name: "David Rodriguez",
      profileImage: "/professional-headshot.png",
      lastMessage: "The React component library looks great!",
      unreadCount: 0,
      isOnline: false,
    },
  ]

  const totalUnread = recentConversations.reduce((sum, conv) => sum + conv.unreadCount, 0)

  if (!isOpen) {
    return (
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 w-14 p-0 shadow-lg relative"
        >
          <MessageCircle className="h-6 w-6" />
          {totalUnread > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-500 text-white h-6 w-6 p-0 text-xs rounded-full flex items-center justify-center">
              {totalUnread}
            </Badge>
          )}
        </Button>
      </div>
    )
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 w-80">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Messaging</h3>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)} className="h-6 w-6 p-0">
              <Minus className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="max-h-96 overflow-y-auto">
            {recentConversations.map((conversation) => (
              <div key={conversation.id} className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversation.profileImage || "/placeholder.svg"} alt={conversation.name} />
                      <AvatarFallback>
                        {conversation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.isOnline && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm text-gray-900 truncate">{conversation.name}</h4>
                      {conversation.unreadCount > 0 && (
                        <Badge className="bg-blue-600 hover:bg-blue-600 text-white h-4 w-4 p-0 text-xs rounded-full flex items-center justify-center">
                          {conversation.unreadCount}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="p-3 text-center">
              <Button variant="ghost" className="text-sm text-blue-600">
                View all in Messaging
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
