import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { LinkedInProvider } from "@/contexts/linkedin-context"
import { MessagingWidget } from "@/components/messaging/messaging-widget"

export const metadata: Metadata = {
  title: "LinkedIn Clone",
  description: "Professional networking platform clone",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <LinkedInProvider>
          {children}
          <MessagingWidget />
        </LinkedInProvider>
      </body>
    </html>
  )
}
