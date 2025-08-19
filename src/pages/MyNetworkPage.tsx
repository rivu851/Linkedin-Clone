import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Users, UserPlus, Search } from "lucide-react"

export const MyNetworkPage: React.FC = () => {
  const invitations = [
    {
      id: "1",
      name: "Sarah Johnson",
      headline: "Product Manager at Microsoft",
      profileImage: "/professional-woman-headshot.png",
      mutualConnections: 5,
      timeAgo: "1 week ago",
    },
    {
      id: "2",
      name: "Michael Chen",
      headline: "Software Engineer at Apple",
      profileImage: "/professional-headshot.png",
      mutualConnections: 12,
      timeAgo: "3 days ago",
    },
  ]

  const suggestions = [
    {
      id: "1",
      name: "Emily Davis",
      headline: "UX Designer at Airbnb",
      profileImage: "/professional-woman-headshot.png",
      mutualConnections: 8,
      company: "Airbnb",
    },
    {
      id: "2",
      name: "James Wilson",
      headline: "Data Scientist at Netflix",
      profileImage: "/professional-headshot.png",
      mutualConnections: 15,
      company: "Netflix",
    },
    {
      id: "3",
      name: "Lisa Zhang",
      headline: "Marketing Director at Spotify",
      profileImage: "/professional-woman-headshot.png",
      mutualConnections: 3,
      company: "Spotify",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Manage my network</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-600" />
                    <span className="text-sm text-gray-900">Connections</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <UserPlus className="h-5 w-5 text-gray-600" />
                    <span className="text-sm text-gray-900">Following & followers</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">892</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Invitations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Invitations ({invitations.length})</span>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  See all
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {invitations.map((invitation) => (
                <div
                  key={invitation.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={invitation.profileImage || "/placeholder.svg"} alt={invitation.name} />
                      <AvatarFallback>
                        {invitation.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{invitation.name}</h4>
                      <p className="text-sm text-gray-600">{invitation.headline}</p>
                      <p className="text-xs text-gray-500">
                        {invitation.mutualConnections} mutual connections • {invitation.timeAgo}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Ignore
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Accept
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* People you may know */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>People you may know</span>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input type="search" placeholder="Search by name or company" className="pl-10 w-64" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {suggestions.map((person) => (
                  <div key={person.id} className="border border-gray-200 rounded-lg p-4 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-3">
                      <AvatarImage src={person.profileImage || "/placeholder.svg"} alt={person.name} />
                      <AvatarFallback className="text-lg">
                        {person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold text-gray-900 mb-1">{person.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{person.headline}</p>
                    <p className="text-xs text-gray-500 mb-4">{person.mutualConnections} mutual connections</p>
                    <Button size="sm" variant="outline" className="w-full bg-transparent">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
