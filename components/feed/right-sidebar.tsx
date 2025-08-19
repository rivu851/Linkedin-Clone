"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, X, TrendingUp, Info } from "lucide-react"

const suggestedConnections = [
  {
    id: "1",
    name: "Sarah Chen",
    headline: "Senior Product Manager at Google",
    mutualConnections: 12,
    profileImage: "/professional-woman-headshot.png",
  },
  {
    id: "2",
    name: "David Rodriguez",
    headline: "Full Stack Developer at Microsoft",
    mutualConnections: 8,
    profileImage: "/professional-headshot.png",
  },
  {
    id: "3",
    name: "Emily Johnson",
    headline: "UX Designer at Airbnb",
    mutualConnections: 15,
    profileImage: "/professional-woman-headshot.png",
  },
]

const linkedInNews = [
  {
    title: "Tech layoffs continue in 2024",
    timeAgo: "2h ago",
    readers: "1,234 readers",
  },
  {
    title: "AI adoption accelerates in enterprise",
    timeAgo: "4h ago",
    readers: "2,567 readers",
  },
  {
    title: "Remote work policies evolving",
    timeAgo: "6h ago",
    readers: "987 readers",
  },
  {
    title: "Startup funding reaches new highs",
    timeAgo: "8h ago",
    readers: "1,876 readers",
  },
  {
    title: "Green tech investments surge",
    timeAgo: "12h ago",
    readers: "743 readers",
  },
]

export function RightSidebar() {
  return (
    <div className="space-y-4">
      {/* Add to your feed */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Add to your feed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {suggestedConnections.slice(0, 2).map((person) => (
            <div key={person.id} className="flex items-start space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={person.profileImage || "/placeholder.svg"} alt={person.name} />
                <AvatarFallback>
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-gray-900 truncate">{person.name}</h4>
                <p className="text-xs text-gray-600 mt-1">{person.headline}</p>
                <Button size="sm" variant="outline" className="mt-2 h-7 text-xs rounded-full bg-transparent">
                  <Plus className="h-3 w-3 mr-1" />
                  Follow
                </Button>
              </div>
            </div>
          ))}
          <Button variant="ghost" className="text-sm text-gray-600 p-0 h-auto">
            View all recommendations →
          </Button>
        </CardContent>
      </Card>

      {/* LinkedIn News */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              LinkedIn News
            </CardTitle>
            <Info className="h-4 w-4 text-gray-400" />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {linkedInNews.map((news, index) => (
            <Link key={index} href="#" className="block hover:bg-gray-50 -mx-4 px-4 py-2 rounded">
              <h4 className="font-medium text-sm text-gray-900 leading-tight">{news.title}</h4>
              <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
                <span>{news.timeAgo}</span>
                <span>•</span>
                <span>{news.readers}</span>
              </div>
            </Link>
          ))}
          <Button variant="ghost" className="text-sm text-gray-600 p-0 h-auto">
            Show more →
          </Button>
        </CardContent>
      </Card>

      {/* Today's most viewed courses */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Today's most viewed courses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <Link href="#" className="block hover:bg-gray-50 -mx-4 px-4 py-2 rounded">
              <h4 className="font-medium text-sm text-gray-900">React - The Complete Guide</h4>
              <p className="text-xs text-gray-600">Maximilian Schwarzmüller</p>
            </Link>
            <Link href="#" className="block hover:bg-gray-50 -mx-4 px-4 py-2 rounded">
              <h4 className="font-medium text-sm text-gray-900">Advanced JavaScript Concepts</h4>
              <p className="text-xs text-gray-600">Andrei Neagoie</p>
            </Link>
            <Link href="#" className="block hover:bg-gray-50 -mx-4 px-4 py-2 rounded">
              <h4 className="font-medium text-sm text-gray-900">Product Management Fundamentals</h4>
              <p className="text-xs text-gray-600">Sarah Johnson</p>
            </Link>
          </div>
          <Button variant="ghost" className="text-sm text-blue-600 p-0 h-auto">
            Show more on LinkedIn Learning
          </Button>
        </CardContent>
      </Card>

      {/* People you may know */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">People you may know</CardTitle>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestedConnections.map((person) => (
            <div key={person.id} className="text-center">
              <Avatar className="h-20 w-20 mx-auto mb-3">
                <AvatarImage src={person.profileImage || "/placeholder.svg"} alt={person.name} />
                <AvatarFallback>
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h4 className="font-medium text-sm text-gray-900">{person.name}</h4>
              <p className="text-xs text-gray-600 mt-1 mb-2">{person.headline}</p>
              <p className="text-xs text-gray-500 mb-3">{person.mutualConnections} mutual connections</p>
              <Button size="sm" variant="outline" className="w-full rounded-full bg-transparent">
                Connect
              </Button>
            </div>
          ))}
          <Button variant="ghost" className="text-sm text-gray-600 p-0 h-auto w-full">
            Show all →
          </Button>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-xs text-gray-500 space-y-2 px-4">
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/accessibility" className="hover:text-blue-600">
            Accessibility
          </Link>
          <Link href="/help" className="hover:text-blue-600">
            Help Center
          </Link>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/privacy" className="hover:text-blue-600">
            Privacy & Terms
          </Link>
          <Link href="/ad-choices" className="hover:text-blue-600">
            Ad Choices
          </Link>
          <Link href="/advertising" className="hover:text-blue-600">
            Advertising
          </Link>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/business" className="hover:text-blue-600">
            Business Services
          </Link>
          <Link href="/mobile" className="hover:text-blue-600">
            Get the LinkedIn app
          </Link>
        </div>
        <div className="pt-2">
          <div className="text-blue-600 font-bold">
            Linked<span className="bg-blue-600 text-white px-1 rounded text-xs">in</span>
          </div>
          <div className="mt-1">LinkedIn Corporation © 2024</div>
        </div>
      </div>
    </div>
  )
}
