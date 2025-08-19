import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"

export function RightSidebar() {
  const suggestions = [
    {
      id: "1",
      name: "Alex Chen",
      headline: "Senior Frontend Developer at Google",
      profileImage: "/professional-headshot.png",
      mutualConnections: 12,
    },
    {
      id: "2",
      name: "Maria Rodriguez",
      headline: "Product Designer at Figma",
      profileImage: "/professional-woman-headshot.png",
      mutualConnections: 8,
    },
    {
      id: "3",
      name: "David Kim",
      headline: "Engineering Manager at Netflix",
      profileImage: "/professional-headshot.png",
      mutualConnections: 15,
    },
  ]

  const news = [
    "Tech layoffs continue across industry",
    "AI adoption accelerates in enterprise",
    "Remote work policies evolving",
    "Startup funding reaches new highs",
    "Cybersecurity threats on the rise",
  ]

  return (
    <div className="space-y-4">
      {/* Add to your feed */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Add to your feed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {suggestions.map((person) => (
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
                <p className="text-xs text-gray-600 line-clamp-2">{person.headline}</p>
                <p className="text-xs text-gray-500 mt-1">{person.mutualConnections} mutual connections</p>
                <Button size="sm" variant="outline" className="mt-2 h-8 text-xs bg-transparent">
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
          <CardTitle className="text-base">LinkedIn News</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {news.map((item, index) => (
            <div key={index} className="cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded">
              <p className="text-sm font-medium text-gray-900">{item}</p>
              <p className="text-xs text-gray-500 mt-1">2h ago • 1,234 readers</p>
            </div>
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
            <p className="text-sm font-medium text-gray-900">1. React - The Complete Guide</p>
            <p className="text-xs text-gray-600">by Maximilian Schwarzmüller</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">2. Advanced JavaScript Concepts</p>
            <p className="text-xs text-gray-600">by Jonas Schmedtmann</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">3. System Design Interview</p>
            <p className="text-xs text-gray-600">by Alex Xu</p>
          </div>
          <Button variant="ghost" className="text-sm text-blue-600 p-0 h-auto">
            Show more on LinkedIn Learning
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
