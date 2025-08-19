"use client"

import { useState } from "react"
import { ProtectedLayout } from "@/components/layout/protected-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Bookmark,
  ExternalLink,
  Filter,
  Briefcase,
  Users,
  TrendingUp,
  Bell,
} from "lucide-react"

const jobListings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$150,000 - $200,000",
    posted: "2 days ago",
    applicants: 47,
    logo: "/google-logo.png",
    description: "Join our team to build next-generation cloud infrastructure...",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    remote: false,
    promoted: true,
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Microsoft",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$130,000 - $180,000",
    posted: "1 day ago",
    applicants: 23,
    logo: "/microsoft-logo.png",
    description: "Lead product strategy for our enterprise solutions...",
    skills: ["Product Strategy", "Analytics", "Agile"],
    remote: true,
    promoted: false,
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Apple",
    location: "Cupertino, CA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    posted: "3 days ago",
    applicants: 89,
    logo: "/apple-logo-minimalist.png",
    description: "Design intuitive user experiences for our mobile apps...",
    skills: ["Figma", "Sketch", "Prototyping", "User Research"],
    remote: false,
    promoted: false,
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    posted: "1 week ago",
    applicants: 156,
    logo: "/netflix-logo.png",
    description: "Analyze user behavior to improve content recommendations...",
    skills: ["Python", "Machine Learning", "SQL", "Statistics"],
    remote: true,
    promoted: true,
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Spotify",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    posted: "4 days ago",
    applicants: 67,
    logo: "/spotify-logo.png",
    description: "Build beautiful web interfaces for music streaming...",
    skills: ["React", "JavaScript", "CSS", "GraphQL"],
    remote: true,
    promoted: false,
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "Amazon",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$125,000 - $170,000",
    posted: "5 days ago",
    applicants: 34,
    logo: "/google-logo.png",
    description: "Manage cloud infrastructure and deployment pipelines...",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    remote: false,
    promoted: false,
  },
]

const jobAlerts = [
  { id: 1, query: "Software Engineer", count: 12 },
  { id: 2, query: "Product Manager", count: 8 },
  { id: 3, query: "Remote Developer", count: 15 },
]

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("Any location")
  const [jobTypeFilter, setJobTypeFilter] = useState("Any type")
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [appliedJobs, setAppliedJobs] = useState<number[]>([])

  const handleSaveJob = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  const handleApplyJob = (jobId: number) => {
    setAppliedJobs((prev) => [...prev, jobId])
  }

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesLocation = !locationFilter || job.location.includes(locationFilter)
    const matchesType = !jobTypeFilter || job.type === jobTypeFilter

    return matchesSearch && matchesLocation && matchesType
  })

  return (
    <ProtectedLayout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Job Search Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Any location">Any location</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="WA">Washington</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Job Type</label>
                  <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Any type">Any type</SelectItem>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Job Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Job alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {jobAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between py-2">
                    <div>
                      <p className="text-sm font-medium">{alert.query}</p>
                      <p className="text-xs text-gray-600">{alert.count} new jobs</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                  Create alert
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your job search</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-gray-600" />
                    <span className="text-sm">Applications</span>
                  </div>
                  <span className="text-sm font-medium">{appliedJobs.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Bookmark className="h-4 w-4 text-gray-600" />
                    <span className="text-sm">Saved jobs</span>
                  </div>
                  <span className="text-sm font-medium">{savedJobs.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-gray-600" />
                    <span className="text-sm">Profile views</span>
                  </div>
                  <span className="text-sm font-medium">47</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search jobs by title, company, or skills"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-600">{filteredJobs.length} jobs found</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sort by:</span>
                    <Select defaultValue="relevance">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="relevance">Relevance</SelectItem>
                        <SelectItem value="date">Date posted</SelectItem>
                        <SelectItem value="salary">Salary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className={`hover:shadow-md transition-shadow ${job.promoted ? "border-yellow-200 bg-yellow-50/30" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={job.logo || "/placeholder.svg"} alt={job.company} />
                          <AvatarFallback>{job.company[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-blue-600 hover:underline cursor-pointer">
                              {job.title}
                            </h3>
                            {job.promoted && (
                              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                                Promoted
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-900 font-medium mb-1">{job.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                              {job.remote && (
                                <Badge variant="outline" className="ml-2">
                                  Remote
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-3 line-clamp-2">{job.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>{job.posted}</span>
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {job.applicants} applicants
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleSaveJob(job.id)}
                          className={savedJobs.includes(job.id) ? "text-blue-600" : ""}
                        >
                          <Bookmark className={`h-4 w-4 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" disabled={appliedJobs.includes(job.id)}>
                          {appliedJobs.includes(job.id) ? "Applied" : "Easy Apply"}
                        </Button>
                        {!appliedJobs.includes(job.id) && (
                          <Button
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleApplyJob(job.id)}
                          >
                            Apply now
                          </Button>
                        )}
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-600">
                        View company
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </ProtectedLayout>
  )
}
