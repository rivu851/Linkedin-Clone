"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push("/feed")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-blue-600 font-bold text-2xl">
              Linked<span className="bg-blue-600 text-white px-1 rounded">in</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  Sign in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">Join now</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight">
              Welcome to your professional community
            </h1>
            <div className="space-y-4">
              <Link href="/signup" className="block">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg font-medium">
                  Join now
                </Button>
              </Link>
              <Link href="/login" className="block">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-3 text-lg font-medium bg-transparent"
                >
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="/professional-networking.png" alt="Professional networking" className="w-full h-auto" />
          </div>
        </div>
      </main>
    </div>
  )
}
