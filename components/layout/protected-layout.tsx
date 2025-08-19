"use client"

import type React from "react"

import { MainNav } from "@/components/navigation/main-nav"

interface ProtectedLayoutProps {
  children: React.ReactNode
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main>{children}</main>
    </div>
  )
}
