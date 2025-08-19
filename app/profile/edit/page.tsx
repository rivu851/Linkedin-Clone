"use client"

import { useState } from "react"
import { ProtectedLayout } from "@/components/layout/protected-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLinkedIn } from "@/contexts/linkedin-context"
import { Camera } from "lucide-react"
import Link from "next/link"

export default function EditProfilePage() {
  const { currentUser } = useLinkedIn()
  const [formData, setFormData] = useState({
    firstName: currentUser?.name.split(" ")[0] || "",
    lastName: currentUser?.name.split(" ")[1] || "",
    headline: currentUser?.headline || "",
    location: currentUser?.location || "",
    about: currentUser?.about || "",
    website: currentUser?.website || "",
    phone: currentUser?.phone || "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // Mock save functionality
    console.log("Saving profile:", formData)
  }

  return (
    <ProtectedLayout>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Edit profile</h1>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/profile">Cancel</Link>
            </Button>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              Save
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Profile Photo Section */}
          <Card>
            <CardHeader>
              <CardTitle>Profile photo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={currentUser?.profileImage || "/placeholder.svg"} />
                    <AvatarFallback className="text-2xl">
                      {currentUser?.name.split(" ")[0][0]}
                      {currentUser?.name.split(" ")[1]?.[0] || ""}
                    </AvatarFallback>
                  </Avatar>
                  <Button size="sm" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0" variant="secondary">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  <Button variant="outline">Upload photo</Button>
                  <p className="text-sm text-gray-600 mt-2">Must be JPEG or PNG and cannot exceed 10MB.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First name*</label>
                  <Input
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Last name*</label>
                  <Input
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Headline*</label>
                <Input
                  value={formData.headline}
                  onChange={(e) => handleInputChange("headline", e.target.value)}
                  placeholder="Professional headline"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Location</label>
                <Input
                  value={formData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="City, State"
                />
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.about}
                onChange={(e) => handleInputChange("about", e.target.value)}
                placeholder="Write a summary to highlight your personality or work experience"
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Website</label>
                <Input
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Phone number"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ProtectedLayout>
  )
}
