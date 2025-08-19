import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Search, MapPin, Briefcase, Clock, Bookmark } from "lucide-react"

export const JobsPage: React.FC = () => {
  const jobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full-time",
      salary: "$150k - $200k",
      postedTime: "2 days ago",
      applicants: "47 applicants",
      logo: "/google-logo.png",
      description: "Join our team building the next generation of web applications...",
    },
    {
      id: "2",
      title: "Product Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$130k - $180k",
      postedTime: "1 week ago",
      applicants: "23 applicants",
      logo: "/microsoft-logo.png",
      description: "Lead product strategy for our cloud platform initiatives...",
    },
    {
      id: "3",
      title: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      postedTime: "3 days ago",
      applicants: "89 applicants",
      logo: "/apple-logo-minimalist.png",
      description: "Design intuitive user experiences for our consumer products...",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Search filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Location</label>
                <Input placeholder="City, state, or country" />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Experience Level</label>
                <div className="space-y-2">
                  {["Entry level", "Associate", "Mid-Senior level", "Director", "Executive"].map((level) => (
                    <label key={level} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-600">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Job Type</label>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Temporary", "Internship"].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Company</label>
                <div className="space-y-2">
                  {["Google", "Microsoft", "Apple", "Amazon", "Meta"].map((company) => (
                    <label key={company} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm text-gray-600">{company}</span>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search Bar */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input type="search" placeholder="Search for jobs" className="pl-10" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input type="search" placeholder="Location" className="pl-10 w-48" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* Job Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">{jobs.length} jobs found</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="text-sm border border-gray-300 rounded px-2 py-1">
                  <option>Most relevant</option>
                  <option>Most recent</option>
                  <option>Salary (high to low)</option>
                </select>
              </div>
            </div>

            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex space-x-4 flex-1">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        className="w-12 h-12 rounded object-contain bg-gray-50 p-2"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600">{job.title}</h3>
                        <p className="text-gray-700 font-medium">{job.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.postedTime}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{job.description}</p>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-4">
                            <Badge variant="secondary">{job.salary}</Badge>
                            <span className="text-sm text-gray-500">{job.applicants}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
