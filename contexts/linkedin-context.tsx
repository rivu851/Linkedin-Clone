"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

// User interface
export interface User {
  id: string
  name: string
  email: string
  headline: string
  profileImage: string
  location: string
  connections: number
  about: string
  experience: Experience[]
  education: Education[]
  skills: string[]
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string
  companyLogo: string
}

export interface Education {
  id: string
  school: string
  degree: string
  field: string
  startYear: string
  endYear: string
}

export interface Post {
  id: string
  author: User
  content: string
  image?: string
  likes: number
  comments: Comment[]
  shares: number
  timestamp: string
  isLiked: boolean
}

export interface Comment {
  id: string
  author: User
  content: string
  timestamp: string
  likes: number
}

export interface Connection {
  id: string
  user: User
  status: "pending" | "connected" | "suggested"
  mutualConnections: number
}

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary?: string
  description: string
  requirements: string[]
  postedDate: string
  applicants: number
  companyLogo: string
}

export interface Message {
  id: string
  sender: User
  content: string
  timestamp: string
  isRead: boolean
}

export interface Conversation {
  id: string
  participants: User[]
  messages: Message[]
  lastMessage: Message
  unreadCount: number
}

// Context interfaces
interface LinkedInContextType {
  currentUser: User
  posts: Post[]
  connections: Connection[]
  jobs: Job[]
  conversations: Conversation[]
  notifications: any[]
  addPost: (content: string, image?: string) => void
  likePost: (postId: string) => void
  addComment: (postId: string, content: string) => void
  connectUser: (userId: string) => void
  sendMessage: (conversationId: string, content: string) => void
  searchJobs: (query: string) => Job[]
  updateProfile: (updates: Partial<User>) => void
}

const LinkedInContext = createContext<LinkedInContextType | undefined>(undefined)

// Mock data
const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  headline: "Senior Software Engineer at Tech Corp",
  profileImage: "/professional-headshot.png",
  location: "San Francisco, CA",
  connections: 500,
  about:
    "Passionate software engineer with 8+ years of experience in full-stack development. I love building scalable applications and mentoring junior developers.",
  experience: [
    {
      id: "1",
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      startDate: "Jan 2020",
      description: "Leading development of microservices architecture and mentoring junior developers.",
      companyLogo: "/google-logo.png",
    },
    {
      id: "2",
      title: "Software Engineer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      startDate: "Jun 2018",
      endDate: "Dec 2019",
      description: "Built full-stack web applications using React and Node.js.",
      companyLogo: "/microsoft-logo.png",
    },
  ],
  education: [
    {
      id: "1",
      school: "Stanford University",
      degree: "Master of Science",
      field: "Computer Science",
      startYear: "2016",
      endYear: "2018",
    },
  ],
  skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"],
}

const mockPosts: Post[] = [
  {
    id: "1",
    author: {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      headline: "Product Manager at Innovation Labs",
      profileImage: "/professional-woman-headshot.png",
      location: "New York, NY",
      connections: 750,
      about: "",
      experience: [],
      education: [],
      skills: [],
    },
    content:
      "Excited to share that our team just launched a new AI-powered feature that's already showing 40% improvement in user engagement! 🚀 #AI #ProductManagement #Innovation",
    image: "/ai-conference.png",
    likes: 127,
    comments: [],
    shares: 23,
    timestamp: "2h",
    isLiked: false,
  },
]

export function LinkedInProvider({ children }: { children: React.ReactNode }) {
  const [currentUser] = useState<User>(mockUser)
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [connections, setConnections] = useState<Connection[]>([])
  const [jobs, setJobs] = useState<Job[]>([])
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [notifications, setNotifications] = useState<any[]>([])

  const addPost = (content: string, image?: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      author: currentUser,
      content,
      image,
      likes: 0,
      comments: [],
      shares: 0,
      timestamp: "now",
      isLiked: false,
    }
    setPosts((prev) => [newPost, ...prev])
  }

  const likePost = (postId: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
          : post,
      ),
    )
  }

  const addComment = (postId: string, content: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      author: currentUser,
      content,
      timestamp: "now",
      likes: 0,
    }
    setPosts((prev) =>
      prev.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post)),
    )
  }

  const connectUser = (userId: string) => {
    // Implementation for connecting with users
  }

  const sendMessage = (conversationId: string, content: string) => {
    // Implementation for sending messages
  }

  const searchJobs = (query: string): Job[] => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()),
    )
  }

  const updateProfile = (updates: Partial<User>) => {
    // Implementation for updating profile
  }

  return (
    <LinkedInContext.Provider
      value={{
        currentUser,
        posts,
        connections,
        jobs,
        conversations,
        notifications,
        addPost,
        likePost,
        addComment,
        connectUser,
        sendMessage,
        searchJobs,
        updateProfile,
      }}
    >
      {children}
    </LinkedInContext.Provider>
  )
}

export function useLinkedIn() {
  const context = useContext(LinkedInContext)
  if (context === undefined) {
    throw new Error("useLinkedIn must be used within a LinkedInProvider")
  }
  return context
}
