import { Link } from "react-router-dom"
import { useLinkedIn } from "../../contexts/linkedin-context"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Eye, Bookmark, Users, Calendar } from "lucide-react"

export function LeftSidebar() {
  const { currentUser } = useLinkedIn()

  return (
    <div className="space-y-4">
      {/* Profile Card */}
      <Card className="overflow-hidden">
        <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700"></div>
        <CardContent className="pt-0 pb-4">
          <div className="flex flex-col items-center -mt-8">
            <Avatar className="h-16 w-16 border-4 border-white">
              <AvatarImage src={currentUser.profileImage || "/placeholder.svg"} alt={currentUser.name} />
              <AvatarFallback className="text-lg">
                {currentUser.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Link to="/profile" className="mt-2 text-center hover:underline">
              <h3 className="font-semibold text-gray-900">{currentUser.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{currentUser.headline}</p>
            </Link>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Profile viewers</span>
              <span className="text-blue-600 font-medium">127</span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="text-gray-600">Post impressions</span>
              <span className="text-blue-600 font-medium">1,204</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 hover:text-gray-900 flex items-center cursor-pointer">
              <Eye className="h-4 w-4 mr-2" />
              Access exclusive tools & insights
            </div>
            <div className="mt-2">
              <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                Try Premium for free
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 hover:text-gray-900 flex items-center cursor-pointer">
              <Bookmark className="h-4 w-4 mr-2" />
              My items
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 mb-3">Recent</h3>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
              <Users className="h-4 w-4 mr-2" />
              React Developers
            </div>
            <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
              <Users className="h-4 w-4 mr-2" />
              Startup Founders Network
            </div>
            <div className="flex items-center text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
              <Calendar className="h-4 w-4 mr-2" />
              Tech Conference 2024
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Groups</h4>
            <div className="space-y-2">
              <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">JavaScript Developers</div>
              <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Product Management</div>
              <div className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">UX Design Community</div>
            </div>
            <Button variant="ghost" className="text-sm text-gray-600 mt-2 p-0 h-auto">
              See all (12)
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Events</h4>
            <Button variant="ghost" className="text-sm text-blue-600 p-0 h-auto">
              + Create event
            </Button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-2">Followed Hashtags</h4>
            <div className="space-y-1">
              <div className="text-sm text-gray-600">#javascript</div>
              <div className="text-sm text-gray-600">#react</div>
              <div className="text-sm text-gray-600">#webdevelopment</div>
            </div>
          </div>

          <Button variant="ghost" className="text-sm text-gray-600 mt-4 p-0 h-auto">
            Discover more
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
