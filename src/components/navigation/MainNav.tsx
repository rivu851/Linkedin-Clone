"use client"

import type React from "react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Search, Home, Users, Briefcase, MessageCircle, Bell, User, ChevronDown } from "lucide-react"
import { useLinkedIn } from "../../contexts/linkedin-context"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export const MainNav: React.FC = () => {
  const { currentUser } = useLinkedIn()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState("")

  const navItems = [
    { href: "/feed", icon: Home, label: "Home", badge: null },
    { href: "/mynetwork", icon: Users, label: "My Network", badge: 12 },
    { href: "/jobs", icon: Briefcase, label: "Jobs", badge: null },
    { href: "/messaging", icon: MessageCircle, label: "Messaging", badge: 3 },
    { href: "/notifications", icon: Bell, label: "Notifications", badge: 5 },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo and Search */}
          <div className="flex items-center space-x-4">
            <Link to="/feed" className="text-blue-600 font-bold text-2xl">
              Linked<span className="bg-blue-600 text-white px-1 rounded">in</span>
            </Link>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 bg-blue-50 border border-transparent rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.href

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-md transition-colors ${
                    isActive ? "text-gray-900 bg-gray-100" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="relative">
                    <Icon className="h-5 w-5" />
                    {item.badge && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              )
            })}

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex flex-col items-center space-y-1 px-3 py-2 h-auto">
                  <div className="flex items-center space-x-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
                      <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-medium text-gray-600">Me</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
                      <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{currentUser.name}</p>
                      <p className="text-xs text-gray-600">{currentUser.headline}</p>
                    </div>
                  </div>
                  <Link to="/profile">
                    <Button
                      variant="outline"
                      className="w-full mt-3 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      View Profile
                    </Button>
                  </Link>
                </div>

                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center space-x-2 px-4 py-2">
                    <User className="h-4 w-4" />
                    <span>View Profile</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="px-4 py-2 text-gray-600">Settings & Privacy</DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 text-gray-600">Help</DropdownMenuItem>
                <DropdownMenuItem className="px-4 py-2 text-gray-600">Language</DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="px-4 py-2 text-gray-600">Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  )
}
