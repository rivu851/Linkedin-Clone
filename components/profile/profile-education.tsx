"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit3, Plus, GraduationCap } from "lucide-react"

const education = [
  {
    id: "1",
    school: "Stanford University",
    schoolLogo: "/stanford-logo.png",
    degree: "Master of Science",
    field: "Computer Science",
    duration: "2017 - 2019",
    description: "Focused on machine learning and distributed systems. Completed thesis on scalable web architectures.",
    activities: ["Computer Science Society", "Hackathon Winner 2018"],
  },
  {
    id: "2",
    school: "University of California, Berkeley",
    schoolLogo: "/berkeley-logo.png",
    degree: "Bachelor of Science",
    field: "Computer Science",
    duration: "2013 - 2017",
    description:
      "Graduated Magna Cum Laude. Strong foundation in algorithms, data structures, and software engineering principles.",
    activities: ["ACM Member", "Teaching Assistant for CS 61A"],
  },
]

export function ProfileEducation() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Education</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Edit3 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={edu.id} className={`${index !== education.length - 1 ? "pb-6 border-b border-gray-200" : ""}`}>
            <div className="flex items-start space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={edu.schoolLogo || "/placeholder.svg"} alt={edu.school} />
                <AvatarFallback>
                  <GraduationCap className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                <p className="text-gray-700">
                  {edu.degree}, {edu.field}
                </p>
                <p className="text-sm text-gray-600 mt-1">{edu.duration}</p>
                <p className="text-gray-700 mt-3 leading-relaxed">{edu.description}</p>
                {edu.activities && (
                  <div className="mt-3">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Activities and societies:</h4>
                    <p className="text-sm text-gray-700">{edu.activities.join(", ")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
