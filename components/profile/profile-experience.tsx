"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit3, Plus, Building2 } from "lucide-react"

const experiences = [
  {
    id: "1",
    company: "Tech Corp",
    companyLogo: "/company-logo.png",
    position: "Senior Software Engineer",
    duration: "Jan 2022 - Present",
    location: "San Francisco, CA",
    description:
      "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and driving technical decisions for the engineering team.",
    skills: ["React", "Node.js", "AWS", "TypeScript", "GraphQL"],
  },
  {
    id: "2",
    company: "StartupXYZ",
    companyLogo: "/startup-logo.png",
    position: "Full Stack Developer",
    duration: "Jun 2020 - Dec 2021",
    location: "Remote",
    description:
      "Built and maintained multiple web applications from scratch. Worked closely with product and design teams to deliver high-quality user experiences.",
    skills: ["JavaScript", "React", "Python", "PostgreSQL", "Docker"],
  },
  {
    id: "3",
    company: "Digital Agency",
    companyLogo: "/agency-logo.png",
    position: "Frontend Developer",
    duration: "Mar 2019 - May 2020",
    location: "New York, NY",
    description:
      "Developed responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UI components.",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js", "Sass"],
  },
]

export function ProfileExperience() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Experience</CardTitle>
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
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`${index !== experiences.length - 1 ? "pb-6 border-b border-gray-200" : ""}`}>
            <div className="flex items-start space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={exp.companyLogo || "/placeholder.svg"} alt={exp.company} />
                <AvatarFallback>
                  <Building2 className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-gray-700">{exp.company}</p>
                <p className="text-sm text-gray-600 mt-1">{exp.duration}</p>
                <p className="text-sm text-gray-600">{exp.location}</p>
                <p className="text-gray-700 mt-3 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
