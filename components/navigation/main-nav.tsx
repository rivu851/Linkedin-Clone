"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Users,
  Briefcase,
  MessageCircle,
  Bell,
  Search,
  ChevronDown,
  Settings,
  HelpCircle,
  LogOut,
  Grid3X3,
} from "lucide-react"

interface NavItem {
  icon: React.ElementType
  label: string
  href: string
  badge?: number
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "/feed" },
  { icon: Users, label: "My Network", href: "/mynetwork", badge: 3 },
  { icon: Briefcase, label: "Jobs", href: "/jobs" },
  { icon: MessageCircle, label: "Messaging", href: "/messaging", badge: 2 },
  { icon: Bell, label: "Notifications", href: "/notifications", badge: 5 },
]

export function MainNav() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  if (!user) return null

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Search */}
          <div className="flex items-center space-x-4 flex-1">
            <Link href="/feed" className="flex-shrink-0">
              <div className="text-blue-600 font-bold text-2xl">
                <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-lg">in</span>
              </div>
            </Link>

            <form onSubmit={handleSearch} className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-9 bg-blue-50 border-0 focus:bg-white focus:ring-1 focus:ring-blue-600 rounded-sm"
              />
            </form>
          </div>

          {/* Navigation Items */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`flex flex-col items-center px-3 py-2 rounded hover:bg-gray-100 transition-colors relative ${
                      isActive ? "text-gray-900" : "text-gray-600"
                    }`}
                  >
                    <div className="relative">
                      <Icon className="h-5 w-5" />
                      {item.badge && (
                        <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 text-xs bg-red-500 hover:bg-red-500">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs mt-1 font-medium">{item.label}</span>
                    {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />}
                  </div>
                </Link>
              )
            })}

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex flex-col items-center px-3 py-2 h-auto hover:bg-gray-100">
                  <div className="flex items-center space-x-1">
                    <Avatar className="h-5 w-5">
                      <AvatarImage src={user.profileImage || "/placeholder.svg"} alt={user.firstName} />
                      <AvatarFallback className="text-xs">
                        {user.firstName[0]}
                        {user.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-3 w-3" />
                  </div>
                  <span className="text-xs mt-1 font-medium text-gray-600">Me</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <div className="p-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user.profileImage || "/placeholder.svg"} alt={user.firstName} />
                      <AvatarFallback>
                        {user.firstName[0]}
                        {user.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {user.firstName} {user.lastName}
                      </h3>
                      <p className="text-sm text-gray-600">{user.headline}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-3 rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                    asChild
                  >
                    <Link href="/profile">View Profile</Link>
                  </Button>
                </div>
                <DropdownMenuSeparator />
                <div className="py-1">
                  <h4 className="px-4 py-2 text-sm font-medium text-gray-900">Account</h4>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="flex items-center px-4 py-2">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings & Privacy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/help" className="flex items-center px-4 py-2">
                      <HelpCircle className="h-4 w-4 mr-3" />
                      Help
                    </Link>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <div className="py-1">
                  <h4 className="px-4 py-2 text-sm font-medium text-gray-900">Manage</h4>
                  <DropdownMenuItem asChild>
                    <Link href="/company" className="flex items-center px-4 py-2">
                      <Briefcase className="h-4 w-4 mr-3" />
                      Company Pages
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/advertising" className="flex items-center px-4 py-2">
                      <Grid3X3 className="h-4 w-4 mr-3" />
                      Advertise
                    </Link>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="flex items-center px-4 py-2 text-red-600">
                  <LogOut className="h-4 w-4 mr-3" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Work Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex flex-col items-center px-3 py-2 h-auto hover:bg-gray-100">
                  <div className="flex items-center space-x-1">
                    <Grid3X3 className="h-5 w-5" />
                    <ChevronDown className="h-3 w-3" />
                  </div>
                  <span className="text-xs mt-1 font-medium text-gray-600">Work</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="p-2">
                  <h4 className="px-2 py-2 text-sm font-medium text-gray-900">Visit More LinkedIn Products</h4>
                  <DropdownMenuItem asChild>
                    <Link href="/learning" className="flex items-center px-2 py-2">
                      <div className="h-8 w-8 bg-blue-100 rounded mr-3 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xs">L</span>
                      </div>
                      <div>
                        <div className="font-medium">Learning</div>
                        <div className="text-xs text-gray-600">Add new skills with these courses</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/talent" className="flex items-center px-2 py-2">
                      <div className="h-8 w-8 bg-purple-100 rounded mr-3 flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xs">T</span>
                      </div>
                      <div>
                        <div className="font-medium">Talent Insights</div>
                        <div className="text-xs text-gray-600">Get data-driven insights about talent</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/post-job" className="flex items-center px-2 py-2">
                      <div className="h-8 w-8 bg-yellow-100 rounded mr-3 flex items-center justify-center">
                        <span className="text-yellow-600 font-bold text-xs">P</span>
                      </div>
                      <div>
                        <div className="font-medium">Post a job</div>
                        <div className="text-xs text-gray-600">Get your job in front of quality candidates</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
