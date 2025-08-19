"use client"

import { useState } from "react"
import Link from "next/link"
import { useLinkedIn } from "@/contexts/linkedin-context"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building2, GraduationCap, Edit3, Camera, Plus, MoreHorizontal, Users, Eye } from "lucide-react"

export function ProfileHeader() {
  const { currentUser } = useLinkedIn()
  const [isFollowing, setIsFollowing] = useState(false)

  if (!currentUser) return null

  return (
    <Card className="overflow-hidden">
      {/* Banner Image */}
      <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-700">
        <img src="/professional-banner.jpg" alt="Profile banner" className="w-full h-full object-cover" />
        <Button variant="ghost" size="sm" className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white">
          <Camera className="h-4 w-4 mr-2" />
          Add photo
        </Button>
      </div>

      <CardContent className="p-6">
        {/* Profile Photo and Basic Info */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-16 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-end">
            <div className="relative mb-4 sm:mb-0 sm:mr-6">
              <Avatar className="h-32 w-32 border-4 border-white shadow-lg">
                <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
                <AvatarFallback className="text-2xl">
                  {currentUser.name.split(" ")[0][0]}
                  {currentUser.name.split(" ")[1]?.[0] || ""}
                </AvatarFallback>
              </Avatar>
              <Button
                variant="ghost"
                size="sm"
                className="absolute bottom-0 right-0 h-8 w-8 p-0 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">{currentUser.name}</h1>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Premium
                </Badge>
              </div>
              <p className="text-lg text-gray-700 mb-2">{currentUser.headline}</p>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {currentUser.location || "San Francisco, CA"}
                </div>
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 mr-1" />
                  Tech Corp
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-4 w-4 mr-1" />
                  Stanford University
                </div>
              </div>
              <div className="flex items-center text-sm text-blue-600 mt-2 space-x-4">
                <button className="hover:underline font-medium">500+ connections</button>
                <button className="hover:underline">Contact info</button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Button variant="outline" className="rounded-full bg-transparent" asChild>
              <Link href="/profile/edit">
                <Edit3 className="h-4 w-4 mr-2" />
                Edit profile
              </Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
              <Plus className="h-4 w-4 mr-2" />
              Add section
            </Button>
            <Button variant="outline" size="sm" className="rounded-full bg-transparent">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">1,247</div>
              <div className="text-sm text-gray-600">Profile views</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">89</div>
              <div className="text-sm text-gray-600">Post views</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">523</div>
              <div className="text-sm text-gray-600">Search appearances</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-600">
              <Eye className="h-4 w-4 mr-2" />
              All analytics
            </Button>
          </div>
        </div>

        {/* Open to Work Banner */}
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Open to work</h3>
                <p className="text-sm text-gray-600">Software Engineer roles</p>
                <button className="text-sm text-blue-600 hover:underline">Show details</button>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              <Edit3 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
