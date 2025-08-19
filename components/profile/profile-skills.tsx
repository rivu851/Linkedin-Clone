"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit3, Plus, ThumbsUp } from "lucide-react"

const skills = [
  { name: "JavaScript", endorsements: 47 },
  { name: "React", endorsements: 42 },
  { name: "Node.js", endorsements: 38 },
  { name: "TypeScript", endorsements: 35 },
  { name: "Python", endorsements: 29 },
  { name: "AWS", endorsements: 26 },
  { name: "GraphQL", endorsements: 23 },
  { name: "PostgreSQL", endorsements: 21 },
  { name: "Docker", endorsements: 18 },
  { name: "Next.js", endorsements: 15 },
  { name: "MongoDB", endorsements: 12 },
  { name: "Redis", endorsements: 9 },
]

export function ProfileSkills() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Skills</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Edit3 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{skill.name}</h4>
                <p className="text-sm text-gray-600">{skill.endorsements} endorsements</p>
              </div>
              <Button variant="outline" size="sm" className="ml-4 bg-transparent">
                <ThumbsUp className="h-4 w-4 mr-1" />
                Endorse
              </Button>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-4 text-gray-600">
          Show all skills →
        </Button>
      </CardContent>
    </Card>
  )
}
