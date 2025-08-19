"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useLinkedIn } from "@/contexts/linkedin-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Send, Paperclip, Smile, MoreHorizontal, Phone, Video, Info, ImageIcon, FileText } from "lucide-react"

interface Message {
  id: string
  senderId: string
  content: string
  timestamp: string
  isRead: boolean
  type: "text" | "image" | "file"
}

interface MessageThreadProps {
  conversationId: string
}

const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "1",
      senderId: "sarah",
      content: "Hi John! I saw your post about the React component library. Really impressive work!",
      timestamp: "10:30 AM",
      isRead: true,
      type: "text",
    },
    {
      id: "2",
      senderId: "me",
      content: "Thank you Sarah! I've been working on it for a few months. Are you interested in contributing?",
      timestamp: "10:32 AM",
      isRead: true,
      type: "text",
    },
    {
      id: "3",
      senderId: "sarah",
      content:
        "I'd love to help, especially with the accessibility features. I have some experience with ARIA patterns.",
      timestamp: "10:35 AM",
      isRead: true,
      type: "text",
    },
    {
      id: "4",
      senderId: "me",
      content:
        "That's perfect! Accessibility is definitely an area where we need more expertise. Would you like to schedule a call to discuss?",
      timestamp: "10:37 AM",
      isRead: true,
      type: "text",
    },
    {
      id: "5",
      senderId: "sarah",
      content: "Thanks for the introduction! I'd love to discuss the product manager role.",
      timestamp: "2:15 PM",
      isRead: false,
      type: "text",
    },
  ],
  "2": [
    {
      id: "1",
      senderId: "david",
      content: "Hey John, I reviewed your latest pull request. The code looks clean!",
      timestamp: "Yesterday",
      isRead: true,
      type: "text",
    },
    {
      id: "2",
      senderId: "me",
      content: "Thanks for the quick review! Any suggestions for improvements?",
      timestamp: "Yesterday",
      isRead: true,
      type: "text",
    },
    {
      id: "3",
      senderId: "david",
      content: "The React component library looks great! When can we schedule a code review?",
      timestamp: "1h ago",
      isRead: true,
      type: "text",
    },
  ],
}

const participants: Record<string, any> = {
  "1": {
    name: "Sarah Chen",
    headline: "Senior Product Manager at Google",
    profileImage: "/professional-woman-headshot.png",
    isOnline: true,
  },
  "2": {
    name: "David Rodriguez",
    headline: "Full Stack Developer at Microsoft",
    profileImage: "/professional-headshot.png",
    isOnline: false,
  },
}

export function MessageThread({ conversationId }: MessageThreadProps) {
  const { currentUser } = useLinkedIn()
  const [messages, setMessages] = useState<Message[]>(mockMessages[conversationId] || [])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const participant = participants[conversationId]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const message: Message = {
      id: Date.now().toString(),
      senderId: "me",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isRead: false,
      type: "text",
    }

    setMessages((prev) => [...prev, message])
    setNewMessage("")

    // Simulate typing indicator and response
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const response: Message = {
        id: (Date.now() + 1).toString(),
        senderId: participant?.name.toLowerCase().replace(" ", "") || "other",
        content: "Thanks for your message! I'll get back to you soon.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        isRead: false,
        type: "text",
      }
      setMessages((prev) => [...prev, response])
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!participant) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
          <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={participant.profileImage || "/placeholder.svg"} alt={participant.name} />
                <AvatarFallback>
                  {participant.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {participant.isOnline && (
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{participant.name}</h3>
              <p className="text-sm text-gray-600">{participant.headline}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Info className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View profile</DropdownMenuItem>
                <DropdownMenuItem>Mute conversation</DropdownMenuItem>
                <DropdownMenuItem>Archive conversation</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">Block user</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.senderId === "me" ? "flex-row-reverse space-x-reverse" : ""}`}
            >
              {message.senderId !== "me" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={participant.profileImage || "/placeholder.svg"} alt={participant.name} />
                  <AvatarFallback className="text-xs">
                    {participant.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`px-4 py-2 rounded-2xl ${
                  message.senderId === "me" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-end space-x-2 max-w-xs lg:max-w-md">
              <Avatar className="h-8 w-8">
                <AvatarImage src={participant.profileImage || "/placeholder.svg"} alt={participant.name} />
                <AvatarFallback className="text-xs">
                  {participant.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="px-4 py-2 rounded-2xl bg-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ImageIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <FileText className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-end space-x-2">
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Write a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pr-10 rounded-full border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                >
                  <Smile className="h-4 w-4" />
                </Button>
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 p-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
