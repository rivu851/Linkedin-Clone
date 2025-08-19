import type React from "react"
import { MainNav } from "../navigation/MainNav"
import { MessagingWidget } from "../messaging/MessagingWidget"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main className="pt-14">{children}</main>
      <MessagingWidget />
    </div>
  )
}
