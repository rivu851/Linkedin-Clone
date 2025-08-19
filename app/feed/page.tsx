"use client"

import { useState } from "react"
import { ProtectedLayout } from "@/components/layout/protected-layout"
import { LeftSidebar } from "@/components/feed/left-sidebar"
import { RightSidebar } from "@/components/feed/right-sidebar"
import { PostCard } from "@/components/feed/post-card"
import { PostCreation } from "@/components/feed/post-creation"

// Mock posts data
const initialMockPosts = [
  {
    id: "1",
    author: {
      name: "John Doe",
      headline: "Software Engineer at Tech Corp",
      profileImage: "/professional-headshot.png",
      timeAgo: "2h",
    },
    content:
      "Excited to share that I just completed a new project using Next.js and TypeScript! The developer experience has been amazing. Building modern web applications has never been more enjoyable. What's your favorite tech stack for 2024? #webdev #nextjs #typescript",
    likes: 127,
    comments: 23,
    shares: 8,
    isLiked: false,
  },
  {
    id: "2",
    author: {
      name: "Jane Smith",
      headline: "Product Manager | AI Enthusiast",
      profileImage: "/professional-woman-headshot.png",
      timeAgo: "4h",
    },
    content:
      "Just attended an incredible AI conference. The future of product development is going to be fascinating! Key takeaways:\n\n🚀 AI-first product design\n🤖 Automated user research\n📊 Predictive analytics for better UX\n\nThe intersection of AI and human creativity is where the magic happens. #AI #ProductManagement #Innovation",
    image: "/ai-conference.png",
    likes: 89,
    comments: 15,
    shares: 12,
    isLiked: true,
  },
  {
    id: "3",
    author: {
      name: "Mike Johnson",
      headline: "Senior Developer | React Expert",
      profileImage: "/professional-headshot.png",
      timeAgo: "6h",
    },
    content:
      "Working on a new React component library. Clean, reusable components are the key to scalable applications. Here are my top 5 principles for building component libraries:\n\n1. Consistency in design tokens\n2. Comprehensive TypeScript support\n3. Accessibility by default\n4. Thorough documentation\n5. Performance optimization\n\nWhat would you add to this list? #React #ComponentLibrary #Frontend",
    likes: 156,
    comments: 31,
    shares: 19,
    isLiked: false,
  },
  {
    id: "4",
    author: {
      name: "Sarah Wilson",
      headline: "UX Designer | Design Systems",
      profileImage: "/professional-woman-headshot.png",
      timeAgo: "8h",
    },
    content:
      "Design systems are not just about components - they are about creating a shared language between design and development teams. After 5 years of building design systems, here's what I've learned:\n\n✨ Start with principles, not components\n🎨 Involve developers from day one\n📚 Documentation is as important as the code\n🔄 Iterate based on real usage\n\nBuilding bridges between design and code is what makes great products. #DesignSystems #UX #Collaboration",
    likes: 203,
    comments: 42,
    shares: 25,
    isLiked: true,
  },
]

export default function FeedPage() {
  const [posts, setPosts] = useState(initialMockPosts)

  const handlePostCreated = (newPost: any) => {
    setPosts((prevPosts) => [newPost, ...prevPosts])
  }

  return (
    <ProtectedLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <LeftSidebar />
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <PostCreation onPostCreated={handlePostCreated} />

              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <RightSidebar />
          </div>
        </div>
      </div>
    </ProtectedLayout>
  )
}
