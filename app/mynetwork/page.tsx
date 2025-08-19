"use client"

import { useState } from "react"
import { ProtectedLayout } from "@/components/layout/protected-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Users, UserPlus, X, Check, Calendar, MapPin, Building2 } from "lucide-react"

const connectionSuggestions = [
  {
    id: 1,
    name: "Sarah Johnson",
    headline: "Senior Product Manager at Google",
    location: "San Francisco, CA",
    mutualConnections: 12,
    profileImage: "/professional-headshot.png",
    company: "Google",
  },
  {
    id: 2,
    name: "Michael Chen",
    headline: "Software Engineer at Microsoft",
    location: "Seattle, WA",
    mutualConnections: 8,
    profileImage: "/professional-woman-headshot.png",
    company: "Microsoft",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    headline: "UX Designer at Apple",
    location: "Cupertino, CA",
    mutualConnections: 15,
    profileImage: "/professional-headshot.png",
    company: "Apple",
  },
  {
    id: 4,
    name: "David Kim",
    headline: "Data Scientist at Netflix",
    location: "Los Gatos, CA",
    mutualConnections: 6,
    profileImage: "/professional-woman-headshot.png",
    company: "Netflix",
  },
  {
    id: 5,
    name: "Lisa Wang",
    headline: "Marketing Director at Spotify",
    location: "New York, NY",
    mutualConnections: 9,
    profileImage: "/professional-headshot.png",
    company: "Spotify",
  },
  {
    id: 6,
    name: "James Wilson",
    headline: "DevOps Engineer at Amazon",
    location: "Austin, TX",
    mutualConnections: 4,
    profileImage: "/professional-woman-headshot.png",
    company: "Amazon",
  },
]

const recentActivity = [
  {
    id: 1,
    type: "connection",
    user: "Alex Thompson",
    action: "connected with",
    target: "Jennifer Lee",
    time: "2h",
    profileImage: "/professional-headshot.png",
  },
  {
    id: 2,
    type: "job_change",
    user: "Maria Garcia",
    action: "started a new position as",
    target: "Senior Developer at Tesla",
    time: "4h",
    profileImage: "/professional-woman-headshot.png",
  },
  {
    id: 3,
    type: "post",
    user: "Robert Johnson",
    action: "shared a post about",
    target: "AI in Healthcare",
    time: "6h",
    profileImage: "/professional-headshot.png",
  },
]

const invitations = [
  {
    id: 1,
    name: "Amanda Foster",
    headline: "Product Designer at Figma",
    profileImage: "/professional-woman-headshot.png",
    mutualConnections: 3,
    message: "Hi! I'd love to connect and discuss design trends.",
  },
  {
    id: 2,
    name: "Kevin Park",
    headline: "Frontend Developer at Airbnb",
    profileImage: "/professional-headshot.png",
    mutualConnections: 7,
    message: "Let's connect! I saw your work on React components.",
  },
]

export default function MyNetworkPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [connectedUsers, setConnectedUsers] = useState<number[]>([])
  const [ignoredUsers, setIgnoredUsers] = useState<number[]>([])

  const handleConnect = (userId: number) => {
    setConnectedUsers([...connectedUsers, userId])
  }

  const handleIgnore = (userId: number) => {
    setIgnoredUsers([...ignoredUsers, userId])
  }

  const handleAcceptInvitation = (invitationId: number) => {
    console.log("Accepted invitation:", invitationId)
  }

  const handleIgnoreInvitation = (invitationId: number) => {
    console.log("Ignored invitation:", invitationId)
  }

  const filteredSuggestions = connectionSuggestions.filter(
    (person) =>
      !connectedUsers.includes(person.id) &&
      !ignoredUsers.includes(person.id) &&
      (person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.headline.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <ProtectedLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Manage my network</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-600" />
                    <span className="text-sm">Connections</span>
                  </div>
                  <span className="text-sm text-gray-600">1,247</span>
                </div>
                <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <UserPlus className="h-5 w-5 text-gray-600" />
                    <span className="text-sm">Following & followers</span>
                  </div>
                  <span className="text-sm text-gray-600">89</span>
                </div>
                <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-gray-600" />
                    <span className="text-sm">Pages</span>
                  </div>
                  <span className="text-sm text-gray-600">3</span>
                </div>
                <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-600" />
                    <span className="text-sm">Events</span>
                  </div>
                  <span className="text-sm text-gray-600">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.profileImage || "/placeholder.svg"} />
                      <AvatarFallback>{activity.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-gray-600">{activity.time} ago</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Invitations */}
            {invitations.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Invitations</CardTitle>
                    <Badge variant="secondary">{invitations.length}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {invitations.map((invitation) => (
                    <div key={invitation.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={invitation.profileImage || "/placeholder.svg"} />
                          <AvatarFallback>{invitation.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold">{invitation.name}</h3>
                          <p className="text-sm text-gray-600">{invitation.headline}</p>
                          <p className="text-xs text-gray-500">{invitation.mutualConnections} mutual connections</p>
                          {invitation.message && (
                            <p className="text-sm text-gray-700 mt-2 italic">"{invitation.message}"</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleIgnoreInvitation(invitation.id)}>
                          <X className="h-4 w-4 mr-1" />
                          Ignore
                        </Button>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => handleAcceptInvitation(invitation.id)}
                        >
                          <Check className="h-4 w-4 mr-1" />
                          Accept
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* People You May Know */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">People you may know</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by name or company"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredSuggestions.map((person) => (
                    <div key={person.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-20 w-20 mb-3">
                          <AvatarImage src={person.profileImage || "/placeholder.svg"} />
                          <AvatarFallback>{person.name[0]}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-semibold text-sm mb-1">{person.name}</h3>
                        <p className="text-xs text-gray-600 mb-2 line-clamp-2">{person.headline}</p>
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <MapPin className="h-3 w-3 mr-1" />
                          {person.location}
                        </div>
                        <p className="text-xs text-gray-500 mb-4">{person.mutualConnections} mutual connections</p>
                        <div className="flex space-x-2 w-full">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-transparent"
                            onClick={() => handleIgnore(person.id)}
                          >
                            <X className="h-4 w-4 mr-1" />
                            Ignore
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleConnect(person.id)}
                          >
                            <UserPlus className="h-4 w-4 mr-1" />
                            Connect
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {filteredSuggestions.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No suggestions found matching your search.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedLayout>
  )
}
