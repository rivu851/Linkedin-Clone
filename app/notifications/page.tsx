"use client"

import { ProtectedLayout } from "@/components/layout/protected-layout"

export default function NotificationsPage() {
  return (
    <ProtectedLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Notifications</h1>
          <p className="text-gray-600">Stay updated with your professional activities.</p>
        </div>
      </div>
    </ProtectedLayout>
  )
}
