"use client"

import Link from "next/link"
import { useLinkedIn } from "@/contexts/linkedin-context"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Eye, Bookmark, Users, Calendar } from "lucide-react"

export function LeftSidebar() {
  const { currentUser } = useLinkedIn()

  if (!currentUser) return null

  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card className="overflow-hidden">
        <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <CardContent className="pt-0 pb-4">
          <div className="flex flex-col items-center -mt-8">
            <Avatar className="h-16 w-16 border-4 border-white">
              <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
              <AvatarFallback className="text-lg">
                {currentUser.name.split(" ")[0][0]}
                {currentUser.name.split(" ")[1]?.[0] || ""}
              </AvatarFallback>
            </Avatar>
            <Link href="/profile" className="mt-2 text-center hover:underline">
              <h3 className="font-semibold text-gray-900">{currentUser.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{currentUser.headline}</p>
            </Link>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Profile viewers</span>
              <span className="text-blue-600 font-medium">127</span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="text-gray-600">Post impressions</span>
              <span className="text-blue-600 font-medium">1,204</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link href="/premium" className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              Access exclusive tools & insights
            </Link>
            <div className="mt-2">
              <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                Try Premium for free
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link href="/saved" className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
              <Bookmark className="h-4 w-4 mr-2" />
              My items
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-3">Recent</h3>
          <div className="space-y-2">
            <Link
              href="/groups/react-developers"
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <Users className="h-4 w-4 mr-2" />
              React Developers
            </Link>
            <Link
              href="/groups/startup-founders"
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <Users className="h-4 w-4 mr-2" />
              Startup Founders Network
            </Link>
            <Link
              href="/events/tech-conference"
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Tech Conference 2024
            </Link>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Groups</h4>
            <div className="space-y-2">
              <Link href="/groups" className="text-sm text-gray-600 hover:text-gray-900 block">
                JavaScript Developers
              </Link>
              <Link href="/groups" className="text-sm text-gray-600 hover:text-gray-900 block">
                Product Management
              </Link>
              <Link href="/groups" className="text-sm text-gray-600 hover:text-gray-900 block">
                UX Design Community
              </Link>
            </div>
            <Button variant="ghost" className="text-sm text-gray-600 mt-2 p-0 h-auto">
              See all (12)
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Events</h4>
            <Button variant="ghost" className="text-sm text-blue-600 p-0 h-auto">
              + Create event
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Followed Hashtags</h4>
            <div className="space-y-1">
              <div className="text-sm text-gray-600">#javascript</div>
              <div className="text-sm text-gray-600">#react</div>
              <div className="text-sm text-gray-600">#webdevelopment</div>
            </div>
          </div>

          <Button variant="ghost" className="text-sm text-gray-600 mt-4 p-0 h-auto">
            Discover more
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
