"use client"

import { ProtectedLayout } from "@/components/layout/protected-layout"
import { ProfileHeader } from "@/components/profile/profile-header"
import { ProfileAbout } from "@/components/profile/profile-about"
import { ProfileExperience } from "@/components/profile/profile-experience"
import { ProfileEducation } from "@/components/profile/profile-education"
import { ProfileSkills } from "@/components/profile/profile-skills"
import { ProfileActivity } from "@/components/profile/profile-activity"
import { ProfileSidebar } from "@/components/profile/profile-sidebar"

export default function ProfilePage() {
  return (
    <ProtectedLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Profile Content */}
          <div className="lg:col-span-3 space-y-4">
            <ProfileHeader />
            <ProfileAbout />
            <ProfileActivity />
            <ProfileExperience />
            <ProfileEducation />
            <ProfileSkills />
          </div>

          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </ProtectedLayout>
  )
}
