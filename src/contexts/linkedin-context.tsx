"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  headline: string
  location: string
  avatar: string
  banner: string
  connections: number
  profileViews: number
}

interface Post {
  id: string
  author: {
    name: string
    headline: string
    avatar: string
  }
  content: string
  image?: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  isLiked: boolean
}

interface Connection {
  id: string
  name: string
  headline: string
  avatar: string
  mutualConnections: number
}

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary?: string
  logo: string
  postedTime: string
  applicants: number
}

interface Message {
  id: string
  senderId: string
  content: string
  timestamp: string
}

interface Conversation {
  id: string
  participant: {
    name: string
    avatar: string
    isOnline: boolean
  }
  lastMessage: string
  timestamp: string
  unreadCount: number
  messages: Message[]
}

interface LinkedInContextType {
  currentUser: User
  posts: Post[]
  connections: Connection[]
  jobs: Job[]
  conversations: Conversation[]
  notifications: any[]
  addPost: (content: string, image?: string) => void
  likePost: (postId: string) => void
  sendMessage: (conversationId: string, content: string) => void
  connectWithUser: (userId: string) => void
}

const LinkedInContext = createContext<LinkedInContextType | undefined>(undefined)

export const useLinkedIn = () => {
  const context = useContext(LinkedInContext)
  if (!context) {
    throw new Error("useLinkedIn must be used within a LinkedInProvider")
  }
  return context
}

export const LinkedInProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser] = useState<User>({
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    headline: "Senior Software Engineer at Tech Corp",
    location: "San Francisco, CA",
    avatar: "/professional-headshot.png",
    banner: "/professional-banner.png",
    connections: 500,
    profileViews: 25,
  })

  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: {
        name: "Sarah Johnson",
        headline: "Product Manager at Innovation Labs",
        avatar: "/professional-woman-headshot.png",
      },
      content:
        "Excited to share that our team just launched a new AI-powered feature that will revolutionize how users interact with our platform! 🚀",
      image: "/ai-conference.png",
      timestamp: "2h",
      likes: 42,
      comments: 8,
      shares: 3,
      isLiked: false,
    },
  ])

  const [connections] = useState<Connection[]>([
    {
      id: "1",
      name: "Alice Smith",
      headline: "UX Designer at Creative Studio",
      avatar: "/professional-woman-headshot.png",
      mutualConnections: 12,
    },
  ])

  const [jobs] = useState<Job[]>([
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      logo: "/google-logo.png",
      postedTime: "2 days ago",
      applicants: 47,
    },
  ])

  const [conversations] = useState<Conversation[]>([
    {
      id: "1",
      participant: {
        name: "Sarah Johnson",
        avatar: "/professional-woman-headshot.png",
        isOnline: true,
      },
      lastMessage: "Thanks for connecting!",
      timestamp: "2h",
      unreadCount: 1,
      messages: [
        {
          id: "1",
          senderId: "2",
          content: "Hi John! Thanks for connecting.",
          timestamp: "2h",
        },
      ],
    },
  ])

  const addPost = (content: string, image?: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        name: currentUser.name,
        headline: currentUser.headline,
        avatar: currentUser.avatar,
      },
      content,
      image,
      timestamp: "now",
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
    }
    setPosts((prev) => [newPost, ...prev])
  }

  const likePost = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post,
      ),
    )
  }

  const sendMessage = (conversationId: string, content: string) => {
    // Mock implementation
    console.log("Sending message:", content, "to conversation:", conversationId)
  }

  const connectWithUser = (userId: string) => {
    // Mock implementation
    console.log("Connecting with user:", userId)
  }

  const value: LinkedInContextType = {
    currentUser,
    posts,
    connections,
    jobs,
    conversations,
    notifications: [],
    addPost,
    likePost,
    sendMessage,
    connectWithUser,
  }

  return <LinkedInContext.Provider value={value}>{children}</LinkedInContext.Provider>
}
