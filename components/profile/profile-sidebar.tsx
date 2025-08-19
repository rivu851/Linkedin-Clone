"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Eye, Users, TrendingUp } from "lucide-react"

const profileViewers = [
  {
    name: "Sarah Chen",
    headline: "Product Manager at Google",
    profileImage: "/professional-woman-headshot.png",
    timeAgo: "2h",
  },
  {
    name: "David Rodriguez",
    headline: "Full Stack Developer",
    profileImage: "/professional-headshot.png",
    timeAgo: "5h",
  },
  {
    name: "Emily Johnson",
    headline: "UX Designer at Airbnb",
    profileImage: "/professional-woman-headshot.png",
    timeAgo: "1d",
  },
]

const peopleAlsoViewed = [
  {
    name: "Alex Thompson",
    headline: "Senior Software Engineer at Meta",
    profileImage: "/professional-headshot.png",
    mutualConnections: 12,
  },
  {
    name: "Maria Garcia",
    headline: "Tech Lead at Netflix",
    profileImage: "/professional-woman-headshot.png",
    mutualConnections: 8,
  },
  {
    name: "James Wilson",
    headline: "Principal Engineer at Stripe",
    profileImage: "/professional-headshot.png",
    mutualConnections: 15,
  },
]

export function ProfileSidebar() {
  return (
    <div className="space-y-4">
      {/* Profile Strength */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Profile strength: Intermediate</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={75} className="mb-4" />
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-green-600">
              <div className="h-2 w-2 bg-green-600 rounded-full mr-2"></div>
              Add 2 more positions for an All-Star profile
            </div>
            <div className="flex items-center text-gray-600">
              <div className="h-2 w-2 bg-gray-300 rounded-full mr-2"></div>
              Add skills (5 left)
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center">
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm">Profile views</span>
            </div>
            <span className="font-semibold text-blue-600">127</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm">Post impressions</span>
            </div>
            <span className="font-semibold text-blue-600">1,204</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-sm">Search appearances</span>
            </div>
            <span className="font-semibold text-blue-600">89</span>
          </div>
        </CardContent>
      </Card>

      {/* Profile Viewers */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Who viewed your profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {profileViewers.map((viewer, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={viewer.profileImage || "/placeholder.svg"} alt={viewer.name} />
                <AvatarFallback>
                  {viewer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm text-gray-900 truncate">{viewer.name}</h4>
                <p className="text-xs text-gray-600 truncate">{viewer.headline}</p>
                <p className="text-xs text-gray-500">{viewer.timeAgo}</p>
              </div>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-sm text-gray-600">
            View all →
          </Button>
        </CardContent>
      </Card>

      {/* People Also Viewed */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">People also viewed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {peopleAlsoViewed.map((person, index) => (
            <div key={index} className="flex items-start space-x-3">
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
                <h4 className="font-medium text-sm text-gray-900">{person.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{person.headline}</p>
                <p className="text-xs text-gray-500 mb-2">{person.mutualConnections} mutual connections</p>
                <Button variant="outline" size="sm" className="text-xs rounded-full bg-transparent">
                  Connect
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* People You May Know */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">People you may know</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {peopleAlsoViewed.slice(0, 2).map((person, index) => (
            <div key={index} className="text-center">
              <Avatar className="h-16 w-16 mx-auto mb-2">
                <AvatarImage src={person.profileImage || "/placeholder.svg"} alt={person.name} />
                <AvatarFallback>
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h4 className="font-medium text-sm text-gray-900">{person.name}</h4>
              <p className="text-xs text-gray-600 mb-2">{person.headline}</p>
              <Button variant="outline" size="sm" className="w-full rounded-full bg-transparent">
                Connect
              </Button>
            </div>
          ))}
          <Button variant="ghost" className="w-full text-sm text-gray-600">
            Show all →
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
