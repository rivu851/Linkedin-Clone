import type React from "react"
import { LeftSidebar } from "../components/feed/LeftSidebar"
import { PostCreation } from "../components/feed/PostCreation"
import { PostCard } from "../components/feed/PostCard"
import { RightSidebar } from "../components/feed/RightSidebar"
import { useLinkedIn } from "../contexts/linkedin-context"

export const FeedPage: React.FC = () => {
  const { posts } = useLinkedIn()

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <LeftSidebar />
        </div>

        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-4">
          <PostCreation />
          <div className="space-y-4">
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
  )
}
