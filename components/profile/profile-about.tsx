"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit3 } from "lucide-react"

export function ProfileAbout() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">About</CardTitle>
        <Button variant="ghost" size="sm">
          <Edit3 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed">
          Passionate software engineer with 5+ years of experience in full-stack development. Specialized in React,
          Node.js, and cloud technologies. I love building scalable applications that solve real-world problems and
          create exceptional user experiences.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Currently focused on modern web technologies including Next.js, TypeScript, and serverless architectures.
          Always eager to learn new technologies and collaborate with talented teams to deliver innovative solutions.
        </p>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h4 className="font-medium text-gray-900 mb-2">Top skills</h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">JavaScript</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
